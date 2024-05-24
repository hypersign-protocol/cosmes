// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/cosmwasmpool/v1beta1/query.proto (package osmosis.cosmwasmpool.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";
/**
 * =============================== ContractInfoByPoolId
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.ParamsRequest
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
ParamsRequest.typeName = "osmosis.cosmwasmpool.v1beta1.ParamsRequest";
ParamsRequest.fields = proto3.util.newFieldList(() => []);
export { ParamsRequest };
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.ParamsResponse
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
ParamsResponse.typeName = "osmosis.cosmwasmpool.v1beta1.ParamsResponse";
ParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
]);
export { ParamsResponse };
/**
 * =============================== Pools
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.PoolsRequest
 */
class PoolsRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PoolsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PoolsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PoolsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PoolsRequest, a, b);
    }
}
PoolsRequest.runtime = proto3;
PoolsRequest.typeName = "osmosis.cosmwasmpool.v1beta1.PoolsRequest";
PoolsRequest.fields = proto3.util.newFieldList(() => [
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
export { PoolsRequest };
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.PoolsResponse
 */
class PoolsResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated google.protobuf.Any pools = 1;
         */
        this.pools = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PoolsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PoolsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PoolsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PoolsResponse, a, b);
    }
}
PoolsResponse.runtime = proto3;
PoolsResponse.typeName = "osmosis.cosmwasmpool.v1beta1.PoolsResponse";
PoolsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pools", kind: "message", T: Any, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
export { PoolsResponse };
/**
 * =============================== ContractInfoByPoolId
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdRequest
 */
class ContractInfoByPoolIdRequest extends Message {
    constructor(data) {
        super();
        /**
         * pool_id is the pool id of the requested pool.
         *
         * @generated from field: uint64 pool_id = 1;
         */
        this.poolId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ContractInfoByPoolIdRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ContractInfoByPoolIdRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ContractInfoByPoolIdRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ContractInfoByPoolIdRequest, a, b);
    }
}
ContractInfoByPoolIdRequest.runtime = proto3;
ContractInfoByPoolIdRequest.typeName = "osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdRequest";
ContractInfoByPoolIdRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { ContractInfoByPoolIdRequest };
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdResponse
 */
class ContractInfoByPoolIdResponse extends Message {
    constructor(data) {
        super();
        /**
         * contract_address is the pool address and contract address
         * of the requested pool id.
         *
         * @generated from field: string contract_address = 1;
         */
        this.contractAddress = "";
        /**
         * code_id is the code id of the requested pool id.
         *
         * @generated from field: uint64 code_id = 2;
         */
        this.codeId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ContractInfoByPoolIdResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ContractInfoByPoolIdResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ContractInfoByPoolIdResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ContractInfoByPoolIdResponse, a, b);
    }
}
ContractInfoByPoolIdResponse.runtime = proto3;
ContractInfoByPoolIdResponse.typeName = "osmosis.cosmwasmpool.v1beta1.ContractInfoByPoolIdResponse";
ContractInfoByPoolIdResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { ContractInfoByPoolIdResponse };
//# sourceMappingURL=query_pb.js.map