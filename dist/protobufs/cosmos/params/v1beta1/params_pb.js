// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/params/v1beta1/params.proto (package cosmos.params.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ParameterChangeProposal defines a proposal to change one or more parameters.
 *
 * @generated from message cosmos.params.v1beta1.ParameterChangeProposal
 */
export class ParameterChangeProposal extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string title = 1;
         */
        this.title = "";
        /**
         * @generated from field: string description = 2;
         */
        this.description = "";
        /**
         * @generated from field: repeated cosmos.params.v1beta1.ParamChange changes = 3;
         */
        this.changes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ParameterChangeProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ParameterChangeProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ParameterChangeProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ParameterChangeProposal, a, b);
    }
}
ParameterChangeProposal.runtime = proto3;
ParameterChangeProposal.typeName = "cosmos.params.v1beta1.ParameterChangeProposal";
ParameterChangeProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "changes", kind: "message", T: ParamChange, repeated: true },
]);
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 *
 * @generated from message cosmos.params.v1beta1.ParamChange
 */
export class ParamChange extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subspace = 1;
         */
        this.subspace = "";
        /**
         * @generated from field: string key = 2;
         */
        this.key = "";
        /**
         * @generated from field: string value = 3;
         */
        this.value = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ParamChange().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ParamChange().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ParamChange().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ParamChange, a, b);
    }
}
ParamChange.runtime = proto3;
ParamChange.typeName = "cosmos.params.v1beta1.ParamChange";
ParamChange.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subspace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=params_pb.js.map