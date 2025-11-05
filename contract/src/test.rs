#![cfg(test)]
extern crate std;

use super::*;
use soroban_sdk::{symbol_short, testutils::Address as _, Address, Env, String as SorobanString};

#[test]
fn test_store_and_get_items() {
    let env = Env::default();
    let contract_id = env.register_contract(None, ProjectManagement);
    let client = ProjectManagementClient::new(&env, &contract_id);

    // Initialize
    client.init();

    let project_id = 1u32;
    let title = SorobanString::from_str(&env, "Test Task");
    let description = SorobanString::from_str(&env, "This is a test task");
    let status = SorobanString::from_str(&env, "open");

    // Store an item
    let item_id = client.store_item(&project_id, &title, &description, &status);
    assert_eq!(item_id, 0u32);

    // Get items
    let items = client.get_items(&project_id);
    assert_eq!(items.len(), 1);

    let first_item = items.get(0).unwrap();
    assert_eq!(first_item.id, 0u32);
    assert_eq!(first_item.title, title);
    assert_eq!(first_item.description, description);
    assert_eq!(first_item.status, status);
}

#[test]
fn test_delete_item() {
    let env = Env::default();
    let contract_id = env.register_contract(None, ProjectManagement);
    let client = ProjectManagementClient::new(&env, &contract_id);

    // Initialize
    client.init();

    let project_id = 1u32;
    let title = SorobanString::from_str(&env, "Task to Delete");
    let description = SorobanString::from_str(&env, "This will be deleted");
    let status = SorobanString::from_str(&env, "open");

    // Store an item
    let item_id = client.store_item(&project_id, &title, &description, &status);

    // Verify item exists
    let items = client.get_items(&project_id);
    assert_eq!(items.len(), 1);

    // Delete the item
    client.delete_item(&project_id, &item_id);

    // Verify item is deleted
    let items_after = client.get_items(&project_id);
    assert_eq!(items_after.len(), 0);
}
