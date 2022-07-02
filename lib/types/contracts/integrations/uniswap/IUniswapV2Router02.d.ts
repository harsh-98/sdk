import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface IUniswapV2Router02Interface extends utils.Interface {
    functions: {
        "WETH()": FunctionFragment;
        "addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "addLiquidityETH(address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "factory()": FunctionFragment;
        "getAmountIn(uint256,uint256,uint256)": FunctionFragment;
        "getAmountOut(uint256,uint256,uint256)": FunctionFragment;
        "getAmountsIn(uint256,address[])": FunctionFragment;
        "getAmountsOut(uint256,address[])": FunctionFragment;
        "quote(uint256,uint256,uint256)": FunctionFragment;
        "removeLiquidity(address,address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityETH(address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityETHSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "removeLiquidityETHWithPermit(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
        "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
        "removeLiquidityWithPermit(address,address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
        "swapETHForExactTokens(uint256,address[],address,uint256)": FunctionFragment;
        "swapExactETHForTokens(uint256,address[],address,uint256)": FunctionFragment;
        "swapExactETHForTokensSupportingFeeOnTransferTokens(uint256,address[],address,uint256)": FunctionFragment;
        "swapExactTokensForETH(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapTokensForExactETH(uint256,uint256,address[],address,uint256)": FunctionFragment;
        "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "WETH" | "addLiquidity" | "addLiquidityETH" | "factory" | "getAmountIn" | "getAmountOut" | "getAmountsIn" | "getAmountsOut" | "quote" | "removeLiquidity" | "removeLiquidityETH" | "removeLiquidityETHSupportingFeeOnTransferTokens" | "removeLiquidityETHWithPermit" | "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens" | "removeLiquidityWithPermit" | "swapETHForExactTokens" | "swapExactETHForTokens" | "swapExactETHForTokensSupportingFeeOnTransferTokens" | "swapExactTokensForETH" | "swapExactTokensForETHSupportingFeeOnTransferTokens" | "swapExactTokensForTokens" | "swapExactTokensForTokensSupportingFeeOnTransferTokens" | "swapTokensForExactETH" | "swapTokensForExactTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "addLiquidity", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "addLiquidityETH", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAmountIn", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAmountOut", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAmountsIn", values: [BigNumberish, string[]]): string;
    encodeFunctionData(functionFragment: "getAmountsOut", values: [BigNumberish, string[]]): string;
    encodeFunctionData(functionFragment: "quote", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeLiquidity", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityETH", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityETHSupportingFeeOnTransferTokens", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityETHWithPermit", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        boolean,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        boolean,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidityWithPermit", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        boolean,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "swapETHForExactTokens", values: [BigNumberish, string[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactETHForTokens", values: [BigNumberish, string[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactETHForTokensSupportingFeeOnTransferTokens", values: [BigNumberish, string[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForETH", values: [BigNumberish, BigNumberish, string[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForETHSupportingFeeOnTransferTokens", values: [BigNumberish, BigNumberish, string[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [BigNumberish, BigNumberish, string[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokensSupportingFeeOnTransferTokens", values: [BigNumberish, BigNumberish, string[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapTokensForExactETH", values: [BigNumberish, BigNumberish, string[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapTokensForExactTokens", values: [BigNumberish, BigNumberish, string[], string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidityETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountsIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAmountsOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETHSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETHWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapETHForExactTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactETHForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactETHForTokensSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForETHSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokensSupportingFeeOnTransferTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensForExactETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensForExactTokens", data: BytesLike): Result;
    events: {};
}
export interface IUniswapV2Router02 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUniswapV2Router02Interface;
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
        WETH(overrides?: CallOverrides): Promise<[string]>;
        addLiquidity(tokenA: string, tokenB: string, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addLiquidityETH(token: string, amountTokenDesired: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        getAmountIn(amountOut: BigNumberish, reserveIn: BigNumberish, reserveOut: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountIn: BigNumber;
        }>;
        getAmountOut(amountIn: BigNumberish, reserveIn: BigNumberish, reserveOut: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountOut: BigNumber;
        }>;
        getAmountsIn(amountOut: BigNumberish, path: string[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            amounts: BigNumber[];
        }>;
        getAmountsOut(amountIn: BigNumberish, path: string[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            amounts: BigNumber[];
        }>;
        quote(amountA: BigNumberish, reserveA: BigNumberish, reserveB: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            amountB: BigNumber;
        }>;
        removeLiquidity(tokenA: string, tokenB: string, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityETH(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityETHWithPermit(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityWithPermit(tokenA: string, tokenB: string, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapETHForExactTokens(amountOut: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExactETHForTokens(amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForETH(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapTokensForExactETH(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    WETH(overrides?: CallOverrides): Promise<string>;
    addLiquidity(tokenA: string, tokenB: string, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addLiquidityETH(token: string, amountTokenDesired: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    getAmountIn(amountOut: BigNumberish, reserveIn: BigNumberish, reserveOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getAmountOut(amountIn: BigNumberish, reserveIn: BigNumberish, reserveOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getAmountsIn(amountOut: BigNumberish, path: string[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getAmountsOut(amountIn: BigNumberish, path: string[], overrides?: CallOverrides): Promise<BigNumber[]>;
    quote(amountA: BigNumberish, reserveA: BigNumberish, reserveB: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    removeLiquidity(tokenA: string, tokenB: string, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityETH(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityETHSupportingFeeOnTransferTokens(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityETHWithPermit(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityWithPermit(tokenA: string, tokenB: string, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapETHForExactTokens(amountOut: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExactETHForTokens(amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForETH(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapTokensForExactETH(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        WETH(overrides?: CallOverrides): Promise<string>;
        addLiquidity(tokenA: string, tokenB: string, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
        addLiquidityETH(token: string, amountTokenDesired: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountETH: BigNumber;
            liquidity: BigNumber;
        }>;
        factory(overrides?: CallOverrides): Promise<string>;
        getAmountIn(amountOut: BigNumberish, reserveIn: BigNumberish, reserveOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountOut(amountIn: BigNumberish, reserveIn: BigNumberish, reserveOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountsIn(amountOut: BigNumberish, path: string[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getAmountsOut(amountIn: BigNumberish, path: string[], overrides?: CallOverrides): Promise<BigNumber[]>;
        quote(amountA: BigNumberish, reserveA: BigNumberish, reserveB: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidity(tokenA: string, tokenB: string, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        removeLiquidityETH(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidityETHWithPermit(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountToken: BigNumber;
            amountETH: BigNumber;
        }>;
        removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidityWithPermit(tokenA: string, tokenB: string, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
        swapETHForExactTokens(amountOut: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactETHForTokens(amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForETH(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapTokensForExactETH(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
    };
    filters: {};
    estimateGas: {
        WETH(overrides?: CallOverrides): Promise<BigNumber>;
        addLiquidity(tokenA: string, tokenB: string, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addLiquidityETH(token: string, amountTokenDesired: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getAmountIn(amountOut: BigNumberish, reserveIn: BigNumberish, reserveOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountOut(amountIn: BigNumberish, reserveIn: BigNumberish, reserveOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getAmountsIn(amountOut: BigNumberish, path: string[], overrides?: CallOverrides): Promise<BigNumber>;
        getAmountsOut(amountIn: BigNumberish, path: string[], overrides?: CallOverrides): Promise<BigNumber>;
        quote(amountA: BigNumberish, reserveA: BigNumberish, reserveB: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidity(tokenA: string, tokenB: string, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeLiquidityETH(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeLiquidityETHWithPermit(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeLiquidityWithPermit(tokenA: string, tokenB: string, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapETHForExactTokens(amountOut: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExactETHForTokens(amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExactTokensForETH(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapTokensForExactETH(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addLiquidity(tokenA: string, tokenB: string, amountADesired: BigNumberish, amountBDesired: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addLiquidityETH(token: string, amountTokenDesired: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountIn(amountOut: BigNumberish, reserveIn: BigNumberish, reserveOut: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountOut(amountIn: BigNumberish, reserveIn: BigNumberish, reserveOut: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountsIn(amountOut: BigNumberish, path: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAmountsOut(amountIn: BigNumberish, path: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quote(amountA: BigNumberish, reserveA: BigNumberish, reserveB: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeLiquidity(tokenA: string, tokenB: string, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETH(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETHSupportingFeeOnTransferTokens(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETHWithPermit(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token: string, liquidity: BigNumberish, amountTokenMin: BigNumberish, amountETHMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityWithPermit(tokenA: string, tokenB: string, liquidity: BigNumberish, amountAMin: BigNumberish, amountBMin: BigNumberish, to: string, deadline: BigNumberish, approveMax: boolean, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapETHForExactTokens(amountOut: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExactETHForTokens(amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForETH(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensForExactETH(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
