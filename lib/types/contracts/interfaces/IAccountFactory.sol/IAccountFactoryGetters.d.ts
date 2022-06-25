import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IAccountFactoryGettersInterface extends utils.Interface {
    functions: {
        "countCreditAccounts()": FunctionFragment;
        "countCreditAccountsInStock()": FunctionFragment;
        "creditAccounts(uint256)": FunctionFragment;
        "getNext(address)": FunctionFragment;
        "head()": FunctionFragment;
        "tail()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "countCreditAccounts" | "countCreditAccountsInStock" | "creditAccounts" | "getNext" | "head" | "tail"): FunctionFragment;
    encodeFunctionData(functionFragment: "countCreditAccounts", values?: undefined): string;
    encodeFunctionData(functionFragment: "countCreditAccountsInStock", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditAccounts", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getNext", values: [string]): string;
    encodeFunctionData(functionFragment: "head", values?: undefined): string;
    encodeFunctionData(functionFragment: "tail", values?: undefined): string;
    decodeFunctionResult(functionFragment: "countCreditAccounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "countCreditAccountsInStock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditAccounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "head", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tail", data: BytesLike): Result;
    events: {};
}
export interface IAccountFactoryGetters extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAccountFactoryGettersInterface;
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
        countCreditAccounts(overrides?: CallOverrides): Promise<[BigNumber]>;
        countCreditAccountsInStock(overrides?: CallOverrides): Promise<[BigNumber]>;
        creditAccounts(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getNext(creditAccount: string, overrides?: CallOverrides): Promise<[string]>;
        head(overrides?: CallOverrides): Promise<[string]>;
        tail(overrides?: CallOverrides): Promise<[string]>;
    };
    countCreditAccounts(overrides?: CallOverrides): Promise<BigNumber>;
    countCreditAccountsInStock(overrides?: CallOverrides): Promise<BigNumber>;
    creditAccounts(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getNext(creditAccount: string, overrides?: CallOverrides): Promise<string>;
    head(overrides?: CallOverrides): Promise<string>;
    tail(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        countCreditAccounts(overrides?: CallOverrides): Promise<BigNumber>;
        countCreditAccountsInStock(overrides?: CallOverrides): Promise<BigNumber>;
        creditAccounts(id: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getNext(creditAccount: string, overrides?: CallOverrides): Promise<string>;
        head(overrides?: CallOverrides): Promise<string>;
        tail(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        countCreditAccounts(overrides?: CallOverrides): Promise<BigNumber>;
        countCreditAccountsInStock(overrides?: CallOverrides): Promise<BigNumber>;
        creditAccounts(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getNext(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        head(overrides?: CallOverrides): Promise<BigNumber>;
        tail(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        countCreditAccounts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        countCreditAccountsInStock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditAccounts(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNext(creditAccount: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        head(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tail(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
