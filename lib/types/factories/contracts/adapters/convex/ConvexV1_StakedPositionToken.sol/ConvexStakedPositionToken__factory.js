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
exports.ConvexStakedPositionToken__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_pool",
                type: "address",
            },
            {
                internalType: "address",
                name: "_lptoken",
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
        name: "allowance",
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
        inputs: [],
        name: "underlying",
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
];
var _bytecode = "0x60e06040523480156200001157600080fd5b5060405162000b0f38038062000b0f8339810160408190526200003491620002c1565b80816001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa15801562000074573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200009e919081019062000342565b604051602001620000b09190620003fa565b604051602081830303815290604052826001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015620000fe573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262000128919081019062000342565b6040516020016200013a919062000441565b604051602081830303815290604052836001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000188573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001ae91906200046e565b8151620001c3906000906020850190620001fe565b508251620001d9906001906020860190620001fe565b5060ff1660a05250506001600160a01b039081166080529190911660c05250620004d7565b8280546200020c906200049a565b90600052602060002090601f0160209004810192826200023057600085556200027b565b82601f106200024b57805160ff19168380011785556200027b565b828001600101855582156200027b579182015b828111156200027b5782518255916020019190600101906200025e565b50620002899291506200028d565b5090565b5b808211156200028957600081556001016200028e565b80516001600160a01b0381168114620002bc57600080fd5b919050565b60008060408385031215620002d557600080fd5b620002e083620002a4565b9150620002f060208401620002a4565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200032c57818101518382015260200162000312565b838111156200033c576000848401525b50505050565b6000602082840312156200035557600080fd5b81516001600160401b03808211156200036d57600080fd5b818401915084601f8301126200038257600080fd5b815181811115620003975762000397620002f9565b604051601f8201601f19908116603f01168101908382118183101715620003c257620003c2620002f9565b81604052828152876020848701011115620003dc57600080fd5b620003ef8360208301602088016200030f565b979650505050505050565b7f436f6e766578205374616b656420506f736974696f6e20000000000000000000815260008251620004348160178501602087016200030f565b9190910160170192915050565b6273746b60e81b815260008251620004618160038501602087016200030f565b9190910160030192915050565b6000602082840312156200048157600080fd5b815160ff811681146200049357600080fd5b9392505050565b600181811c90821680620004af57607f821691505b60208210811415620004d157634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c0516105fa62000515600039600081816101170152610380015260006101900152600081816101c901526102a601526105fa6000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c8063313ce5671161008157806395d89b411161005b57806395d89b41146101fe578063a9059cbb146100ec578063dd62ed3e1461020657600080fd5b8063313ce5671461018b5780636f307dc3146101c457806370a08231146101eb57600080fd5b806316f0115b116100b257806316f0115b1461011257806318160ddd1461015e57806323b872dd1461017457600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d6610214565b6040516100e39190610400565b60405180910390f35b6101026100fa36600461049c565b600092915050565b60405190151581526020016100e3565b6101397f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e3565b6101666102a2565b6040519081526020016100e3565b6101026101823660046104c6565b60009392505050565b6101b27f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016100e3565b6101397f000000000000000000000000000000000000000000000000000000000000000081565b6101666101f9366004610502565b610338565b6100d66103f3565b6101666100fa366004610524565b6001805461022190610557565b80601f016020809104026020016040519081016040528092919081815260200182805461024d90610557565b801561029a5780601f1061026f5761010080835404028352916020019161029a565b820191906000526020600020905b81548152906001019060200180831161027d57829003601f168201915b505050505081565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561030f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033391906105ab565b905090565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906370a0823190602401602060405180830381865afa1580156103c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ed91906105ab565b92915050565b6000805461022190610557565b600060208083528351808285015260005b8181101561042d57858101830151858201604001528201610411565b8181111561043f576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461049757600080fd5b919050565b600080604083850312156104af57600080fd5b6104b883610473565b946020939093013593505050565b6000806000606084860312156104db57600080fd5b6104e484610473565b92506104f260208501610473565b9150604084013590509250925092565b60006020828403121561051457600080fd5b61051d82610473565b9392505050565b6000806040838503121561053757600080fd5b61054083610473565b915061054e60208401610473565b90509250929050565b600181811c9082168061056b57607f821691505b602082108114156105a5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6000602082840312156105bd57600080fd5b505191905056fea264697066735822122080c91330bf011c6e24917ab905a827509aad95452d8cf66cb3d5ec619b3c29c764736f6c634300080a0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ConvexStakedPositionToken__factory = /** @class */ (function (_super) {
    __extends(ConvexStakedPositionToken__factory, _super);
    function ConvexStakedPositionToken__factory() {
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
    ConvexStakedPositionToken__factory.prototype.deploy = function (_pool, _lptoken, overrides) {
        return _super.prototype.deploy.call(this, _pool, _lptoken, overrides || {});
    };
    ConvexStakedPositionToken__factory.prototype.getDeployTransaction = function (_pool, _lptoken, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _pool, _lptoken, overrides || {});
    };
    ConvexStakedPositionToken__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ConvexStakedPositionToken__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ConvexStakedPositionToken__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ConvexStakedPositionToken__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ConvexStakedPositionToken__factory.bytecode = _bytecode;
    ConvexStakedPositionToken__factory.abi = _abi;
    return ConvexStakedPositionToken__factory;
}(ethers_1.ContractFactory));
exports.ConvexStakedPositionToken__factory = ConvexStakedPositionToken__factory;