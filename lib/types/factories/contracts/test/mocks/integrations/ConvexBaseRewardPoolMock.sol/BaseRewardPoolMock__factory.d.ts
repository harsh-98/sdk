import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BaseRewardPoolMock, BaseRewardPoolMockInterface } from "../../../../../../contracts/test/mocks/integrations/ConvexBaseRewardPoolMock.sol/BaseRewardPoolMock";
declare type BaseRewardPoolMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BaseRewardPoolMock__factory extends ContractFactory {
    constructor(...args: BaseRewardPoolMockConstructorParams);
    deploy(pid_: BigNumberish, stakingToken_: string, rewardToken_: string, operator_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BaseRewardPoolMock>;
    getDeployTransaction(pid_: BigNumberish, stakingToken_: string, rewardToken_: string, operator_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BaseRewardPoolMock;
    connect(signer: Signer): BaseRewardPoolMock__factory;
    static readonly bytecode = "0x6080604052600080546001600160a01b031916737109709ecfa91a80626ff3989d68f67f5b1dd12d17815560068190556007819055600a819055600b819055600c81905560128190556013553480156200005857600080fd5b5060405162001ed238038062001ed28339810160408190526200007b91620000e1565b600593909355600280546001600160a01b03199081166001600160a01b039485161790915560018054821692841692909217909155600380549091169190921617905562000135565b80516001600160a01b0381168114620000dc57600080fd5b919050565b60008060008060808587031215620000f857600080fd5b845193506200010a60208601620000c4565b92506200011a60408601620000c4565b91506200012a60608601620000c4565b905092959194509250565b611d8d80620001456000396000f3fe608060405234801561001057600080fd5b50600436106102765760003560e01c80637050ccd911610160578063a694fc3a116100d8578063df136d651161008c578063f106845411610071578063f10684541461050a578063f14faf6f146103c2578063f7c618c11461051357600080fd5b8063df136d65146104f8578063ebe2b12b1461050157600080fd5b8063c8f33c91116100bd578063c8f33c91146104df578063cd3daf9d146104e8578063d55a23f4146104f057600080fd5b8063a694fc3a146104b9578063c32e7202146104cc57600080fd5b806380faa57d1161012f5780638dcb4061116101145780638dcb406114610495578063901a7d531461049d5780639b7ccf4c146104a657600080fd5b806380faa57d1461046d5780638b8763471461047557600080fd5b80637050ccd9146103fb57806370a082311461040e57806372f702f3146104445780637b0a47ee1461046457600080fd5b806338d07436116101f3578063570ca735116101c25780635e43c47b116101a75780635e43c47b146103d657806363d38c3b146103e95780636c8bcee8146103f257600080fd5b8063570ca735146103a2578063590a41f5146103c257600080fd5b806338d07436146103615780633d18b9121461037457806340c354461461037c57806349f039a21461038f57600080fd5b80630fb5a6b41161024a5780631c1c6fe51161022f5780631c1c6fe514610322578063262d3d6d146103355780632ee409081461033e57600080fd5b80630fb5a6b41461031057806318160ddd1461031a57600080fd5b80628cc2621461027b5780630569d388146102a15780630700037d146102ab5780630f4ef8a6146102cb575b600080fd5b61028e610289366004611a42565b610533565b6040519081526020015b60405180910390f35b6102a96105cc565b005b61028e6102b9366004611a42565b600f6020526000908152604090205481565b6004546102eb9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610298565b61028e62093a8081565b600d5461028e565b6102a9610330366004611a6d565b6105da565b61028e600c5481565b61035161034c366004611a8a565b6105f8565b6040519015158152602001610298565b61035161036f366004611ab6565b61087f565b610351610aa7565b6102eb61038a366004611ae6565b610abc565b6102a961039d366004611a6d565b610af3565b6003546102eb9073ffffffffffffffffffffffffffffffffffffffff1681565b6103516103d0366004611ae6565b50600190565b6103516103e4366004611a42565b610b0d565b61028e600a5481565b61028e61033e81565b610351610409366004611aff565b610c07565b61028e61041c366004611a42565b73ffffffffffffffffffffffffffffffffffffffff1660009081526010602052604090205490565b6002546102eb9073ffffffffffffffffffffffffffffffffffffffff1681565b61028e60075481565b61028e610e88565b61028e610483366004611a42565b600e6020526000908152604090205481565b610351610e9b565b61028e600b5481565b6102a96104b4366004611ae6565b610f46565b6103516104c7366004611ae6565b61113f565b6103516104da366004611ab6565b611378565b61028e60085481565b60095461028e565b60115461028e565b61028e60095481565b61028e60065481565b61028e60055481565b6001546102eb9073ffffffffffffffffffffffffffffffffffffffff1681565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600f6020908152604080832054600e9092528220546105c691906105c090670de0b6b3a7640000906105ba9061058e9061058860095490565b9061156e565b73ffffffffffffffffffffffffffffffffffffffff881660009081526010602052604090205490611581565b9061158d565b90611599565b92915050565b6105d8601160006119ee565b565b336000908152601060205260409020546105f4908261087f565b5050565b60008273ffffffffffffffffffffffffffffffffffffffff8116156106595761062081610533565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600f6020908152604080832093909355600954600e909152919020555b600083116106c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f526577617264506f6f6c203a2043616e6e6f74207374616b652030000000000060448201526064015b60405180910390fd5b60005b60115481101561079057601181815481106106e8576106e8611b2d565b6000918252602090912001546040517fadc9772e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8781166004830152602482018790529091169063adc9772e90604401600060405180830381600087803b15801561076557600080fd5b505af1158015610779573d6000803e3d6000fd5b50505050808061078890611b8b565b9150506106cb565b50600d5461079e9084611599565b600d5573ffffffffffffffffffffffffffffffffffffffff84166000908152601060205260409020546107d19084611599565b73ffffffffffffffffffffffffffffffffffffffff80861660009081526010602052604090209190915560025461080b91163330866115a5565b8373ffffffffffffffffffffffffffffffffffffffff166013547e12ea37eafadc86c304798c357ee0b9923724f92be4e45c4796ccf0e33f84ce8560405161085591815260200190565b60405180910390a36001601360008282546108709190611bc4565b90915550600195945050505050565b60003380156108ca5761089181610533565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600f6020908152604080832093909355600954600e909152919020555b60008411610934576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f526577617264506f6f6c203a2043616e6e6f742077697468647261772030000060448201526064016106bf565b60005b6011548110156109fa576011818154811061095457610954611b2d565b6000918252602090912001546040517ff3fef3a30000000000000000000000000000000000000000000000000000000081523360048201526024810187905273ffffffffffffffffffffffffffffffffffffffff9091169063f3fef3a390604401600060405180830381600087803b1580156109cf57600080fd5b505af11580156109e3573d6000803e3d6000fd5b5050505080806109f290611b8b565b915050610937565b50600d54610a08908561156e565b600d5533600090815260106020526040902054610a25908561156e565b33600081815260106020526040902091909155600254610a5e9173ffffffffffffffffffffffffffffffffffffffff9091169086611687565b8215610a7157610a6f336001610c07565b505b6013546040518581523391907f5512f168a2a6322c28d70f2b2811c8857ea8b1f256d7be8ee8ef770665c3f96290602001610855565b6000610ab4336001610c07565b506001905090565b60118181548110610acc57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b336000908152601060205260409020546105f49082611378565b600073ffffffffffffffffffffffffffffffffffffffff8216610b8c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f217265776172642073657474696e67000000000000000000000000000000000060448201526064016106bf565b5060118054600180820183556000929092527f31ecc21a745e3968a04e9570e4425bc18fa8019c68028196b546d1669c200c680180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff939093169290921790915590565b60008273ffffffffffffffffffffffffffffffffffffffff811615610c6857610c2f81610533565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600f6020908152604080832093909355600954600e909152919020555b6000610c7385610533565b90508015610d495773ffffffffffffffffffffffffffffffffffffffff8086166000908152600f6020526040812055600154610cb191168683611687565b6003546005546040517f71192b17000000000000000000000000000000000000000000000000000000008152600481019190915273ffffffffffffffffffffffffffffffffffffffff878116602483015260448201849052909116906371192b1790606401600060405180830381600087803b158015610d3057600080fd5b505af1158015610d44573d6000803e3d6000fd5b505050505b8315610e125760005b601154811015610e105760118181548110610d6f57610d6f611b2d565b6000918252602090912001546040517fc00007b000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff88811660048301529091169063c00007b090602401600060405180830381600087803b158015610de557600080fd5b505af1158015610df9573d6000803e3d6000fd5b505050508080610e0890611b8b565b915050610d52565b505b8473ffffffffffffffffffffffffffffffffffffffff166013547fa7283f521536f3db5cd5c50a1f053bbba463b20de118ee0f9dd4c3ff2bc9532f83604051610e5d91815260200190565b60405180910390a3600160136000828254610e789190611bc4565b9091555060019695505050505050565b6000610e96426006546116e2565b905090565b6002546040517f70a08231000000000000000000000000000000000000000000000000000000008152336004820152600091829173ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015610f0e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f329190611bdc565b9050610f3d8161113f565b50600191505090565b600054600154604080517f07546172000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9384169363ca669fa793169163075461729160048083019260209291908290030181865afa158015610fc0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe49190611bf5565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602401600060405180830381600087803b15801561104a57600080fd5b505af115801561105e573d6000803e3d6000fd5b50506001546040517f40c10f190000000000000000000000000000000000000000000000000000000081523060048201526024810185905273ffffffffffffffffffffffffffffffffffffffff90911692506340c10f1991506044016020604051808303816000875af11580156110d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110fd9190611c12565b50600d541561113c57600d5461111b82670de0b6b3a7640000611c2f565b6111259190611c6c565b600960008282546111369190611bc4565b90915550505b50565b600033801561118a5761115181610533565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600f6020908152604080832093909355600954600e909152919020555b600083116111f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f526577617264506f6f6c203a2043616e6e6f74207374616b652030000000000060448201526064016106bf565b60005b6011548110156112ba576011818154811061121457611214611b2d565b6000918252602090912001546040517fadc9772e0000000000000000000000000000000000000000000000000000000081523360048201526024810186905273ffffffffffffffffffffffffffffffffffffffff9091169063adc9772e90604401600060405180830381600087803b15801561128f57600080fd5b505af11580156112a3573d6000803e3d6000fd5b5050505080806112b290611b8b565b9150506111f7565b50600d546112c89084611599565b600d55336000908152601060205260409020546112e59084611599565b3360008181526010602052604090209190915560025461131f9173ffffffffffffffffffffffffffffffffffffffff9091169030866115a5565b6013546040518481523391907e12ea37eafadc86c304798c357ee0b9923724f92be4e45c4796ccf0e33f84ce9060200160405180910390a360016013600082825461136a9190611bc4565b909155506001949350505050565b60003380156113c35761138a81610533565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600f6020908152604080832093909355600954600e909152919020555b60005b60115481101561148957601181815481106113e3576113e3611b2d565b6000918252602090912001546040517ff3fef3a30000000000000000000000000000000000000000000000000000000081523360048201526024810187905273ffffffffffffffffffffffffffffffffffffffff9091169063f3fef3a390604401600060405180830381600087803b15801561145e57600080fd5b505af1158015611472573d6000803e3d6000fd5b50505050808061148190611b8b565b9150506113c6565b50600d54611497908561156e565b600d55336000908152601060205260409020546114b4908561156e565b33600081815260106020526040908190209290925560035460055492517f14cd70e4000000000000000000000000000000000000000000000000000000008152600481019390935260248301879052604483019190915273ffffffffffffffffffffffffffffffffffffffff16906314cd70e490606401600060405180830381600087803b15801561154557600080fd5b505af1158015611559573d6000803e3d6000fd5b505050508215610a7157610a6f336001610c07565b600061157a8284611ca7565b9392505050565b600061157a8284611c2f565b600061157a8284611c6c565b600061157a8284611bc4565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526116819085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526116f8565b50505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526116dd9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115ff565b505050565b60008183106116f1578161157a565b5090919050565b600061175a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166118049092919063ffffffff16565b8051909150156116dd57808060200190518101906117789190611c12565b6116dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106bf565b6060611813848460008561181b565b949350505050565b6060824710156118ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106bf565b843b611915576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106bf565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161193e9190611cea565b60006040518083038185875af1925050503d806000811461197b576040519150601f19603f3d011682016040523d82523d6000602084013e611980565b606091505b509150915061199082828661199b565b979650505050505050565b606083156119aa57508161157a565b8251156119ba5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106bf9190611d06565b508054600082559060005260206000209081019061113c91905b80821115611a1c5760008155600101611a08565b5090565b73ffffffffffffffffffffffffffffffffffffffff8116811461113c57600080fd5b600060208284031215611a5457600080fd5b813561157a81611a20565b801515811461113c57600080fd5b600060208284031215611a7f57600080fd5b813561157a81611a5f565b60008060408385031215611a9d57600080fd5b8235611aa881611a20565b946020939093013593505050565b60008060408385031215611ac957600080fd5b823591506020830135611adb81611a5f565b809150509250929050565b600060208284031215611af857600080fd5b5035919050565b60008060408385031215611b1257600080fd5b8235611b1d81611a20565b91506020830135611adb81611a5f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611bbd57611bbd611b5c565b5060010190565b60008219821115611bd757611bd7611b5c565b500190565b600060208284031215611bee57600080fd5b5051919050565b600060208284031215611c0757600080fd5b815161157a81611a20565b600060208284031215611c2457600080fd5b815161157a81611a5f565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611c6757611c67611b5c565b500290565b600082611ca2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600082821015611cb957611cb9611b5c565b500390565b60005b83811015611cd9578181015183820152602001611cc1565b838111156116815750506000910152565b60008251611cfc818460208701611cbe565b9190910192915050565b6020815260008251806020840152611d25816040850160208701611cbe565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220f34e4f307e9c8c9b74d6ef0937c3fa476da360d2853083f7e31cbd93d6136a3364736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
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
        anonymous?: undefined;
    })[];
    static createInterface(): BaseRewardPoolMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BaseRewardPoolMock;
}
export {};
