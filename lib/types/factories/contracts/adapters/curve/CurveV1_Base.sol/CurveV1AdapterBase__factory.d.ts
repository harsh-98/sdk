import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CurveV1AdapterBase, CurveV1AdapterBaseInterface } from "../../../../../contracts/adapters/curve/CurveV1_Base.sol/CurveV1AdapterBase";
declare type CurveV1AdapterBaseConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CurveV1AdapterBase__factory extends ContractFactory {
    constructor(...args: CurveV1AdapterBaseConstructorParams);
    deploy(_creditManager: string, _curvePool: string, _lp_token: string, _metapoolBase: string, _nCoins: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CurveV1AdapterBase>;
    getDeployTransaction(_creditManager: string, _curvePool: string, _lp_token: string, _metapoolBase: string, _nCoins: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CurveV1AdapterBase;
    connect(signer: Signer): CurveV1AdapterBase__factory;
    static readonly bytecode = "0x6102606040523480156200001257600080fd5b506040516200441338038062004413833981016040819052620000359162000b9a565b84846001600160a01b03821615806200005557506001600160a01b038116155b156200007457604051635919af9760e11b815260040160405180910390fd5b6001600160a01b038216608081905260408051632f7a188160e01b81529051632f7a1881916004808201926020929091908290030181865afa158015620000bf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e5919062000c01565b6001600160a01b0390811660a05290811660c05260016000558416151590506200012257604051635919af9760e11b815260040160405180910390fd5b608051604051630f67c5bd60e41b81526001600160a01b0385811660048301529091169063f67c5bd090602401602060405180830381865afa1580156200016d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000193919062000c26565b620001c157604051634c607af960e11b81526001600160a01b03841660048201526024015b60405180910390fd5b6001600160a01b038084166101e081905261020052821661022052610240819052620001ee600062000900565b6001600160a01b031660e05262000206600162000900565b6001600160a01b0316610100526200021f600262000900565b6001600160a01b03166101205262000238600362000900565b6001600160a01b031661014052620002516000620009f3565b6001600160a01b0316610160526200026a6001620009f3565b6001600160a01b031661018052620002836002620009f3565b6001600160a01b03166101a0526200029c6003620009f3565b6001600160a01b039081166101c05260e051161580620002c65750610100516001600160a01b0316155b15620002e557604051635919af9760e11b815260040160405180910390fd5b600281118015620003005750610120516001600160a01b0316155b156200031f57604051635919af9760e11b815260040160405180910390fd5b6003811180156200033a5750610140516001600160a01b0316155b156200035957604051635919af9760e11b815260040160405180910390fd5b60805160e051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa158015620003a6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003cc919062000c26565b620003fa5760e051604051634c607af960e11b81526001600160a01b039091166004820152602401620001b8565b60805161010051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa15801562000448573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200046e919062000c26565b6200049d5761010051604051634c607af960e11b81526001600160a01b039091166004820152602401620001b8565b6002811180156200051f575060805161012051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa158015620004f7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200051d919062000c26565b155b156200054f5761012051604051634c607af960e11b81526001600160a01b039091166004820152602401620001b8565b600381118015620005d1575060805161014051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa158015620005a9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005cf919062000c26565b155b15620006015761014051604051634c607af960e11b81526001600160a01b039091166004820152602401620001b8565b610160516001600160a01b0316158015906200068e575060805161016051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa15801562000666573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200068c919062000c26565b155b15620006be5761016051604051634c607af960e11b81526001600160a01b039091166004820152602401620001b8565b610180516001600160a01b0316158015906200074b575060805161018051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa15801562000723573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000749919062000c26565b155b156200077b5761018051604051634c607af960e11b81526001600160a01b039091166004820152602401620001b8565b6101a0516001600160a01b0316158015906200080857506080516101a051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa158015620007e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000806919062000c26565b155b1562000838576101a051604051634c607af960e11b81526001600160a01b039091166004820152602401620001b8565b6101c0516001600160a01b031615801590620008c557506080516101c051604051630f67c5bd60e41b81526001600160a01b03918216600482015291169063f67c5bd090602401602060405180830381865afa1580156200089d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620008c3919062000c26565b155b15620008f5576101c051604051634c607af960e11b81526001600160a01b039091166004820152602401620001b8565b505050505062000c66565b60c05160405163c661065760e01b8152600481018390526000916001600160a01b03169063c661065790602401602060405180830381865afa92505050801562000969575060408051601f3d908101601f19168201909252620009669181019062000c01565b60015b62000974576200097a565b92915050565b60c05160405163046e8dd760e31b8152600f84900b60048201526001600160a01b03909116906323746eb8906024015b602060405180830381865afa925050508015620009e6575060408051601f3d908101601f19168201909252620009e39181019062000c01565b60015b6200097457506000919050565b610220516000906001600160a01b03161562000a1457620009748262000ab6565b60c051604051630b9947eb60e41b8152600481018490526001600160a01b039091169063b9947eb090602401602060405180830381865afa92505050801562000a7c575060408051601f3d908101601f1916820190925262000a799181019062000c01565b60015b620009745760c051604051635b9cca9f60e11b8152600f84900b60048201526001600160a01b039091169063b739953e90602401620009aa565b60008162000aca5762000974600062000b0d565b610220516001600160a01b031663c661065762000ae960018562000c40565b6040518263ffffffff1660e01b8152600401620009aa91815260200190565b919050565b600081600f0b6000141562000b21575060e0515b81600f0b6001141562000b345750610100515b81600f0b6002141562000b475750610120515b81600f0b6003141562000b5a5750610140515b6001600160a01b03811662000b08576040516334769e6f60e21b815260040160405180910390fd5b80516001600160a01b038116811462000b0857600080fd5b600080600080600060a0868803121562000bb357600080fd5b62000bbe8662000b82565b945062000bce6020870162000b82565b935062000bde6040870162000b82565b925062000bee6060870162000b82565b9150608086015190509295509295909350565b60006020828403121562000c1457600080fd5b62000c1f8262000b82565b9392505050565b60006020828403121562000c3957600080fd5b5051919050565b60008282101562000c6157634e487b7160e01b600052601160045260246000fd5b500390565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516102405161357962000e9a600039600081816106b70152818161291a01528181612ad10152612beb015260006105380152600081816105cf01528181611d41015281816120b1015281816126990152612737015260006107ad0152600081816104f601526121b3015260008181610371015261218401526000818161055f01526121550152600081816105f601526121260152600081816107760152611f8b01526000818161045f0152611f5c01526000818161070e0152611f2d0152600081816103e50152611efe0152600081816106690152818161081a015281816108e70152818161097701528181610a6f01528181610afe01528181610b8f01528181610fa20152818161101a0152818161121c0152818161126401528181611311015281816113590152818161140a0152818161143f015281816117280152818161181f015281816118970152818161193c01528181611a0d01528181611a4201528181611add01528181611d8601528181611df301528181611e840152818161226a015281816124de0152612e44015260008181610486015281816123380152612eed01526000818161069001528181610d320152818161154a01528181611be701528181612029015281816122c001528181612534015281816125ce0152818161289001528181612e1501528181612f7d015261302b01526135796000f3fe608060405234801561001057600080fd5b50600436106103415760003560e01c806378aa73a4116101bd578063c6610657116100f9578063e2e7d264116100a2578063f446c1d01161007c578063f446c1d014610798578063f851a440146107a0578063fc0c546a146107a8578063fee3f7f9146107cf57600080fd5b8063e2e7d2641461074b578063ec026ca71461075e578063ef14101e1461077157600080fd5b8063d21220a7116100d3578063d21220a714610709578063dd62ed3e14610730578063ddca3f431461074357600080fd5b8063c6610657146106d9578063cc2b27d7146106e7578063ce30bbdb146106fa57600080fd5b8063b4b577ad11610166578063bb7b8b8011610140578063bb7b8b801461065c578063bd90df7014610664578063c12c21c01461068b578063c21ee162146106b257600080fd5b8063b4b577ad14610633578063b739953e1461063b578063b9947eb01461064e57600080fd5b80638ba51dfc116101975780638ba51dfc146105f157806395d89b4114610618578063a6417ed61461062057600080fd5b806378aa73a41461059c57806379bea664146105b757806382c63066146105ca57600080fd5b80632f7a18811161028c57806357d788751161023557806364a89bca1161020f57806364a89bca146105335780636e1d82711461055a57806370a082311461058157806376a2f0f01461059457600080fd5b806357d78875146104f15780635e0d443f1461051857806363543f061461052b57600080fd5b80633df02124116102665780633df02124146104c35780634903b0d1146104d65780635409491a146104e957600080fd5b80632f7a188114610481578063313ce567146104a857806333d2ebf2146104b057600080fd5b806318160ddd116102ee5780632081066c116102c85780632081066c1461043f57806323746eb81461044757806325be124e1461045a57600080fd5b806318160ddd1461040f5780631a4d01d2146104175780631af4de831461042c57600080fd5b806307211ef71161031f57806307211ef7146103cd5780630dfe1681146103e0578063140522881461040757600080fd5b8063065a80d814610346578063068711631461036c57806306fdde03146103b8575b600080fd5b6103596103543660046130a4565b6107d7565b6040519081526020015b60405180910390f35b6103937f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610363565b6103c0610973565b6040516103639190613139565b6103596103db36600461314c565b610a2b565b6103937f000000000000000000000000000000000000000000000000000000000000000081565b610359610afa565b610359610b8b565b61042a610425366004613188565b610bf8565b005b61042a61043a36600461314c565b610c90565b610359610f9e565b6103936104553660046130a4565b61100b565b6103937f000000000000000000000000000000000000000000000000000000000000000081565b6103937f000000000000000000000000000000000000000000000000000000000000000081565b610359611016565b61042a6104be3660046131ad565b611083565b61042a6104d13660046131d7565b611117565b6103596104e4366004613219565b6111ea565b610359611260565b6103937f000000000000000000000000000000000000000000000000000000000000000081565b61035961052636600461314c565b6112cd565b610359611355565b6103937f000000000000000000000000000000000000000000000000000000000000000081565b6103937f000000000000000000000000000000000000000000000000000000000000000081565b61035961058f366004613257565b6113c2565b61035961143b565b6105a4600281565b60405161ffff9091168152602001610363565b61042a6105c536600461314c565b6114a8565b6103937f000000000000000000000000000000000000000000000000000000000000000081565b6103937f000000000000000000000000000000000000000000000000000000000000000081565b6103c0611724565b61042a61062e3660046131d7565b611791565b61035961181b565b6103936106493660046130a4565b611888565b610393610649366004613219565b610359611893565b6103937f000000000000000000000000000000000000000000000000000000000000000081565b6103937f000000000000000000000000000000000000000000000000000000000000000081565b6103597f000000000000000000000000000000000000000000000000000000000000000081565b610393610455366004613219565b6103596106f5366004613274565b611900565b600360405161036391906132a0565b6103937f000000000000000000000000000000000000000000000000000000000000000081565b61035961073e3660046132e1565b6119bd565b610359611a3e565b610359610759366004613219565b611aab565b61042a61076c3660046131ad565b611b21565b6103937f000000000000000000000000000000000000000000000000000000000000000081565b610359611d82565b610393611def565b6103937f000000000000000000000000000000000000000000000000000000000000000081565b610359611e80565b6040517f4903b0d10000000000000000000000000000000000000000000000000000000081526fffffffffffffffffffffffffffffffff821660048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690634903b0d1906024015b602060405180830381865afa9250505080156108b1575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526108ae9181019061331a565b60015b610968576040517f065a80d8000000000000000000000000000000000000000000000000000000008152600f83900b60048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063065a80d8906024015b602060405180830381865afa158015610944573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610968919061331a565b92915050565b919050565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa1580156109e0573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a2691908101906133f4565b905090565b6040517f07211ef7000000000000000000000000000000000000000000000000000000008152600f84810b600483015283900b6024820152604481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906307211ef7906064015b602060405180830381865afa158015610acc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af0919061331a565b90505b9392505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663140522886040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a26919061331a565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b67573d6000803e3d6000fd5b60026000541415610c6a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026000908155610c7a83611eed565b9050610c8581611ff8565b505060016000555050565b60026000541415610cfd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610c61565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015610d8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db29190613445565b90506000610dbf85612115565b90506000610dcc85612115565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301529192506000918416906370a0823190602401602060405180830381865afa158015610e3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e62919061331a565b90506001811115610f90577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160006b033b2e3c9fd0803ce8000000610ea88784613462565b610eb291906134c6565b604051600f8a810b602483015289900b60448201526064810184905260848101829052909150610f8d908690869086907fa6417ed6000000000000000000000000000000000000000000000000000000009060a4015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915260018061221f565b50505b505060016000555050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632081066c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b67573d6000803e3d6000fd5b600061096882611eed565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b67573d6000803e3d6000fd5b600260005414156110f0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610c61565b6002600090815561110083611eed565b905061110d83828461259d565b5050600160005550565b60026000541415611184576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610c61565b6002600090815561119485611eed565b905060006111a185611eed565b9050610f9082826000368080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250600192508291506128479050565b6040517f4903b0d1000000000000000000000000000000000000000000000000000000008152600481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690634903b0d19060240161085a565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635409491a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b67573d6000803e3d6000fd5b6040517f5e0d443f000000000000000000000000000000000000000000000000000000008152600f84810b600483015283900b6024820152604481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635e0d443f90606401610aaf565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166363543f066040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b67573d6000803e3d6000fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906370a0823190602401610927565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166376a2f0f06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b67573d6000803e3d6000fd5b60026000541415611515576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610c61565b600260009081556040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa1580156115a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115ca9190613445565b905060006115d785611eed565b905060006115e485611eed565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301529192506000918416906370a0823190602401602060405180830381865afa158015611656573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061167a919061331a565b90506001811115610f90577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160006b033b2e3c9fd0803ce80000006116c08784613462565b6116ca91906134c6565b604051600f8a810b602483015289900b60448201526064810184905260848101829052909150610f8d908690869086907f3df02124000000000000000000000000000000000000000000000000000000009060a401610f08565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156109e0573d6000803e3d6000fd5b600260005414156117fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610c61565b6002600090815561180e85612115565b905060006111a185612115565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b4b577ad6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b67573d6000803e3d6000fd5b600061096882612115565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb7b8b806040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b67573d6000803e3d6000fd5b6040517fcc2b27d700000000000000000000000000000000000000000000000000000000815260048101839052600f82900b60248201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063cc2b27d7906044015b602060405180830381865afa158015611999573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af3919061331a565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015282811660248301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063dd62ed3e9060440161197c565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ddca3f436040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b67573d6000803e3d6000fd5b6040517fe2e7d264000000000000000000000000000000000000000000000000000000008152600481018290526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e2e7d26490602401610927565b60026000541415611b8e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610c61565b60026000908155611b9e83611eed565b6040517fe958b70400000000000000000000000000000000000000000000000000000000815233600482015290915060009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e958b70490602401602060405180830381865afa158015611c2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c529190613445565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192506000918416906370a0823190602401602060405180830381865afa158015611cc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ce8919061331a565b90506001811115611d76577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160006b033b2e3c9fd0803ce8000000611d2e8684613462565b611d3891906134c6565b9050611d7383857f0000000000000000000000000000000000000000000000000000000000000000611d6b8a8787612916565b60018061221f565b50505b50506001600055505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f446c1d06040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b67573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f851a4406040518163ffffffff1660e01b8152600401602060405180830381865afa158015611e5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a269190613445565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fee3f7f96040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b67573d6000803e3d6000fd5b600081600f0b60001415611f1e57507f00000000000000000000000000000000000000000000000000000000000000005b81600f0b60011415611f4d57507f00000000000000000000000000000000000000000000000000000000000000005b81600f0b60021415611f7c57507f00000000000000000000000000000000000000000000000000000000000000005b81600f0b60031415611fab57507f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff811661096e576040517fd1da79bc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa158015612085573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120a99190613445565b9050612110817f0000000000000000000000000000000000000000000000000000000000000000846000368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250925082915061221f9050565b505050565b600081600f0b6000141561214657507f00000000000000000000000000000000000000000000000000000000000000005b81600f0b6001141561217557507f00000000000000000000000000000000000000000000000000000000000000005b81600f0b600214156121a457507f00000000000000000000000000000000000000000000000000000000000000005b81600f0b60031415611fab57507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff811661096e576040517fd1da79bc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060821561231d576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116602483015287811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b15801561230457600080fd5b505af1158015612318573d6000803e3d6000fd5b505050505b6000803373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614612484576040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a811660048301528916906370a0823190602401602060405180830381865afa1580156123c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123ed919061331a565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b81166004830152919350908816906370a0823190602401602060405180830381865afa15801561245d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612481919061331a565b90505b6124938989898986868a612dd5565b92508415612591576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116602483015289811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b15801561257857600080fd5b505af115801561258c573d6000803e3d6000fd5b505050505b50509695505050505050565b6040517fe958b7040000000000000000000000000000000000000000000000000000000081523360048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063e958b70490602401602060405180830381865afa15801561262a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061264e9190613445565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80831660048301529192506000917f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156126e0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612704919061331a565b90506001811115612840577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161283e827f0000000000000000000000000000000000000000000000000000000000000000867f1a4d01d200000000000000000000000000000000000000000000000000000000858a6b033b2e3c9fd0803ce80000006127918b84613462565b61279b91906134c6565b6040516024810193909352600f9190910b60448301526064820152608401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915260008061221f565b505b5050505050565b6040517fe958b70400000000000000000000000000000000000000000000000000000000815233600482015260609060009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e958b70490602401602060405180830381865afa1580156128d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128fb9190613445565b905061290b81888888888861221f565b979650505050505050565b60607f000000000000000000000000000000000000000000000000000000000000000060021415612acf5783600f0b600014612a0c576040516000602482015260448101849052606481018390527f0b4c7e4d00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612ac8565b6040516024810184905260006044820152606481018390527f0b4c7e4d00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091525b9050610af3565b7f000000000000000000000000000000000000000000000000000000000000000060031415612be95783600f0b600014612ba05783600f0b600114612b5757604051600060248201819052604482015260648101849052608481018390527f4515cef3000000000000000000000000000000000000000000000000000000009060a40161298a565b604051600060248201819052604482018590526064820152608481018390527f4515cef3000000000000000000000000000000000000000000000000000000009060a40161298a565b604051602481018490526000604482018190526064820152608481018390527f4515cef3000000000000000000000000000000000000000000000000000000009060a401612a4a565b7f000000000000000000000000000000000000000000000000000000000000000060041415612d735783600f0b600014612d235783600f0b600114612cd35783600f0b600214612c83576040516000602482018190526044820181905260648201526084810184905260a481018390527f029b2f34000000000000000000000000000000000000000000000000000000009060c40161298a565b6040516000602482018190526044820181905260648201859052608482015260a481018390527f029b2f34000000000000000000000000000000000000000000000000000000009060c40161298a565b6040516000602482018190526044820185905260648201819052608482015260a481018390527f029b2f34000000000000000000000000000000000000000000000000000000009060c40161298a565b6040516024810184905260006044820181905260648201819052608482015260a481018390527f029b2f34000000000000000000000000000000000000000000000000000000009060c401612a4a565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f496e636f7272656374206e436f696e73000000000000000000000000000000006044820152606401610c61565b6040517f6ce4074a00000000000000000000000000000000000000000000000000000000815260609073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636ce4074a90612e6e9033907f0000000000000000000000000000000000000000000000000000000000000000908a90600401613501565b6000604051808303816000875af1158015612e8d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052612ed391908101906133f4565b90503373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614612fde576040517ffcb2ffbe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015288811660248301528781166044830152606482018690526084820185905283151560a48301527f0000000000000000000000000000000000000000000000000000000000000000169063fcb2ffbe9060c401600060405180830381600087803b158015612fc157600080fd5b505af1158015612fd5573d6000803e3d6000fd5b5050505061290b565b6040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015287811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b15801561306f57600080fd5b505af1158015613083573d6000803e3d6000fd5b50505050979650505050505050565b8035600f81900b811461096e57600080fd5b6000602082840312156130b657600080fd5b610af382613092565b60005b838110156130da5781810151838201526020016130c2565b838111156130e9576000848401525b50505050565b600081518084526131078160208601602086016130bf565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610af360208301846130ef565b60008060006060848603121561316157600080fd5b61316a84613092565b925061317860208501613092565b9150604084013590509250925092565b60008060006060848603121561319d57600080fd5b8335925061317860208501613092565b600080604083850312156131c057600080fd5b6131c983613092565b946020939093013593505050565b600080600080608085870312156131ed57600080fd5b6131f685613092565b935061320460208601613092565b93969395505050506040820135916060013590565b60006020828403121561322b57600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461325457600080fd5b50565b60006020828403121561326957600080fd5b8135610af381613232565b6000806040838503121561328757600080fd5b8235915061329760208401613092565b90509250929050565b60208101601083106132db577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b600080604083850312156132f457600080fd5b82356132ff81613232565b9150602083013561330f81613232565b809150509250929050565b60006020828403121561332c57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff8084111561337d5761337d613333565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156133c3576133c3613333565b816040528093508581528686860111156133dc57600080fd5b6133ea8660208301876130bf565b5050509392505050565b60006020828403121561340657600080fd5b815167ffffffffffffffff81111561341d57600080fd5b8201601f8101841361342e57600080fd5b61343d84825160208401613362565b949350505050565b60006020828403121561345757600080fd5b8151610af381613232565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156134c1577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500290565b6000826134fc577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600073ffffffffffffffffffffffffffffffffffffffff80861683528085166020840152506060604083015261353a60608301846130ef565b9594505050505056fea26469706673582212209e5ba557a52ecb1d1fa62602ffbbe547067fa640abd74d7ba9eb41f0c676c31e64736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
        type: string;
        stateMutability?: undefined;
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
    static createInterface(): CurveV1AdapterBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CurveV1AdapterBase;
}
export {};
