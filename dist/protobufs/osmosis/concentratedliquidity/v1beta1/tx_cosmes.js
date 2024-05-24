// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file osmosis/concentratedliquidity/v1beta1/tx.proto (package osmosis.concentratedliquidity.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { MsgAddToPosition, MsgAddToPositionResponse, MsgCollectIncentives, MsgCollectIncentivesResponse, MsgCollectSpreadRewards, MsgCollectSpreadRewardsResponse, MsgCreatePosition, MsgCreatePositionResponse, MsgTransferPositions, MsgTransferPositionsResponse, MsgWithdrawPosition, MsgWithdrawPositionResponse } from "./tx_pb.js";
const TYPE_NAME = "osmosis.concentratedliquidity.v1beta1.Msg";
/**
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Msg.CreatePosition
 */
export const MsgCreatePositionService = {
    typeName: TYPE_NAME,
    method: "CreatePosition",
    Request: MsgCreatePosition,
    Response: MsgCreatePositionResponse,
};
/**
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Msg.WithdrawPosition
 */
export const MsgWithdrawPositionService = {
    typeName: TYPE_NAME,
    method: "WithdrawPosition",
    Request: MsgWithdrawPosition,
    Response: MsgWithdrawPositionResponse,
};
/**
 * AddToPosition attempts to add amount0 and amount1 to a position
 * with the given position id.
 * To maintain backwards-compatibility with future implementations of
 * charging, this function deletes the old position and creates a new one with
 * the resulting amount after addition.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Msg.AddToPosition
 */
export const MsgAddToPositionService = {
    typeName: TYPE_NAME,
    method: "AddToPosition",
    Request: MsgAddToPosition,
    Response: MsgAddToPositionResponse,
};
/**
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Msg.CollectSpreadRewards
 */
export const MsgCollectSpreadRewardsService = {
    typeName: TYPE_NAME,
    method: "CollectSpreadRewards",
    Request: MsgCollectSpreadRewards,
    Response: MsgCollectSpreadRewardsResponse,
};
/**
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Msg.CollectIncentives
 */
export const MsgCollectIncentivesService = {
    typeName: TYPE_NAME,
    method: "CollectIncentives",
    Request: MsgCollectIncentives,
    Response: MsgCollectIncentivesResponse,
};
/**
 * TransferPositions transfers ownership of a set of one or more positions
 * from a sender to a recipient.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Msg.TransferPositions
 */
export const MsgTransferPositionsService = {
    typeName: TYPE_NAME,
    method: "TransferPositions",
    Request: MsgTransferPositions,
    Response: MsgTransferPositionsResponse,
};
//# sourceMappingURL=tx_cosmes.js.map