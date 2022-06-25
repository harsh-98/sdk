import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface ICurvePoolInterface extends utils.Interface {
    functions: {
        "balances(int128)": FunctionFragment;
        "balances(uint256)": FunctionFragment;
        "coins(int128)": FunctionFragment;
        "coins(uint256)": FunctionFragment;
        "exchange(int128,int128,uint256,uint256)": FunctionFragment;
        "exchange_underlying(int128,int128,uint256,uint256)": FunctionFragment;
        "get_dy(int128,int128,uint256)": FunctionFragment;
        "get_dy_underlying(int128,int128,uint256)": FunctionFragment;
        "get_virtual_price()": FunctionFragment;
        "remove_liquidity_one_coin(uint256,int128,uint256)": FunctionFragment;
        "token()": FunctionFragment;
        "underlying_coins(int128)": FunctionFragment;
        "underlying_coins(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "balances(int128)" | "balances(uint256)" | "coins(int128)" | "coins(uint256)" | "exchange" | "exchange_underlying" | "get_dy" | "get_dy_underlying" | "get_virtual_price" | "remove_liquidity_one_coin" | "token" | "underlying_coins(int128)" | "underlying_coins(uint256)"): FunctionFragment;
    encodeFunctionData(functionFragment: "balances(int128)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "balances(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "coins(int128)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "coins(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "exchange", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exchange_underlying", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "get_dy", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "get_dy_underlying", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "get_virtual_price", values?: undefined): string;
    encodeFunctionData(functionFragment: "remove_liquidity_one_coin", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlying_coins(int128)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "underlying_coins(uint256)", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "balances(int128)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balances(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coins(int128)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coins(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange_underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy_underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_virtual_price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying_coins(int128)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying_coins(uint256)", data: BytesLike): Result;
    events: {};
}
export interface ICurvePool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICurvePoolInterface;
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
        "balances(int128)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "balances(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "coins(int128)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        "coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        get_virtual_price(overrides?: CallOverrides): Promise<[BigNumber]>;
        remove_liquidity_one_coin(_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        token(overrides?: CallOverrides): Promise<[string]>;
        "underlying_coins(int128)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        "underlying_coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    "balances(int128)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "balances(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "coins(int128)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
    exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exchange_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
    remove_liquidity_one_coin(_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    token(overrides?: CallOverrides): Promise<string>;
    "underlying_coins(int128)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "underlying_coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        "balances(int128)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "balances(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "coins(int128)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: CallOverrides): Promise<void>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        remove_liquidity_one_coin(_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        token(overrides?: CallOverrides): Promise<string>;
        "underlying_coins(int128)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "underlying_coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        "balances(int128)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "balances(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "coins(int128)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        remove_liquidity_one_coin(_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        "underlying_coins(int128)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "underlying_coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        "balances(int128)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "balances(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "coins(int128)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_virtual_price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove_liquidity_one_coin(_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "underlying_coins(int128)"(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "underlying_coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
