// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/nft/v1beta1/query.proto (package cosmos.nft.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
import { Class, NFT } from "./nft_pb.js";
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryBalanceRequest
 */
class QueryBalanceRequest extends Message {
    constructor(data) {
        super();
        /**
         * class_id associated with the nft
         *
         * @generated from field: string class_id = 1;
         */
        this.classId = "";
        /**
         * owner is the owner address of the nft
         *
         * @generated from field: string owner = 2;
         */
        this.owner = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryBalanceRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryBalanceRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryBalanceRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryBalanceRequest, a, b);
    }
}
QueryBalanceRequest.runtime = proto3;
QueryBalanceRequest.typeName = "cosmos.nft.v1beta1.QueryBalanceRequest";
QueryBalanceRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryBalanceRequest };
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryBalanceResponse
 */
class QueryBalanceResponse extends Message {
    constructor(data) {
        super();
        /**
         * amount is the number of all NFTs of a given class owned by the owner
         *
         * @generated from field: uint64 amount = 1;
         */
        this.amount = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryBalanceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryBalanceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryBalanceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryBalanceResponse, a, b);
    }
}
QueryBalanceResponse.runtime = proto3;
QueryBalanceResponse.typeName = "cosmos.nft.v1beta1.QueryBalanceResponse";
QueryBalanceResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { QueryBalanceResponse };
/**
 * QueryOwnerRequest is the request type for the Query/Owner RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryOwnerRequest
 */
class QueryOwnerRequest extends Message {
    constructor(data) {
        super();
        /**
         * class_id associated with the nft
         *
         * @generated from field: string class_id = 1;
         */
        this.classId = "";
        /**
         * id is a unique identifier of the NFT
         *
         * @generated from field: string id = 2;
         */
        this.id = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryOwnerRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryOwnerRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryOwnerRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryOwnerRequest, a, b);
    }
}
QueryOwnerRequest.runtime = proto3;
QueryOwnerRequest.typeName = "cosmos.nft.v1beta1.QueryOwnerRequest";
QueryOwnerRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryOwnerRequest };
/**
 * QueryOwnerResponse is the response type for the Query/Owner RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryOwnerResponse
 */
class QueryOwnerResponse extends Message {
    constructor(data) {
        super();
        /**
         * owner is the owner address of the nft
         *
         * @generated from field: string owner = 1;
         */
        this.owner = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryOwnerResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryOwnerResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryOwnerResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryOwnerResponse, a, b);
    }
}
QueryOwnerResponse.runtime = proto3;
QueryOwnerResponse.typeName = "cosmos.nft.v1beta1.QueryOwnerResponse";
QueryOwnerResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryOwnerResponse };
/**
 * QuerySupplyRequest is the request type for the Query/Supply RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QuerySupplyRequest
 */
class QuerySupplyRequest extends Message {
    constructor(data) {
        super();
        /**
         * class_id associated with the nft
         *
         * @generated from field: string class_id = 1;
         */
        this.classId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySupplyRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySupplyRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySupplyRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySupplyRequest, a, b);
    }
}
QuerySupplyRequest.runtime = proto3;
QuerySupplyRequest.typeName = "cosmos.nft.v1beta1.QuerySupplyRequest";
QuerySupplyRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QuerySupplyRequest };
/**
 * QuerySupplyResponse is the response type for the Query/Supply RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QuerySupplyResponse
 */
class QuerySupplyResponse extends Message {
    constructor(data) {
        super();
        /**
         * amount is the number of all NFTs from the given class
         *
         * @generated from field: uint64 amount = 1;
         */
        this.amount = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySupplyResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySupplyResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySupplyResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySupplyResponse, a, b);
    }
}
QuerySupplyResponse.runtime = proto3;
QuerySupplyResponse.typeName = "cosmos.nft.v1beta1.QuerySupplyResponse";
QuerySupplyResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { QuerySupplyResponse };
/**
 * QueryNFTstRequest is the request type for the Query/NFTs RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryNFTsRequest
 */
