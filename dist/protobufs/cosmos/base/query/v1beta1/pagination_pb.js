// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/base/query/v1beta1/pagination.proto (package cosmos.base.query.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 *
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 *
 * @generated from message cosmos.base.query.v1beta1.PageRequest
 */
class PageRequest extends Message {
    constructor(data) {
        super();
        /**
         * key is a value returned in PageResponse.next_key to begin
         * querying the next page most efficiently. Only one of offset or key
         * should be set.
         *
         * @generated from field: bytes key = 1;
         */
        this.key = new Uint8Array(0);
        /**
         * offset is a numeric offset that can be used when key is unavailable.
         * It is less efficient than using key. Only one of offset or key should
         * be set.
         *
         * @generated from field: uint64 offset = 2;
         */
        this.offset = protoInt64.zero;
        /**
         * limit is the total number of results to be returned in the result page.
         * If left empty it will default to a value to be set by each app.
         *
         * @generated from field: uint64 limit = 3;
         */
        this.limit = protoInt64.zero;
        /**
         * count_total is set to true  to indicate that the result set should include
         * a count of the total number of items available for pagination in UIs.
         * count_total is only respected when offset is used. It is ignored when key
         * is set.
         *
         * @generated from field: bool count_total = 4;
         */
        this.countTotal = false;
        /**
         * reverse is set to true if results are to be returned in the descending order.
         *
         * Since: cosmos-sdk 0.43
         *
         * @generated from field: bool reverse = 5;
         */
        this.reverse = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PageRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PageRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PageRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PageRequest, a, b);
    }
}
PageRequest.runtime = proto3;
PageRequest.typeName = "cosmos.base.query.v1beta1.PageRequest";
PageRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "offset", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "count_total", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "reverse", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
export { PageRequest };
/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 *
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 *
 * @generated from message cosmos.base.query.v1beta1.PageResponse
 */
class PageResponse extends Message {
    constructor(data) {
        super();
        /**
         * next_key is the key to be passed to PageRequest.key to
         * query the next page most efficiently. It will be empty if
         * there are no more results.
         *
         * @generated from field: bytes next_key = 1;
         */
        this.nextKey = new Uint8Array(0);
        /**
         * total is total number of results available if PageRequest.count_total
         * was set, its value is undefined otherwise
         *
         * @generated from field: uint64 total = 2;
         */
        this.total = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PageResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PageResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PageResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PageResponse, a, b);
    }
}
PageResponse.runtime = proto3;
PageResponse.typeName = "cosmos.base.query.v1beta1.PageResponse";
PageResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "next_key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { PageResponse };
//# sourceMappingURL=pagination_pb.js.map