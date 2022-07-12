import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface YearnFeedTestInterface extends utils.Interface {
    functions: {
        "IS_TEST()": FunctionFragment;
        "addressProvider()": FunctionFragment;
        "failed()": FunctionFragment;
        "pf()": FunctionFragment;
        "setUp()": FunctionFragment;
        "test_YPF_01_constructor_sets_correct_values()": FunctionFragment;
        "test_YPF_02_constructor_reverts_for_zero_addresses()": FunctionFragment;
        "test_YPF_04_latestRoundData_works_correctly(uint8)": FunctionFragment;
        "test_YPF_05_latestRoundData_reverts_for_out_of_bounds_prices()": FunctionFragment;
        "underlyingPf()": FunctionFragment;
        "yearnMock()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_TEST" | "addressProvider" | "failed" | "pf" | "setUp" | "test_YPF_01_constructor_sets_correct_values" | "test_YPF_02_constructor_reverts_for_zero_addresses" | "test_YPF_04_latestRoundData_works_correctly" | "test_YPF_05_latestRoundData_reverts_for_out_of_bounds_prices" | "underlyingPf" | "yearnMock"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
    encodeFunctionData(functionFragment: "addressProvider", values?: undefined): string;
    encodeFunctionData(functionFragment: "failed", values?: undefined): string;
    encodeFunctionData(functionFragment: "pf", values?: undefined): string;
    encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_YPF_01_constructor_sets_correct_values", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_YPF_02_constructor_reverts_for_zero_addresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "test_YPF_04_latestRoundData_works_correctly", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "test_YPF_05_latestRoundData_reverts_for_out_of_bounds_prices", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlyingPf", values?: undefined): string;
    encodeFunctionData(functionFragment: "yearnMock", values?: undefined): string;
    decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addressProvider", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_YPF_01_constructor_sets_correct_values", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_YPF_02_constructor_reverts_for_zero_addresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_YPF_04_latestRoundData_works_correctly", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "test_YPF_05_latestRoundData_reverts_for_out_of_bounds_prices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlyingPf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "yearnMock", data: BytesLike): Result;
    events: {
        "log(string)": EventFragment;
        "log_address(address)": EventFragment;
        "log_bytes(bytes)": EventFragment;
        "log_bytes32(bytes32)": EventFragment;
        "log_int(int256)": EventFragment;
        "log_named_address(string,address)": EventFragment;
        "log_named_bytes(string,bytes)": EventFragment;
        "log_named_bytes32(string,bytes32)": EventFragment;
        "log_named_decimal_int(string,int256,uint256)": EventFragment;
        "log_named_decimal_uint(string,uint256,uint256)": EventFragment;
        "log_named_int(string,int256)": EventFragment;
        "log_named_string(string,string)": EventFragment;
        "log_named_uint(string,uint256)": EventFragment;
        "log_string(string)": EventFragment;
        "log_uint(uint256)": EventFragment;
        "logs(bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "log"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_address"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_bytes"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_bytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_address"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_bytes"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_bytes32"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_decimal_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_decimal_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_int"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_string"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_named_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_string"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "log_uint"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "logs"): EventFragment;
}
export interface logEventObject {
    arg0: string;
}
export declare type logEvent = TypedEvent<[string], logEventObject>;
export declare type logEventFilter = TypedEventFilter<logEvent>;
export interface log_addressEventObject {
    arg0: string;
}
export declare type log_addressEvent = TypedEvent<[string], log_addressEventObject>;
export declare type log_addressEventFilter = TypedEventFilter<log_addressEvent>;
export interface log_bytesEventObject {
    arg0: string;
}
export declare type log_bytesEvent = TypedEvent<[string], log_bytesEventObject>;
export declare type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;
export interface log_bytes32EventObject {
    arg0: string;
}
export declare type log_bytes32Event = TypedEvent<[string], log_bytes32EventObject>;
export declare type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;
export interface log_intEventObject {
    arg0: BigNumber;
}
export declare type log_intEvent = TypedEvent<[BigNumber], log_intEventObject>;
export declare type log_intEventFilter = TypedEventFilter<log_intEvent>;
export interface log_named_addressEventObject {
    key: string;
    val: string;
}
export declare type log_named_addressEvent = TypedEvent<[
    string,
    string
], log_named_addressEventObject>;
export declare type log_named_addressEventFilter = TypedEventFilter<log_named_addressEvent>;
export interface log_named_bytesEventObject {
    key: string;
    val: string;
}
export declare type log_named_bytesEvent = TypedEvent<[
    string,
    string
], log_named_bytesEventObject>;
export declare type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;
export interface log_named_bytes32EventObject {
    key: string;
    val: string;
}
export declare type log_named_bytes32Event = TypedEvent<[
    string,
    string
], log_named_bytes32EventObject>;
export declare type log_named_bytes32EventFilter = TypedEventFilter<log_named_bytes32Event>;
export interface log_named_decimal_intEventObject {
    key: string;
    val: BigNumber;
    decimals: BigNumber;
}
export declare type log_named_decimal_intEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], log_named_decimal_intEventObject>;
export declare type log_named_decimal_intEventFilter = TypedEventFilter<log_named_decimal_intEvent>;
export interface log_named_decimal_uintEventObject {
    key: string;
    val: BigNumber;
    decimals: BigNumber;
}
export declare type log_named_decimal_uintEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], log_named_decimal_uintEventObject>;
export declare type log_named_decimal_uintEventFilter = TypedEventFilter<log_named_decimal_uintEvent>;
export interface log_named_intEventObject {
    key: string;
    val: BigNumber;
}
export declare type log_named_intEvent = TypedEvent<[
    string,
    BigNumber
], log_named_intEventObject>;
export declare type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;
export interface log_named_stringEventObject {
    key: string;
    val: string;
}
export declare type log_named_stringEvent = TypedEvent<[
    string,
    string
], log_named_stringEventObject>;
export declare type log_named_stringEventFilter = TypedEventFilter<log_named_stringEvent>;
export interface log_named_uintEventObject {
    key: string;
    val: BigNumber;
}
export declare type log_named_uintEvent = TypedEvent<[
    string,
    BigNumber
], log_named_uintEventObject>;
export declare type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;
export interface log_stringEventObject {
    arg0: string;
}
export declare type log_stringEvent = TypedEvent<[string], log_stringEventObject>;
export declare type log_stringEventFilter = TypedEventFilter<log_stringEvent>;
export interface log_uintEventObject {
    arg0: BigNumber;
}
export declare type log_uintEvent = TypedEvent<[BigNumber], log_uintEventObject>;
export declare type log_uintEventFilter = TypedEventFilter<log_uintEvent>;
export interface logsEventObject {
    arg0: string;
}
export declare type logsEvent = TypedEvent<[string], logsEventObject>;
export declare type logsEventFilter = TypedEventFilter<logsEvent>;
export interface YearnFeedTest extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: YearnFeedTestInterface;
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
        IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;
        addressProvider(overrides?: CallOverrides): Promise<[string]>;
        failed(overrides?: CallOverrides): Promise<[boolean]>;
        pf(overrides?: CallOverrides): Promise<[string]>;
        setUp(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_YPF_01_constructor_sets_correct_values(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_YPF_02_constructor_reverts_for_zero_addresses(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_YPF_04_latestRoundData_works_correctly(add: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        test_YPF_05_latestRoundData_reverts_for_out_of_bounds_prices(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        underlyingPf(overrides?: CallOverrides): Promise<[string]>;
        yearnMock(overrides?: CallOverrides): Promise<[string]>;
    };
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;
    addressProvider(overrides?: CallOverrides): Promise<string>;
    failed(overrides?: CallOverrides): Promise<boolean>;
    pf(overrides?: CallOverrides): Promise<string>;
    setUp(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_YPF_01_constructor_sets_correct_values(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_YPF_02_constructor_reverts_for_zero_addresses(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_YPF_04_latestRoundData_works_correctly(add: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    test_YPF_05_latestRoundData_reverts_for_out_of_bounds_prices(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    underlyingPf(overrides?: CallOverrides): Promise<string>;
    yearnMock(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        IS_TEST(overrides?: CallOverrides): Promise<boolean>;
        addressProvider(overrides?: CallOverrides): Promise<string>;
        failed(overrides?: CallOverrides): Promise<boolean>;
        pf(overrides?: CallOverrides): Promise<string>;
        setUp(overrides?: CallOverrides): Promise<void>;
        test_YPF_01_constructor_sets_correct_values(overrides?: CallOverrides): Promise<void>;
        test_YPF_02_constructor_reverts_for_zero_addresses(overrides?: CallOverrides): Promise<void>;
        test_YPF_04_latestRoundData_works_correctly(add: BigNumberish, overrides?: CallOverrides): Promise<void>;
        test_YPF_05_latestRoundData_reverts_for_out_of_bounds_prices(overrides?: CallOverrides): Promise<void>;
        underlyingPf(overrides?: CallOverrides): Promise<string>;
        yearnMock(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "log(string)"(arg0?: null): logEventFilter;
        log(arg0?: null): logEventFilter;
        "log_address(address)"(arg0?: null): log_addressEventFilter;
        log_address(arg0?: null): log_addressEventFilter;
        "log_bytes(bytes)"(arg0?: null): log_bytesEventFilter;
        log_bytes(arg0?: null): log_bytesEventFilter;
        "log_bytes32(bytes32)"(arg0?: null): log_bytes32EventFilter;
        log_bytes32(arg0?: null): log_bytes32EventFilter;
        "log_int(int256)"(arg0?: null): log_intEventFilter;
        log_int(arg0?: null): log_intEventFilter;
        "log_named_address(string,address)"(key?: null, val?: null): log_named_addressEventFilter;
        log_named_address(key?: null, val?: null): log_named_addressEventFilter;
        "log_named_bytes(string,bytes)"(key?: null, val?: null): log_named_bytesEventFilter;
        log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;
        "log_named_bytes32(string,bytes32)"(key?: null, val?: null): log_named_bytes32EventFilter;
        log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;
        "log_named_decimal_int(string,int256,uint256)"(key?: null, val?: null, decimals?: null): log_named_decimal_intEventFilter;
        log_named_decimal_int(key?: null, val?: null, decimals?: null): log_named_decimal_intEventFilter;
        "log_named_decimal_uint(string,uint256,uint256)"(key?: null, val?: null, decimals?: null): log_named_decimal_uintEventFilter;
        log_named_decimal_uint(key?: null, val?: null, decimals?: null): log_named_decimal_uintEventFilter;
        "log_named_int(string,int256)"(key?: null, val?: null): log_named_intEventFilter;
        log_named_int(key?: null, val?: null): log_named_intEventFilter;
        "log_named_string(string,string)"(key?: null, val?: null): log_named_stringEventFilter;
        log_named_string(key?: null, val?: null): log_named_stringEventFilter;
        "log_named_uint(string,uint256)"(key?: null, val?: null): log_named_uintEventFilter;
        log_named_uint(key?: null, val?: null): log_named_uintEventFilter;
        "log_string(string)"(arg0?: null): log_stringEventFilter;
        log_string(arg0?: null): log_stringEventFilter;
        "log_uint(uint256)"(arg0?: null): log_uintEventFilter;
        log_uint(arg0?: null): log_uintEventFilter;
        "logs(bytes)"(arg0?: null): logsEventFilter;
        logs(arg0?: null): logsEventFilter;
    };
    estimateGas: {
        IS_TEST(overrides?: CallOverrides): Promise<BigNumber>;
        addressProvider(overrides?: CallOverrides): Promise<BigNumber>;
        failed(overrides?: CallOverrides): Promise<BigNumber>;
        pf(overrides?: CallOverrides): Promise<BigNumber>;
        setUp(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_YPF_01_constructor_sets_correct_values(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_YPF_02_constructor_reverts_for_zero_addresses(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_YPF_04_latestRoundData_works_correctly(add: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        test_YPF_05_latestRoundData_reverts_for_out_of_bounds_prices(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        underlyingPf(overrides?: CallOverrides): Promise<BigNumber>;
        yearnMock(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pf(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setUp(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_YPF_01_constructor_sets_correct_values(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_YPF_02_constructor_reverts_for_zero_addresses(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_YPF_04_latestRoundData_works_correctly(add: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        test_YPF_05_latestRoundData_reverts_for_out_of_bounds_prices(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        underlyingPf(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        yearnMock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
