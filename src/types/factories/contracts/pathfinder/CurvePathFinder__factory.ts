/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CurvePathFinder,
  CurvePathFinderInterface,
} from "../../../contracts/pathfinder/CurvePathFinder";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "adapter",
        type: "address",
      },
    ],
    name: "addPoolThroughAdapter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "gasUsage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "adapter",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slippageFactor",
        type: "uint256",
      },
    ],
    name: "getBestPairSwap",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "callData",
                type: "bytes",
              },
            ],
            internalType: "struct MultiCall",
            name: "multiCall",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "found",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "gasUsage",
            type: "uint256",
          },
        ],
        internalType: "struct SwapQuote",
        name: "quote",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "usage",
        type: "uint256",
      },
    ],
    name: "setGasUsage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenToCoin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenToUnderlyingCoin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61117e8061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063715018a611610076578063c488f7fe1161005b578063c488f7fe14610162578063d7aa2e351461018d578063f2fde38b146101be57600080fd5b8063715018a6146101325780638da5cb5b1461013a57600080fd5b80630ab1a574146100a857806334a6ca08146100d157806345330666146100e65780634dee073b146100f9575b600080fd5b6100bb6100b6366004610e2e565b6101d1565b6040516100c89190610e89565b60405180910390f35b6100e46100df366004610f5b565b61080d565b005b6100e46100f4366004610f7f565b610b02565b610124610107366004610fd0565b600160209081526000928352604080842090915290825290205481565b6040519081526020016100c8565b6100e4610bda565b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c8565b610124610170366004610fd0565b600260209081526000928352604080842090915290825290205481565b61012461019b366004611009565b600360209081526000938452604080852082529284528284209052825290205481565b6100e46101cc366004610f5b565b610c67565b61020e6040805160c08101909152600060808201908152606060a08301528190815260200160008152602001600015158152602001600081525090565b60008673ffffffffffffffffffffffffffffffffffffffff1663bd90df706040518163ffffffff1660e01b8152600401602060405180830381865afa15801561025b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027f9190611054565b73ffffffffffffffffffffffffffffffffffffffff81811660009081526001602090815260408083208b851684529091528082205492891682529020549192509081158015906102cf5750600081115b156105435773ffffffffffffffffffffffffffffffffffffffff8316635e0d443f6102fb6001856110a0565b6103066001856110a0565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152600f92830b6004820152910b602482015260448101899052606401602060405180830381865afa9250505080156103a4575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526103a1918101906110b7565b60015b6103ad57610801565b801561053d5760006103c1612710896110d0565b876103d8846b033b2e3c9fd0803ce80000006110d0565b6103e291906110d0565b6103ec919061110d565b600160408089018290526020808a01869052815180830190925273ffffffffffffffffffffffffffffffffffffffff8f168252929350918201907f79bea664000000000000000000000000000000000000000000000000000000009061045290886110a0565b61045d6001886110a0565b604051600f92830b6024820152910b604482015260648101859052608401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090951694909417909352925291885273ffffffffffffffffffffffffffffffffffffffff8088166000908152600384528281208e831682528452828120918d16815292529020546060870152505b50610801565b505073ffffffffffffffffffffffffffffffffffffffff81811660009081526002602090815260408083208a8516845290915280822054928816825290205481158015906105915750600081115b156108015773ffffffffffffffffffffffffffffffffffffffff83166307211ef76105bd6001856110a0565b6105c86001856110a0565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152600f92830b6004820152910b602482015260448101899052606401602060405180830381865afa925050508015610666575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610663918101906110b7565b60015b61066f57610801565b80156107ff576000610683612710896110d0565b8761069a846b033b2e3c9fd0803ce80000006110d0565b6106a491906110d0565b6106ae919061110d565b600160408089018290526020808a01869052815180830190925273ffffffffffffffffffffffffffffffffffffffff8f168252929350918201907f1af4de83000000000000000000000000000000000000000000000000000000009061071490886110a0565b61071f6001886110a0565b604051600f92830b6024820152910b604482015260648101859052608401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090951694909417909352925291885273ffffffffffffffffffffffffffffffffffffffff8088166000908152600384528281208e831682528452828120918d16815292529020546060870152505b505b50505095945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610893576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff1663bd90df706040518163ffffffff1660e01b8152600401602060405180830381865afa1580156108e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109049190611054565b905060005b60048110156109ff576040517fc66106570000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff84169063c661065790602401602060405180830381865afa9250505080156109b7575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526109b491810190611054565b60015b6109c0576109ff565b73ffffffffffffffffffffffffffffffffffffffff83811660009081526001602081815260408084209590941683529390935220910190819055610909565b5060005b6004811015610afd576040517fb9947eb00000000000000000000000000000000000000000000000000000000081526004810182905273ffffffffffffffffffffffffffffffffffffffff84169063b9947eb090602401602060405180830381865afa925050508015610ab1575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610aae91810190611054565b60015b610aba57505050565b73ffffffffffffffffffffffffffffffffffffffff8084166000908152600260209081526040808320949093168252929092529020600182019055600101610a03565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b83576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161088a565b73ffffffffffffffffffffffffffffffffffffffff93841660009081526003602090815260408083209587168084528683528184209590971683529381528382208390559384528281209481529390925290912055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610c5b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161088a565b610c656000610d97565b565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ce8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161088a565b73ffffffffffffffffffffffffffffffffffffffff8116610d8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161088a565b610d9481610d97565b50565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b73ffffffffffffffffffffffffffffffffffffffff81168114610d9457600080fd5b600080600080600060a08688031215610e4657600080fd5b8535610e5181610e0c565b94506020860135610e6181610e0c565b93506040860135610e7181610e0c565b94979396509394606081013594506080013592915050565b60006020808352835160808285015273ffffffffffffffffffffffffffffffffffffffff81511660a0850152818101519050604060c085015280518060e086015260005b81811015610eea5782810184015186820161010001528301610ecd565b81811115610efd57600061010083880101525b5082860151604086015260408601519250610f1c606086018415159052565b606095909501516080850152505050601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016016101000190565b600060208284031215610f6d57600080fd5b8135610f7881610e0c565b9392505050565b60008060008060808587031215610f9557600080fd5b8435610fa081610e0c565b93506020850135610fb081610e0c565b92506040850135610fc081610e0c565b9396929550929360600135925050565b60008060408385031215610fe357600080fd5b8235610fee81610e0c565b91506020830135610ffe81610e0c565b809150509250929050565b60008060006060848603121561101e57600080fd5b833561102981610e0c565b9250602084013561103981610e0c565b9150604084013561104981610e0c565b809150509250925092565b60006020828403121561106657600080fd5b8151610f7881610e0c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156110b2576110b2611071565b500390565b6000602082840312156110c957600080fd5b5051919050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561110857611108611071565b500290565b600082611143577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220dd39312c7038f676a8b3a7e21b871dcbe92e037dc3f8c2a703ccedb7e06ed17a64736f6c634300080a0033";

type CurvePathFinderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurvePathFinderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurvePathFinder__factory extends ContractFactory {
  constructor(...args: CurvePathFinderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CurvePathFinder> {
    return super.deploy(overrides || {}) as Promise<CurvePathFinder>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CurvePathFinder {
    return super.attach(address) as CurvePathFinder;
  }
  override connect(signer: Signer): CurvePathFinder__factory {
    return super.connect(signer) as CurvePathFinder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurvePathFinderInterface {
    return new utils.Interface(_abi) as CurvePathFinderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurvePathFinder {
    return new Contract(address, _abi, signerOrProvider) as CurvePathFinder;
  }
}