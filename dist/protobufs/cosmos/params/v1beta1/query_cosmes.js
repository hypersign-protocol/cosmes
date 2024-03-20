// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file cosmos/params/v1beta1/query.proto (package cosmos.params.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query_pb.js";
const TYPE_NAME = "cosmos.params.v1beta1.Query";
/**
 * Params queries a specific parameter of a module, given its subspace and
 * key.
 *
 * @generated from rpc cosmos.params.v1beta1.Query.Params
 */
export const QueryParamsService = {
    typeName: TYPE_NAME,
    method: "Params",
    Request: QueryParamsRequest,
    Response: QueryParamsResponse,
};
/**
 * Subspaces queries for all registered subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.params.v1beta1.Query.Subspaces
 */
export const QuerySubspacesService = {
    typeName: TYPE_NAME,
    method: "Subspaces",
    Request: QuerySubspacesRequest,
    Response: QuerySubspacesResponse,
};
//# sourceMappingURL=query_cosmes.js.map