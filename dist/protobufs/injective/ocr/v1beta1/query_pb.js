// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/ocr/v1beta1/query.proto (package injective.ocr.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { EpochAndRound, FeedConfig, FeedConfigInfo, Params, Transmission } from "./ocr_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { GenesisState } from "./genesis_pb.js";
/**
 * @generated from message injective.ocr.v1beta1.QueryParamsRequest
 */
class QueryParamsRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryParamsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryParamsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryParamsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryParamsRequest, a, b);
    }
}
QueryParamsRequest.runtime = proto3;
QueryParamsRequest.typeName = "injective.ocr.v1beta1.QueryParamsRequest";
QueryParamsRequest.fields = proto3.util.newFieldList(() => []);
export { QueryParamsRequest };
/**
 * @generated from message injective.ocr.v1beta1.QueryParamsResponse
 */
class QueryParamsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryParamsResponse, a, b);
    }
}
QueryParamsResponse.runtime = proto3;
QueryParamsResponse.typeName = "injective.ocr.v1beta1.QueryParamsResponse";
QueryParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
]);
export { QueryParamsResponse };
/**
 * @generated from message injective.ocr.v1beta1.QueryFeedConfigRequest
 */
class QueryFeedConfigRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string feed_id = 1;
         */
        this.feedId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryFeedConfigRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryFeedConfigRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryFeedConfigRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryFeedConfigRequest, a, b);
    }
}
QueryFeedConfigRequest.runtime = proto3;
QueryFeedConfigRequest.typeName = "injective.ocr.v1beta1.QueryFeedConfigRequest";
QueryFeedConfigRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "feed_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryFeedConfigRequest };
/**
 * @generated from message injective.ocr.v1beta1.QueryFeedConfigResponse
 */
class QueryFeedConfigResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryFeedConfigResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryFeedConfigResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryFeedConfigResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryFeedConfigResponse, a, b);
    }
}
QueryFeedConfigResponse.runtime = proto3;
QueryFeedConfigResponse.typeName = "injective.ocr.v1beta1.QueryFeedConfigResponse";
QueryFeedConfigResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "feed_config_info", kind: "message", T: FeedConfigInfo },
    { no: 2, name: "feed_config", kind: "message", T: FeedConfig },
]);
export { QueryFeedConfigResponse };
/**
 * @generated from message injective.ocr.v1beta1.QueryFeedConfigInfoRequest
 */
class QueryFeedConfigInfoRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string feed_id = 1;
         */
        this.feedId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryFeedConfigInfoRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryFeedConfigInfoRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryFeedConfigInfoRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryFeedConfigInfoRequest, a, b);
    }
}
QueryFeedConfigInfoRequest.runtime = proto3;
QueryFeedConfigInfoRequest.typeName = "injective.ocr.v1beta1.QueryFeedConfigInfoRequest";
QueryFeedConfigInfoRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "feed_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryFeedConfigInfoRequest };
/**
 * @generated from message injective.ocr.v1beta1.QueryFeedConfigInfoResponse
 */
class QueryFeedConfigInfoResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryFeedConfigInfoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryFeedConfigInfoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryFeedConfigInfoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryFeedConfigInfoResponse, a, b);
    }
}
QueryFeedConfigInfoResponse.runtime = proto3;
QueryFeedConfigInfoResponse.typeName = "injective.ocr.v1beta1.QueryFeedConfigInfoResponse";
QueryFeedConfigInfoResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "feed_config_info", kind: "message", T: FeedConfigInfo },
    { no: 2, name: "epoch_and_round", kind: "message", T: EpochAndRound },
]);
export { QueryFeedConfigInfoResponse };
/**
 * @generated from message injective.ocr.v1beta1.QueryLatestRoundRequest
 */
class QueryLatestRoundRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string feed_id = 1;
         */
        this.feedId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryLatestRoundRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryLatestRoundRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryLatestRoundRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryLatestRoundRequest, a, b);
    }
}
QueryLatestRoundRequest.runtime = proto3;
QueryLatestRoundRequest.typeName = "injective.ocr.v1beta1.QueryLatestRoundRequest";
QueryLatestRoundRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "feed_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryLatestRoundRequest };
/**
 * @generated from message injective.ocr.v1beta1.QueryLatestRoundResponse
 */
class QueryLatestRoundResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 latest_round_id = 1;
         */
        this.latestRoundId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryLatestRoundResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryLatestRoundResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryLatestRoundResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryLatestRoundResponse, a, b);
    }
}
QueryLatestRoundResponse.runtime = proto3;
QueryLatestRoundResponse.typeName = "injective.ocr.v1beta1.QueryLatestRoundResponse";
QueryLatestRoundResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "latest_round_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "data", kind: "message", T: Transmission },
]);
export { QueryLatestRoundResponse };
/**
 * @generated from message injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest
 */
class QueryLatestTransmissionDetailsRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string feed_id = 1;
         */
        this.feedId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryLatestTransmissionDetailsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryLatestTransmissionDetailsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryLatestTransmissionDetailsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryLatestTransmissionDetailsRequest, a, b);
    }
}
QueryLatestTransmissionDetailsRequest.runtime = proto3;
QueryLatestTransmissionDetailsRequest.typeName = "injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest";
QueryLatestTransmissionDetailsRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "feed_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryLatestTransmissionDetailsRequest };
/**
 * @generated from message injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse
 */
class QueryLatestTransmissionDetailsResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes config_digest = 1;
         */
        this.configDigest = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryLatestTransmissionDetailsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryLatestTransmissionDetailsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryLatestTransmissionDetailsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryLatestTransmissionDetailsResponse, a, b);
    }
}
QueryLatestTransmissionDetailsResponse.runtime = proto3;
QueryLatestTransmissionDetailsResponse.typeName = "injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse";
QueryLatestTransmissionDetailsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "config_digest", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "epoch_and_round", kind: "message", T: EpochAndRound },
    { no: 3, name: "data", kind: "message", T: Transmission },
]);
export { QueryLatestTransmissionDetailsResponse };
/**
 * @generated from message injective.ocr.v1beta1.QueryOwedAmountRequest
 */
class QueryOwedAmountRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string transmitter = 1;
         */
        this.transmitter = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryOwedAmountRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryOwedAmountRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryOwedAmountRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryOwedAmountRequest, a, b);
    }
}
QueryOwedAmountRequest.runtime = proto3;
QueryOwedAmountRequest.typeName = "injective.ocr.v1beta1.QueryOwedAmountRequest";
QueryOwedAmountRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "transmitter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryOwedAmountRequest };
/**
 * @generated from message injective.ocr.v1beta1.QueryOwedAmountResponse
 */
class QueryOwedAmountResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryOwedAmountResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryOwedAmountResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryOwedAmountResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryOwedAmountResponse, a, b);
    }
}
QueryOwedAmountResponse.runtime = proto3;
QueryOwedAmountResponse.typeName = "injective.ocr.v1beta1.QueryOwedAmountResponse";
QueryOwedAmountResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin },
]);
export { QueryOwedAmountResponse };
/**
 * @generated from message injective.ocr.v1beta1.QueryModuleStateRequest
 */
class QueryModuleStateRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryModuleStateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryModuleStateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryModuleStateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryModuleStateRequest, a, b);
    }
}
QueryModuleStateRequest.runtime = proto3;
QueryModuleStateRequest.typeName = "injective.ocr.v1beta1.QueryModuleStateRequest";
QueryModuleStateRequest.fields = proto3.util.newFieldList(() => []);
export { QueryModuleStateRequest };
/**
 * @generated from message injective.ocr.v1beta1.QueryModuleStateResponse
 */
class QueryModuleStateResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryModuleStateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryModuleStateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryModuleStateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryModuleStateResponse, a, b);
    }
}
QueryModuleStateResponse.runtime = proto3;
QueryModuleStateResponse.typeName = "injective.ocr.v1beta1.QueryModuleStateResponse";
QueryModuleStateResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "state", kind: "message", T: GenesisState },
]);
export { QueryModuleStateResponse };
//# sourceMappingURL=query_pb.js.map