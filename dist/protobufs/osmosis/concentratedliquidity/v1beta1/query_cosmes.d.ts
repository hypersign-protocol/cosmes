import { CFMMPoolIdLinkFromConcentratedPoolIdRequest, CFMMPoolIdLinkFromConcentratedPoolIdResponse, ClaimableIncentivesRequest, ClaimableIncentivesResponse, ClaimableSpreadRewardsRequest, ClaimableSpreadRewardsResponse, GetTotalLiquidityRequest, GetTotalLiquidityResponse, IncentiveRecordsRequest, IncentiveRecordsResponse, LiquidityNetInDirectionRequest, LiquidityNetInDirectionResponse, LiquidityPerTickRangeRequest, LiquidityPerTickRangeResponse, NumNextInitializedTicksRequest, NumNextInitializedTicksResponse, ParamsRequest, ParamsResponse, PoolAccumulatorRewardsRequest, PoolAccumulatorRewardsResponse, PoolsRequest, PoolsResponse, PositionByIdRequest, PositionByIdResponse, TickAccumulatorTrackersRequest, TickAccumulatorTrackersResponse, UserPositionsRequest, UserPositionsResponse, UserUnbondingPositionsRequest, UserUnbondingPositionsResponse } from "./query_pb.js";
/**
 * Pools returns all concentrated liquidity pools
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.Pools
 */
export declare const QueryPoolsService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Query";
    readonly method: "Pools";
    readonly Request: typeof PoolsRequest;
    readonly Response: typeof PoolsResponse;
};
/**
 * Params returns concentrated liquidity module params.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof ParamsRequest;
    readonly Response: typeof ParamsResponse;
};
/**
 * UserPositions returns all concentrated positions of some address.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.UserPositions
 */
export declare const QueryUserPositionsService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Query";
    readonly method: "UserPositions";
    readonly Request: typeof UserPositionsRequest;
    readonly Response: typeof UserPositionsResponse;
};
/**
 * LiquidityPerTickRange returns the amount of liquidity per every tick range
 * existing within the given pool
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.LiquidityPerTickRange
 */
export declare const QueryLiquidityPerTickRangeService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Query";
    readonly method: "LiquidityPerTickRange";
    readonly Request: typeof LiquidityPerTickRangeRequest;
    readonly Response: typeof LiquidityPerTickRangeResponse;
};
/**
 * LiquidityNetInDirection returns liquidity net in the direction given.
 * Uses the bound if specified, if not uses either min tick / max tick
 * depending on the direction.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.LiquidityNetInDirection
 */
export declare const QueryLiquidityNetInDirectionService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Query";
    readonly method: "LiquidityNetInDirection";
    readonly Request: typeof LiquidityNetInDirectionRequest;
    readonly Response: typeof LiquidityNetInDirectionResponse;
};
/**
 * ClaimableSpreadRewards returns the amount of spread rewards that can be
 * claimed by a position with the given id.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.ClaimableSpreadRewards
 */
export declare const QueryClaimableSpreadRewardsService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Query";
    readonly method: "ClaimableSpreadRewards";
    readonly Request: typeof ClaimableSpreadRewardsRequest;
    readonly Response: typeof ClaimableSpreadRewardsResponse;
};
/**
 * ClaimableIncentives returns the amount of incentives that can be claimed
 * and how many would be forfeited by a position with the given id.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.ClaimableIncentives
 */
export declare const QueryClaimableIncentivesService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Query";
    readonly method: "ClaimableIncentives";
    readonly Request: typeof ClaimableIncentivesRequest;
    readonly Response: typeof ClaimableIncentivesResponse;
};
/**
 * PositionById returns a position with the given id.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.PositionById
 */
export declare const QueryPositionByIdService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Query";
    readonly method: "PositionById";
    readonly Request: typeof PositionByIdRequest;
    readonly Response: typeof PositionByIdResponse;
};
/**
 * PoolAccumulatorRewards returns the pool-global accumulator rewards.
 * Contains spread factor rewards and uptime rewards.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.PoolAccumulatorRewards
 */
export declare const QueryPoolAccumulatorRewardsService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Query";
    readonly method: "PoolAccumulatorRewards";
    readonly Request: typeof PoolAccumulatorRewardsRequest;
    readonly Response: typeof PoolAccumulatorRewardsResponse;
};
/**
 * IncentiveRecords returns the incentive records for a given poolId
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.IncentiveRecords
 */
export declare const QueryIncentiveRecordsService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Query";
    readonly method: "IncentiveRecords";
    readonly Request: typeof IncentiveRecordsRequest;
    readonly Response: typeof IncentiveRecordsResponse;
};
/**
 * TickAccumulatorTrackers returns the tick accumulator trackers.
 * Contains spread factor and uptime accumulator trackers.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.TickAccumulatorTrackers
 */
export declare const QueryTickAccumulatorTrackersService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Query";
    readonly method: "TickAccumulatorTrackers";
    readonly Request: typeof TickAccumulatorTrackersRequest;
    readonly Response: typeof TickAccumulatorTrackersResponse;
};
/**
 * CFMMPoolIdLinkFromConcentratedPoolId returns the pool id of the CFMM
 * pool that is linked with the given concentrated pool.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.CFMMPoolIdLinkFromConcentratedPoolId
 */
export declare const QueryCFMMPoolIdLinkFromConcentratedPoolIdService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Query";
    readonly method: "CFMMPoolIdLinkFromConcentratedPoolId";
    readonly Request: typeof CFMMPoolIdLinkFromConcentratedPoolIdRequest;
    readonly Response: typeof CFMMPoolIdLinkFromConcentratedPoolIdResponse;
};
/**
 * UserUnbondingPositions returns the position and lock info of unbonding
 * positions of the given address.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.UserUnbondingPositions
 */
export declare const QueryUserUnbondingPositionsService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Query";
    readonly method: "UserUnbondingPositions";
    readonly Request: typeof UserUnbondingPositionsRequest;
    readonly Response: typeof UserUnbondingPositionsResponse;
};
/**
 * GetTotalLiquidity returns total liquidity across all cl pools.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.GetTotalLiquidity
 */
export declare const QueryGetTotalLiquidityService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Query";
    readonly method: "GetTotalLiquidity";
    readonly Request: typeof GetTotalLiquidityRequest;
    readonly Response: typeof GetTotalLiquidityResponse;
};
/**
 * NumNextInitializedTicks returns the provided number of next initialized
 * ticks in the direction of swapping the token in denom.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.NumNextInitializedTicks
 */
export declare const QueryNumNextInitializedTicksService: {
    readonly typeName: "osmosis.concentratedliquidity.v1beta1.Query";
    readonly method: "NumNextInitializedTicks";
    readonly Request: typeof NumNextInitializedTicksRequest;
    readonly Response: typeof NumNextInitializedTicksResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map