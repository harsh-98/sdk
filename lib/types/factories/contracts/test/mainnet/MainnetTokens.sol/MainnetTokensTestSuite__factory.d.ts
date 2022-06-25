import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MainnetTokensTestSuite, MainnetTokensTestSuiteInterface } from "../../../../../contracts/test/mainnet/MainnetTokens.sol/MainnetTokensTestSuite";
declare type MainnetTokensTestSuiteConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MainnetTokensTestSuite__factory extends ContractFactory {
    constructor(...args: MainnetTokensTestSuiteConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MainnetTokensTestSuite>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MainnetTokensTestSuite;
    connect(signer: Signer): MainnetTokensTestSuite__factory;
    static readonly bytecode = "0x6080604052600080546001600160a01b031916737109709ecfa91a80626ff3989d68f67f5b1dd12d17905534801561003657600080fd5b506040805160608101825260006020820181815273111111111117dc0aa78b770fa6a738034120c30293830193909352918152905b600181101561010d578181600181106100865761008661012a565b602002015160200151600260008484600181106100a5576100a561012a565b60200201515160298111156100bc576100bc610114565b60298111156100cd576100cd610114565b8152602081019190915260400160002080546001600160a01b0319166001600160a01b03929092169190911790558061010581610140565b91505061006b565b5050610169565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600060001982141561016257634e487b7160e01b600052601160045260246000fd5b5060010190565b610858806101786000396000f3fe60806040526004361061007b5760003560e01c806388f776a21161004e57806388f776a21461016a578063b00173211461018a578063b36ba208146101aa578063d051a622146101b257600080fd5b80634b57b0be146100805780636a72bde7146100d757806388327863146100f95780638856c0d614610127575b600080fd5b34801561008c57600080fd5b506001546100ad9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100e357600080fd5b506100f76100f23660046106a0565b6101d2565b005b34801561010557600080fd5b506101196101143660046106eb565b610331565b6040519081526020016100ce565b34801561013357600080fd5b506100ad61014236600461071e565b60026020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b34801561017657600080fd5b506100f7610185366004610739565b610404565b34801561019657600080fd5b506100f76101a536600461077c565b610435565b6100f761050e565b3480156101be57600080fd5b506101196101cd366004610739565b61058c565b6000546040517fca669fa700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301529091169063ca669fa790602401600060405180830381600087803b15801561023f57600080fd5b505af1158015610253573d6000803e3d6000fd5b505050506002600085602981111561026d5761026d6107b8565b602981111561027e5761027e6107b8565b8152602081019190915260409081016000205490517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490529091169063095ea7b3906044016020604051808303816000875af1158015610306573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032a91906107e7565b5050505050565b600060026000846029811115610349576103496107b8565b602981111561035a5761035a6107b8565b8152602081019190915260409081016000205490517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152909116906370a0823190602401602060405180830381865afa1580156103d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103fd9190610809565b9392505050565b6104308383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101d2565b505050565b6002600084602981111561044b5761044b6107b8565b602981111561045c5761045c6107b8565b8152602081019190915260409081016000205490517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490529091169063a9059cbb906044016020604051808303816000875af11580156104e4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050891906107e7565b50505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561057857600080fd5b505af115801561032a573d6000803e3d6000fd5b6000600260008560298111156105a4576105a46107b8565b60298111156105b5576105b56107b8565b8152602081019190915260409081016000205490517fdd62ed3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015284811660248301529091169063dd62ed3e90604401602060405180830381865afa15801561063c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106609190610809565b949350505050565b8035602a811061067757600080fd5b919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461067757600080fd5b600080600080608085870312156106b657600080fd5b6106bf85610668565b93506106cd6020860161067c565b92506106db6040860161067c565b9396929550929360600135925050565b600080604083850312156106fe57600080fd5b61070783610668565b91506107156020840161067c565b90509250929050565b60006020828403121561073057600080fd5b6103fd82610668565b60008060006060848603121561074e57600080fd5b61075784610668565b92506107656020850161067c565b91506107736040850161067c565b90509250925092565b60008060006060848603121561079157600080fd5b61079a84610668565b92506107a86020850161067c565b9150604084013590509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000602082840312156107f957600080fd5b815180151581146103fd57600080fd5b60006020828403121561081b57600080fd5b505191905056fea2646970667358221220da619631ea2499d5ec41d8d2fd4c7f2f06dc4e462100da6a8514f6e7b0f4d2e964736f6c634300080a0033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): MainnetTokensTestSuiteInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MainnetTokensTestSuite;
}
export {};
