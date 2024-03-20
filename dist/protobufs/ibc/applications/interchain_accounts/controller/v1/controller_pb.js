// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/applications/interchain_accounts/controller/v1/controller.proto (package ibc.applications.interchain_accounts.controller.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.Params
 */
export class Params extends Message {
    constructor(data) {
        super();
        /**
         * controller_enabled enables or disables the controller submodule.
         *
         * @generated from field: bool controller_enabled = 1;
         */
        this.controllerEnabled = false;
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
Params.typeName = "ibc.applications.interchain_accounts.controller.v1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "controller_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
//# sourceMappingURL=controller_pb.js.map