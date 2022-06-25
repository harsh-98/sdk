import type { BaseContract, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IPriceOracleV2EventsInterface extends utils.Interface {
    functions: {};
    events: {
        "NewPriceFeed(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewPriceFeed"): EventFragment;
}
export interface NewPriceFeedEventObject {
    token: string;
    priceFeed: string;
}
export declare type NewPriceFeedEvent = TypedEvent<[
    string,
    string
], NewPriceFeedEventObject>;
export declare type NewPriceFeedEventFilter = TypedEventFilter<NewPriceFeedEvent>;
export interface IPriceOracleV2Events extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPriceOracleV2EventsInterface;
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
        "NewPriceFeed(address,address)"(token?: string | null, priceFeed?: string | null): NewPriceFeedEventFilter;
        NewPriceFeed(token?: string | null, priceFeed?: string | null): NewPriceFeedEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
