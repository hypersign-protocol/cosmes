// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/group/module/v1/module.proto (package cosmos.group.module.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Duration, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
/**
 * Module is the config object of the group module.
 *
 * @generated from message cosmos.group.module.v1.Module
 */
class Module extends Message {
    constructor(data) {
        super();
        /**
         * max_metadata_len defines the max length of the metadata bytes field for various entities within the group module.
         * Defaults to 255 if not explicitly set.
         *
         * @generated from field: uint64 max_metadata_len = 2;
         */
        this.maxMetadataLen = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Module().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Module().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Module().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Module, a, b);
    }
}
Module.runtime = proto3;
Module.typeName = "cosmos.group.module.v1.Module";
Module.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "max_execution_period", kind: "message", T: Duration },
    { no: 2, name: "max_metadata_len", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { Module };
//# sourceMappingURL=module_pb.js.map