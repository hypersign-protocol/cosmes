// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/txfees/v1beta1/query.proto (package osmosis.txfees.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { FeeToken } from "./feetoken_pb.js";
/**
 * @generated from message osmosis.txfees.v1beta1.QueryFeeTokensRequest
 */
class QueryFeeTokensRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryFeeTokensRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryFeeTokensRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryFeeTokensRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryFeeTokensRequest, a, b);
    }
}
QueryFeeTokensRequest.runtime = proto3;
QueryFeeTokensRequest.typeName = "osmosis.txfees.v1beta1.QueryFeeTokensRequest";
QueryFeeTokensRequest.fields = proto3.util.newFieldList(() => []);
export { QueryFeeTokensRequest };
/**
 * @generated from message osmosis.txfees.v1beta1.QueryFeeTokensResponse
 */
class QueryFeeTokensResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated osmosis.txfees.v1beta1.FeeToken fee_tokens = 1;
         */
        this.feeTokens = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryFeeTokensResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryFeeTokensResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryFeeTokensResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryFeeTokensResponse, a, b);
    }
}
QueryFeeTokensResponse.runtime = proto3;
QueryFeeTokensResponse.typeName = "osmosis.txfees.v1beta1.QueryFeeTokensResponse";
QueryFeeTokensResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "fee_tokens", kind: "message", T: FeeToken, repeated: true },
]);
export { QueryFeeTokensResponse };
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 *
 * @generated from message osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest
 */
class QueryDenomSpotPriceRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomSpotPriceRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomSpotPriceRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomSpotPriceRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDenomSpotPriceRequest, a, b);
    }
}
QueryDenomSpotPriceRequest.runtime = proto3;
QueryDenomSpotPriceRequest.typeName = "osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest";
QueryDenomSpotPriceRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryDenomSpotPriceRequest };
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 *
 * @generated from message osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse
 */
class QueryDenomSpotPriceResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 poolID = 1;
         */
        this.poolID = protoInt64.zero;
        /**
         * @generated from field: string spot_price = 2;
         */
        this.spotPrice = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomSpotPriceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomSpotPriceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomSpotPriceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDenomSpotPriceResponse, a, b);
    }
}
QueryDenomSpotPriceResponse.runtime = proto3;
QueryDenomSpotPriceResponse.typeName = "osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse";
QueryDenomSpotPriceResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "poolID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "spot_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryDenomSpotPriceResponse };
/**
 * @generated from message osmosis.txfees.v1beta1.QueryDenomPoolIdRequest
 */
class QueryDenomPoolIdRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomPoolIdRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomPoolIdRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomPoolIdRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDenomPoolIdRequest, a, b);
    }
}
QueryDenomPoolIdRequest.runtime = proto3;
QueryDenomPoolIdRequest.typeName = "osmosis.txfees.v1beta1.QueryDenomPoolIdRequest";
QueryDenomPoolIdRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryDenomPoolIdRequest };
/**
 * @generated from message osmosis.txfees.v1beta1.QueryDenomPoolIdResponse
 */
class QueryDenomPoolIdResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 poolID = 1;
         */
        this.poolID = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDenomPoolIdResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDenomPoolIdResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDenomPoolIdResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDenomPoolIdResponse, a, b);
    }
}
QueryDenomPoolIdResponse.runtime = proto3;
QueryDenomPoolIdResponse.typeName = "osmosis.txfees.v1beta1.QueryDenomPoolIdResponse";
QueryDenomPoolIdResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "poolID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { QueryDenomPoolIdResponse };
/**
 * @generated from message osmosis.txfees.v1beta1.QueryBaseDenomRequest
 */
class QueryBaseDenomRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryBaseDenomRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryBaseDenomRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryBaseDenomRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryBaseDenomRequest, a, b);
    }
}
QueryBaseDenomRequest.runtime = proto3;
QueryBaseDenomRequest.typeName = "osmosis.txfees.v1beta1.QueryBaseDenomRequest";
QueryBaseDenomRequest.fields = proto3.util.newFieldList(() => []);
export { QueryBaseDenomRequest };
/**
 * @generated from message osmosis.txfees.v1beta1.QueryBaseDenomResponse
 */
class QueryBaseDenomResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string base_denom = 1;
         */
        this.baseDenom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryBaseDenomResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryBaseDenomResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryBaseDenomResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryBaseDenomResponse, a, b);
    }
}
QueryBaseDenomResponse.runtime = proto3;
QueryBaseDenomResponse.typeName = "osmosis.txfees.v1beta1.QueryBaseDenomResponse";
QueryBaseDenomResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "base_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryBaseDenomResponse };
/**
 * @generated from message osmosis.txfees.v1beta1.QueryEipBaseFeeRequest
 */
class QueryEipBaseFeeRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryEipBaseFeeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryEipBaseFeeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryEipBaseFeeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryEipBaseFeeRequest, a, b);
    }
}
QueryEipBaseFeeRequest.runtime = proto3;
QueryEipBaseFeeRequest.typeName = "osmosis.txfees.v1beta1.QueryEipBaseFeeRequest";
QueryEipBaseFeeRequest.fields = proto3.util.newFieldList(() => []);
export { QueryEipBaseFeeRequest };
/**
 * @generated from message osmosis.txfees.v1beta1.QueryEipBaseFeeResponse
 */
class QueryEipBaseFeeResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string base_fee = 1;
         */
        this.baseFee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryEipBaseFeeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryEipBaseFeeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryEipBaseFeeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryEipBaseFeeResponse, a, b);
    }
}
QueryEipBaseFeeResponse.runtime = proto3;
QueryEipBaseFeeResponse.typeName = "osmosis.txfees.v1beta1.QueryEipBaseFeeResponse";
QueryEipBaseFeeResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "base_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryEipBaseFeeResponse };
//# sourceMappingURL=query_pb.js.map