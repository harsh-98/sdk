import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface CurveV1Adapter4AssetsInterface extends utils.Interface {
    functions: {
        "A()": FunctionFragment;
        "A_precise()": FunctionFragment;
        "_gearboxAdapterType()": FunctionFragment;
        "_gearboxAdapterVersion()": FunctionFragment;
        "add_all_liquidity_one_coin(int128,uint256)": FunctionFragment;
        "add_liquidity(uint256[4],uint256)": FunctionFragment;
        "admin()": FunctionFragment;
        "admin_balances(uint256)": FunctionFragment;
        "admin_fee()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "balances(int128)": FunctionFragment;
        "balances(uint256)": FunctionFragment;
        "block_timestamp_last()": FunctionFragment;
        "calc_token_amount(uint256[4],bool)": FunctionFragment;
        "calc_withdraw_one_coin(uint256,int128)": FunctionFragment;
        "coins(int128)": FunctionFragment;
        "coins(uint256)": FunctionFragment;
        "creditFacade()": FunctionFragment;
        "creditManager()": FunctionFragment;
        "decimals()": FunctionFragment;
        "exchange(int128,int128,uint256,uint256)": FunctionFragment;
        "exchange_all(int128,int128,uint256)": FunctionFragment;
        "exchange_all_underlying(int128,int128,uint256)": FunctionFragment;
        "exchange_underlying(int128,int128,uint256,uint256)": FunctionFragment;
        "fee()": FunctionFragment;
        "future_A()": FunctionFragment;
        "future_A_time()": FunctionFragment;
        "get_balances()": FunctionFragment;
        "get_dy(int128,int128,uint256)": FunctionFragment;
        "get_dy_underlying(int128,int128,uint256)": FunctionFragment;
        "get_previous_balances()": FunctionFragment;
        "get_price_cumulative_last()": FunctionFragment;
        "get_twap_balances(uint256[4],uint256[4],uint256)": FunctionFragment;
        "get_virtual_price()": FunctionFragment;
        "initial_A()": FunctionFragment;
        "initial_A_time()": FunctionFragment;
        "lp_token()": FunctionFragment;
        "metapoolBase()": FunctionFragment;
        "nCoins()": FunctionFragment;
        "name()": FunctionFragment;
        "remove_all_liquidity_one_coin(int128,uint256)": FunctionFragment;
        "remove_liquidity(uint256,uint256[4])": FunctionFragment;
        "remove_liquidity_imbalance(uint256[4],uint256)": FunctionFragment;
        "remove_liquidity_one_coin(uint256,int128,uint256)": FunctionFragment;
        "symbol()": FunctionFragment;
        "targetContract()": FunctionFragment;
        "token()": FunctionFragment;
        "token0()": FunctionFragment;
        "token1()": FunctionFragment;
        "token2()": FunctionFragment;
        "token3()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "underlying0()": FunctionFragment;
        "underlying1()": FunctionFragment;
        "underlying2()": FunctionFragment;
        "underlying3()": FunctionFragment;
        "underlying_coins(int128)": FunctionFragment;
        "underlying_coins(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "A" | "A_precise" | "_gearboxAdapterType" | "_gearboxAdapterVersion" | "add_all_liquidity_one_coin" | "add_liquidity" | "admin" | "admin_balances" | "admin_fee" | "allowance" | "balanceOf" | "balances(int128)" | "balances(uint256)" | "block_timestamp_last" | "calc_token_amount" | "calc_withdraw_one_coin" | "coins(int128)" | "coins(uint256)" | "creditFacade" | "creditManager" | "decimals" | "exchange" | "exchange_all" | "exchange_all_underlying" | "exchange_underlying" | "fee" | "future_A" | "future_A_time" | "get_balances" | "get_dy" | "get_dy_underlying" | "get_previous_balances" | "get_price_cumulative_last" | "get_twap_balances" | "get_virtual_price" | "initial_A" | "initial_A_time" | "lp_token" | "metapoolBase" | "nCoins" | "name" | "remove_all_liquidity_one_coin" | "remove_liquidity" | "remove_liquidity_imbalance" | "remove_liquidity_one_coin" | "symbol" | "targetContract" | "token" | "token0" | "token1" | "token2" | "token3" | "totalSupply" | "underlying0" | "underlying1" | "underlying2" | "underlying3" | "underlying_coins(int128)" | "underlying_coins(uint256)"): FunctionFragment;
    encodeFunctionData(functionFragment: "A", values?: undefined): string;
    encodeFunctionData(functionFragment: "A_precise", values?: undefined): string;
    encodeFunctionData(functionFragment: "_gearboxAdapterType", values?: undefined): string;
    encodeFunctionData(functionFragment: "_gearboxAdapterVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "add_all_liquidity_one_coin", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "add_liquidity", values: [
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin_balances", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "admin_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "balances(int128)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "balances(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "block_timestamp_last", values?: undefined): string;
    encodeFunctionData(functionFragment: "calc_token_amount", values: [[BigNumberish, BigNumberish, BigNumberish, BigNumberish], boolean]): string;
    encodeFunctionData(functionFragment: "calc_withdraw_one_coin", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "coins(int128)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "coins(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "creditFacade", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "exchange", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exchange_all", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exchange_all_underlying", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exchange_underlying", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_A_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_balances", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_dy", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "get_dy_underlying", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "get_previous_balances", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_price_cumulative_last", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_twap_balances", values: [
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "get_virtual_price", values?: undefined): string;
    encodeFunctionData(functionFragment: "initial_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "initial_A_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "lp_token", values?: undefined): string;
    encodeFunctionData(functionFragment: "metapoolBase", values?: undefined): string;
    encodeFunctionData(functionFragment: "nCoins", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "remove_all_liquidity_one_coin", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "remove_liquidity", values: [
        BigNumberish,
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ]
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_imbalance", values: [
        [
            BigNumberish,
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_one_coin", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    encodeFunctionData(functionFragment: "token2", values?: undefined): string;
    encodeFunctionData(functionFragment: "token3", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlying0", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlying1", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlying2", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlying3", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlying_coins(int128)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "underlying_coins(uint256)", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "A_precise", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_gearboxAdapterType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_gearboxAdapterVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_all_liquidity_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balances(int128)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balances(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "block_timestamp_last", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_token_amount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_withdraw_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coins(int128)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coins(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditFacade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange_all", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange_all_underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange_underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_A_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy_underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_previous_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_price_cumulative_last", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_twap_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_virtual_price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initial_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initial_A_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lp_token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "metapoolBase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_all_liquidity_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_imbalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying_coins(int128)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying_coins(uint256)", data: BytesLike): Result;
    events: {};
}
export interface CurveV1Adapter4Assets extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CurveV1Adapter4AssetsInterface;
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
        A(overrides?: CallOverrides): Promise<[BigNumber]>;
        A_precise(overrides?: CallOverrides): Promise<[BigNumber]>;
        _gearboxAdapterType(overrides?: CallOverrides): Promise<[number]>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<[number]>;
        add_all_liquidity_one_coin(i: BigNumberish, rateMinRAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        add_liquidity(amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        admin_balances(i: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        admin_fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        "balances(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "balances(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        block_timestamp_last(overrides?: CallOverrides): Promise<[BigNumber]>;
        calc_token_amount(_amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _is_deposit: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
        calc_withdraw_one_coin(_burn_amount: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        "coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        creditFacade(overrides?: CallOverrides): Promise<[string]>;
        creditManager(overrides?: CallOverrides): Promise<[string]>;
        decimals(overrides?: CallOverrides): Promise<[BigNumber]>;
        exchange(i: BigNumberish, j: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exchange_all(i: BigNumberish, j: BigNumberish, rateMinRAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exchange_all_underlying(i: BigNumberish, j: BigNumberish, rateMinRAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_A(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_A_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        get_balances(overrides?: CallOverrides): Promise<[[BigNumber, BigNumber, BigNumber, BigNumber]]>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        get_previous_balances(overrides?: CallOverrides): Promise<[[BigNumber, BigNumber, BigNumber, BigNumber]]>;
        get_price_cumulative_last(overrides?: CallOverrides): Promise<[[BigNumber, BigNumber, BigNumber, BigNumber]]>;
        get_twap_balances(_first_balances: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _last_balances: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _time_elapsed: BigNumberish, overrides?: CallOverrides): Promise<[[BigNumber, BigNumber, BigNumber, BigNumber]]>;
        get_virtual_price(overrides?: CallOverrides): Promise<[BigNumber]>;
        initial_A(overrides?: CallOverrides): Promise<[BigNumber]>;
        initial_A_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        lp_token(overrides?: CallOverrides): Promise<[string]>;
        metapoolBase(overrides?: CallOverrides): Promise<[string]>;
        nCoins(overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        remove_all_liquidity_one_coin(i: BigNumberish, minRateRAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        remove_liquidity(arg0: BigNumberish, arg1: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        remove_liquidity_imbalance(amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        remove_liquidity_one_coin(arg0: BigNumberish, i: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        targetContract(overrides?: CallOverrides): Promise<[string]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        token0(overrides?: CallOverrides): Promise<[string]>;
        token1(overrides?: CallOverrides): Promise<[string]>;
        token2(overrides?: CallOverrides): Promise<[string]>;
        token3(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        underlying0(overrides?: CallOverrides): Promise<[string]>;
        underlying1(overrides?: CallOverrides): Promise<[string]>;
        underlying2(overrides?: CallOverrides): Promise<[string]>;
        underlying3(overrides?: CallOverrides): Promise<[string]>;
        "underlying_coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        "underlying_coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    A(overrides?: CallOverrides): Promise<BigNumber>;
    A_precise(overrides?: CallOverrides): Promise<BigNumber>;
    _gearboxAdapterType(overrides?: CallOverrides): Promise<number>;
    _gearboxAdapterVersion(overrides?: CallOverrides): Promise<number>;
    add_all_liquidity_one_coin(i: BigNumberish, rateMinRAY: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    add_liquidity(amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], arg1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    admin_balances(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    "balances(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "balances(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    block_timestamp_last(overrides?: CallOverrides): Promise<BigNumber>;
    calc_token_amount(_amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _is_deposit: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    calc_withdraw_one_coin(_burn_amount: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
    creditFacade(overrides?: CallOverrides): Promise<string>;
    creditManager(overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<BigNumber>;
    exchange(i: BigNumberish, j: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exchange_all(i: BigNumberish, j: BigNumberish, rateMinRAY: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exchange_all_underlying(i: BigNumberish, j: BigNumberish, rateMinRAY: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exchange_underlying(i: BigNumberish, j: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fee(overrides?: CallOverrides): Promise<BigNumber>;
    future_A(overrides?: CallOverrides): Promise<BigNumber>;
    future_A_time(overrides?: CallOverrides): Promise<BigNumber>;
    get_balances(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    get_previous_balances(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    get_price_cumulative_last(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    get_twap_balances(_first_balances: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _last_balances: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _time_elapsed: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
    get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
    initial_A(overrides?: CallOverrides): Promise<BigNumber>;
    initial_A_time(overrides?: CallOverrides): Promise<BigNumber>;
    lp_token(overrides?: CallOverrides): Promise<string>;
    metapoolBase(overrides?: CallOverrides): Promise<string>;
    nCoins(overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    remove_all_liquidity_one_coin(i: BigNumberish, minRateRAY: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    remove_liquidity(arg0: BigNumberish, arg1: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    remove_liquidity_imbalance(amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], arg1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    remove_liquidity_one_coin(arg0: BigNumberish, i: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    targetContract(overrides?: CallOverrides): Promise<string>;
    token(overrides?: CallOverrides): Promise<string>;
    token0(overrides?: CallOverrides): Promise<string>;
    token1(overrides?: CallOverrides): Promise<string>;
    token2(overrides?: CallOverrides): Promise<string>;
    token3(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    underlying0(overrides?: CallOverrides): Promise<string>;
    underlying1(overrides?: CallOverrides): Promise<string>;
    underlying2(overrides?: CallOverrides): Promise<string>;
    underlying3(overrides?: CallOverrides): Promise<string>;
    "underlying_coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "underlying_coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        A(overrides?: CallOverrides): Promise<BigNumber>;
        A_precise(overrides?: CallOverrides): Promise<BigNumber>;
        _gearboxAdapterType(overrides?: CallOverrides): Promise<number>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<number>;
        add_all_liquidity_one_coin(i: BigNumberish, rateMinRAY: BigNumberish, overrides?: CallOverrides): Promise<void>;
        add_liquidity(amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        admin(overrides?: CallOverrides): Promise<string>;
        admin_balances(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "balances(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "balances(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        block_timestamp_last(overrides?: CallOverrides): Promise<BigNumber>;
        calc_token_amount(_amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _is_deposit: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        calc_withdraw_one_coin(_burn_amount: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
        creditFacade(overrides?: CallOverrides): Promise<string>;
        creditManager(overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        exchange(i: BigNumberish, j: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exchange_all(i: BigNumberish, j: BigNumberish, rateMinRAY: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exchange_all_underlying(i: BigNumberish, j: BigNumberish, rateMinRAY: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_A(overrides?: CallOverrides): Promise<BigNumber>;
        future_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        get_balances(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_previous_balances(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        get_price_cumulative_last(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        get_twap_balances(_first_balances: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _last_balances: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _time_elapsed: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        lp_token(overrides?: CallOverrides): Promise<string>;
        metapoolBase(overrides?: CallOverrides): Promise<string>;
        nCoins(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        remove_all_liquidity_one_coin(i: BigNumberish, minRateRAY: BigNumberish, overrides?: CallOverrides): Promise<void>;
        remove_liquidity(arg0: BigNumberish, arg1: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], overrides?: CallOverrides): Promise<void>;
        remove_liquidity_imbalance(amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        remove_liquidity_one_coin(arg0: BigNumberish, i: BigNumberish, arg2: BigNumberish, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        targetContract(overrides?: CallOverrides): Promise<string>;
        token(overrides?: CallOverrides): Promise<string>;
        token0(overrides?: CallOverrides): Promise<string>;
        token1(overrides?: CallOverrides): Promise<string>;
        token2(overrides?: CallOverrides): Promise<string>;
        token3(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        underlying0(overrides?: CallOverrides): Promise<string>;
        underlying1(overrides?: CallOverrides): Promise<string>;
        underlying2(overrides?: CallOverrides): Promise<string>;
        underlying3(overrides?: CallOverrides): Promise<string>;
        "underlying_coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "underlying_coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        A(overrides?: CallOverrides): Promise<BigNumber>;
        A_precise(overrides?: CallOverrides): Promise<BigNumber>;
        _gearboxAdapterType(overrides?: CallOverrides): Promise<BigNumber>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<BigNumber>;
        add_all_liquidity_one_coin(i: BigNumberish, rateMinRAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        add_liquidity(amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        admin_balances(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "balances(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "balances(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        block_timestamp_last(overrides?: CallOverrides): Promise<BigNumber>;
        calc_token_amount(_amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _is_deposit: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        calc_withdraw_one_coin(_burn_amount: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        creditFacade(overrides?: CallOverrides): Promise<BigNumber>;
        creditManager(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        exchange(i: BigNumberish, j: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exchange_all(i: BigNumberish, j: BigNumberish, rateMinRAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exchange_all_underlying(i: BigNumberish, j: BigNumberish, rateMinRAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_A(overrides?: CallOverrides): Promise<BigNumber>;
        future_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        get_balances(overrides?: CallOverrides): Promise<BigNumber>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_previous_balances(overrides?: CallOverrides): Promise<BigNumber>;
        get_price_cumulative_last(overrides?: CallOverrides): Promise<BigNumber>;
        get_twap_balances(_first_balances: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _last_balances: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _time_elapsed: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        lp_token(overrides?: CallOverrides): Promise<BigNumber>;
        metapoolBase(overrides?: CallOverrides): Promise<BigNumber>;
        nCoins(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        remove_all_liquidity_one_coin(i: BigNumberish, minRateRAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        remove_liquidity(arg0: BigNumberish, arg1: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        remove_liquidity_imbalance(amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        remove_liquidity_one_coin(arg0: BigNumberish, i: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        targetContract(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        token0(overrides?: CallOverrides): Promise<BigNumber>;
        token1(overrides?: CallOverrides): Promise<BigNumber>;
        token2(overrides?: CallOverrides): Promise<BigNumber>;
        token3(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        underlying0(overrides?: CallOverrides): Promise<BigNumber>;
        underlying1(overrides?: CallOverrides): Promise<BigNumber>;
        underlying2(overrides?: CallOverrides): Promise<BigNumber>;
        underlying3(overrides?: CallOverrides): Promise<BigNumber>;
        "underlying_coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "underlying_coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        A_precise(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _gearboxAdapterType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        add_all_liquidity_one_coin(i: BigNumberish, rateMinRAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        add_liquidity(amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin_balances(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "balances(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "balances(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        block_timestamp_last(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calc_token_amount(_amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _is_deposit: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calc_withdraw_one_coin(_burn_amount: BigNumberish, i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditFacade(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchange(i: BigNumberish, j: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exchange_all(i: BigNumberish, j: BigNumberish, rateMinRAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exchange_all_underlying(i: BigNumberish, j: BigNumberish, rateMinRAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_A_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_balances(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_previous_balances(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_price_cumulative_last(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_twap_balances(_first_balances: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _last_balances: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], _time_elapsed: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_virtual_price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initial_A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initial_A_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lp_token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        metapoolBase(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nCoins(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove_all_liquidity_one_coin(i: BigNumberish, minRateRAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        remove_liquidity(arg0: BigNumberish, arg1: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        remove_liquidity_imbalance(amounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish], arg1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        remove_liquidity_one_coin(arg0: BigNumberish, i: BigNumberish, arg2: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token3(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        underlying0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        underlying1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        underlying2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        underlying3(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "underlying_coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "underlying_coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
