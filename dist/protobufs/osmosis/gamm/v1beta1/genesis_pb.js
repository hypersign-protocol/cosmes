// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/gamm/v1beta1/genesis.proto (package osmosis.gamm.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { MigrationRecords } from "./shared_pb.js";
/**
 * Params holds parameters for the incentives module
 *
 * @generated from message osmosis.gamm.v1beta1.Params
 */
class Params extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin pool_creation_fee = 1;
         */
        this.poolCreationFee = [];
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
Params.typeName = "osmosis.gamm.v1beta1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_creation_fee", kind: "message", T: Coin, repeated: true },
]);
export { Params };
/**
 * GenesisState defines the gamm module's genesis state.
 *
 * @generated from message osmosis.gamm.v1beta1.GenesisState
 */
class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated google.protobuf.Any pools = 1;
         */
        this.pools = [];
        /**
         * will be renamed to next_pool_id in an upcoming version
         *
         * @generated from field: uint64 next_pool_number = 2;
         */
        this.nextPoolNumber = protoInt64.zero;
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
GenesisState.typeName = "osmosis.gamm.v1beta1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pools", kind: "message", T: Any, repeated: true },
    { no: 2, name: "next_pool_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "params", kind: "message", T: Params },
    { no: 4, name: "migration_records", kind: "message", T: MigrationRecords },
]);
export { GenesisState };
//# sourceMappingURL=genesis_pb.js.map