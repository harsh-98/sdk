/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ICreditManagerDataInterface extends ethers.utils.Interface {
  functions: {
    "getCreditManagerData()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getCreditManagerData",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getCreditManagerData",
    data: BytesLike
  ): Result;

  events: {};
}

export class ICreditManagerData extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ICreditManagerDataInterface;

  functions: {
    getCreditManagerData(
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          boolean,
          string,
          string,
          boolean,
          boolean,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string[],
          string[]
        ] & {
          addr: string;
          hasAccount: boolean;
          kind: string;
          underlyingToken: string;
          isWETH: boolean;
          canBorrow: boolean;
          borrowRate: BigNumber;
          minAmount: BigNumber;
          maxAmount: BigNumber;
          maxLeverageFactor: BigNumber;
          availableLiquidity: BigNumber;
          allowedTokens: string[];
          allowedContracts: string[];
        }
      ]
    >;

    "getCreditManagerData()"(
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          boolean,
          string,
          string,
          boolean,
          boolean,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string[],
          string[]
        ] & {
          addr: string;
          hasAccount: boolean;
          kind: string;
          underlyingToken: string;
          isWETH: boolean;
          canBorrow: boolean;
          borrowRate: BigNumber;
          minAmount: BigNumber;
          maxAmount: BigNumber;
          maxLeverageFactor: BigNumber;
          availableLiquidity: BigNumber;
          allowedTokens: string[];
          allowedContracts: string[];
        }
      ]
    >;
  };

  getCreditManagerData(
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      boolean,
      string,
      string,
      boolean,
      boolean,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string[],
      string[]
    ] & {
      addr: string;
      hasAccount: boolean;
      kind: string;
      underlyingToken: string;
      isWETH: boolean;
      canBorrow: boolean;
      borrowRate: BigNumber;
      minAmount: BigNumber;
      maxAmount: BigNumber;
      maxLeverageFactor: BigNumber;
      availableLiquidity: BigNumber;
      allowedTokens: string[];
      allowedContracts: string[];
    }
  >;

  "getCreditManagerData()"(
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      boolean,
      string,
      string,
      boolean,
      boolean,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string[],
      string[]
    ] & {
      addr: string;
      hasAccount: boolean;
      kind: string;
      underlyingToken: string;
      isWETH: boolean;
      canBorrow: boolean;
      borrowRate: BigNumber;
      minAmount: BigNumber;
      maxAmount: BigNumber;
      maxLeverageFactor: BigNumber;
      availableLiquidity: BigNumber;
      allowedTokens: string[];
      allowedContracts: string[];
    }
  >;

  callStatic: {
    getCreditManagerData(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        boolean,
        string,
        string,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string[],
        string[]
      ] & {
        addr: string;
        hasAccount: boolean;
        kind: string;
        underlyingToken: string;
        isWETH: boolean;
        canBorrow: boolean;
        borrowRate: BigNumber;
        minAmount: BigNumber;
        maxAmount: BigNumber;
        maxLeverageFactor: BigNumber;
        availableLiquidity: BigNumber;
        allowedTokens: string[];
        allowedContracts: string[];
      }
    >;

    "getCreditManagerData()"(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        boolean,
        string,
        string,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string[],
        string[]
      ] & {
        addr: string;
        hasAccount: boolean;
        kind: string;
        underlyingToken: string;
        isWETH: boolean;
        canBorrow: boolean;
        borrowRate: BigNumber;
        minAmount: BigNumber;
        maxAmount: BigNumber;
        maxLeverageFactor: BigNumber;
        availableLiquidity: BigNumber;
        allowedTokens: string[];
        allowedContracts: string[];
      }
    >;
  };

  filters: {};

  estimateGas: {
    getCreditManagerData(overrides?: CallOverrides): Promise<BigNumber>;

    "getCreditManagerData()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getCreditManagerData(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCreditManagerData()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
