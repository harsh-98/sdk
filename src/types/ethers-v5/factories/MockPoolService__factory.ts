/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockPoolService } from "../MockPoolService";

export class MockPoolService__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _underlyingToken: string,
    overrides?: Overrides
  ): Promise<MockPoolService> {
    return super.deploy(
      _underlyingToken,
      overrides || {}
    ) as Promise<MockPoolService>;
  }
  getDeployTransaction(
    _underlyingToken: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_underlyingToken, overrides || {});
  }
  attach(address: string): MockPoolService {
    return super.attach(address) as MockPoolService;
  }
  connect(signer: Signer): MockPoolService__factory {
    return super.connect(signer) as MockPoolService__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPoolService {
    return new Contract(address, _abi, signerOrProvider) as MockPoolService;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_underlyingToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "referralCode",
        type: "uint256",
      },
    ],
    name: "AddLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Borrow",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
    ],
    name: "BorrowForbidden",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
    ],
    name: "NewCreditManagerConnected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newLimit",
        type: "uint256",
      },
    ],
    name: "NewExpectedLiquidityLimit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newInterestRateModel",
        type: "address",
      },
    ],
    name: "NewInterestRateModel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RemoveLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowedAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "profit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loss",
        type: "uint256",
      },
    ],
    name: "Repay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "loss",
        type: "uint256",
      },
    ],
    name: "UncoveredLoss",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "onBehalfOf",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "referralCode",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "availableLiquidity",
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
    name: "borrowAPY_RAY",
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
    name: "calcLinearCumulative_RAY",
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
        name: "_creditManager",
        type: "address",
      },
    ],
    name: "connectCreditManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "creditManagers",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "creditManagersCanBorrow",
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
    name: "creditManagersCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "dieselToken",
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
    name: "expectedLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "expectedLiquidityLimit",
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
        name: "_creditManager",
        type: "address",
      },
    ],
    name: "forbidCreditManagerToBorrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "fromDiesel",
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
    name: "getDieselRate_RAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "lendAccount",
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
    name: "lendAmount",
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
        internalType: "uint256",
        name: "borrowedAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
    ],
    name: "lendCreditAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_interestRateModel",
        type: "address",
      },
    ],
    name: "newInterestRateModel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "removeLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "repayAmount",
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
        internalType: "uint256",
        name: "borrowedAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "profit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "loss",
        type: "uint256",
      },
    ],
    name: "repayCreditAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "repayLoss",
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
    name: "repayProfit",
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
        internalType: "uint256",
        name: "_cumulativeIndex_RAY",
        type: "uint256",
      },
    ],
    name: "setCumulative_RAY",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "toDiesel",
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
    name: "totalBorrowed",
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
    name: "underlyingToken",
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
    name: "withdrawFee",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516114bb3803806114bb8339818101604052602081101561003357600080fd5b810190808051906020019092919050505080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506100a9600a6b033b2e3c9fd0803ce80000006100c860201b610a761790919060201c565b6006819055506b033b2e3c9fd0803ce8000000600c8190555050610151565b600080821161013f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060200191505060405180910390fd5b81838161014857fe5b04905092915050565b61135b806101606000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806374375359116100f9578063cb3905e111610097578063e941fa7811610071578063e941fa78146106c7578063ef8d9603146106e5578063f11a648714610703578063fe14112d14610747576101c4565b8063cb3905e114610647578063cf33d95514610665578063d0efe753146106a9576101c4565b80639aa5d462116100d35780639aa5d46214610541578063a4e8273e14610599578063bf28068b146105b7578063ca9505e414610605576101c4565b806374375359146104d7578063788c6bfe146104f557806396df5dc014610513576101c4565b80632e97ca21116101665780634c19386c116101405780634c19386c146104175780634d778ad1146104355780635427c9381461047757806367c99d58146104b9576101c4565b80632e97ca211461036b57806336dda7d5146103c557806345d31f9d146103f9576101c4565b80631e16e4fc116101a25780631e16e4fc1461028d5780632495a599146102e557806329f3d3b6146103195780632a3354c914610337576101c4565b806305fe138b146101c9578063078c47811461022b5780630fce70fb1461026f575b600080fd5b610215600480360360408110156101df57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610765565b6040518082815260200191505060405180910390f35b61026d6004803603602081101561024157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061076d565b005b610277610770565b6040518082815260200191505060405180910390f35b6102b9600480360360208110156102a357600080fd5b810190808035906020019092919050505061077a565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102ed6107b9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103216107df565b6040518082815260200191505060405180910390f35b61033f6107e5565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103ad6004803603602081101561038157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061080b565b60405180821515815260200191505060405180910390f35b6103cd61082b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610401610851565b6040518082815260200191505060405180910390f35b61041f610857565b6040518082815260200191505060405180910390f35b6104616004803603602081101561044b57600080fd5b810190808035906020019092919050505061085d565b6040518082815260200191505060405180910390f35b6104a36004803603602081101561048d57600080fd5b8101908080359060200190929190505050610880565b6040518082815260200191505060405180910390f35b6104c16108a3565b6040518082815260200191505060405180910390f35b6104df6108a9565b6040518082815260200191505060405180910390f35b6104fd610974565b6040518082815260200191505060405180910390f35b61053f6004803603602081101561052957600080fd5b8101908080359060200190929190505050610988565b005b6105976004803603606081101561055757600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610992565b005b6105a1610997565b6040518082815260200191505060405180910390f35b610603600480360360408110156105cd57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109a0565b005b6106456004803603606081101561061b57600080fd5b81019080803590602001909291908035906020019092919080359060200190929190505050610a39565b005b61064f610a53565b6040518082815260200191505060405180910390f35b6106a76004803603602081101561067b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a59565b005b6106b1610a5c565b6040518082815260200191505060405180910390f35b6106cf610a62565b6040518082815260200191505060405180910390f35b6106ed610a68565b6040518082815260200191505060405180910390f35b6107456004803603602081101561071957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a6e565b005b61074f610a71565b6040518082815260200191505060405180910390f35b600092915050565b50565b6000600c54905090565b6003818154811061078a57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60056020528060005260406000206000915054906101000a900460ff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b60005481565b600061087961086a610974565b83610aff90919063ffffffff16565b9050919050565b600061089c61088d610974565b83610d2c90919063ffffffff16565b9050919050565b600b5481565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561093457600080fd5b505afa158015610948573d6000803e3d6000fd5b505050506040513d602081101561095e57600080fd5b8101908080519060200190929190505050905090565b60006b033b2e3c9fd0803ce8000000905090565b80600c8190555050565b505050565b60006001905090565b8160078190555080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610a358183600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610ea59092919063ffffffff16565b5050565b8260098190555081600a8190555080600b81905550505050565b600a5481565b50565b60095481565b600d5481565b60015481565b50565b600090565b6000808211610aed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060200191505060405180910390fd5b818381610af657fe5b04905092915050565b6000808214156040518060400160405280600281526020017f4d3300000000000000000000000000000000000000000000000000000000000081525090610be1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ba6578082015181840152602081019050610b8b565b50505050905090810190601f168015610bd35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600060028381610bee57fe5b0490506b033b2e3c9fd0803ce8000000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0381610c2857fe5b048411156040518060400160405280600281526020017f4d3100000000000000000000000000000000000000000000000000000000000081525090610d08576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ccd578082015181840152602081019050610cb2565b50505050905090810190601f168015610cfa5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082816b033b2e3c9fd0803ce800000086020181610d2257fe5b0491505092915050565b600080831480610d3c5750600082145b15610d4a5760009050610e9f565b8160026b033b2e3c9fd0803ce800000081610d6157fe5b047fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0381610d8b57fe5b048311156040518060400160405280600281526020017f4d3100000000000000000000000000000000000000000000000000000000000081525090610e6b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610e30578082015181840152602081019050610e15565b50505050905090810190601f168015610e5d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506b033b2e3c9fd0803ce800000060026b033b2e3c9fd0803ce800000081610e8f57fe5b048385020181610e9b57fe5b0490505b92915050565b610f428363a9059cbb60e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610f47565b505050565b6000610fa9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166110369092919063ffffffff16565b905060008151111561103157808060200190516020811015610fca57600080fd5b8101908080519060200190929190505050611030576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806112fc602a913960400191505060405180910390fd5b5b505050565b6060611045848460008561104e565b90509392505050565b6060824710156110a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806112d66026913960400191505060405180910390fd5b6110b2856111f6565b611124576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b602083106111735780518252602082019150602081019050602083039250611150565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146111d5576040519150601f19603f3d011682016040523d82523d6000602084013e6111da565b606091505b50915091506111ea828286611209565b92505050949350505050565b600080823b905060008111915050919050565b60608315611219578290506112ce565b60008351111561122c5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611293578082015181840152602081019050611278565b50505050905090810190601f1680156112c05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212209e702b5071a689d6003a9e5a2b06117b9bada4943451d3af0e8b3e2228674f3464736f6c63430007060033";
