/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CurveV1StETHPoolGateway,
  CurveV1StETHPoolGatewayInterface,
} from "../../../../../contracts/adapters/curve/CurveV1_stETHGateway.sol/CurveV1StETHPoolGateway";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_steth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NotImplementedException",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressException",
    type: "error",
  },
  {
    inputs: [],
    name: "A",
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
    name: "A_precise",
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
        internalType: "uint256[2]",
        name: "amounts",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "min_mint_amount",
        type: "uint256",
      },
    ],
    name: "add_liquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
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
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "admin_balances",
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
    name: "admin_fee",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "int128",
        name: "i",
        type: "int128",
      },
    ],
    name: "balances",
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
        name: "i",
        type: "uint256",
      },
    ],
    name: "balances",
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
    name: "block_timestamp_last",
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
        internalType: "uint256[2]",
        name: "_amounts",
        type: "uint256[2]",
      },
      {
        internalType: "bool",
        name: "_is_deposit",
        type: "bool",
      },
    ],
    name: "calc_token_amount",
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
        name: "_burn_amount",
        type: "uint256",
      },
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
    ],
    name: "calc_withdraw_one_coin",
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
        internalType: "int128",
        name: "i",
        type: "int128",
      },
    ],
    name: "coins",
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
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "coins",
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
    name: "decimals",
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
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "min_dy",
        type: "uint256",
      },
    ],
    name: "exchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "",
        type: "int128",
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
    ],
    name: "exchange_underlying",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "fee",
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
    name: "future_A",
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
    name: "future_A_time",
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
    name: "get_balances",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "j",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
    ],
    name: "get_dy",
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
        internalType: "int128",
        name: "",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "get_dy_underlying",
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
    name: "get_previous_balances",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "get_price_cumulative_last",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "get_twap_balances",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "get_virtual_price",
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
    name: "initial_A",
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
    name: "initial_A_time",
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
    name: "lp_token",
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
    name: "name",
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
    inputs: [],
    name: "pool",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256[2]",
        name: "min_amounts",
        type: "uint256[2]",
      },
    ],
    name: "remove_liquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "amounts",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "max_burn_amount",
        type: "uint256",
      },
    ],
    name: "remove_liquidity_imbalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token_amount",
        type: "uint256",
      },
      {
        internalType: "int128",
        name: "i",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "min_amount",
        type: "uint256",
      },
    ],
    name: "remove_liquidity_one_coin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    inputs: [],
    name: "token",
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
    name: "token0",
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
    name: "token1",
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
    name: "totalSupply",
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
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    name: "underlying_coins",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
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
    name: "underlying_coins",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b5060405162002bef38038062002bef8339810160408190526200003591620001ac565b6001600160a01b03831615806200005357506001600160a01b038216155b806200006657506001600160a01b038116155b156200008557604051635919af9760e11b815260040160405180910390fd5b6001600160a01b0380841660805282811660a052811660c081905260408051634163183360e11b815290516382c63066916004808201926020929091908290030181865afa158015620000dc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001029190620001f6565b6001600160a01b0390811660e05260a05160c05160405163095ea7b360e01b81529083166004820152600019602482015291169063095ea7b3906044016020604051808303816000875af11580156200015f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200018591906200021b565b505050506200023f565b80516001600160a01b0381168114620001a757600080fd5b919050565b600080600060608486031215620001c257600080fd5b620001cd846200018f565b9250620001dd602085016200018f565b9150620001ed604085016200018f565b90509250925092565b6000602082840312156200020957600080fd5b62000214826200018f565b9392505050565b6000602082840312156200022e57600080fd5b815180151581146200021457600080fd5b60805160a05160c05160e051612811620003de600039600081816105bd0152818161079c01528181610af001528181610c0201528181611359015281816119900152611d530152600081816104450152818161081801528181610a6a01528181610b5601528181610c6a01528181610dc301528181610f8c015281816110d40152818161128e015281816112d6015281816113be0152818161153e015281816115cc01528181611639015281816116a601528181611713015281816118120152818161189701528181611932015281816119f501528181611db701528181611df201528181611e5f0152611ef00152600081816106b101528181610a1601528181610d9b0152818161100601528181611064015281816114d6015281816117ad01528181611c5e0152611d03015260008181610395015281816109280152818161098001528181610ce901528181610d6d01528181610e7e01528181610ed501528181611147015281816111cb01528181611429015281816114ad0152818161178601528181611a8001528181611b2e0152611bd501526128116000f3fe6080604052600436106102e05760003560e01c806370a0823111610184578063d21220a7116100d6578063e31032731161008a578063f851a44011610064578063f851a44014610778578063fc0c546a1461078d578063fee3f7f9146107c057600080fd5b8063e310327314610723578063ed8e84f314610743578063f446c1d01461076357600080fd5b8063dd62ed3e116100bb578063dd62ed3e146106d3578063ddca3f43146106ee578063e2e7d2641461070357600080fd5b8063d21220a71461069f578063d96c7fce1461041e57600080fd5b8063b4b577ad11610138578063bb7b8b8011610112578063bb7b8b801461064a578063c66106571461065f578063cc2b27d71461067f57600080fd5b8063b4b577ad146105ff578063b739953e14610614578063b9947eb01461062f57600080fd5b806382c630661161016957806382c63066146105ab57806395d89b411461031f578063a6417ed6146105df57600080fd5b806370a082311461057b57806376a2f0f01461059657600080fd5b80631a4d01d21161023d5780634469e30e116101f15780635b36389c116101cb5780635b36389c146105265780635e0d443f1461054657806363543f061461056657600080fd5b80634469e30e1461041e5780634903b0d1146104f15780635409491a1461051157600080fd5b806323746eb81161022257806323746eb8146104b1578063313ce567146104675780633df02124146104d157600080fd5b80631a4d01d21461047c5780632081066c1461049c57600080fd5b80630f6ba8e31161029457806314f059791161027957806314f059791461041e57806316f0115b1461043357806318160ddd1461046757600080fd5b80630f6ba8e3146103dc578063140522881461040957600080fd5b806307211ef7116102c557806307211ef7146103415780630b4c7e4d146103615780630dfe16811461038357600080fd5b8063065a80d8146102ec57806306fdde031461031f57600080fd5b366102e757005b600080fd5b3480156102f857600080fd5b5061030c6103073660046123ee565b6107d5565b6040519081526020015b60405180910390f35b34801561032b57600080fd5b5061033461089f565b6040516103169190612435565b34801561034d57600080fd5b5061030c61035c366004612486565b6108d3565b34801561036d57600080fd5b5061038161037c3660046124d3565b610907565b005b34801561038f57600080fd5b506103b77f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610316565b3480156103e857600080fd5b506103fc6103f73660046124fe565b610b18565b604051610316919061253c565b34801561041557600080fd5b5061030c610b52565b34801561042a57600080fd5b506103fc610b18565b34801561043f57600080fd5b506103b77f000000000000000000000000000000000000000000000000000000000000000081565b34801561047357600080fd5b5061030c6108d3565b34801561048857600080fd5b5061038161049736600461256d565b610be8565b3480156104a857600080fd5b5061030c610dbf565b3480156104bd57600080fd5b506103b76104cc3660046123ee565b610e2c565b3480156104dd57600080fd5b506103816104ec366004612592565b610e49565b3480156104fd57600080fd5b5061030c61050c3660046125d4565b61125c565b34801561051d57600080fd5b5061030c6112d2565b34801561053257600080fd5b506103816105413660046125ed565b61133f565b34801561055257600080fd5b5061030c610561366004612486565b6114fa565b34801561057257600080fd5b5061030c6115c8565b34801561058757600080fd5b5061030c61035c36600461263f565b3480156105a257600080fd5b5061030c611635565b3480156105b757600080fd5b506103b77f000000000000000000000000000000000000000000000000000000000000000081565b3480156105eb57600080fd5b506103816105fa366004612592565b610b20565b34801561060b57600080fd5b5061030c6116a2565b34801561062057600080fd5b506103b761035c3660046123ee565b34801561063b57600080fd5b506103b761035c3660046125d4565b34801561065657600080fd5b5061030c61170f565b34801561066b57600080fd5b506103b761067a3660046125d4565b61177c565b34801561068b57600080fd5b5061030c61069a36600461265c565b6117d6565b3480156106ab57600080fd5b506103b77f000000000000000000000000000000000000000000000000000000000000000081565b3480156106df57600080fd5b5061030c61035c36600461267f565b3480156106fa57600080fd5b5061030c611893565b34801561070f57600080fd5b5061030c61071e3660046125d4565b611900565b34801561072f57600080fd5b5061038161073e3660046124d3565b611976565b34801561074f57600080fd5b5061030c61075e3660046126c6565b611d77565b34801561076f57600080fd5b5061030c611dee565b34801561078457600080fd5b506103b7611e5b565b34801561079957600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006103b7565b3480156107cc57600080fd5b5061030c611eec565b6040517f4903b0d10000000000000000000000000000000000000000000000000000000081526fffffffffffffffffffffffffffffffff821660048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690634903b0d1906024015b602060405180830381865afa158015610875573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089991906126f3565b92915050565b60606040517f24e46f7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006040517f24e46f7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8135156109f25761095173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633308535611f59565b6040517f2e1a7d4d000000000000000000000000000000000000000000000000000000008152823560048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690632e1a7d4d90602401600060405180830381600087803b1580156109d957600080fd5b505af11580156109ed573d6000803e3d6000fd5b505050505b602082013515610a4257610a4273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633306020860135611f59565b6040517f0b4c7e4d0000000000000000000000000000000000000000000000000000000081527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690630b4c7e4d90843590610ab9908690869060040161273b565b6000604051808303818588803b158015610ad257600080fd5b505af1158015610ae6573d6000803e3d6000fd5b5050505050610b147f0000000000000000000000000000000000000000000000000000000000000000612035565b5050565b610b206123be565b6040517f24e46f7000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663140522886040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be391906126f3565b905090565b610c2a73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333086611f59565b6040517f1a4d01d200000000000000000000000000000000000000000000000000000000815260048101849052600f83900b6024820152604481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690631a4d01d290606401600060405180830381600087803b158015610cc357600080fd5b505af1158015610cd7573d6000803e3d6000fd5b5050505081600f0b60001415610d96577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0476040518263ffffffff1660e01b81526004016000604051808303818588803b158015610d4f57600080fd5b505af1158015610d63573d6000803e3d6000fd5b5050505050610d917f0000000000000000000000000000000000000000000000000000000000000000612035565b505050565b610d917f0000000000000000000000000000000000000000000000000000000000000000612035565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632081066c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bbf573d6000803e3d6000fd5b6000610899826fffffffffffffffffffffffffffffffff1661177c565b83600f0b6000148015610e5f575082600f0b6001145b1561102f57610ea673ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333085611f59565b6040517f2e1a7d4d000000000000000000000000000000000000000000000000000000008152600481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690632e1a7d4d90602401600060405180830381600087803b158015610f2e57600080fd5b505af1158015610f42573d6000803e3d6000fd5b50506040517f3df02124000000000000000000000000000000000000000000000000000000008152600f87810b600483015286900b602482015260448101859052606481018490527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169250633df02124915084906084016000604051808303818588803b158015610fe857600080fd5b505af1158015610ffc573d6000803e3d6000fd5b505050505061102a7f0000000000000000000000000000000000000000000000000000000000000000612035565b611256565b83600f0b6001148015611045575082600f0b6000145b156111ef5761108c73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333085611f59565b6040517f3df02124000000000000000000000000000000000000000000000000000000008152600f85810b600483015284900b602482015260448101839052606481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690633df0212490608401600060405180830381600087803b15801561112d57600080fd5b505af1158015611141573d6000803e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0476040518263ffffffff1660e01b81526004016000604051808303818588803b1580156111ad57600080fd5b505af11580156111c1573d6000803e3d6000fd5b505050505061102a7f0000000000000000000000000000000000000000000000000000000000000000612035565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f496e636f727265637420692c6a20706172616d6574657273000000000000000060448201526064015b60405180910390fd5b50505050565b6040517f4903b0d1000000000000000000000000000000000000000000000000000000008152600481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690634903b0d190602401610858565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635409491a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bbf573d6000803e3d6000fd5b61138173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333085611f59565b6040517f5b36389c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690635b36389c906113f59085908590600401612753565b600060405180830381600087803b15801561140f57600080fd5b505af1158015611423573d6000803e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0476040518263ffffffff1660e01b81526004016000604051808303818588803b15801561148f57600080fd5b505af11580156114a3573d6000803e3d6000fd5b50505050506114d17f0000000000000000000000000000000000000000000000000000000000000000612035565b610b147f0000000000000000000000000000000000000000000000000000000000000000612035565b6040517f5e0d443f000000000000000000000000000000000000000000000000000000008152600f84810b600483015283900b6024820152604481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635e0d443f90606401602060405180830381865afa15801561159a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115be91906126f3565b90505b9392505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166363543f066040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bbf573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166376a2f0f06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bbf573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b4b577ad6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bbf573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb7b8b806040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bbf573d6000803e3d6000fd5b6000816117aa57507f0000000000000000000000000000000000000000000000000000000000000000919050565b507f0000000000000000000000000000000000000000000000000000000000000000919050565b919050565b6040517fcc2b27d700000000000000000000000000000000000000000000000000000000815260048101839052600f82900b60248201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063cc2b27d7906044015b602060405180830381865afa15801561186f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c191906126f3565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ddca3f436040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bbf573d6000803e3d6000fd5b6040517fe2e7d264000000000000000000000000000000000000000000000000000000008152600481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e2e7d26490602401610858565b6119b873ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016333084611f59565b6040517fe310327300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e310327390611a2c908590859060040161273b565b600060405180830381600087803b158015611a4657600080fd5b505af1158015611a5a573d6000803e3d6000fd5b50505050600182600060028110611a7357611a7361270c565b60200201351115611c20577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0476040518263ffffffff1660e01b81526004016000604051808303818588803b158015611ae657600080fd5b505af1158015611afa573d6000803e3d6000fd5b50506040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600093507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1692506370a082319150602401602060405180830381865afa158015611b8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bb091906126f3565b90506001811115611c1e57611c1e73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016337fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8401612110565b505b600160208301351115611d4e576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015611cba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cde91906126f3565b90506001811115611d4c57611d4c73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016337fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8401612110565b505b610b147f0000000000000000000000000000000000000000000000000000000000000000612035565b6040517fed8e84f300000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063ed8e84f390611852908690869060040161276d565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f446c1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bbf573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa158015611ec8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be39190612785565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fee3f7f96040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bbf573d6000803e3d6000fd5b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112569085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612166565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156120a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120c691906126f3565b90506001811115610b1457610b1473ffffffffffffffffffffffffffffffffffffffff8316337fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84015b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610d919084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611fb3565b60006121c8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166122729092919063ffffffff16565b805190915015610d9157808060200190518101906121e691906127a2565b610d91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161124d565b60606115be848460008585843b6122e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161124d565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161230e91906127bf565b60006040518083038185875af1925050503d806000811461234b576040519150601f19603f3d011682016040523d82523d6000602084013e612350565b606091505b509150915061236082828661236b565b979650505050505050565b6060831561237a5750816115c1565b82511561238a5782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124d9190612435565b60405180604001604052806002906020820280368337509192915050565b8035600f81900b81146117d157600080fd5b60006020828403121561240057600080fd5b6115c1826123dc565b60005b8381101561242457818101518382015260200161240c565b838111156112565750506000910152565b6020815260008251806020840152612454816040850160208701612409565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008060006060848603121561249b57600080fd5b6124a4846123dc565b92506124b2602085016123dc565b9150604084013590509250925092565b806040810183101561089957600080fd5b600080606083850312156124e657600080fd5b6124f084846124c2565b946040939093013593505050565b600080600060a0848603121561251357600080fd5b61251d85856124c2565b925061252c85604086016124c2565b9150608084013590509250925092565b60408101818360005b6002811015612564578151835260209283019290910190600101612545565b50505092915050565b60008060006060848603121561258257600080fd5b833592506124b2602085016123dc565b600080600080608085870312156125a857600080fd5b6125b1856123dc565b93506125bf602086016123dc565b93969395505050506040820135916060013590565b6000602082840312156125e657600080fd5b5035919050565b6000806060838503121561260057600080fd5b8235915061261184602085016124c2565b90509250929050565b73ffffffffffffffffffffffffffffffffffffffff8116811461263c57600080fd5b50565b60006020828403121561265157600080fd5b81356115c18161261a565b6000806040838503121561266f57600080fd5b82359150612611602084016123dc565b6000806040838503121561269257600080fd5b823561269d8161261a565b915060208301356126ad8161261a565b809150509250929050565b801515811461263c57600080fd5b600080606083850312156126d957600080fd5b6126e384846124c2565b915060408301356126ad816126b8565b60006020828403121561270557600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60608101604084833760409190910191909152919050565b828152606081016040836020840137600081529392505050565b60608101604084833791151560409190910152919050565b60006020828403121561279757600080fd5b81516115c18161261a565b6000602082840312156127b457600080fd5b81516115c1816126b8565b600082516127d1818460208701612409565b919091019291505056fea26469706673582212207d5ad6fbb734115d99cea053bf7b943b4ba9190a8b3a3f550fc293c2b746526f64736f6c634300080a0033";

type CurveV1StETHPoolGatewayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurveV1StETHPoolGatewayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurveV1StETHPoolGateway__factory extends ContractFactory {
  constructor(...args: CurveV1StETHPoolGatewayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _weth: string,
    _steth: string,
    _pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CurveV1StETHPoolGateway> {
    return super.deploy(
      _weth,
      _steth,
      _pool,
      overrides || {}
    ) as Promise<CurveV1StETHPoolGateway>;
  }
  override getDeployTransaction(
    _weth: string,
    _steth: string,
    _pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_weth, _steth, _pool, overrides || {});
  }
  override attach(address: string): CurveV1StETHPoolGateway {
    return super.attach(address) as CurveV1StETHPoolGateway;
  }
  override connect(signer: Signer): CurveV1StETHPoolGateway__factory {
    return super.connect(signer) as CurveV1StETHPoolGateway__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveV1StETHPoolGatewayInterface {
    return new utils.Interface(_abi) as CurveV1StETHPoolGatewayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveV1StETHPoolGateway {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CurveV1StETHPoolGateway;
  }
}
