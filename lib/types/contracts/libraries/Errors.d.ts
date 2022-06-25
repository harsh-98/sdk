import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface ErrorsInterface extends utils.Interface {
    functions: {
        "ACL_CALLER_NOT_CONFIGURATOR()": FunctionFragment;
        "ACL_CALLER_NOT_PAUSABLE_ADMIN()": FunctionFragment;
        "AF_CANT_CLOSE_CREDIT_ACCOUNT_IN_THE_SAME_BLOCK()": FunctionFragment;
        "AF_CREDIT_ACCOUNT_NOT_IN_STOCK()": FunctionFragment;
        "AF_EXTERNAL_ACCOUNTS_ARE_FORBIDDEN()": FunctionFragment;
        "AF_MINING_IS_FINISHED()": FunctionFragment;
        "AS_ADDRESS_NOT_FOUND()": FunctionFragment;
        "CA_CONNECTED_CREDIT_MANAGER_ONLY()": FunctionFragment;
        "CA_FACTORY_ONLY()": FunctionFragment;
        "CR_CREDIT_MANAGER_ALREADY_ADDED()": FunctionFragment;
        "CR_POOL_ALREADY_ADDED()": FunctionFragment;
        "INCORRECT_ARRAY_LENGTH()": FunctionFragment;
        "INCORRECT_PARAMETER()": FunctionFragment;
        "INCORRECT_PATH_LENGTH()": FunctionFragment;
        "MATH_ADDITION_OVERFLOW()": FunctionFragment;
        "MATH_DIVISION_BY_ZERO()": FunctionFragment;
        "MATH_MULTIPLICATION_OVERFLOW()": FunctionFragment;
        "NOT_IMPLEMENTED()": FunctionFragment;
        "POOL_CANT_ADD_CREDIT_MANAGER_TWICE()": FunctionFragment;
        "POOL_CONNECTED_CREDIT_MANAGERS_ONLY()": FunctionFragment;
        "POOL_INCOMPATIBLE_CREDIT_ACCOUNT_MANAGER()": FunctionFragment;
        "POOL_INCORRECT_WITHDRAW_FEE()": FunctionFragment;
        "POOL_MORE_THAN_EXPECTED_LIQUIDITY_LIMIT()": FunctionFragment;
        "REGISTERED_CREDIT_ACCOUNT_MANAGERS_ONLY()": FunctionFragment;
        "REGISTERED_POOLS_ONLY()": FunctionFragment;
        "TD_CONTRIBUTOR_IS_NOT_REGISTERED()": FunctionFragment;
        "TD_INCORRECT_WEIGHTS()": FunctionFragment;
        "TD_NON_ZERO_BALANCE_AFTER_DISTRIBUTION()": FunctionFragment;
        "TD_WALLET_IS_ALREADY_CONNECTED_TO_VC()": FunctionFragment;
        "WG_DESTINATION_IS_NOT_WETH_COMPATIBLE()": FunctionFragment;
        "WG_NOT_ENOUGH_FUNDS()": FunctionFragment;
        "WG_RECEIVE_IS_NOT_ALLOWED()": FunctionFragment;
        "ZERO_ADDRESS_IS_NOT_ALLOWED()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ACL_CALLER_NOT_CONFIGURATOR" | "ACL_CALLER_NOT_PAUSABLE_ADMIN" | "AF_CANT_CLOSE_CREDIT_ACCOUNT_IN_THE_SAME_BLOCK" | "AF_CREDIT_ACCOUNT_NOT_IN_STOCK" | "AF_EXTERNAL_ACCOUNTS_ARE_FORBIDDEN" | "AF_MINING_IS_FINISHED" | "AS_ADDRESS_NOT_FOUND" | "CA_CONNECTED_CREDIT_MANAGER_ONLY" | "CA_FACTORY_ONLY" | "CR_CREDIT_MANAGER_ALREADY_ADDED" | "CR_POOL_ALREADY_ADDED" | "INCORRECT_ARRAY_LENGTH" | "INCORRECT_PARAMETER" | "INCORRECT_PATH_LENGTH" | "MATH_ADDITION_OVERFLOW" | "MATH_DIVISION_BY_ZERO" | "MATH_MULTIPLICATION_OVERFLOW" | "NOT_IMPLEMENTED" | "POOL_CANT_ADD_CREDIT_MANAGER_TWICE" | "POOL_CONNECTED_CREDIT_MANAGERS_ONLY" | "POOL_INCOMPATIBLE_CREDIT_ACCOUNT_MANAGER" | "POOL_INCORRECT_WITHDRAW_FEE" | "POOL_MORE_THAN_EXPECTED_LIQUIDITY_LIMIT" | "REGISTERED_CREDIT_ACCOUNT_MANAGERS_ONLY" | "REGISTERED_POOLS_ONLY" | "TD_CONTRIBUTOR_IS_NOT_REGISTERED" | "TD_INCORRECT_WEIGHTS" | "TD_NON_ZERO_BALANCE_AFTER_DISTRIBUTION" | "TD_WALLET_IS_ALREADY_CONNECTED_TO_VC" | "WG_DESTINATION_IS_NOT_WETH_COMPATIBLE" | "WG_NOT_ENOUGH_FUNDS" | "WG_RECEIVE_IS_NOT_ALLOWED" | "ZERO_ADDRESS_IS_NOT_ALLOWED"): FunctionFragment;
    encodeFunctionData(functionFragment: "ACL_CALLER_NOT_CONFIGURATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "ACL_CALLER_NOT_PAUSABLE_ADMIN", values?: undefined): string;
    encodeFunctionData(functionFragment: "AF_CANT_CLOSE_CREDIT_ACCOUNT_IN_THE_SAME_BLOCK", values?: undefined): string;
    encodeFunctionData(functionFragment: "AF_CREDIT_ACCOUNT_NOT_IN_STOCK", values?: undefined): string;
    encodeFunctionData(functionFragment: "AF_EXTERNAL_ACCOUNTS_ARE_FORBIDDEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "AF_MINING_IS_FINISHED", values?: undefined): string;
    encodeFunctionData(functionFragment: "AS_ADDRESS_NOT_FOUND", values?: undefined): string;
    encodeFunctionData(functionFragment: "CA_CONNECTED_CREDIT_MANAGER_ONLY", values?: undefined): string;
    encodeFunctionData(functionFragment: "CA_FACTORY_ONLY", values?: undefined): string;
    encodeFunctionData(functionFragment: "CR_CREDIT_MANAGER_ALREADY_ADDED", values?: undefined): string;
    encodeFunctionData(functionFragment: "CR_POOL_ALREADY_ADDED", values?: undefined): string;
    encodeFunctionData(functionFragment: "INCORRECT_ARRAY_LENGTH", values?: undefined): string;
    encodeFunctionData(functionFragment: "INCORRECT_PARAMETER", values?: undefined): string;
    encodeFunctionData(functionFragment: "INCORRECT_PATH_LENGTH", values?: undefined): string;
    encodeFunctionData(functionFragment: "MATH_ADDITION_OVERFLOW", values?: undefined): string;
    encodeFunctionData(functionFragment: "MATH_DIVISION_BY_ZERO", values?: undefined): string;
    encodeFunctionData(functionFragment: "MATH_MULTIPLICATION_OVERFLOW", values?: undefined): string;
    encodeFunctionData(functionFragment: "NOT_IMPLEMENTED", values?: undefined): string;
    encodeFunctionData(functionFragment: "POOL_CANT_ADD_CREDIT_MANAGER_TWICE", values?: undefined): string;
    encodeFunctionData(functionFragment: "POOL_CONNECTED_CREDIT_MANAGERS_ONLY", values?: undefined): string;
    encodeFunctionData(functionFragment: "POOL_INCOMPATIBLE_CREDIT_ACCOUNT_MANAGER", values?: undefined): string;
    encodeFunctionData(functionFragment: "POOL_INCORRECT_WITHDRAW_FEE", values?: undefined): string;
    encodeFunctionData(functionFragment: "POOL_MORE_THAN_EXPECTED_LIQUIDITY_LIMIT", values?: undefined): string;
    encodeFunctionData(functionFragment: "REGISTERED_CREDIT_ACCOUNT_MANAGERS_ONLY", values?: undefined): string;
    encodeFunctionData(functionFragment: "REGISTERED_POOLS_ONLY", values?: undefined): string;
    encodeFunctionData(functionFragment: "TD_CONTRIBUTOR_IS_NOT_REGISTERED", values?: undefined): string;
    encodeFunctionData(functionFragment: "TD_INCORRECT_WEIGHTS", values?: undefined): string;
    encodeFunctionData(functionFragment: "TD_NON_ZERO_BALANCE_AFTER_DISTRIBUTION", values?: undefined): string;
    encodeFunctionData(functionFragment: "TD_WALLET_IS_ALREADY_CONNECTED_TO_VC", values?: undefined): string;
    encodeFunctionData(functionFragment: "WG_DESTINATION_IS_NOT_WETH_COMPATIBLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "WG_NOT_ENOUGH_FUNDS", values?: undefined): string;
    encodeFunctionData(functionFragment: "WG_RECEIVE_IS_NOT_ALLOWED", values?: undefined): string;
    encodeFunctionData(functionFragment: "ZERO_ADDRESS_IS_NOT_ALLOWED", values?: undefined): string;
    decodeFunctionResult(functionFragment: "ACL_CALLER_NOT_CONFIGURATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ACL_CALLER_NOT_PAUSABLE_ADMIN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "AF_CANT_CLOSE_CREDIT_ACCOUNT_IN_THE_SAME_BLOCK", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "AF_CREDIT_ACCOUNT_NOT_IN_STOCK", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "AF_EXTERNAL_ACCOUNTS_ARE_FORBIDDEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "AF_MINING_IS_FINISHED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "AS_ADDRESS_NOT_FOUND", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CA_CONNECTED_CREDIT_MANAGER_ONLY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CA_FACTORY_ONLY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CR_CREDIT_MANAGER_ALREADY_ADDED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CR_POOL_ALREADY_ADDED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INCORRECT_ARRAY_LENGTH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INCORRECT_PARAMETER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "INCORRECT_PATH_LENGTH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MATH_ADDITION_OVERFLOW", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MATH_DIVISION_BY_ZERO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MATH_MULTIPLICATION_OVERFLOW", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NOT_IMPLEMENTED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POOL_CANT_ADD_CREDIT_MANAGER_TWICE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POOL_CONNECTED_CREDIT_MANAGERS_ONLY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POOL_INCOMPATIBLE_CREDIT_ACCOUNT_MANAGER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POOL_INCORRECT_WITHDRAW_FEE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POOL_MORE_THAN_EXPECTED_LIQUIDITY_LIMIT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REGISTERED_CREDIT_ACCOUNT_MANAGERS_ONLY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REGISTERED_POOLS_ONLY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TD_CONTRIBUTOR_IS_NOT_REGISTERED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TD_INCORRECT_WEIGHTS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TD_NON_ZERO_BALANCE_AFTER_DISTRIBUTION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TD_WALLET_IS_ALREADY_CONNECTED_TO_VC", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WG_DESTINATION_IS_NOT_WETH_COMPATIBLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WG_NOT_ENOUGH_FUNDS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WG_RECEIVE_IS_NOT_ALLOWED", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ZERO_ADDRESS_IS_NOT_ALLOWED", data: BytesLike): Result;
    events: {};
}
export interface Errors extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ErrorsInterface;
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
        ACL_CALLER_NOT_CONFIGURATOR(overrides?: CallOverrides): Promise<[string]>;
        ACL_CALLER_NOT_PAUSABLE_ADMIN(overrides?: CallOverrides): Promise<[string]>;
        AF_CANT_CLOSE_CREDIT_ACCOUNT_IN_THE_SAME_BLOCK(overrides?: CallOverrides): Promise<[string]>;
        AF_CREDIT_ACCOUNT_NOT_IN_STOCK(overrides?: CallOverrides): Promise<[string]>;
        AF_EXTERNAL_ACCOUNTS_ARE_FORBIDDEN(overrides?: CallOverrides): Promise<[string]>;
        AF_MINING_IS_FINISHED(overrides?: CallOverrides): Promise<[string]>;
        AS_ADDRESS_NOT_FOUND(overrides?: CallOverrides): Promise<[string]>;
        CA_CONNECTED_CREDIT_MANAGER_ONLY(overrides?: CallOverrides): Promise<[string]>;
        CA_FACTORY_ONLY(overrides?: CallOverrides): Promise<[string]>;
        CR_CREDIT_MANAGER_ALREADY_ADDED(overrides?: CallOverrides): Promise<[string]>;
        CR_POOL_ALREADY_ADDED(overrides?: CallOverrides): Promise<[string]>;
        INCORRECT_ARRAY_LENGTH(overrides?: CallOverrides): Promise<[string]>;
        INCORRECT_PARAMETER(overrides?: CallOverrides): Promise<[string]>;
        INCORRECT_PATH_LENGTH(overrides?: CallOverrides): Promise<[string]>;
        MATH_ADDITION_OVERFLOW(overrides?: CallOverrides): Promise<[string]>;
        MATH_DIVISION_BY_ZERO(overrides?: CallOverrides): Promise<[string]>;
        MATH_MULTIPLICATION_OVERFLOW(overrides?: CallOverrides): Promise<[string]>;
        NOT_IMPLEMENTED(overrides?: CallOverrides): Promise<[string]>;
        POOL_CANT_ADD_CREDIT_MANAGER_TWICE(overrides?: CallOverrides): Promise<[string]>;
        POOL_CONNECTED_CREDIT_MANAGERS_ONLY(overrides?: CallOverrides): Promise<[string]>;
        POOL_INCOMPATIBLE_CREDIT_ACCOUNT_MANAGER(overrides?: CallOverrides): Promise<[string]>;
        POOL_INCORRECT_WITHDRAW_FEE(overrides?: CallOverrides): Promise<[string]>;
        POOL_MORE_THAN_EXPECTED_LIQUIDITY_LIMIT(overrides?: CallOverrides): Promise<[string]>;
        REGISTERED_CREDIT_ACCOUNT_MANAGERS_ONLY(overrides?: CallOverrides): Promise<[string]>;
        REGISTERED_POOLS_ONLY(overrides?: CallOverrides): Promise<[string]>;
        TD_CONTRIBUTOR_IS_NOT_REGISTERED(overrides?: CallOverrides): Promise<[string]>;
        TD_INCORRECT_WEIGHTS(overrides?: CallOverrides): Promise<[string]>;
        TD_NON_ZERO_BALANCE_AFTER_DISTRIBUTION(overrides?: CallOverrides): Promise<[string]>;
        TD_WALLET_IS_ALREADY_CONNECTED_TO_VC(overrides?: CallOverrides): Promise<[string]>;
        WG_DESTINATION_IS_NOT_WETH_COMPATIBLE(overrides?: CallOverrides): Promise<[string]>;
        WG_NOT_ENOUGH_FUNDS(overrides?: CallOverrides): Promise<[string]>;
        WG_RECEIVE_IS_NOT_ALLOWED(overrides?: CallOverrides): Promise<[string]>;
        ZERO_ADDRESS_IS_NOT_ALLOWED(overrides?: CallOverrides): Promise<[string]>;
    };
    ACL_CALLER_NOT_CONFIGURATOR(overrides?: CallOverrides): Promise<string>;
    ACL_CALLER_NOT_PAUSABLE_ADMIN(overrides?: CallOverrides): Promise<string>;
    AF_CANT_CLOSE_CREDIT_ACCOUNT_IN_THE_SAME_BLOCK(overrides?: CallOverrides): Promise<string>;
    AF_CREDIT_ACCOUNT_NOT_IN_STOCK(overrides?: CallOverrides): Promise<string>;
    AF_EXTERNAL_ACCOUNTS_ARE_FORBIDDEN(overrides?: CallOverrides): Promise<string>;
    AF_MINING_IS_FINISHED(overrides?: CallOverrides): Promise<string>;
    AS_ADDRESS_NOT_FOUND(overrides?: CallOverrides): Promise<string>;
    CA_CONNECTED_CREDIT_MANAGER_ONLY(overrides?: CallOverrides): Promise<string>;
    CA_FACTORY_ONLY(overrides?: CallOverrides): Promise<string>;
    CR_CREDIT_MANAGER_ALREADY_ADDED(overrides?: CallOverrides): Promise<string>;
    CR_POOL_ALREADY_ADDED(overrides?: CallOverrides): Promise<string>;
    INCORRECT_ARRAY_LENGTH(overrides?: CallOverrides): Promise<string>;
    INCORRECT_PARAMETER(overrides?: CallOverrides): Promise<string>;
    INCORRECT_PATH_LENGTH(overrides?: CallOverrides): Promise<string>;
    MATH_ADDITION_OVERFLOW(overrides?: CallOverrides): Promise<string>;
    MATH_DIVISION_BY_ZERO(overrides?: CallOverrides): Promise<string>;
    MATH_MULTIPLICATION_OVERFLOW(overrides?: CallOverrides): Promise<string>;
    NOT_IMPLEMENTED(overrides?: CallOverrides): Promise<string>;
    POOL_CANT_ADD_CREDIT_MANAGER_TWICE(overrides?: CallOverrides): Promise<string>;
    POOL_CONNECTED_CREDIT_MANAGERS_ONLY(overrides?: CallOverrides): Promise<string>;
    POOL_INCOMPATIBLE_CREDIT_ACCOUNT_MANAGER(overrides?: CallOverrides): Promise<string>;
    POOL_INCORRECT_WITHDRAW_FEE(overrides?: CallOverrides): Promise<string>;
    POOL_MORE_THAN_EXPECTED_LIQUIDITY_LIMIT(overrides?: CallOverrides): Promise<string>;
    REGISTERED_CREDIT_ACCOUNT_MANAGERS_ONLY(overrides?: CallOverrides): Promise<string>;
    REGISTERED_POOLS_ONLY(overrides?: CallOverrides): Promise<string>;
    TD_CONTRIBUTOR_IS_NOT_REGISTERED(overrides?: CallOverrides): Promise<string>;
    TD_INCORRECT_WEIGHTS(overrides?: CallOverrides): Promise<string>;
    TD_NON_ZERO_BALANCE_AFTER_DISTRIBUTION(overrides?: CallOverrides): Promise<string>;
    TD_WALLET_IS_ALREADY_CONNECTED_TO_VC(overrides?: CallOverrides): Promise<string>;
    WG_DESTINATION_IS_NOT_WETH_COMPATIBLE(overrides?: CallOverrides): Promise<string>;
    WG_NOT_ENOUGH_FUNDS(overrides?: CallOverrides): Promise<string>;
    WG_RECEIVE_IS_NOT_ALLOWED(overrides?: CallOverrides): Promise<string>;
    ZERO_ADDRESS_IS_NOT_ALLOWED(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        ACL_CALLER_NOT_CONFIGURATOR(overrides?: CallOverrides): Promise<string>;
        ACL_CALLER_NOT_PAUSABLE_ADMIN(overrides?: CallOverrides): Promise<string>;
        AF_CANT_CLOSE_CREDIT_ACCOUNT_IN_THE_SAME_BLOCK(overrides?: CallOverrides): Promise<string>;
        AF_CREDIT_ACCOUNT_NOT_IN_STOCK(overrides?: CallOverrides): Promise<string>;
        AF_EXTERNAL_ACCOUNTS_ARE_FORBIDDEN(overrides?: CallOverrides): Promise<string>;
        AF_MINING_IS_FINISHED(overrides?: CallOverrides): Promise<string>;
        AS_ADDRESS_NOT_FOUND(overrides?: CallOverrides): Promise<string>;
        CA_CONNECTED_CREDIT_MANAGER_ONLY(overrides?: CallOverrides): Promise<string>;
        CA_FACTORY_ONLY(overrides?: CallOverrides): Promise<string>;
        CR_CREDIT_MANAGER_ALREADY_ADDED(overrides?: CallOverrides): Promise<string>;
        CR_POOL_ALREADY_ADDED(overrides?: CallOverrides): Promise<string>;
        INCORRECT_ARRAY_LENGTH(overrides?: CallOverrides): Promise<string>;
        INCORRECT_PARAMETER(overrides?: CallOverrides): Promise<string>;
        INCORRECT_PATH_LENGTH(overrides?: CallOverrides): Promise<string>;
        MATH_ADDITION_OVERFLOW(overrides?: CallOverrides): Promise<string>;
        MATH_DIVISION_BY_ZERO(overrides?: CallOverrides): Promise<string>;
        MATH_MULTIPLICATION_OVERFLOW(overrides?: CallOverrides): Promise<string>;
        NOT_IMPLEMENTED(overrides?: CallOverrides): Promise<string>;
        POOL_CANT_ADD_CREDIT_MANAGER_TWICE(overrides?: CallOverrides): Promise<string>;
        POOL_CONNECTED_CREDIT_MANAGERS_ONLY(overrides?: CallOverrides): Promise<string>;
        POOL_INCOMPATIBLE_CREDIT_ACCOUNT_MANAGER(overrides?: CallOverrides): Promise<string>;
        POOL_INCORRECT_WITHDRAW_FEE(overrides?: CallOverrides): Promise<string>;
        POOL_MORE_THAN_EXPECTED_LIQUIDITY_LIMIT(overrides?: CallOverrides): Promise<string>;
        REGISTERED_CREDIT_ACCOUNT_MANAGERS_ONLY(overrides?: CallOverrides): Promise<string>;
        REGISTERED_POOLS_ONLY(overrides?: CallOverrides): Promise<string>;
        TD_CONTRIBUTOR_IS_NOT_REGISTERED(overrides?: CallOverrides): Promise<string>;
        TD_INCORRECT_WEIGHTS(overrides?: CallOverrides): Promise<string>;
        TD_NON_ZERO_BALANCE_AFTER_DISTRIBUTION(overrides?: CallOverrides): Promise<string>;
        TD_WALLET_IS_ALREADY_CONNECTED_TO_VC(overrides?: CallOverrides): Promise<string>;
        WG_DESTINATION_IS_NOT_WETH_COMPATIBLE(overrides?: CallOverrides): Promise<string>;
        WG_NOT_ENOUGH_FUNDS(overrides?: CallOverrides): Promise<string>;
        WG_RECEIVE_IS_NOT_ALLOWED(overrides?: CallOverrides): Promise<string>;
        ZERO_ADDRESS_IS_NOT_ALLOWED(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        ACL_CALLER_NOT_CONFIGURATOR(overrides?: CallOverrides): Promise<BigNumber>;
        ACL_CALLER_NOT_PAUSABLE_ADMIN(overrides?: CallOverrides): Promise<BigNumber>;
        AF_CANT_CLOSE_CREDIT_ACCOUNT_IN_THE_SAME_BLOCK(overrides?: CallOverrides): Promise<BigNumber>;
        AF_CREDIT_ACCOUNT_NOT_IN_STOCK(overrides?: CallOverrides): Promise<BigNumber>;
        AF_EXTERNAL_ACCOUNTS_ARE_FORBIDDEN(overrides?: CallOverrides): Promise<BigNumber>;
        AF_MINING_IS_FINISHED(overrides?: CallOverrides): Promise<BigNumber>;
        AS_ADDRESS_NOT_FOUND(overrides?: CallOverrides): Promise<BigNumber>;
        CA_CONNECTED_CREDIT_MANAGER_ONLY(overrides?: CallOverrides): Promise<BigNumber>;
        CA_FACTORY_ONLY(overrides?: CallOverrides): Promise<BigNumber>;
        CR_CREDIT_MANAGER_ALREADY_ADDED(overrides?: CallOverrides): Promise<BigNumber>;
        CR_POOL_ALREADY_ADDED(overrides?: CallOverrides): Promise<BigNumber>;
        INCORRECT_ARRAY_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
        INCORRECT_PARAMETER(overrides?: CallOverrides): Promise<BigNumber>;
        INCORRECT_PATH_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;
        MATH_ADDITION_OVERFLOW(overrides?: CallOverrides): Promise<BigNumber>;
        MATH_DIVISION_BY_ZERO(overrides?: CallOverrides): Promise<BigNumber>;
        MATH_MULTIPLICATION_OVERFLOW(overrides?: CallOverrides): Promise<BigNumber>;
        NOT_IMPLEMENTED(overrides?: CallOverrides): Promise<BigNumber>;
        POOL_CANT_ADD_CREDIT_MANAGER_TWICE(overrides?: CallOverrides): Promise<BigNumber>;
        POOL_CONNECTED_CREDIT_MANAGERS_ONLY(overrides?: CallOverrides): Promise<BigNumber>;
        POOL_INCOMPATIBLE_CREDIT_ACCOUNT_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;
        POOL_INCORRECT_WITHDRAW_FEE(overrides?: CallOverrides): Promise<BigNumber>;
        POOL_MORE_THAN_EXPECTED_LIQUIDITY_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;
        REGISTERED_CREDIT_ACCOUNT_MANAGERS_ONLY(overrides?: CallOverrides): Promise<BigNumber>;
        REGISTERED_POOLS_ONLY(overrides?: CallOverrides): Promise<BigNumber>;
        TD_CONTRIBUTOR_IS_NOT_REGISTERED(overrides?: CallOverrides): Promise<BigNumber>;
        TD_INCORRECT_WEIGHTS(overrides?: CallOverrides): Promise<BigNumber>;
        TD_NON_ZERO_BALANCE_AFTER_DISTRIBUTION(overrides?: CallOverrides): Promise<BigNumber>;
        TD_WALLET_IS_ALREADY_CONNECTED_TO_VC(overrides?: CallOverrides): Promise<BigNumber>;
        WG_DESTINATION_IS_NOT_WETH_COMPATIBLE(overrides?: CallOverrides): Promise<BigNumber>;
        WG_NOT_ENOUGH_FUNDS(overrides?: CallOverrides): Promise<BigNumber>;
        WG_RECEIVE_IS_NOT_ALLOWED(overrides?: CallOverrides): Promise<BigNumber>;
        ZERO_ADDRESS_IS_NOT_ALLOWED(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ACL_CALLER_NOT_CONFIGURATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ACL_CALLER_NOT_PAUSABLE_ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        AF_CANT_CLOSE_CREDIT_ACCOUNT_IN_THE_SAME_BLOCK(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        AF_CREDIT_ACCOUNT_NOT_IN_STOCK(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        AF_EXTERNAL_ACCOUNTS_ARE_FORBIDDEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        AF_MINING_IS_FINISHED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        AS_ADDRESS_NOT_FOUND(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CA_CONNECTED_CREDIT_MANAGER_ONLY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CA_FACTORY_ONLY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CR_CREDIT_MANAGER_ALREADY_ADDED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CR_POOL_ALREADY_ADDED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INCORRECT_ARRAY_LENGTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INCORRECT_PARAMETER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        INCORRECT_PATH_LENGTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MATH_ADDITION_OVERFLOW(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MATH_DIVISION_BY_ZERO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MATH_MULTIPLICATION_OVERFLOW(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NOT_IMPLEMENTED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        POOL_CANT_ADD_CREDIT_MANAGER_TWICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        POOL_CONNECTED_CREDIT_MANAGERS_ONLY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        POOL_INCOMPATIBLE_CREDIT_ACCOUNT_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        POOL_INCORRECT_WITHDRAW_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        POOL_MORE_THAN_EXPECTED_LIQUIDITY_LIMIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REGISTERED_CREDIT_ACCOUNT_MANAGERS_ONLY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REGISTERED_POOLS_ONLY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TD_CONTRIBUTOR_IS_NOT_REGISTERED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TD_INCORRECT_WEIGHTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TD_NON_ZERO_BALANCE_AFTER_DISTRIBUTION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TD_WALLET_IS_ALREADY_CONNECTED_TO_VC(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WG_DESTINATION_IS_NOT_WETH_COMPATIBLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WG_NOT_ENOUGH_FUNDS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        WG_RECEIVE_IS_NOT_ALLOWED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ZERO_ADDRESS_IS_NOT_ALLOWED(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
