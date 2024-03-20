// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/distribution/module/v1/module.proto (package cosmos.distribution.module.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Module is the config object of the distribution module.
 *
 * @generated from message cosmos.distribution.module.v1.Module
 */
class Module extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string fee_collector_name = 1;
         */
        this.feeCollectorName = "";
        /**
         * authority defines the custom module authority. If not set, defaults to the governance module.
         *
         * @generated from field: string authority = 2;
         */
        this.authority = "";
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
Module.typeName = "cosmos.distribution.module.v1.Module";
Module.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "fee_collector_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { Module };
//# sourceMappingURL=module_pb.js.map