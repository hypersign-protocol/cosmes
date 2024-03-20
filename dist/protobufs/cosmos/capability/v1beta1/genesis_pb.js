// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/capability/v1beta1/genesis.proto (package cosmos.capability.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { CapabilityOwners } from "./capability_pb.js";
/**
 * GenesisOwners defines the capability owners with their corresponding index.
 *
 * @generated from message cosmos.capability.v1beta1.GenesisOwners
 */
class GenesisOwners extends Message {
    constructor(data) {
        super();
        /**
         * index is the index of the capability owner.
         *
         * @generated from field: uint64 index = 1;
         */
        this.index = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GenesisOwners().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GenesisOwners().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GenesisOwners().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GenesisOwners, a, b);
    }
}
GenesisOwners.runtime = proto3;
GenesisOwners.typeName = "cosmos.capability.v1beta1.GenesisOwners";
GenesisOwners.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "index_owners", kind: "message", T: CapabilityOwners },
]);
export { GenesisOwners };
/**
 * GenesisState defines the capability module's genesis state.
 *
 * @generated from message cosmos.capability.v1beta1.GenesisState
 */
class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * index is the capability global index.
         *
         * @generated from field: uint64 index = 1;
         */
        this.index = protoInt64.zero;
        /**
         * owners represents a map from index to owners of the capability index
         * index key is string to allow amino marshalling.
         *
         * @generated from field: repeated cosmos.capability.v1beta1.GenesisOwners owners = 2;
         */
        this.owners = [];
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
GenesisState.typeName = "cosmos.capability.v1beta1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "owners", kind: "message", T: GenesisOwners, repeated: true },
]);
export { GenesisState };
//# sourceMappingURL=genesis_pb.js.map