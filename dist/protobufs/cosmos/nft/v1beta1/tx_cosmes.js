// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file cosmos/nft/v1beta1/tx.proto (package cosmos.nft.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { MsgSend, MsgSendResponse } from "./tx_pb.js";
const TYPE_NAME = "cosmos.nft.v1beta1.Msg";
/**
 * Send defines a method to send a nft from one account to another account.
 *
 * @generated from rpc cosmos.nft.v1beta1.Msg.Send
 */
export const MsgSendService = {
    typeName: TYPE_NAME,
    method: "Send",
    Request: MsgSend,
    Response: MsgSendResponse,
};
//# sourceMappingURL=tx_cosmes.js.map