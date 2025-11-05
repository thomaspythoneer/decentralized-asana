#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, symbol_short, vec, Env, String, Vec};

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct ProjectItem {
    pub id: u32,
    pub title: String,
    pub description: String,
    pub status: String,
}

#[contract]
pub struct ProjectManagement;

#[contractimpl]
impl ProjectManagement {
    /// Initialize the contract
    pub fn init(_env: Env) {
        // No initialization needed, but keeping for consistency
    }

    /// Store a new project item
    /// Returns the item_id that was assigned
    pub fn store_item(
        env: Env,
        project_id: u32,
        title: String,
        description: String,
        status: String,
    ) -> u32 {
        // Get the next item ID for this project
        let next_item_id_key = symbol_short!("next_id");
        let project_key = (next_item_id_key, project_id);

        let current_next_id: u32 = env.storage().persistent().get(&project_key).unwrap_or(0);

        let item_id = current_next_id;
        let new_next_id = item_id + 1;

        // Store the next item ID for this project
        env.storage().persistent().set(&project_key, &new_next_id);

        // Create the project item
        let item = ProjectItem {
            id: item_id,
            title: title.clone(),
            description: description.clone(),
            status: status.clone(),
        };

        // Store the item using (project_id, item_id) as key
        let item_key = (project_id, item_id);
        env.storage().persistent().set(&item_key, &item);

        // Get the project items list key
        let items_list_key = symbol_short!("items");
        let project_items_key = (items_list_key, project_id);

        // Get existing items for this project
        let mut items: Vec<u32> = env
            .storage()
            .persistent()
            .get(&project_items_key)
            .unwrap_or_else(|| vec![&env]);

        // Add the new item_id to the list
        items.push_back(item_id);
        env.storage().persistent().set(&project_items_key, &items);

        item_id
    }

    /// Get all items for a project
    pub fn get_items(env: Env, project_id: u32) -> Vec<ProjectItem> {
        let items_list_key = symbol_short!("items");
        let project_items_key = (items_list_key, project_id);

        // Get the list of item IDs for this project
        let item_ids: Vec<u32> = env
            .storage()
            .persistent()
            .get(&project_items_key)
            .unwrap_or_else(|| vec![&env]);

        // Build vector of items
        let mut items = vec![&env];
        for i in 0..item_ids.len() {
            if let Some(item_id) = item_ids.get(i) {
                let item_key = (project_id, item_id);
                if let Some(item) = env.storage().persistent().get(&item_key) {
                    items.push_back(item);
                }
            }
        }

        items
    }

    /// Delete a specific item from a project
    pub fn delete_item(env: Env, project_id: u32, item_id: u32) {
        // Check if item exists
        let item_key = (project_id, item_id);
        if env.storage().persistent().has(&item_key) {
            // Remove the item
            env.storage().persistent().remove(&item_key);

            // Remove from items list
            let items_list_key = symbol_short!("items");
            let project_items_key = (items_list_key, project_id);

            if let Some(items) = env
                .storage()
                .persistent()
                .get::<_, Vec<u32>>(&project_items_key)
            {
                let mut new_items = vec![&env];
                for i in 0..items.len() {
                    if let Some(id) = items.get(i) {
                        if id != item_id {
                            new_items.push_back(id);
                        }
                    }
                }
                env.storage()
                    .persistent()
                    .set(&project_items_key, &new_items);
            }
        }
    }
}

#[cfg(test)]
mod test;
