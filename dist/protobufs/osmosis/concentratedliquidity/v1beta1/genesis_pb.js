// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/concentratedliquidity/v1beta1/genesis.proto (package osmosis.concentratedliquidity.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { TickInfo } from "./tickInfo_pb.js";
import { IncentiveRecord } from "./incentive_record_pb.js";
import { Position } from "./position_pb.js";
import { AccumulatorContent, Record } from "../../accum/v1beta1/accum_pb.js";
import { Params } from "../params_pb.js";
/**
 * FullTick contains tick index and pool id along with other tick model
 * information.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.FullTick
 */
class FullTick extends Message {
    constructor(data) {
        super();
        /**
         * pool id associated with the tick.
         *
         * @generated from field: uint64 pool_id = 1;
         */
        this.poolId = protoInt64.zero;
        /**
         * tick's index.
         *
         * @generated from field: int64 tick_index = 2;
         */
        this.tickIndex = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new FullTick().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new FullTick().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new FullTick().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(FullTick, a, b);
    }
}
FullTick.runtime = proto3;
FullTick.typeName = "osmosis.concentratedliquidity.v1beta1.FullTick";
FullTick.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "tick_index", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "info", kind: "message", T: TickInfo },
]);
export { FullTick };
/**
 * PoolData represents a serialized pool along with its ticks
 * for genesis state.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.PoolData
 */
class PoolData extends Message {
    constructor(data) {
        super();
        /**
         * pool's ticks
         *
         * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.FullTick ticks = 2;
         */
        this.ticks = [];
        /**
         * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.AccumObject incentives_accumulators = 4;
         */
        this.incentivesAccumulators = [];
        /**
         * incentive records to be set
         *
         * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.IncentiveRecord incentive_records = 5;
         */
        this.incentiveRecords = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PoolData().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PoolData().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PoolData().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PoolData, a, b);
    }
}
PoolData.runtime = proto3;
PoolData.typeName = "osmosis.concentratedliquidity.v1beta1.PoolData";
PoolData.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool", kind: "message", T: Any },
    { no: 2, name: "ticks", kind: "message", T: FullTick, repeated: true },
    { no: 3, name: "spread_reward_accumulator", kind: "message", T: AccumObject },
    { no: 4, name: "incentives_accumulators", kind: "message", T: AccumObject, repeated: true },
    { no: 5, name: "incentive_records", kind: "message", T: IncentiveRecord, repeated: true },
]);
export { PoolData };
/**
 * @generated from message osmosis.concentratedliquidity.v1beta1.PositionData
 */
class PositionData extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 lock_id = 2;
         */
        this.lockId = protoInt64.zero;
        /**
         * @generated from field: repeated osmosis.accum.v1beta1.Record uptime_accum_records = 4;
         */
        this.uptimeAccumRecords = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PositionData().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PositionData().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PositionData().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PositionData, a, b);
    }
}
PositionData.runtime = proto3;
PositionData.typeName = "osmosis.concentratedliquidity.v1beta1.PositionData";
PositionData.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "position", kind: "message", T: Position },
    { no: 2, name: "lock_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "spread_reward_accum_record", kind: "message", T: Record },
    { no: 4, name: "uptime_accum_records", kind: "message", T: Record, repeated: true },
]);
export { PositionData };
/**
 * GenesisState defines the concentrated liquidity module's genesis state.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.GenesisState
 */
class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * pool data containing serialized pool struct and ticks.
         *
         * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.PoolData pool_data = 2;
         */
        this.poolData = [];
        /**
         * @generated from field: repeated osmosis.concentratedliquidity.v1beta1.PositionData position_data = 3;
         */
        this.positionData = [];
        /**
         * @generated from field: uint64 next_position_id = 4;
         */
        this.nextPositionId = protoInt64.zero;
        /**
         * @generated from field: uint64 next_incentive_record_id = 5;
         */
        this.nextIncentiveRecordId = protoInt64.zero;
        /**
         * @generated from field: uint64 incentives_accumulator_pool_id_migration_threshold = 6;
         */
        this.incentivesAccumulatorPoolIdMigrationThreshold = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GenesisState().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GenesisState().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GenesisState().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GenesisState, a, b);
    }
}
GenesisState.runtime = proto3;
GenesisState.typeName = "osmosis.concentratedliquidity.v1beta1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "pool_data", kind: "message", T: PoolData, repeated: true },
    { no: 3, name: "position_data", kind: "message", T: PositionData, repeated: true },
    { no: 4, name: "next_position_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "next_incentive_record_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "incentives_accumulator_pool_id_migration_threshold", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { GenesisState };
/**
 * In original struct of Accum object, store.KVStore is stored together.
 * For handling genesis, we do not need to include store.KVStore since we use
 * CL module's KVStore.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.AccumObject
 */
class AccumObject extends Message {
    constructor(data) {
        super();
        /**
         * Accumulator's name (pulled from AccumulatorContent)
         *
         * @generated from field: string name = 1;
         */
        this.name = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AccumObject().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AccumObject().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AccumObject().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AccumObject, a, b);
    }
}
AccumObject.runtime = proto3;
AccumObject.typeName = "osmosis.concentratedliquidity.v1beta1.AccumObject";
AccumObject.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "accum_content", kind: "message", T: AccumulatorContent },
]);
export { AccumObject };
//# sourceMappingURL=genesis_pb.js.map