/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TargetContractMock,
  TargetContractMockInterface,
} from "../../../../../contracts/test/mocks/adapters/TargetContractMock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "callData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061029a806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80634e417a981461003a575b610037600080366100e6565b50005b610042610058565b60405161004f919061019d565b60405180910390f35b6000805461006590610210565b80601f016020809104026020016040519081016040528092919081815260200182805461009190610210565b80156100de5780601f106100b3576101008083540402835291602001916100de565b820191906000526020600020905b8154815290600101906020018083116100c157829003601f168201915b505050505081565b8280546100f290610210565b90600052602060002090601f0160209004810192826101145760008555610178565b82601f1061014b578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00823516178555610178565b82800160010185558215610178579182015b8281111561017857823582559160200191906001019061015d565b50610184929150610188565b5090565b5b808211156101845760008155600101610189565b600060208083528351808285015260005b818110156101ca578581018301518582016040015282016101ae565b818111156101dc576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600181811c9082168061022457607f821691505b6020821081141561025e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea2646970667358221220ce4d98ff6e78d6e572ead23f5f0316947ad3d447e60e1efdfc3a1485144c317a64736f6c634300080a0033";

type TargetContractMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TargetContractMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TargetContractMock__factory extends ContractFactory {
  constructor(...args: TargetContractMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TargetContractMock> {
    return super.deploy(overrides || {}) as Promise<TargetContractMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TargetContractMock {
    return super.attach(address) as TargetContractMock;
  }
  override connect(signer: Signer): TargetContractMock__factory {
    return super.connect(signer) as TargetContractMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TargetContractMockInterface {
    return new utils.Interface(_abi) as TargetContractMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TargetContractMock {
    return new Contract(address, _abi, signerOrProvider) as TargetContractMock;
  }
}