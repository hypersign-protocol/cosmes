// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file injective/peggy/v1/msgs.proto (package injective.peggy.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { MsgCancelSendToEth, MsgCancelSendToEthResponse, MsgConfirmBatch, MsgConfirmBatchResponse, MsgDepositClaim, MsgDepositClaimResponse, MsgERC20DeployedClaim, MsgERC20DeployedClaimResponse, MsgRequestBatch, MsgRequestBatchResponse, MsgSendToEth, MsgSendToEthResponse, MsgSetOrchestratorAddresses, MsgSetOrchestratorAddressesResponse, MsgSubmitBadSignatureEvidence, MsgSubmitBadSignatureEvidenceResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgValsetConfirm, MsgValsetConfirmResponse, MsgValsetUpdatedClaim, MsgValsetUpdatedClaimResponse, MsgWithdrawClaim, MsgWithdrawClaimResponse } from "./msgs_pb.js";
const TYPE_NAME = "injective.peggy.v1.Msg";
/**
 * @generated from rpc injective.peggy.v1.Msg.ValsetConfirm
 */
export const MsgValsetConfirmService = {
    typeName: TYPE_NAME,
    method: "ValsetConfirm",
    Request: MsgValsetConfirm,
    Response: MsgValsetConfirmResponse,
};
/**
 * @generated from rpc injective.peggy.v1.Msg.SendToEth
 */
export const MsgSendToEthService = {
    typeName: TYPE_NAME,
    method: "SendToEth",
    Request: MsgSendToEth,
    Response: MsgSendToEthResponse,
};
/**
 * @generated from rpc injective.peggy.v1.Msg.RequestBatch
 */
export const MsgRequestBatchService = {
    typeName: TYPE_NAME,
    method: "RequestBatch",
    Request: MsgRequestBatch,
    Response: MsgRequestBatchResponse,
};
/**
 * @generated from rpc injective.peggy.v1.Msg.ConfirmBatch
 */
export const MsgConfirmBatchService = {
    typeName: TYPE_NAME,
    method: "ConfirmBatch",
    Request: MsgConfirmBatch,
    Response: MsgConfirmBatchResponse,
};
/**
 * @generated from rpc injective.peggy.v1.Msg.DepositClaim
 */
export const MsgDepositClaimService = {
    typeName: TYPE_NAME,
    method: "DepositClaim",
    Request: MsgDepositClaim,
    Response: MsgDepositClaimResponse,
};
/**
 * @generated from rpc injective.peggy.v1.Msg.WithdrawClaim
 */
export const MsgWithdrawClaimService = {
    typeName: TYPE_NAME,
    method: "WithdrawClaim",
    Request: MsgWithdrawClaim,
    Response: MsgWithdrawClaimResponse,
};
/**
 * @generated from rpc injective.peggy.v1.Msg.ValsetUpdateClaim
 */
export const MsgValsetUpdateClaimService = {
    typeName: TYPE_NAME,
    method: "ValsetUpdateClaim",
    Request: MsgValsetUpdatedClaim,
    Response: MsgValsetUpdatedClaimResponse,
};
/**
 * @generated from rpc injective.peggy.v1.Msg.ERC20DeployedClaim
 */
export const MsgERC20DeployedClaimService = {
    typeName: TYPE_NAME,
    method: "ERC20DeployedClaim",
    Request: MsgERC20DeployedClaim,
    Response: MsgERC20DeployedClaimResponse,
};
/**
 * @generated from rpc injective.peggy.v1.Msg.SetOrchestratorAddresses
 */
export const MsgSetOrchestratorAddressesService = {
    typeName: TYPE_NAME,
    method: "SetOrchestratorAddresses",
    Request: MsgSetOrchestratorAddresses,
    Response: MsgSetOrchestratorAddressesResponse,
};
/**
 * @generated from rpc injective.peggy.v1.Msg.CancelSendToEth
 */
export const MsgCancelSendToEthService = {
    typeName: TYPE_NAME,
    method: "CancelSendToEth",
    Request: MsgCancelSendToEth,
    Response: MsgCancelSendToEthResponse,
};
/**
 * @generated from rpc injective.peggy.v1.Msg.SubmitBadSignatureEvidence
 */
export const MsgSubmitBadSignatureEvidenceService = {
    typeName: TYPE_NAME,
    method: "SubmitBadSignatureEvidence",
    Request: MsgSubmitBadSignatureEvidence,
    Response: MsgSubmitBadSignatureEvidenceResponse,
};
/**
 * @generated from rpc injective.peggy.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
    typeName: TYPE_NAME,
    method: "UpdateParams",
    Request: MsgUpdateParams,
    Response: MsgUpdateParamsResponse,
};
//# sourceMappingURL=msgs_cosmes.js.map