import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface ILPPriceFeedEventsInterface extends utils.Interface {
    functions: {};
    events: {
        "NewLimiterParams(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewLimiterParams"): EventFragment;
}
export interface NewLimiterParamsEventObject {
    lowerBound: BigNumber;
    upperBound: BigNumber;
}
export declare type NewLimiterParamsEvent = TypedEvent<[
    BigNumber,
    BigNumber
], NewLimiterParamsEventObject>;
export declare type NewLimiterParamsEventFilter = TypedEventFilter<NewLimiterParamsEvent>;
export interface ILPPriceFeedEvents extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILPPriceFeedEventsInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "NewLimiterParams(uint256,uint256)"(lowerBound?: null, upperBound?: null): NewLimiterParamsEventFilter;
        NewLimiterParams(lowerBound?: null, upperBound?: null): NewLimiterParamsEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
