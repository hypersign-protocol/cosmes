// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/incentives/gauge.proto (package dymensionxyz.dymension.incentives, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { QueryCondition } from "../lockup/lock_pb.js";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 *
 * @generated from message dymensionxyz.dymension.incentives.Gauge
 */
class Gauge extends Message {
    constructor(data) {
        super();
        /**
         * id is the unique ID of a Gauge
         *
         * @generated from field: uint64 id = 1;
         */
        this.id = protoInt64.zero;
        /**
         * is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge
         * Non-perpetual gauges distribute their tokens equally per epoch while the
         * gauge is in the active period. Perpetual gauges distribute all their tokens
         * at a single time and only distribute their tokens again once the gauge is
         * refilled, Intended for use with incentives that get refilled daily.
         *
         * @generated from field: bool is_perpetual = 2;
         */
        this.isPerpetual = false;
        /**
         * coins is the total amount of coins that have been in the gauge
         * Can distribute multiple coin denoms
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 4;
         */
        this.coins = [];
        /**
         * num_epochs_paid_over is the number of total epochs distribution will be
         * completed over
         *
         * @generated from field: uint64 num_epochs_paid_over = 6;
         */
        this.numEpochsPaidOver = protoInt64.zero;
        /**
         * filled_epochs is the number of epochs distribution has been completed on
         * already
         *
         * @generated from field: uint64 filled_epochs = 7;
         */
        this.filledEpochs = protoInt64.zero;
        /**
         * distributed_coins are coins that have been distributed already
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin distributed_coins = 8;
         */
        this.distributedCoins = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Gauge().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Gauge().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Gauge().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Gauge, a, b);
    }
}
Gauge.runtime = proto3;
Gauge.typeName = "dymensionxyz.dymension.incentives.Gauge";
Gauge.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "is_perpetual", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "distribute_to", kind: "message", T: QueryCondition },
    { no: 4, name: "coins", kind: "message", T: Coin, repeated: true },
    { no: 5, name: "start_time", kind: "message", T: Timestamp },
    { no: 6, name: "num_epochs_paid_over", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "filled_epochs", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "distributed_coins", kind: "message", T: Coin, repeated: true },
]);
export { Gauge };
/**
 * @generated from message dymensionxyz.dymension.incentives.LockableDurationsInfo
 */
class LockableDurationsInfo extends Message {
    constructor(data) {
        super();
        /**
         * List of incentivised durations that gauges will pay out to
         *
         * @generated from field: repeated google.protobuf.Duration lockable_durations = 1;
         */
        this.lockableDurations = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new LockableDurationsInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new LockableDurationsInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new LockableDurationsInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(LockableDurationsInfo, a, b);
    }
}
LockableDurationsInfo.runtime = proto3;
LockableDurationsInfo.typeName = "dymensionxyz.dymension.incentives.LockableDurationsInfo";
LockableDurationsInfo.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "lockable_durations", kind: "message", T: Duration, repeated: true },
]);
export { LockableDurationsInfo };
//# sourceMappingURL=gauge_pb.js.map