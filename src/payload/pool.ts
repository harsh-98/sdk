import { PoolDataStruct } from "../types/@gearbox-protocol/core-v2/contracts/interfaces/IDataCompressor.sol/IDataCompressor";
import { ExcludeArrayProps } from "../utils/types";

export type PoolDataPayload = ExcludeArrayProps<PoolDataStruct>;
