// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/incentives/genesis.proto (package dymensionxyz.dymension.incentives, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Duration, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Gauge } from "./gauge_pb.js";
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 *
 * @generated from message dymensionxyz.dymension.incentives.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * gauges are all gauges that should exist at genesis
         *
         * @generated from field: repeated dymensionxyz.dymension.incentives.Gauge gauges = 2;
         */
        this.gauges = [];
        /**
         * lockable_durations are all lockup durations that gauges can be locked for
         * in order to recieve incentives
         *
         * @generated from field: repeated google.protobuf.Duration lockable_durations = 3;
         */
        this.lockableDurations = [];
        /**
         * last_gauge_id is what the gauge number will increment from when creating
         * the next gauge after genesis
         *
         * @generated from field: uint64 last_gauge_id = 4;
         */
        this.lastGaugeId = protoInt64.zero;
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
GenesisState.typeName = "dymensionxyz.dymension.incentives.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "gauges", kind: "message", T: Gauge, repeated: true },
    { no: 3, name: "lockable_durations", kind: "message", T: Duration, repeated: true },
    { no: 4, name: "last_gauge_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
//# sourceMappingURL=genesis_pb.js.map