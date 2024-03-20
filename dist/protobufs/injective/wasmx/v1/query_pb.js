// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/wasmx/v1/query.proto (package injective.wasmx.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params, RegisteredContract } from "./wasmx_pb.js";
import { GenesisState } from "./genesis_pb.js";
/**
 * QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC
 * method.
 *
 * @generated from message injective.wasmx.v1.QueryWasmxParamsRequest
 */
class QueryWasmxParamsRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryWasmxParamsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryWasmxParamsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryWasmxParamsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryWasmxParamsRequest, a, b);
    }
}
QueryWasmxParamsRequest.runtime = proto3;
QueryWasmxParamsRequest.typeName = "injective.wasmx.v1.QueryWasmxParamsRequest";
QueryWasmxParamsRequest.fields = proto3.util.newFieldList(() => []);
export { QueryWasmxParamsRequest };
/**
 * QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC
 * method.
 *
 * @generated from message injective.wasmx.v1.QueryWasmxParamsResponse
 */
class QueryWasmxParamsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryWasmxParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryWasmxParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryWasmxParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryWasmxParamsResponse, a, b);
    }
}
QueryWasmxParamsResponse.runtime = proto3;
QueryWasmxParamsResponse.typeName = "injective.wasmx.v1.QueryWasmxParamsResponse";
QueryWasmxParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
]);
export { QueryWasmxParamsResponse };
/**
 * QueryModuleStateRequest is the request type for the Query/WasmxModuleState
 * RPC method.
 *
 * @generated from message injective.wasmx.v1.QueryModuleStateRequest
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
QueryModuleStateRequest.typeName = "injective.wasmx.v1.QueryModuleStateRequest";
QueryModuleStateRequest.fields = proto3.util.newFieldList(() => []);
export { QueryModuleStateRequest };
/**
 * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
 * RPC method.
 *
 * @generated from message injective.wasmx.v1.QueryModuleStateResponse
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
QueryModuleStateResponse.typeName = "injective.wasmx.v1.QueryModuleStateResponse";
QueryModuleStateResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "state", kind: "message", T: GenesisState },
]);
export { QueryModuleStateResponse };
/**
 * Contract registration info
 *
 * @generated from message injective.wasmx.v1.QueryContractRegistrationInfoRequest
 */
class QueryContractRegistrationInfoRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string contract_address = 1;
         */
        this.contractAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryContractRegistrationInfoRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryContractRegistrationInfoRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryContractRegistrationInfoRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryContractRegistrationInfoRequest, a, b);
    }
}
QueryContractRegistrationInfoRequest.runtime = proto3;
QueryContractRegistrationInfoRequest.typeName = "injective.wasmx.v1.QueryContractRegistrationInfoRequest";
QueryContractRegistrationInfoRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryContractRegistrationInfoRequest };
/**
 * @generated from message injective.wasmx.v1.QueryContractRegistrationInfoResponse
 */
class QueryContractRegistrationInfoResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryContractRegistrationInfoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryContractRegistrationInfoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryContractRegistrationInfoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryContractRegistrationInfoResponse, a, b);
    }
}
QueryContractRegistrationInfoResponse.runtime = proto3;
QueryContractRegistrationInfoResponse.typeName = "injective.wasmx.v1.QueryContractRegistrationInfoResponse";
QueryContractRegistrationInfoResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "contract", kind: "message", T: RegisteredContract },
]);
export { QueryContractRegistrationInfoResponse };
//# sourceMappingURL=query_pb.js.map