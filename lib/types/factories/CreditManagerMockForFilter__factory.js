"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
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
exports.CreditManagerMockForFilter__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
                name: "creditAccount",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "checkAndEnableToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "creditAccount",
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
                name: "amountIn",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256",
            },
        ],
        name: "checkCollateralChange",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_creditFilterAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_underlyingToken",
                type: "address",
            },
        ],
        name: "connectFilter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "feeInterest",
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
        name: "feeLiquidation",
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
        name: "feeSuccess",
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
        name: "healthFactor",
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
                name: "creditAccount",
                type: "address",
            },
        ],
        name: "initEnabledTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "liquidationDiscount",
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
        name: "maxLeverageFactor",
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
        name: "minHealthFactor",
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
        name: "poolService",
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
                name: "_value",
                type: "uint256",
            },
        ],
        name: "setFeeLiquidation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "newValue",
                type: "uint256",
            },
        ],
        name: "setLinearCumulative",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "setLiquidationDiscount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "setMaxLeverageFactor",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "updateUnderlyingTokenLiquidationThreshold",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610939806100206000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80635e0b63d3116100ad578063b2c53a6c11610071578063b2c53a6c1461039e578063c5e86154146103bc578063e1b4264c146103ea578063e1c8ef0d14610408578063e54fe9c8146104a057610121565b80635e0b63d3146102b25780637629da6f146102d05780638053fcbe146102fe5780639e52f12e1461031c578063aeb1e31c1461033a57610121565b80632495a599116100f45780632495a599146101be5780633915ffaa146101f2578063406318281461021057806351e3f1601461021a578063570a7af21461027e57610121565b80630fce70fb14610126578063115c2ec714610144578063134b4ac51461017257806322841f01146101a0575b600080fd5b61012e6104e4565b6040518082815260200191505060405180910390f35b6101706004803603602081101561015a57600080fd5b81019080803590602001909291905050506104ee565b005b61019e6004803603602081101561018857600080fd5b81019080803590602001909291905050506104f8565b005b6101a8610502565b6040518082815260200191505060405180910390f35b6101c6610508565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101fa61052c565b6040518082815260200191505060405180910390f35b610218610532565b005b61027c6004803603604081101561023057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105b6565b005b61028661067b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102ba610683565b6040518082815260200191505060405180910390f35b6102fc600480360360208110156102e657600080fd5b8101908080359060200190929190505050610689565b005b610306610693565b6040518082815260200191505060405180910390f35b610324610699565b6040518082815260200191505060405180910390f35b61039c6004803603604081101561035057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061069f565b005b6103a6610751565b6040518082815260200191505060405180910390f35b6103e8600480360360208110156103d257600080fd5b8101908080359060200190929190505050610757565b005b6103f2610761565b6040518082815260200191505060405180910390f35b61049e600480360360a081101561041e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050610767565b005b6104e2600480360360208110156104b657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061085d565b005b6000600154905090565b8060068190555050565b8060018190555050565b60025481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663406318286040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561059c57600080fd5b505af11580156105b0573d6000803e3d6000fd5b50505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166351e3f16083836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b15801561065f57600080fd5b505af1158015610673573d6000803e3d6000fd5b505050505050565b600030905090565b60055481565b8060088190555050565b60075481565b60045481565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506103e86004819055506103e86005819055506103e86006819055506103e8600781905550612d506009819055505050565b60085481565b8060078190555050565b60095481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e1c8ef0d86868686866040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200195505050505050600060405180830381600087803b15801561083e57600080fd5b505af1158015610852573d6000803e3d6000fd5b505050505050505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e54fe9c8826040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b1580156108e857600080fd5b505af11580156108fc573d6000803e3d6000fd5b505050505056fea2646970667358221220fefb1788f8bd16d980c7330c51b56dba09fd53500e35c59550f274f9afa2d72564736f6c63430007060033";
var CreditManagerMockForFilter__factory = /** @class */ (function (_super) {
    __extends(CreditManagerMockForFilter__factory, _super);
    function CreditManagerMockForFilter__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    CreditManagerMockForFilter__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    CreditManagerMockForFilter__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    CreditManagerMockForFilter__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    CreditManagerMockForFilter__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    CreditManagerMockForFilter__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    CreditManagerMockForFilter__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    CreditManagerMockForFilter__factory.bytecode = _bytecode;
    CreditManagerMockForFilter__factory.abi = _abi;
    return CreditManagerMockForFilter__factory;
}(ethers_1.ContractFactory));
exports.CreditManagerMockForFilter__factory = CreditManagerMockForFilter__factory;