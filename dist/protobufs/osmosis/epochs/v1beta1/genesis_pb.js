// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/epochs/v1beta1/genesis.proto (package osmosis.epochs.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
/**
 * EpochInfo is a struct that describes the data going into
 * a timer defined by the x/epochs module.
 *
 * @generated from message osmosis.epochs.v1beta1.EpochInfo
 */
export class EpochInfo extends Message {
    constructor(data) {
        super();
        /**
         * identifier is a unique reference to this particular timer.
         *
         * @generated from field: string identifier = 1;
         */
        this.identifier = "";
        /**
         * current_epoch is the current epoch number, or in other words,
         * how many times has the timer 'ticked'.
         * The first tick (current_epoch=1) is defined as
         * the first block whose blocktime is greater than the EpochInfo start_time.
         *
         * @generated from field: int64 current_epoch = 4;
         */
        this.currentEpoch = protoInt64.zero;
        /**
         * epoch_counting_started is a boolean, that indicates whether this
         * epoch timer has began yet.
         *
         * @generated from field: bool epoch_counting_started = 6;
         */
        this.epochCountingStarted = false;
        /**
         * current_epoch_start_height is the block height at which the current epoch
         * started. (The block height at which the timer last ticked)
         *
         * @generated from field: int64 current_epoch_start_height = 8;
         */
        this.currentEpochStartHeight = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EpochInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EpochInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EpochInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EpochInfo, a, b);
    }
}
EpochInfo.runtime = proto3;
EpochInfo.typeName = "osmosis.epochs.v1beta1.EpochInfo";
EpochInfo.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "start_time", kind: "message", T: Timestamp },
    { no: 3, name: "duration", kind: "message", T: Duration },
    { no: 4, name: "current_epoch", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "current_epoch_start_time", kind: "message", T: Timestamp },
    { no: 6, name: "epoch_counting_started", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "current_epoch_start_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 * GenesisState defines the epochs module's genesis state.
 *
 * @generated from message osmosis.epochs.v1beta1.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated osmosis.epochs.v1beta1.EpochInfo epochs = 1;
         */
        this.epochs = [];
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
GenesisState.typeName = "osmosis.epochs.v1beta1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "epochs", kind: "message", T: EpochInfo, repeated: true },
]);
//# sourceMappingURL=genesis_pb.js.map