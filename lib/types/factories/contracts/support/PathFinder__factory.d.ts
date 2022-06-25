import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PathFinder, PathFinderInterface } from "../../../contracts/support/PathFinder";
declare type PathFinderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PathFinder__factory extends ContractFactory {
    constructor(...args: PathFinderConstructorParams);
    deploy(_addressProvider: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PathFinder>;
    getDeployTransaction(_addressProvider: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PathFinder;
    connect(signer: Signer): PathFinder__factory;
    static readonly bytecode = "0x6101006040523480156200001257600080fd5b5060405162001cee38038062001cee8339810160408190526200003591620001b9565b6001600160a01b03811660808190526040805163c513c9bb60e01b8152905163c513c9bb916004808201926020929091908290030181865afa15801562000080573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000a69190620001b9565b6001600160a01b031660a0816001600160a01b0316815250506080516001600160a01b031663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000100573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001269190620001b9565b6001600160a01b031660c0816001600160a01b0316815250506080516001600160a01b0316634c252f916040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000180573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001a69190620001b9565b6001600160a01b031660e05250620001eb565b600060208284031215620001cc57600080fd5b81516001600160a01b0381168114620001e457600080fd5b9392505050565b60805160a05160c05160e051611ab46200023a6000396000818161019b01526108b901526000818161010d01526108070152600081816101d801526109bb015260006101340152611ab46000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80634b57b0be116100765780637a0c7b211161005b5780637a0c7b21146101d35780638b7ce872146101fa578063e2430f931461021a57600080fd5b80634b57b0be1461019657806354fd4d50146101bd57600080fd5b80632954018c116100a75780632954018c1461012f57806333a576a1146101565780633613d5271461017657600080fd5b80630c1bc044146100c35780632630c12f14610108575b600080fd5b6100de735f4ec3df9cbd43714fe2740f5e3616155c5b841981565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100de7f000000000000000000000000000000000000000000000000000000000000000081565b6100de7f000000000000000000000000000000000000000000000000000000000000000081565b610169610164366004611238565b61023a565b6040516100ff9190611343565b61018961018436600461135d565b61066b565b6040516100ff91906113e3565b6100de7f000000000000000000000000000000000000000000000000000000000000000081565b6101c5600181565b6040519081526020016100ff565b6100de7f000000000000000000000000000000000000000000000000000000000000000081565b61020d610208366004611427565b610971565b6040516100ff9190611496565b61022d610228366004611516565b610aa7565b6040516100ff91906115c6565b61025e60405180606001604052806060815260200160008152602001600081525090565b826102a3576040805160036060820181815260e08301909352909182918160200160208202803683370190505081526020016000815260200160008152509050610660565b60408051600280825260608201835260009260208301908036833701905050905085816000815181106102d8576102d86115d9565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508481600181518110610326576103266115d9565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506000806103a08b8b8b868a60018f14610399577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610c9f565b6000610c9f565b915091506060600082156103b2578491505b60005b87518110156105b2576040805160038082526080820190925290602082016060803683370190505095508a866000815181106103f3576103f36115d9565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508986600281518110610441576104416115d9565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508a73ffffffffffffffffffffffffffffffffffffffff168882815181106104a4576104a46115d9565b602002602001015173ffffffffffffffffffffffffffffffffffffffff161415801561051557508973ffffffffffffffffffffffffffffffffffffffff168882815181106104f4576104f46115d9565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b156105a05787818151811061052c5761052c6115d9565b602002602001015186600181518110610547576105476115d9565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505061058f8e8e8e898d8a610c9f565b9450915083156105a0578194508592505b806105aa81611637565b9150506103b5565b5060007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8514156105e257600094505b84158015906105f057508815155b1561063f5760018c1461061f578861061086670de0b6b3a7640000611670565b61061a91906116ad565b61063c565b846106328a670de0b6b3a7640000611670565b61063c91906116ad565b90505b60408051606081018252938452602084019190915282019390935293505050505b979650505050505050565b60606000735f4ec3df9cbd43714fe2740f5e3616155c5b841973ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156106ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f29190611702565b50919350859250505067ffffffffffffffff81111561071357610713611124565b60405190808252806020026020018201604052801561073c578160200160208202803683370190505b50915060005b8381101561096857600085858381811061075e5761075e6115d9565b90506020020160208101906107739190611752565b73ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e1919061176d565b60ff169050670de0b6b3a76400008373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663d6d19b278a61083886600a6118b0565b8b8b8981811061084a5761084a6115d9565b905060200201602081019061085f9190611752565b60405160e085901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff93841660048201526024810192909252821660448201527f00000000000000000000000000000000000000000000000000000000000000009091166064820152608401602060405180830381865afa158015610900573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092491906118bc565b61092e9190611670565b61093891906116ad565b84838151811061094a5761094a6115d9565b6020908102919091010152508061096081611637565b915050610742565b50509392505050565b6040517f6fbc6f6b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff808516600483015260609185917f00000000000000000000000000000000000000000000000000000000000000001690636fbc6f6b90602401602060405180830381865afa158015610a02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2691906118d5565b6040518060400160405280600281526020017f435000000000000000000000000000000000000000000000000000000000000081525090610a9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9491906115c6565b60405180910390fd5b5050949350505050565b6060610bb86001831415610c3c5760005b60018551610ac691906118f7565b811015610b9a57610b86858281518110610ae257610ae26115d9565b602002602001015183604051602001610b5192919060609290921b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016825260e81b7fffffff000000000000000000000000000000000000000000000000000000000016601482015260170190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528490610ce9565b925080610b9281611637565b915050610ab8565b50610c358460018651610bad91906118f7565b81518110610bbd57610bbd6115d9565b6020026020010151604051602001610c00919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528390610ce9565b9150610c98565b600060018551610c4c91906118f7565b90505b8015610c7e57610c6a858281518110610ae257610ae26115d9565b925080610c768161190e565b915050610c4f565b50610c9584600081518110610bbd57610bbd6115d9565b91505b5092915050565b600080600188600e811115610cb657610cb6611943565b14610ccd57610cc88787878787610d85565b610cda565b610cda8787878787610f20565b91509150965096945050505050565b6060806040519050835180825260208201818101602087015b81831015610d1a578051835260209283019201610d02565b50855184518101855292509050808201602086015b81831015610d47578051835260209283019201610d2f565b508651929092011591909101601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0166040525090505b92915050565b60008060006001871415610e48578773ffffffffffffffffffffffffffffffffffffffff1663cdca1753610db9888a610aa7565b876040518363ffffffff1660e01b8152600401610dd7929190611972565b6020604051808303816000875af1925050508015610e30575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610e2d918101906118bc565b60015b610e41578360009250925050610f16565b9050610ed9565b6002871415610e77578773ffffffffffffffffffffffffffffffffffffffff16632f80bb1d610db9888a610aa7565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f556e6b6e6f776e207377617020747970650000000000000000000000000000006044820152606401610a94565b600187148015610ee857508381115b80610efd5750600287148015610efd57508381105b15610f0d57915060019050610f16565b83600092509250505b9550959350505050565b6000806000600187141561101e576040517fd06ca61f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff89169063d06ca61f90610f829088908a90600401611994565b600060405180830381865afa925050508015610fde57506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610fdb91908101906119f8565b60015b610fef578360009250925050610f16565b8060018851610ffe91906118f7565b8151811061100e5761100e6115d9565b6020026020010151915050610ed9565b6002871415610e77576040517f1f00ca7400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff891690631f00ca749061107b9088908a90600401611994565b600060405180830381865afa9250505080156110d757506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526110d491908101906119f8565b60015b6110e8578360009250925050610f16565b8060008151811061100e5761100e6115d9565b803573ffffffffffffffffffffffffffffffffffffffff8116811461111f57600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561119a5761119a611124565b604052919050565b600067ffffffffffffffff8211156111bc576111bc611124565b5060051b60200190565b600082601f8301126111d757600080fd5b813560206111ec6111e7836111a2565b611153565b82815260059290921b8401810191818101908684111561120b57600080fd5b8286015b8481101561122d57611220816110fb565b835291830191830161120f565b509695505050505050565b600080600080600080600060e0888a03121561125357600080fd5b8735600f811061126257600080fd5b9650611270602089016110fb565b955060408801359450611285606089016110fb565b9350611293608089016110fb565b925060a0880135915060c088013567ffffffffffffffff8111156112b657600080fd5b6112c28a828b016111c6565b91505092959891949750929550565b805160608084528151908401819052600091602091908201906080860190845b8181101561132357835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016112f1565b505082850151838701526040850151604087015280935050505092915050565b60208152600061135660208301846112d1565b9392505050565b60008060006040848603121561137257600080fd5b61137b846110fb565b9250602084013567ffffffffffffffff8082111561139857600080fd5b818601915086601f8301126113ac57600080fd5b8135818111156113bb57600080fd5b8760208260051b85010111156113d057600080fd5b6020830194508093505050509250925092565b6020808252825182820181905260009190848201906040850190845b8181101561141b578351835292840192918401916001016113ff565b50909695505050505050565b6000806000806080858703121561143d57600080fd5b611446856110fb565b9350611454602086016110fb565b9250611462604086016110fb565b9150606085013567ffffffffffffffff81111561147e57600080fd5b61148a878288016111c6565b91505092959194509250565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015611509577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08886030184526114f78583516112d1565b945092850192908501906001016114bd565b5092979650505050505050565b6000806040838503121561152957600080fd5b823567ffffffffffffffff81111561154057600080fd5b61154c858286016111c6565b95602094909401359450505050565b6000815180845260005b8181101561158157602081850181015186830182015201611565565b81811115611593576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000611356602083018461155b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561166957611669611608565b5060010190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156116a8576116a8611608565b500290565b6000826116e3577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b805169ffffffffffffffffffff8116811461111f57600080fd5b600080600080600060a0868803121561171a57600080fd5b611723866116e8565b9450602086015193506040860151925060608601519150611746608087016116e8565b90509295509295909350565b60006020828403121561176457600080fd5b611356826110fb565b60006020828403121561177f57600080fd5b815160ff8116811461135657600080fd5b600181815b808511156117e957817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156117cf576117cf611608565b808516156117dc57918102915b93841c9390800290611795565b509250929050565b60008261180057506001610d7f565b8161180d57506000610d7f565b8160018114611823576002811461182d57611849565b6001915050610d7f565b60ff84111561183e5761183e611608565b50506001821b610d7f565b5060208310610133831016604e8410600b841016171561186c575081810a610d7f565b6118768383611790565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156118a8576118a8611608565b029392505050565b600061135683836117f1565b6000602082840312156118ce57600080fd5b5051919050565b6000602082840312156118e757600080fd5b8151801515811461135657600080fd5b60008282101561190957611909611608565b500390565b60008161191d5761191d611608565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b604081526000611985604083018561155b565b90508260208301529392505050565b6000604082018483526020604081850152818551808452606086019150828701935060005b818110156119eb57845173ffffffffffffffffffffffffffffffffffffffff16835293830193918301916001016119b9565b5090979650505050505050565b60006020808385031215611a0b57600080fd5b825167ffffffffffffffff811115611a2257600080fd5b8301601f81018513611a3357600080fd5b8051611a416111e7826111a2565b81815260059190911b82018301908381019087831115611a6057600080fd5b928401925b8284101561066057835182529284019290840190611a6556fea26469706673582212200d539edc1e1224cb0efab437bf8134cfda3711e9f5ef0f70efee4a5a40e9fcd564736f6c634300080a0033";
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
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
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
    static createInterface(): PathFinderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PathFinder;
}
export {};
