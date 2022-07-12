/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  YearnPriceFeed,
  YearnPriceFeedInterface,
} from "../../../../contracts/oracles/yearn/YearnPriceFeed";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addressProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "_yVault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_priceFeed",
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
    name: "ChainPriceStaleException",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectLimitsException",
    type: "error",
  },
  {
    inputs: [],
    name: "NotImplementedException",
    type: "error",
  },
  {
    inputs: [],
    name: "PriceFeedRequiresAddressException",
    type: "error",
  },
  {
    inputs: [],
    name: "PriceOracleNotExistsException",
    type: "error",
  },
  {
    inputs: [],
    name: "ValueOutOfRangeExpcetion",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressException",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroPriceException",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "lowerBound",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "upperBound",
        type: "uint256",
      },
    ],
    name: "NewLimiterParams",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimalsDivider",
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
    inputs: [],
    name: "delta",
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
    inputs: [],
    name: "dependsOnAddress",
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
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lowerBound",
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
    name: "priceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceFeedType",
    outputs: [
      {
        internalType: "enum PriceFeedType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lowerBound",
        type: "uint256",
      },
    ],
    name: "setLimiter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "skipPriceCheck",
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
  {
    inputs: [],
    name: "upperBound",
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
    inputs: [],
    name: "version",
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
    inputs: [],
    name: "yVault",
    outputs: [
      {
        internalType: "contract IYVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040523480156200001257600080fd5b50604051620017023803806200170283398101604081905262000035916200042e565b8260c8836001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa15801562000077573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620000a19190810190620004c1565b604051602001620000b3919062000579565b60408051601f198184030181529190526000805460ff19169055826001600160a01b038116620000f657604051635919af9760e11b815260040160405180910390fd5b806001600160a01b031663087376956040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000135573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015b9190620005a9565b6001600160a01b03166080525080516200017d9060029060208401906200036b565b505060a052506001600160a01b0382161580620001a157506001600160a01b038116155b15620001c057604051635919af9760e11b815260040160405180910390fd5b6001600160a01b0380831660e081905290821660c0526040805163313ce56760e01b8152905163313ce567916004808201926020929091908290030181865afa15801562000212573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002389190620005ce565b6200024590600a62000706565b61010081815250506000826001600160a01b03166399530b066040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200028e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002b4919062000717565b9050620002c181620002cb565b50505050620007ce565b80620002ea576040516309aadd6f60e41b815260040160405180910390fd5b60018190557f82e7ee47180a631312683eeb2a85ad264c9af490d54de5a75bbdb95b968c6de2816200031c8162000337565b6040805192835260208301919091520160405180910390a150565b60a051600090612710906200034d908262000731565b6200035990846200074c565b6200036591906200076e565b92915050565b828054620003799062000791565b90600052602060002090601f0160209004810192826200039d5760008555620003e8565b82601f10620003b857805160ff1916838001178555620003e8565b82800160010185558215620003e8579182015b82811115620003e8578251825591602001919060010190620003cb565b50620003f6929150620003fa565b5090565b5b80821115620003f65760008155600101620003fb565b80516001600160a01b03811681146200042957600080fd5b919050565b6000806000606084860312156200044457600080fd5b6200044f8462000411565b92506200045f6020850162000411565b91506200046f6040850162000411565b90509250925092565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004ab57818101518382015260200162000491565b83811115620004bb576000848401525b50505050565b600060208284031215620004d457600080fd5b81516001600160401b0380821115620004ec57600080fd5b818401915084601f8301126200050157600080fd5b81518181111562000516576200051662000478565b604051601f8201601f19908116603f0116810190838211818310171562000541576200054162000478565b816040528281528760208487010111156200055b57600080fd5b6200056e8360208301602088016200048e565b979650505050505050565b600082516200058d8184602087016200048e565b69081c1c9a58d95199595960b21b920191825250600a01919050565b600060208284031215620005bc57600080fd5b620005c78262000411565b9392505050565b600060208284031215620005e157600080fd5b815160ff81168114620005c757600080fd5b634e487b7160e01b600052601160045260246000fd5b600181815b808511156200064a5781600019048211156200062e576200062e620005f3565b808516156200063c57918102915b93841c93908002906200060e565b509250929050565b600082620006635750600162000365565b81620006725750600062000365565b81600181146200068b57600281146200069657620006b6565b600191505062000365565b60ff841115620006aa57620006aa620005f3565b50506001821b62000365565b5060208310610133831016604e8410600b8410161715620006db575081810a62000365565b620006e7838362000609565b8060001904821115620006fe57620006fe620005f3565b029392505050565b6000620005c760ff84168362000652565b6000602082840312156200072a57600080fd5b5051919050565b60008219821115620007475762000747620005f3565b500190565b6000816000190483118215151615620007695762000769620005f3565b500290565b6000826200078c57634e487b7160e01b600052601260045260246000fd5b500490565b600181811c90821680620007a657607f821691505b60208210811415620007c857634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e05161010051610ebe62000844600039600081816102ff015261083d0152600081816101af01526107a301526000818161024e01526106fa01526000818161015b0152610a2a0152600081816102d80152818161037a015281816104f6015261062e0152610ebe6000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80638456cb59116100cd578063a834559e11610081578063bc489a6511610066578063bc489a6514610329578063d62ada111461033c578063feaf968c1461034457600080fd5b8063a834559e146102fa578063b09ad8a01461032157600080fd5b80639a6fc8f5116100b25780639a6fc8f514610280578063a384d6ff146102ca578063a50cf2c8146102d357600080fd5b80638456cb5914610270578063975c19ab1461027857600080fd5b80633fd0875f116101245780635c975abb116101095780635c975abb1461021d5780637284e41614610234578063741bef1a1461024957600080fd5b80633fd0875f1461020057806354fd4d501461021557600080fd5b806312b495a814610156578063313ce5671461019057806333303f8e146101aa5780633f4ba83a146101f6575b600080fd5b61017d7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b610198600881565b60405160ff9091168152602001610187565b6101d17f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610187565b6101fe61034c565b005b610208600181565b6040516101879190610bd9565b61017d600281565b60005460ff165b6040519015158152602001610187565b61023c61043a565b6040516101879190610c1a565b6101d17f000000000000000000000000000000000000000000000000000000000000000081565b6101fe6104c8565b610224600081565b61029361028e366004610ca5565b6105b4565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a001610187565b61017d60015481565b6101d17f000000000000000000000000000000000000000000000000000000000000000081565b61017d7f000000000000000000000000000000000000000000000000000000000000000081565b61017d6105ee565b6101fe610337366004610cc9565b610600565b610224600181565b6102936106f0565b6040517fd4eb5db00000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063d4eb5db090602401602060405180830381865afa1580156103d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103fa9190610ce2565b610430576040517f10332dee00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61043861087a565b565b6002805461044790610d04565b80601f016020809104026020016040519081016040528092919081815260200182805461047390610d04565b80156104c05780601f10610495576101008083540402835291602001916104c0565b820191906000526020600020905b8154815290600101906020018083116104a357829003601f168201915b505050505081565b6040517f3a41ec640000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690633a41ec6490602401602060405180830381865afa158015610552573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105769190610ce2565b6105ac576040517fd794b1e700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610438610960565b60008060008060006040517f24e46f7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006105fb600154610a20565b905090565b6040517f5f259aba0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f259aba90602401602060405180830381865afa15801561068a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ae9190610ce2565b6106e4576040517f61081c1500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106ed81610a69565b50565b60008060008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610763573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107879190610d58565b93985091965094509250905061079f85858484610aeb565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166399530b066040518163ffffffff1660e01b8152600401602060405180830381865afa15801561080c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108309190610db0565b905061083b81610b86565b7f00000000000000000000000000000000000000000000000000000000000000006108668683610df8565b6108709190610e35565b9450509091929394565b60005460ff166108eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064015b60405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b60005460ff16156109cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016108e2565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586109363390565b6000612710610a4f7f000000000000000000000000000000000000000000000000000000000000000082610e70565b610a599084610df8565b610a639190610e35565b92915050565b80610aa0576040517f9aadd6f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018190557f82e7ee47180a631312683eeb2a85ad264c9af490d54de5a75bbdb95b968c6de281610ad081610a20565b6040805192835260208301919091520160405180910390a150565b60008313610b25576040517f56e05d2b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8369ffffffffffffffffffff168169ffffffffffffffffffff161080610b49575081155b15610b80576040517fb1cf675500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b60015480821080610b9e5750610b9b81610a20565b82115b15610bd5576040517fb416da7f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6020810160068310610c14577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b600060208083528351808285015260005b81811015610c4757858101830151858201604001528201610c2b565b81811115610c59576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b69ffffffffffffffffffff811681146106ed57600080fd5b600060208284031215610cb757600080fd5b8135610cc281610c8d565b9392505050565b600060208284031215610cdb57600080fd5b5035919050565b600060208284031215610cf457600080fd5b81518015158114610cc257600080fd5b600181811c90821680610d1857607f821691505b60208210811415610d52577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600080600080600060a08688031215610d7057600080fd5b8551610d7b81610c8d565b809550506020860151935060408601519250606086015191506080860151610da281610c8d565b809150509295509295909350565b600060208284031215610dc257600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610e3057610e30610dc9565b500290565b600082610e6b577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60008219821115610e8357610e83610dc9565b50019056fea2646970667358221220705334bc53a4e4b7e496bcb0323eae35de3bf23995ea4ca4d21d7f19f9ce63b364736f6c634300080a0033";

type YearnPriceFeedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: YearnPriceFeedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class YearnPriceFeed__factory extends ContractFactory {
  constructor(...args: YearnPriceFeedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    addressProvider: string,
    _yVault: string,
    _priceFeed: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YearnPriceFeed> {
    return super.deploy(
      addressProvider,
      _yVault,
      _priceFeed,
      overrides || {}
    ) as Promise<YearnPriceFeed>;
  }
  override getDeployTransaction(
    addressProvider: string,
    _yVault: string,
    _priceFeed: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      addressProvider,
      _yVault,
      _priceFeed,
      overrides || {}
    );
  }
  override attach(address: string): YearnPriceFeed {
    return super.attach(address) as YearnPriceFeed;
  }
  override connect(signer: Signer): YearnPriceFeed__factory {
    return super.connect(signer) as YearnPriceFeed__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YearnPriceFeedInterface {
    return new utils.Interface(_abi) as YearnPriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YearnPriceFeed {
    return new Contract(address, _abi, signerOrProvider) as YearnPriceFeed;
  }
}
