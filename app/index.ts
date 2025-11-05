import { Buffer } from "buffer";
import { Address } from '@stellar/stellar-sdk';
import {
  AssembledTransaction,
  Client as ContractClient,
  ClientOptions as ContractClientOptions,
  MethodOptions,
  Result,
  Spec as ContractSpec,
} from '@stellar/stellar-sdk/contract';
import type {
  u32,
  i32,
  u64,
  i64,
  u128,
  i128,
  u256,
  i256,
  Option,
  Typepoint,
  Duration,
} from '@stellar/stellar-sdk/contract';
export * from '@stellar/stellar-sdk'
export * as contract from '@stellar/stellar-sdk/contract'
export * as rpc from '@stellar/stellar-sdk/rpc'

if (typeof window !== 'undefined') {
  //@ts-ignore Buffer exists
  window.Buffer = window.Buffer || Buffer;
}


export const networks = {
  testnet: {
    networkPassphrase: "Test SDF Network ; September 2015",
    contractId: "CDVC6WQBXJ2ZOIRRDTD32OMYJPJRXEILPRBS5FGWOBZMCLFOXUHPQSPR",
  }
} as const


export interface ProjectItem {
  description: string;
  id: u32;
  status: string;
  title: string;
}

export interface Client {
  /**
   * Construct and simulate a init transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   * Initialize the contract
   */
  init: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a store_item transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   * Store a new project item
   * Returns the item_id that was assigned
   */
  store_item: ({project_id, title, description, status}: {project_id: u32, title: string, description: string, status: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<u32>>

  /**
   * Construct and simulate a get_items transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   * Get all items for a project
   */
  get_items: ({project_id}: {project_id: u32}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Array<ProjectItem>>>

  /**
   * Construct and simulate a delete_item transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   * Delete a specific item from a project
   */
  delete_item: ({project_id, item_id}: {project_id: u32, item_id: u32}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

}
export class Client extends ContractClient {
  static async deploy<T = Client>(
    /** Options for initializing a Client as well as for calling a method, with extras specific to deploying. */
    options: MethodOptions &
      Omit<ContractClientOptions, "contractId"> & {
        /** The hash of the Wasm blob, which must already be installed on-chain. */
        wasmHash: Buffer | string;
        /** Salt used to generate the contract's ID. Passed through to {@link Operation.createCustomContract}. Default: random. */
        salt?: Buffer | Uint8Array;
        /** The format used to decode `wasmHash`, if it's provided as a string. */
        format?: "hex" | "base64";
      }
  ): Promise<AssembledTransaction<T>> {
    return ContractClient.deploy(null, options)
  }
  constructor(public readonly options: ContractClientOptions) {
    super(
      new ContractSpec([ "AAAAAQAAAAAAAAAAAAAAC1Byb2plY3RJdGVtAAAAAAQAAAAAAAAAC2Rlc2NyaXB0aW9uAAAAABAAAAAAAAAAAmlkAAAAAAAEAAAAAAAAAAZzdGF0dXMAAAAAABAAAAAAAAAABXRpdGxlAAAAAAAAEA==",
        "AAAAAAAAABdJbml0aWFsaXplIHRoZSBjb250cmFjdAAAAAAEaW5pdAAAAAAAAAAA",
        "AAAAAAAAAD5TdG9yZSBhIG5ldyBwcm9qZWN0IGl0ZW0KUmV0dXJucyB0aGUgaXRlbV9pZCB0aGF0IHdhcyBhc3NpZ25lZAAAAAAACnN0b3JlX2l0ZW0AAAAAAAQAAAAAAAAACnByb2plY3RfaWQAAAAAAAQAAAAAAAAABXRpdGxlAAAAAAAAEAAAAAAAAAALZGVzY3JpcHRpb24AAAAAEAAAAAAAAAAGc3RhdHVzAAAAAAAQAAAAAQAAAAQ=",
        "AAAAAAAAABtHZXQgYWxsIGl0ZW1zIGZvciBhIHByb2plY3QAAAAACWdldF9pdGVtcwAAAAAAAAEAAAAAAAAACnByb2plY3RfaWQAAAAAAAQAAAABAAAD6gAAB9AAAAALUHJvamVjdEl0ZW0A",
        "AAAAAAAAACVEZWxldGUgYSBzcGVjaWZpYyBpdGVtIGZyb20gYSBwcm9qZWN0AAAAAAAAC2RlbGV0ZV9pdGVtAAAAAAIAAAAAAAAACnByb2plY3RfaWQAAAAAAAQAAAAAAAAAB2l0ZW1faWQAAAAABAAAAAA=" ]),
      options
    )
  }
  public readonly fromJSON = {
    init: this.txFromJSON<null>,
        store_item: this.txFromJSON<u32>,
        get_items: this.txFromJSON<Array<ProjectItem>>,
        delete_item: this.txFromJSON<null>
  }
}