class QueryNFTsRequest extends Message {
    constructor(data) {
        super();
        /**
         * class_id associated with the nft
         *
         * @generated from field: string class_id = 1;
         */
        this.classId = "";
        /**
         * owner is the owner address of the nft
         *
         * @generated from field: string owner = 2;
         */
        this.owner = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryNFTsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryNFTsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryNFTsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryNFTsRequest, a, b);
    }
}
QueryNFTsRequest.runtime = proto3;
QueryNFTsRequest.typeName = "cosmos.nft.v1beta1.QueryNFTsRequest";
QueryNFTsRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pagination", kind: "message", T: PageRequest },
]);
export { QueryNFTsRequest };
/**
 * QueryNFTsResponse is the response type for the Query/NFTs RPC methods
 *
 * @generated from message cosmos.nft.v1beta1.QueryNFTsResponse
 */
class QueryNFTsResponse extends Message {
    constructor(data) {
        super();
        /**
         * NFT defines the NFT
         *
         * @generated from field: repeated cosmos.nft.v1beta1.NFT nfts = 1;
         */
        this.nfts = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryNFTsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryNFTsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryNFTsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryNFTsResponse, a, b);
    }
}
QueryNFTsResponse.runtime = proto3;
QueryNFTsResponse.typeName = "cosmos.nft.v1beta1.QueryNFTsResponse";
QueryNFTsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "nfts", kind: "message", T: NFT, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
export { QueryNFTsResponse };
/**
 * QueryNFTRequest is the request type for the Query/NFT RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryNFTRequest
 */
class QueryNFTRequest extends Message {
    constructor(data) {
        super();
        /**
         * class_id associated with the nft
         *
         * @generated from field: string class_id = 1;
         */
        this.classId = "";
        /**
         * id is a unique identifier of the NFT
         *
         * @generated from field: string id = 2;
         */
        this.id = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryNFTRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryNFTRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryNFTRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryNFTRequest, a, b);
    }
}
QueryNFTRequest.runtime = proto3;
QueryNFTRequest.typeName = "cosmos.nft.v1beta1.QueryNFTRequest";
QueryNFTRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryNFTRequest };
/**
 * QueryNFTResponse is the response type for the Query/NFT RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryNFTResponse
 */
class QueryNFTResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryNFTResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryNFTResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryNFTResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryNFTResponse, a, b);
    }
}
QueryNFTResponse.runtime = proto3;
QueryNFTResponse.typeName = "cosmos.nft.v1beta1.QueryNFTResponse";
QueryNFTResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "nft", kind: "message", T: NFT },
]);
export { QueryNFTResponse };
/**
 * QueryClassRequest is the request type for the Query/Class RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryClassRequest
 */
class QueryClassRequest extends Message {
    constructor(data) {
        super();
        /**
         * class_id associated with the nft
         *
         * @generated from field: string class_id = 1;
         */
        this.classId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryClassRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryClassRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryClassRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryClassRequest, a, b);
    }
}
QueryClassRequest.runtime = proto3;
QueryClassRequest.typeName = "cosmos.nft.v1beta1.QueryClassRequest";
QueryClassRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { QueryClassRequest };
/**
 * QueryClassResponse is the response type for the Query/Class RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryClassResponse
 */
class QueryClassResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryClassResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryClassResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryClassResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryClassResponse, a, b);
    }
}
QueryClassResponse.runtime = proto3;
QueryClassResponse.typeName = "cosmos.nft.v1beta1.QueryClassResponse";
QueryClassResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "class", kind: "message", T: Class },
]);
export { QueryClassResponse };
/**
 * QueryClassesRequest is the request type for the Query/Classes RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryClassesRequest
 */
class QueryClassesRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryClassesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryClassesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryClassesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryClassesRequest, a, b);
    }
}
QueryClassesRequest.runtime = proto3;
QueryClassesRequest.typeName = "cosmos.nft.v1beta1.QueryClassesRequest";
QueryClassesRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
]);
export { QueryClassesRequest };
/**
 * QueryClassesResponse is the response type for the Query/Classes RPC method
 *
 * @generated from message cosmos.nft.v1beta1.QueryClassesResponse
 */
class QueryClassesResponse extends Message {
    constructor(data) {
        super();
        /**
         * class defines the class of the nft type.
         *
         * @generated from field: repeated cosmos.nft.v1beta1.Class classes = 1;
         */
        this.classes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryClassesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryClassesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryClassesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryClassesResponse, a, b);
    }
}
QueryClassesResponse.runtime = proto3;
QueryClassesResponse.typeName = "cosmos.nft.v1beta1.QueryClassesResponse";
QueryClassesResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "classes", kind: "message", T: Class, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
export { QueryClassesResponse };
//# sourceMappingURL=query_pb.js.map