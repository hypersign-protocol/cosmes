// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file cosmos/bank/v1beta1/tx.proto (package cosmos.bank.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { MsgMultiSend, MsgMultiSendResponse, MsgSend, MsgSendResponse, MsgSetSendEnabled, MsgSetSendEnabledResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
const TYPE_NAME = "cosmos.bank.v1beta1.Msg";
/**
 * Send defines a method for sending coins from one account to another account.
 *
 * @generated from rpc cosmos.bank.v1beta1.Msg.Send
 */
export const MsgSendService = {
    typeName: TYPE_NAME,
    method: "Send",
    Request: MsgSend,
    Response: MsgSendResponse,
};
/**
 * MultiSend defines a method for sending coins from some accounts to other accounts.
 *
 * @generated from rpc cosmos.bank.v1beta1.Msg.MultiSend
 */
export const MsgMultiSendService = {
    typeName: TYPE_NAME,
    method: "MultiSend",
    Request: MsgMultiSend,
    Response: MsgMultiSendResponse,
};
/**
 * UpdateParams defines a governance operation for updating the x/bank module parameters.
 * The authority is defined in the keeper.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.bank.v1beta1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
    typeName: TYPE_NAME,
    method: "UpdateParams",
    Request: MsgUpdateParams,
    Response: MsgUpdateParamsResponse,
};
/**
 * SetSendEnabled is a governance operation for setting the SendEnabled flag
 * on any number of Denoms. Only the entries to add or update should be
 * included. Entries that already exist in the store, but that aren't
 * included in this message, will be left unchanged.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.bank.v1beta1.Msg.SetSendEnabled
 */
export const MsgSetSendEnabledService = {
    typeName: TYPE_NAME,
    method: "SetSendEnabled",
    Request: MsgSetSendEnabled,
    Response: MsgSetSendEnabledResponse,
};
//# sourceMappingURL=tx_cosmes.js.map