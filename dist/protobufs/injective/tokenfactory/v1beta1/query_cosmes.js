// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file injective/tokenfactory/v1beta1/query.proto (package injective.tokenfactory.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
const TYPE_NAME = "injective.tokenfactory.v1beta1.Query";
/**
 * Params defines a gRPC query method that returns the tokenfactory module's
 * parameters.
 *
 * @generated from rpc injective.tokenfactory.v1beta1.Query.Params
 */
export const QueryParamsService = {
    typeName: TYPE_NAME,
    method: "Params",
    Request: QueryParamsRequest,
    Response: QueryParamsResponse,
};
/**
 * DenomAuthorityMetadata defines a gRPC query method for fetching
 * DenomAuthorityMetadata for a particular denom.
 *
 * @generated from rpc injective.tokenfactory.v1beta1.Query.DenomAuthorityMetadata
 */
export const QueryDenomAuthorityMetadataService = {
    typeName: TYPE_NAME,
    method: "DenomAuthorityMetadata",
    Request: QueryDenomAuthorityMetadataRequest,
    Response: QueryDenomAuthorityMetadataResponse,
};
/**
 * DenomsFromCreator defines a gRPC query method for fetching all
 * denominations created by a specific admin/creator.
 *
 * @generated from rpc injective.tokenfactory.v1beta1.Query.DenomsFromCreator
 */
export const QueryDenomsFromCreatorService = {
    typeName: TYPE_NAME,
    method: "DenomsFromCreator",
    Request: QueryDenomsFromCreatorRequest,
    Response: QueryDenomsFromCreatorResponse,
};
/**
 * Retrieves the entire auction module's state
 *
 * @generated from rpc injective.tokenfactory.v1beta1.Query.TokenfactoryModuleState
 */
export const QueryTokenfactoryModuleStateService = {
    typeName: TYPE_NAME,
    method: "TokenfactoryModuleState",
    Request: QueryModuleStateRequest,
    Response: QueryModuleStateResponse,
};
//# sourceMappingURL=query_cosmes.js.map