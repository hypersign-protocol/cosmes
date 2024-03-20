// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/twap/v1beta1/genesis.proto (package osmosis.twap.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { TwapRecord } from "./twap_record_pb.js";
/**
 * Params holds parameters for the twap module
 *
 * @generated from message osmosis.twap.v1beta1.Params
 */
class Params extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string prune_epoch_identifier = 1;
         */
        this.pruneEpochIdentifier = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Params().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Params().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Params().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Params, a, b);
    }
}
Params.runtime = proto3;
Params.typeName = "osmosis.twap.v1beta1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "prune_epoch_identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "record_history_keep_period", kind: "message", T: Duration },
]);
export { Params };
/**
 * GenesisState defines the twap module's genesis state.
 *
 * @generated from message osmosis.twap.v1beta1.GenesisState
 */
class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * twaps is the collection of all twap records.
         *
         * @generated from field: repeated osmosis.twap.v1beta1.TwapRecord twaps = 1;
         */
        this.twaps = [];
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
GenesisState.typeName = "osmosis.twap.v1beta1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "twaps", kind: "message", T: TwapRecord, repeated: true },
    { no: 2, name: "params", kind: "message", T: Params },
]);
export { GenesisState };
//# sourceMappingURL=genesis_pb.js.map