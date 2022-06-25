import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CurveV1Mock_3Assets, CurveV1Mock_3AssetsInterface } from "../../../../../contracts/test/mocks/integrations/CurveV1Mock_3Assets";
declare type CurveV1Mock_3AssetsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CurveV1Mock_3Assets__factory extends ContractFactory {
    constructor(...args: CurveV1Mock_3AssetsConstructorParams);
    deploy(_coins: string[], _underlying_coins: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CurveV1Mock_3Assets>;
    getDeployTransaction(_coins: string[], _underlying_coins: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CurveV1Mock_3Assets;
    connect(signer: Signer): CurveV1Mock_3Assets__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162003515380380620035158339810160408190526200003491620002a2565b8151829082906200004d90600290602085019062000133565b5080516200006390600390602084019062000133565b506000601260405162000076906200019d565b6060808252600790820152664352564d6f636b60c81b608082015260a0602082018190526015908201527f43525620666f72204375727665506f6f6c4d6f636b000000000000000000000060c082015260ff909116604082015260e001604051809103906000f080158015620000f0573d6000803e3d6000fd5b50600080546001600160a01b039092166001600160a01b03199283168117909155600180549092161790555050670de0b6b3a7640000600655506200030c915050565b8280548282559060005260206000209081019282156200018b579160200282015b828111156200018b57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000154565b5062000199929150620001ab565b5090565b6117588062001dbd83390190565b5b80821115620001995760008155600101620001ac565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620001f057600080fd5b919050565b600082601f8301126200020757600080fd5b815160206001600160401b0380831115620002265762000226620001c2565b8260051b604051601f19603f830116810181811084821117156200024e576200024e620001c2565b6040529384528581018301938381019250878511156200026d57600080fd5b83870191505b8482101562000297576200028782620001d8565b8352918301919083019062000273565b979650505050505050565b60008060408385031215620002b657600080fd5b82516001600160401b0380821115620002ce57600080fd5b620002dc86838701620001f5565b93506020850151915080821115620002f357600080fd5b506200030285828601620001f5565b9150509250929050565b611aa1806200031c6000396000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c80638ea875f3116100d8578063b91434d11161008c578063c661065711610066578063c661065714610322578063ecb586a514610335578063fc0c546a1461034857600080fd5b8063b91434d1146102f4578063b9947eb014610307578063bb7b8b801461031a57600080fd5b80639fdaea0c116100bd5780639fdaea0c146102bb578063a6417ed6146102ce578063b739953e146102e157600080fd5b80638ea875f31461029f57806399bd2ba5146102a857600080fd5b80634515cef31161013a5780635e0d443f116101145780635e0d443f14610259578063710354181461026c57806382c630661461027f57600080fd5b80634515cef3146102205780634903b0d11461023357806356ac35031461024657600080fd5b80631a4d01d21161016b5780631a4d01d2146101c057806323746eb8146101d55780633df021241461020d57600080fd5b8063065a80d81461018757806307211ef7146101ad575b600080fd5b61019a610195366004611622565b610368565b6040519081526020015b60405180910390f35b61019a6101bb36600461163d565b610421565b6101d36101ce366004611679565b610471565b005b6101e86101e3366004611622565b610565565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a4565b6101d361021b36600461169e565b6105a5565b6101d361022e366004611775565b6106cf565b61019a6102413660046117a0565b61089b565b6101d361025436600461163d565b6108b0565b61019a61026736600461163d565b610911565b6101d361027a3660046117a0565b600655565b6001546101e89073ffffffffffffffffffffffffffffffffffffffff1681565b61019a60065481565b6101d36102b63660046117b9565b61094d565b6101d36102c93660046117fe565b6109ac565b6101d36102dc36600461169e565b610b2f565b6101e86102ef366004611622565b610eef565b6101d361030236600461163d565b610f07565b6101e86103153660046117a0565b610f68565b60065461019a565b6101e86103303660046117a0565b610f7d565b6101d361034336600461182c565b610f92565b6000546101e89073ffffffffffffffffffffffffffffffffffffffff1681565b6000600282600f0b8154811061038057610380611859565b6000918252602090912001546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa1580156103f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061041b9190611888565b92915050565b600f83810b60009081526005602090815260408083209386900b8352929052908120546b033b2e3c9fd0803ce80000009061045d9084906118d0565b610467919061190d565b90505b9392505050565b6000546040517f79cc67900000000000000000000000000000000000000000000000000000000081523360048201526024810185905273ffffffffffffffffffffffffffffffffffffffff909116906379cc6790906044016020604051808303816000875af11580156104e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050c9190611948565b5061056033826002856fffffffffffffffffffffffffffffffff168154811061053757610537611859565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169190611115565b505050565b6000600282600f0b8154811061057d5761057d611859565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1692915050565b60006105b2858585610911565b905081811015610649576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f437572766556314d6f636b3a20494e53554646494349454e545f4f555450555460448201527f5f414d4f554e540000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61069e3330856002896fffffffffffffffffffffffffffffffff168154811061067457610674611859565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169291906111e9565b6106c833826002876fffffffffffffffffffffffffffffffff168154811061053757610537611859565b5050505050565b60005b60038110156107fe5760008382600381106106ef576106ef611859565b602002015111156107ec576002818154811061070d5761070d611859565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff166323b872dd333086856003811061074857610748611859565b60200201516040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff938416600482015292909116602483015260448201526064016020604051808303816000875af11580156107c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ea9190611948565b505b806107f68161196a565b9150506106d2565b506000546040517f40c10f190000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff909116906340c10f19906044015b6020604051808303816000875af1158015610877573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105609190611948565b60006002828154811061038057610380611859565b600f83810b60009081526005602090815260408083209386900b8352929052208190556108e96b033b2e3c9fd0803ce80000008261124d565b600f92830b60009081526005602090815260408083209690950b825294909452919092205550565b600f83810b60009081526004602090815260408083209386900b8352929052908120546b033b2e3c9fd0803ce80000009061045d9084906118d0565b6000546040517f40c10f1900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052909116906340c10f1990604401610858565b60005b6003811015610ad15760008382600381106109cc576109cc611859565b60200201351115610abf57600281815481106109ea576109ea611859565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33858460038110610a2457610a24611859565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff9093166004840152602002013560248201526044016020604051808303816000875af1158015610a99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abd9190611948565b505b80610ac98161196a565b9150506109af565b506000546040517f79cc67900000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff909116906379cc679090604401610858565b60006002856fffffffffffffffffffffffffffffffff1681548110610b5657610b56611859565b60009182526020822001546003805473ffffffffffffffffffffffffffffffffffffffff9092169350906fffffffffffffffffffffffffffffffff8816908110610ba257610ba2611859565b60009182526020822001546002805473ffffffffffffffffffffffffffffffffffffffff9092169350906fffffffffffffffffffffffffffffffff8816908110610bee57610bee611859565b60009182526020822001546003805473ffffffffffffffffffffffffffffffffffffffff9092169350906fffffffffffffffffffffffffffffffff8916908110610c3a57610c3a611859565b600091825260208220015473ffffffffffffffffffffffffffffffffffffffff169150610c68898989610421565b905085811015610cfa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f437572766556314d6f636b3a20494e53554646494349454e545f4f555450555460448201527f5f414d4f554e54000000000000000000000000000000000000000000000000006064820152608401610640565b610d1c73ffffffffffffffffffffffffffffffffffffffff851633308a6111e9565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301526024820189905285169063095ea7b3906044016020604051808303816000875af1158015610d91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db59190611948565b506040517f40c10f190000000000000000000000000000000000000000000000000000000081523060048201526024810188905273ffffffffffffffffffffffffffffffffffffffff8616906340c10f1990604401600060405180830381600087803b158015610e2457600080fd5b505af1158015610e38573d6000803e3d6000fd5b50506040517f1e9a69500000000000000000000000000000000000000000000000000000000081523060048201526024810184905273ffffffffffffffffffffffffffffffffffffffff86169250631e9a69509150604401600060405180830381600087803b158015610eaa57600080fd5b505af1158015610ebe573d6000803e3d6000fd5b50610ee49250505073ffffffffffffffffffffffffffffffffffffffff83163383611115565b505050505050505050565b6000600382600f0b8154811061057d5761057d611859565b600f83810b60009081526004602090815260408083209386900b835292905220819055610f406b033b2e3c9fd0803ce80000008261124d565b600f92830b60009081526004602090815260408083209690950b825294909452919092205550565b60006003828154811061057d5761057d611859565b60006002828154811061057d5761057d611859565b60005b60038110156110b7576000828260038110610fb257610fb2611859565b602002015111156110a55760028181548110610fd057610fd0611859565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb3384846003811061100a5761100a611859565b60200201516040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff909216600483015260248201526044016020604051808303816000875af115801561107f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a39190611948565b505b806110af8161196a565b915050610f95565b506000546040517f79cc67900000000000000000000000000000000000000000000000000000000081523360048201526024810184905273ffffffffffffffffffffffffffffffffffffffff909116906379cc679090604401610858565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526105609084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526113b3565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112479085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611167565b50505050565b60408051808201909152600281527f4d330000000000000000000000000000000000000000000000000000000000006020820152600090826112bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064091906119cf565b5060006112ca60028461190d565b90506b033b2e3c9fd0803ce8000000611303827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a20565b61130d919061190d565b8411156040518060400160405280600281526020017f4d310000000000000000000000000000000000000000000000000000000000008152509061137e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064091906119cf565b5082816113976b033b2e3c9fd0803ce8000000876118d0565b6113a19190611a37565b6113ab919061190d565b949350505050565b6000611415826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166114bf9092919063ffffffff16565b80519091501561056057808060200190518101906114339190611948565b610560576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610640565b6060610467848460008585843b611532576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610640565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161155b9190611a4f565b60006040518083038185875af1925050503d8060008114611598576040519150601f19603f3d011682016040523d82523d6000602084013e61159d565b606091505b50915091506115ad8282866115b8565b979650505050505050565b606083156115c757508161046a565b8251156115d75782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064091906119cf565b8035600f81900b811461161d57600080fd5b919050565b60006020828403121561163457600080fd5b61046a8261160b565b60008060006060848603121561165257600080fd5b61165b8461160b565b92506116696020850161160b565b9150604084013590509250925092565b60008060006060848603121561168e57600080fd5b833592506116696020850161160b565b600080600080608085870312156116b457600080fd5b6116bd8561160b565b93506116cb6020860161160b565b93969395505050506040820135916060013590565b600082601f8301126116f157600080fd5b6040516060810181811067ffffffffffffffff8211171561173b577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405280606084018581111561175057600080fd5b845b8181101561176a578035835260209283019201611752565b509195945050505050565b6000806080838503121561178857600080fd5b61179284846116e0565b946060939093013593505050565b6000602082840312156117b257600080fd5b5035919050565b600080604083850312156117cc57600080fd5b823573ffffffffffffffffffffffffffffffffffffffff811681146117f057600080fd5b946020939093013593505050565b6000806080838503121561181157600080fd5b606083018481111561182257600080fd5b9294923593505050565b6000806080838503121561183f57600080fd5b8235915061185084602085016116e0565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561189a57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611908576119086118a1565b500290565b600082611943577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60006020828403121561195a57600080fd5b8151801515811461046a57600080fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561199c5761199c6118a1565b5060010190565b60005b838110156119be5781810151838201526020016119a6565b838111156112475750506000910152565b60208152600082518060208401526119ee8160408501602087016119a3565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600082821015611a3257611a326118a1565b500390565b60008219821115611a4a57611a4a6118a1565b500190565b60008251611a618184602087016119a3565b919091019291505056fea2646970667358221220c3b14ba27a32368ace448eb9d8a52dff6197a92edbbf8a37d0a3a5e1ec7fd75364736f6c634300080a003360a06040523480156200001157600080fd5b506040516200175838038062001758833981016040819052620000349162000269565b8251839083906200004d906003906020850190620000f6565b50805162000063906004906020840190620000f6565b505050620000806200007a620000a060201b60201c565b620000a4565b60ff166080525050600680546001600160a01b031916331790556200032b565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200010490620002ee565b90600052602060002090601f01602090048101928262000128576000855562000173565b82601f106200014357805160ff191683800117855562000173565b8280016001018555821562000173579182015b828111156200017357825182559160200191906001019062000156565b506200018192915062000185565b5090565b5b8082111562000181576000815560010162000186565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001c457600080fd5b81516001600160401b0380821115620001e157620001e16200019c565b604051601f8301601f19908116603f011681019082821181831017156200020c576200020c6200019c565b816040528381526020925086838588010111156200022957600080fd5b600091505b838210156200024d57858201830151818301840152908201906200022e565b838211156200025f5760008385830101525b9695505050505050565b6000806000606084860312156200027f57600080fd5b83516001600160401b03808211156200029757600080fd5b620002a587838801620001b2565b94506020860151915080821115620002bc57600080fd5b50620002cb86828701620001b2565b925050604084015160ff81168114620002e357600080fd5b809150509250925092565b600181811c908216806200030357607f821691505b602082108114156200032557634e487b7160e01b600052602260045260246000fd5b50919050565b60805161141162000347600039600061025f01526114116000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c806370a08231116100cd5780639dc29fac11610081578063a9059cbb11610066578063a9059cbb1461034c578063dd62ed3e1461035f578063f2fde38b146103a557600080fd5b80639dc29fac14610326578063a457c2d71461033957600080fd5b806379cc6790116100b257806379cc6790146102ed5780638da5cb5b1461030057806395d89b411461031e57600080fd5b806370a08231146102af578063715018a6146102e557600080fd5b806318160ddd11610124578063313ce56711610109578063313ce56714610258578063395093511461028957806340c10f191461029c57600080fd5b806318160ddd1461023357806323b872dd1461024557600080fd5b806306fdde03146101565780630754617214610174578063095ea7b3146101b95780631652e9fc146101dc575b600080fd5b61015e6103b8565b60405161016b91906111d2565b60405180910390f35b6006546101949073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161016b565b6101cc6101c736600461126e565b61044a565b604051901515815260200161016b565b6102316101ea366004611298565b600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b005b6002545b60405190815260200161016b565b6101cc6102533660046112ba565b610460565b60405160ff7f000000000000000000000000000000000000000000000000000000000000000016815260200161016b565b6101cc61029736600461126e565b61054b565b6101cc6102aa36600461126e565b610594565b6102376102bd366004611298565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6102316106a3565b6101cc6102fb36600461126e565b610730565b60055473ffffffffffffffffffffffffffffffffffffffff16610194565b61015e6107be565b6101cc61033436600461126e565b6107cd565b6101cc61034736600461126e565b6107d9565b6101cc61035a36600461126e565b6108b1565b61023761036d3660046112f6565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6102316103b3366004611298565b6108be565b6060600380546103c790611329565b80601f01602080910402602001604051908101604052809291908181526020018280546103f390611329565b80156104405780601f1061041557610100808354040283529160200191610440565b820191906000526020600020905b81548152906001019060200180831161042357829003601f168201915b5050505050905090565b60006104573384846109ee565b50600192915050565b600061046d848484610ba2565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260016020908152604080832033845290915290205482811015610533576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61054085338584036109ee565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909161045791859061058f9086906113ac565b6109ee565b60065460009073ffffffffffffffffffffffffffffffffffffffff163314610618576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4d696e7465722063616c6c73206f6e6c79000000000000000000000000000000604482015260640161052a565b60065473ffffffffffffffffffffffffffffffffffffffff163314610699576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4d696e7465722063616c6c73206f6e6c79000000000000000000000000000000604482015260640161052a565b6104578383610e56565b60055473ffffffffffffffffffffffffffffffffffffffff163314610724576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161052a565b61072e6000610f76565b565b60065460009073ffffffffffffffffffffffffffffffffffffffff1633146107b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4d696e7465722063616c6c73206f6e6c79000000000000000000000000000000604482015260640161052a565b6104578383610fed565b6060600480546103c790611329565b60006104578383610fed565b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091528120548281101561089a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161052a565b6108a733858584036109ee565b5060019392505050565b6000610457338484610ba2565b60055473ffffffffffffffffffffffffffffffffffffffff16331461093f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161052a565b73ffffffffffffffffffffffffffffffffffffffff81166109e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161052a565b6109eb81610f76565b50565b73ffffffffffffffffffffffffffffffffffffffff8316610a90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff8216610b33576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff8216610ce8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610d9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610de29084906113ac565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e4891815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff8216610ed3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161052a565b8060026000828254610ee591906113ac565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290610f1f9084906113ac565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6005805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff8216611090576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205481811015611146576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161052a565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604081208383039055600280548492906111829084906113c4565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610b95565b600060208083528351808285015260005b818110156111ff578581018301518582016040015282016111e3565b81811115611211576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461126957600080fd5b919050565b6000806040838503121561128157600080fd5b61128a83611245565b946020939093013593505050565b6000602082840312156112aa57600080fd5b6112b382611245565b9392505050565b6000806000606084860312156112cf57600080fd5b6112d884611245565b92506112e660208501611245565b9150604084013590509250925092565b6000806040838503121561130957600080fd5b61131283611245565b915061132060208401611245565b90509250929050565b600181811c9082168061133d57607f821691505b60208210811415611377577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082198211156113bf576113bf61137d565b500190565b6000828210156113d6576113d661137d565b50039056fea2646970667358221220fd9684963a1e0e9d3eb55681a6f85f5c76804530c79f10cf8d0cfbd35511577164736f6c634300080a0033";
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
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): CurveV1Mock_3AssetsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CurveV1Mock_3Assets;
}
export {};
