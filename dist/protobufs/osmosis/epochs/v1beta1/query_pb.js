// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/epochs/v1beta1/query.proto (package osmosis.epochs.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { EpochInfo } from "./genesis_pb.js";
/**
 * @generated from message osmosis.epochs.v1beta1.QueryEpochsInfoRequest
 */
class QueryEpochsInfoRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryEpochsInfoRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryEpochsInfoRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryEpochsInfoRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryEpochsInfoRequest, a, b);
    }
}
QueryEpochsInfoRequest.runtime = proto3;
QueryEpochsInfoRequest.typeName = "osmosis.epochs.v1beta1.QueryEpochsInfoRequest";
QueryEpochsInfoRequest.fields = proto3.util.newFieldList(() => []);
export { QueryEpochsInfoRequest };
/**
 * @generated from message osmosis.epochs.v1beta1.QueryEpochsInfoResponse
 */
class QueryEpochsInfoResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated osmosis.epochs.v1beta1.EpochInfo epochs = 1;
         */
        this.epochs = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryEpochsInfoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryEpochsInfoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryEpochsInfoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryEpochsInfoResponse, a, b);
    }
}
QueryEpochsInfoResponse.runtime = proto3;
QueryEpochsInfoResponse.typeName = "osmosis.epochs.v1beta1.QueryEpochsInfoResponse";
QueryEpochsInfoResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "epochs", kind: "message", T: EpochInfo, repeated: true },
]);
export { QueryEpochsInfoResponse };
/**
 * @generated from message osmosis.epochs.v1beta1.QueryCurrentEpochRequest
 */
class QueryCurrentEpochRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string identifier = 1;
         */
        this.identifier = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryCurrentEpochRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryCurrentEpochRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryCurrentEpochRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryCurrentEpochRequest, a, b);
    }
}
QueryCurrentEpochRequest.runtime = proto3;
QueryCurrentEpochRequest.typeName = "osmosis.epochs.v1beta1.QueryCurrentEpochRequest";
QueryCurrentEpochRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryCurrentEpochRequest };
/**
 * @generated from message osmosis.epochs.v1beta1.QueryCurrentEpochResponse
 */
class QueryCurrentEpochResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: int64 current_epoch = 1;
         */
        this.currentEpoch = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryCurrentEpochResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryCurrentEpochResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryCurrentEpochResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryCurrentEpochResponse, a, b);
    }
}
QueryCurrentEpochResponse.runtime = proto3;
QueryCurrentEpochResponse.typeName = "osmosis.epochs.v1beta1.QueryCurrentEpochResponse";
QueryCurrentEpochResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "current_epoch", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
export { QueryCurrentEpochResponse };
//# sourceMappingURL=query_pb.js.map