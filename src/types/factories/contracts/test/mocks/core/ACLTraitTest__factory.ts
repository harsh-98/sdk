/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ACLTraitTest,
  ACLTraitTestInterface,
} from "../../../../../contracts/test/mocks/core/ACLTraitTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addressProvider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CallerNotConfiguratorException",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerNotPausableAdminException",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerNotUnPausableAdminException",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressException",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "_acl",
    outputs: [
      {
        internalType: "contract ACL",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accessConfiguratorOnly",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accessWhenNotPaused",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accessWhenPaused",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516107e53803806107e583398101604081905261002f916100d7565b6000805460ff19169055806001600160a01b03811661006157604051635919af9760e11b815260040160405180910390fd5b806001600160a01b031663087376956040518163ffffffff1660e01b8152600401602060405180830381865afa15801561009f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100c391906100d7565b6001600160a01b0316608052506101079050565b6000602082840312156100e957600080fd5b81516001600160a01b038116811461010057600080fd5b9392505050565b6080516106af6101366000396000818160cc0152818161014101528181610227015261038501526106af6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635c975abb1161005b5780635c975abb1461009c5780638456cb59146100b75780638def0c0b146100bf578063a50cf2c8146100c757600080fd5b806319df69ae146100825780633f4ba83a1461008c57806350a472ae14610094575b600080fd5b61008a610113565b005b61008a6101f9565b61008a6102e5565b60005460ff1660405190151581526020015b60405180910390f35b61008a610357565b61008a610443565b6100ee7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ae565b6040517f5f259aba0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f259aba90602401602060405180830381865afa15801561019d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c19190610650565b6101f7576040517f61081c1500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6040517fd4eb5db00000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063d4eb5db090602401602060405180830381865afa158015610283573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a79190610650565b6102dd576040517f10332dee00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101f76104af565b60005460ff16156101f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064015b60405180910390fd5b6040517f3a41ec640000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690633a41ec6490602401602060405180830381865afa1580156103e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104059190610650565b61043b576040517fd794b1e700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101f7610590565b60005460ff166101f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161034e565b60005460ff1661051b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161034e565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b60005460ff16156105fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015260640161034e565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586105663390565b60006020828403121561066257600080fd5b8151801515811461067257600080fd5b939250505056fea264697066735822122058f0fc7882f6ae81a153219c169e419e733107c720666c1a2e1150ca9857cb7464736f6c634300080a0033";

type ACLTraitTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ACLTraitTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ACLTraitTest__factory extends ContractFactory {
  constructor(...args: ACLTraitTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    addressProvider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ACLTraitTest> {
    return super.deploy(
      addressProvider,
      overrides || {}
    ) as Promise<ACLTraitTest>;
  }
  override getDeployTransaction(
    addressProvider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(addressProvider, overrides || {});
  }
  override attach(address: string): ACLTraitTest {
    return super.attach(address) as ACLTraitTest;
  }
  override connect(signer: Signer): ACLTraitTest__factory {
    return super.connect(signer) as ACLTraitTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ACLTraitTestInterface {
    return new utils.Interface(_abi) as ACLTraitTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ACLTraitTest {
    return new Contract(address, _abi, signerOrProvider) as ACLTraitTest;
  }
}
