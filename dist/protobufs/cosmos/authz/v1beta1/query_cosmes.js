// Since: cosmos-sdk 0.43
// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file cosmos/authz/v1beta1/query.proto (package cosmos.authz.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { QueryGranteeGrantsRequest, QueryGranteeGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGrantsRequest, QueryGrantsResponse } from "./query_pb.js";
const TYPE_NAME = "cosmos.authz.v1beta1.Query";
/**
 * Returns list of `Authorization`, granted to the grantee by the granter.
 *
 * @generated from rpc cosmos.authz.v1beta1.Query.Grants
 */
export const QueryGrantsService = {
    typeName: TYPE_NAME,
    method: "Grants",
    Request: QueryGrantsRequest,
    Response: QueryGrantsResponse,
};
/**
 * GranterGrants returns list of `GrantAuthorization`, granted by granter.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.authz.v1beta1.Query.GranterGrants
 */
export const QueryGranterGrantsService = {
    typeName: TYPE_NAME,
    method: "GranterGrants",
    Request: QueryGranterGrantsRequest,
    Response: QueryGranterGrantsResponse,
};
/**
 * GranteeGrants returns a list of `GrantAuthorization` by grantee.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.authz.v1beta1.Query.GranteeGrants
 */
export const QueryGranteeGrantsService = {
    typeName: TYPE_NAME,
    method: "GranteeGrants",
    Request: QueryGranteeGrantsRequest,
    Response: QueryGranteeGrantsResponse,
};
//# sourceMappingURL=query_cosmes.js.map