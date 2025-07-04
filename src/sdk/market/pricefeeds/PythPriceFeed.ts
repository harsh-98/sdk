import type { Address, Hex } from "viem";
import { decodeAbiParameters } from "viem";

import { pythPriceFeedAbi } from "../../abi/oracles.js";
import type { GearboxSDK } from "../../GearboxSDK.js";
import type { RawTx } from "../../types/index.js";
import type { PartialPriceFeedTreeNode } from "./AbstractPriceFeed.js";
import { AbstractPriceFeedContract } from "./AbstractPriceFeed.js";
import type { IUpdatablePriceFeedContract } from "./types.js";

const abi = pythPriceFeedAbi;
type abi = typeof abi;

export class PythPriceFeed
  extends AbstractPriceFeedContract<abi>
  implements IUpdatablePriceFeedContract
{
  public readonly token: Address;
  public readonly priceFeedId: Hex;
  public readonly pyth: Address;
  public readonly maxConfToPriceRatio?: bigint;

  constructor(sdk: GearboxSDK, args: PartialPriceFeedTreeNode) {
    super(sdk, {
      ...args,
      name: "PythPriceFeed",
      abi,
    });
    if (args.baseParams.version === 3_10n) {
      // https://github.com/Gearbox-protocol/oracles-v3/blob/fc8d3a0ab5bd7eb50ce3f6b87dde5cd3d887bafe/contracts/oracles/updatable/PythPriceFeed.sol#L106
      // abi.encode(token, priceFeedId, pyth, maxConfToPriceRatio);
      const decoded = decodeAbiParameters(
        [
          { type: "address", name: "token" },
          { type: "bytes32", name: "priceFeedId" },
          { type: "address", name: "pyth" },
          { type: "uint256", name: "maxConfToPriceRatio" },
        ],
        args.baseParams.serializedParams,
      );
      this.token = decoded[0];
      this.priceFeedId = decoded[1];
      this.pyth = decoded[2];
      this.maxConfToPriceRatio = decoded[3];
    } else {
      // https://github.com/Gearbox-protocol/periphery-v3/blob/8ae4c5f8835de9961c55403fcc810516cea3e29c/contracts/serializers/oracles/PythPriceFeedSerializer.sol#L13
      // abi.encode(pf.token(), pf.priceFeedId(), pf.pyth());
      const decoded = decodeAbiParameters(
        [
          { type: "address", name: "token" },
          { type: "bytes32", name: "priceFeedId" },
          { type: "address", name: "pyth" },
        ],
        args.baseParams.serializedParams,
      );
      this.token = decoded[0];
      this.priceFeedId = decoded[1];
      this.pyth = decoded[2];
    }
  }

  public createPriceUpdateTx(data: `0x${string}`): RawTx {
    return this.createRawTx({
      functionName: "updatePrice",
      args: [data],
      description: `updating pyth price for ${this.priceFeedId} [${this.labelAddress(this.address)}]`,
    });
  }
}
