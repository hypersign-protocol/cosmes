// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/ibcratelimit/v1beta1/query.proto (package osmosis.ibcratelimit.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
/**
 * ParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message osmosis.ibcratelimit.v1beta1.ParamsRequest
 */
class ParamsRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ParamsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ParamsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ParamsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ParamsRequest, a, b);
    }
}
ParamsRequest.runtime = proto3;
ParamsRequest.typeName = "osmosis.ibcratelimit.v1beta1.ParamsRequest";
ParamsRequest.fields = proto3.util.newFieldList(() => []);
export { ParamsRequest };
/**
 * aramsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message osmosis.ibcratelimit.v1beta1.ParamsResponse
 */
class ParamsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ParamsResponse, a, b);
    }
}
ParamsResponse.runtime = proto3;
ParamsResponse.typeName = "osmosis.ibcratelimit.v1beta1.ParamsResponse";
ParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
]);
export { ParamsResponse };
//# sourceMappingURL=query_pb.js.map