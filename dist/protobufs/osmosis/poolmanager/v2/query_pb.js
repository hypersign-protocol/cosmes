// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/poolmanager/v2/query.proto (package osmosis.poolmanager.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
/**
 * SpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 *
 * @generated from message osmosis.poolmanager.v2.SpotPriceRequest
 */
class SpotPriceRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 1;
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: string base_asset_denom = 2;
         */
        this.baseAssetDenom = "";
        /**
         * @generated from field: string quote_asset_denom = 3;
         */
        this.quoteAssetDenom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SpotPriceRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SpotPriceRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SpotPriceRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SpotPriceRequest, a, b);
    }
}
SpotPriceRequest.runtime = proto3;
SpotPriceRequest.typeName = "osmosis.poolmanager.v2.SpotPriceRequest";
SpotPriceRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "base_asset_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "quote_asset_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { SpotPriceRequest };
/**
 * SpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 *
 * @generated from message osmosis.poolmanager.v2.SpotPriceResponse
 */
class SpotPriceResponse extends Message {
    constructor(data) {
        super();
        /**
         * String of the BigDec. Ex) 10.203uatom
         *
         * @generated from field: string spot_price = 1;
         */
        this.spotPrice = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SpotPriceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SpotPriceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SpotPriceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SpotPriceResponse, a, b);
    }
}
SpotPriceResponse.runtime = proto3;
SpotPriceResponse.typeName = "osmosis.poolmanager.v2.SpotPriceResponse";
SpotPriceResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "spot_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { SpotPriceResponse };
//# sourceMappingURL=query_pb.js.map