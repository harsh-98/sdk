import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface AddressProviderACLMockInterface extends utils.Interface {
    functions: {
        "getACL()": FunctionFragment;
        "isConfigurator(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getACL" | "isConfigurator"): FunctionFragment;
    encodeFunctionData(functionFragment: "getACL", values?: undefined): string;
    encodeFunctionData(functionFragment: "isConfigurator", values: [string]): string;
    decodeFunctionResult(functionFragment: "getACL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isConfigurator", data: BytesLike): Result;
    events: {};
}
export interface AddressProviderACLMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AddressProviderACLMockInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        getACL(overrides?: CallOverrides): Promise<[string]>;
        isConfigurator(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
    };
    getACL(overrides?: CallOverrides): Promise<string>;
    isConfigurator(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        getACL(overrides?: CallOverrides): Promise<string>;
        isConfigurator(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        getACL(overrides?: CallOverrides): Promise<BigNumber>;
        isConfigurator(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getACL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isConfigurator(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
