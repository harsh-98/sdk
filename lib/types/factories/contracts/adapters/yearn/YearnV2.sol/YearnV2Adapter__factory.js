"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.YearnV2Adapter__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_creditManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "_yVault",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "TokenIsNotInAllowedList",
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
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
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
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "_gearboxAdapterType",
        outputs: [
            {
                internalType: "enum AdapterType",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "_gearboxAdapterVersion",
        outputs: [
            {
                internalType: "uint16",
                name: "",
                type: "uint16",
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
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
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
        inputs: [],
        name: "creditFacade",
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
        name: "creditManager",
        outputs: [
            {
                internalType: "contract ICreditManagerV2",
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
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "deposit",
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
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "deposit",
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
        name: "deposit",
        outputs: [
            {
                internalType: "uint256",
                name: "shares",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
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
        name: "pricePerShare",
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
        name: "targetContract",
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
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "maxShares",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "withdraw",
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
        inputs: [
            {
                internalType: "uint256",
                name: "maxShares",
                type: "uint256",
            },
        ],
        name: "withdraw",
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
        name: "withdraw",
        outputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "maxShares",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "maxLoss",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x6101006040523480156200001257600080fd5b506040516200231d3803806200231d8339810160408190526200003591620002cd565b81816001600160a01b03821615806200005557506001600160a01b038116155b156200007457604051635919af9760e11b815260040160405180910390fd5b6001600160a01b038216608081905260408051632f7a188160e01b81529051632f7a1881916004808201926020929091908290030181865afa158015620000bf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e5919062000305565b6001600160a01b0390811660a0521660c0819052600160005560408051637e062a3560e11b8152905191925063fc0c546a9160048083019260209291908290030181865afa1580156200013c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000162919062000305565b6001600160a01b0390811660e0819052608051604051630f67c5bd60e41b815260048101929092529091169063f67c5bd090602401602060405180830381865afa158015620001b5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001db91906200032a565b6200020d5760e051604051634c607af960e11b81526001600160a01b0390911660048201526024015b60405180910390fd5b608051604051630f67c5bd60e41b81526001600160a01b0383811660048301529091169063f67c5bd090602401602060405180830381865afa15801562000258573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200027e91906200032a565b620002a857604051634c607af960e11b81526001600160a01b038216600482015260240162000204565b505062000344565b80516001600160a01b0381168114620002c857600080fd5b919050565b60008060408385031215620002e157600080fd5b620002ec83620002b0565b9150620002fc60208401620002b0565b90509250929050565b6000602082840312156200031857600080fd5b6200032382620002b0565b9392505050565b6000602082840312156200033d57600080fd5b5051919050565b60805160a05160c05160e051611ebf6200045e6000396000818161038c01528181610f6901528181611218015281816112e3015261140e0152600081816102fb015281816104f4015281816105ac015281816107790152818161097501528181610b7d01528181610bf401528181610c610152818161103c015281816111f701528181611304015281816113ec0152818161167d0152818161176b015261187a0152600081816102290152818161157c015261192301526000818161032201528181610457015281816106dd015281816108aa01528181610aa901528181610d6e01528181610e9e01528181611154015281816116b4015281816117a20152818161184b015281816119b30152611a610152611ebf6000f3fe608060405234801561001057600080fd5b506004361061018c5760003560e01c806378aa73a4116100e3578063c12c21c01161008c578063dd62ed3e11610066578063dd62ed3e14610361578063e63697c814610374578063fc0c546a1461038757600080fd5b8063c12c21c01461031d578063ce30bbdb14610344578063d0e30db01461035957600080fd5b8063a9059cbb116100bd578063a9059cbb146101cc578063b6b55f25146102e3578063bd90df70146102f657600080fd5b806378aa73a4146102b857806395d89b41146102d357806399530b06146102db57600080fd5b80632e1a7d4d116101455780633ccfd60b1161011f5780633ccfd60b1461028a5780636e553f651461029257806370a08231146102a557600080fd5b80632e1a7d4d146102115780632f7a188114610224578063313ce5671461027057600080fd5b8063095ea7b311610176578063095ea7b3146101cc57806318160ddd146101f257806323b872dd146101fa57600080fd5b8062f714ce1461019157806306fdde03146101b7575b600080fd5b6101a461019f366004611aee565b6103ae565b6040519081526020015b60405180910390f35b6101bf6104f0565b6040516101ae9190611b98565b6101e26101da366004611bab565b600092915050565b60405190151581526020016101ae565b6101a46105a8565b6101e2610208366004611bd7565b60009392505050565b6101a461021f366004611c18565b610639565b61024b7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101ae565b610278610775565b60405160ff90911681526020016101ae565b6101a4610806565b6101a46102a0366004611aee565b610a05565b6101a46102b3366004611c31565b610b35565b6102c0600281565b60405161ffff90911681526020016101ae565b6101bf610bf0565b6101a4610c5d565b6101a46102f1366004611c18565b610cca565b61024b7f000000000000000000000000000000000000000000000000000000000000000081565b61024b7f000000000000000000000000000000000000000000000000000000000000000081565b61034c600b81565b6040516101ae9190611c4e565b6101a4610dfa565b6101a461036f366004611c8f565b610fec565b6101a4610382366004611cbd565b6110b0565b61024b7f000000000000000000000000000000000000000000000000000000000000000081565b600060026000541415610422576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa1580156104b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d79190611ce4565b90506104e381856111ef565b6001600055949350505050565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa15801561055d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526105a39190810190611dc2565b905090565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610615573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a39190611e0b565b6000600260005414156106a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610419565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015610739573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075d9190611ce4565b905061076981846111ef565b60016000559392505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a39190611e24565b600060026000541415610875576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610419565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015610906573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092a9190611ce4565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192506000917f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156109bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e09190611e0b565b905060018111156109fb576109f882600183036111ef565b92505b5050600160005590565b600060026000541415610a74576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610419565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015610b05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b299190611ce4565b90506104e381856112db565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906370a0823190602401602060405180830381865afa158015610bc6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bea9190611e0b565b92915050565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa15801561055d573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166399530b066040518163ffffffff1660e01b8152600401602060405180830381865afa158015610615573d6000803e3d6000fd5b600060026000541415610d39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610419565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015610dca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dee9190611ce4565b905061076981846112db565b600060026000541415610e69576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610419565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015610efa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1e9190611ce4565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192506000917f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610fb0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd49190611e0b565b905060018111156109fb576109f882600183036112db565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015282811660248301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063dd62ed3e90604401602060405180830381865afa158015611085573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a99190611e0b565b9392505050565b60006002600054141561111f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610419565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa1580156111b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111d49190611ce4565b90506111e18186856113b4565b600160005595945050505050565b60006112c8837f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008560405160240161124a91815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f2e1a7d4d000000000000000000000000000000000000000000000000000000001790526000806114ca565b8060200190518101906110a99190611e0b565b60006112c8837f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008560405160240161133691815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fb6b55f25000000000000000000000000000000000000000000000000000000001790526001806114ca565b6040516024810183905273ffffffffffffffffffffffffffffffffffffffff84166044820152606481018290526000906114af9085907f0000000000000000000000000000000000000000000000000000000000000000907f000000000000000000000000000000000000000000000000000000000000000090608401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fe63697c8000000000000000000000000000000000000000000000000000000001790526000806114ca565b8060200190518101906114c29190611e0b565b949350505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff87811660048301526060916000918816906370a0823190602401602060405180830381865afa15801561153c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115609190611e0b565b905060003373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611634576040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a811660048301528816906370a0823190602401602060405180830381865afa15801561160d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116319190611e0b565b90505b8415611711576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301528981166044830152606482018490527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b1580156116f857600080fd5b505af115801561170c573d6000803e3d6000fd5b505050505b6117208989898986868a61180b565b925084156117ff576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301528981166044830152600160648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b1580156117e657600080fd5b505af11580156117fa573d6000803e3d6000fd5b505050505b50509695505050505050565b6040517f6ce4074a00000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636ce4074a906118a49033907f0000000000000000000000000000000000000000000000000000000000000000908a90600401611e47565b6000604051808303816000875af11580156118c3573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526119099190810190611dc2565b90503373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611a14576040517ffcb2ffbe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015288811660248301528781166044830152606482018690526084820185905283151560a48301527f0000000000000000000000000000000000000000000000000000000000000000169063fcb2ffbe9060c401600060405180830381600087803b1580156119f757600080fd5b505af1158015611a0b573d6000803e3d6000fd5b50505050611abe565b6040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015287811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b158015611aa557600080fd5b505af1158015611ab9573d6000803e3d6000fd5b505050505b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611aeb57600080fd5b50565b60008060408385031215611b0157600080fd5b823591506020830135611b1381611ac9565b809150509250929050565b60005b83811015611b39578181015183820152602001611b21565b83811115611b48576000848401525b50505050565b60008151808452611b66816020860160208601611b1e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006110a96020830184611b4e565b60008060408385031215611bbe57600080fd5b8235611bc981611ac9565b946020939093013593505050565b600080600060608486031215611bec57600080fd5b8335611bf781611ac9565b92506020840135611c0781611ac9565b929592945050506040919091013590565b600060208284031215611c2a57600080fd5b5035919050565b600060208284031215611c4357600080fd5b81356110a981611ac9565b6020810160108310611c89577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b60008060408385031215611ca257600080fd5b8235611cad81611ac9565b91506020830135611b1381611ac9565b600080600060608486031215611cd257600080fd5b833592506020840135611c0781611ac9565b600060208284031215611cf657600080fd5b81516110a981611ac9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff80841115611d4b57611d4b611d01565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611d9157611d91611d01565b81604052809350858152868686011115611daa57600080fd5b611db8866020830187611b1e565b5050509392505050565b600060208284031215611dd457600080fd5b815167ffffffffffffffff811115611deb57600080fd5b8201601f81018413611dfc57600080fd5b6114c284825160208401611d30565b600060208284031215611e1d57600080fd5b5051919050565b600060208284031215611e3657600080fd5b815160ff811681146110a957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff808616835280851660208401525060606040830152611e806060830184611b4e565b9594505050505056fea264697066735822122033e13e034e9252177496cd7811a06a1a2726295e09673092f9709b18d21a9aa964736f6c634300080a0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var YearnV2Adapter__factory = /** @class */ (function (_super) {
    __extends(YearnV2Adapter__factory, _super);
    function YearnV2Adapter__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    YearnV2Adapter__factory.prototype.deploy = function (_creditManager, _yVault, overrides) {
        return _super.prototype.deploy.call(this, _creditManager, _yVault, overrides || {});
    };
    YearnV2Adapter__factory.prototype.getDeployTransaction = function (_creditManager, _yVault, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _creditManager, _yVault, overrides || {});
    };
    YearnV2Adapter__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    YearnV2Adapter__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    YearnV2Adapter__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    YearnV2Adapter__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    YearnV2Adapter__factory.bytecode = _bytecode;
    YearnV2Adapter__factory.abi = _abi;
    return YearnV2Adapter__factory;
}(ethers_1.ContractFactory));
exports.YearnV2Adapter__factory = YearnV2Adapter__factory;