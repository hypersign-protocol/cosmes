// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file ibc/core/client/v1/tx.proto (package ibc.core.client.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { MsgCreateClient, MsgCreateClientResponse, MsgIBCSoftwareUpgrade, MsgIBCSoftwareUpgradeResponse, MsgRecoverClient, MsgRecoverClientResponse, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse, MsgUpdateClient, MsgUpdateClientResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpgradeClient, MsgUpgradeClientResponse } from "./tx_pb.js";
const TYPE_NAME = "ibc.core.client.v1.Msg";
/**
 * CreateClient defines a rpc handler method for MsgCreateClient.
 *
 * @generated from rpc ibc.core.client.v1.Msg.CreateClient
 */
export const MsgCreateClientService = {
    typeName: TYPE_NAME,
    method: "CreateClient",
    Request: MsgCreateClient,
    Response: MsgCreateClientResponse,
};
/**
 * UpdateClient defines a rpc handler method for MsgUpdateClient.
 *
 * @generated from rpc ibc.core.client.v1.Msg.UpdateClient
 */
export const MsgUpdateClientService = {
    typeName: TYPE_NAME,
    method: "UpdateClient",
    Request: MsgUpdateClient,
    Response: MsgUpdateClientResponse,
};
/**
 * UpgradeClient defines a rpc handler method for MsgUpgradeClient.
 *
 * @generated from rpc ibc.core.client.v1.Msg.UpgradeClient
 */
export const MsgUpgradeClientService = {
    typeName: TYPE_NAME,
    method: "UpgradeClient",
    Request: MsgUpgradeClient,
    Response: MsgUpgradeClientResponse,
};
/**
 * SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour.
 *
 * @generated from rpc ibc.core.client.v1.Msg.SubmitMisbehaviour
 */
export const MsgSubmitMisbehaviourService = {
    typeName: TYPE_NAME,
    method: "SubmitMisbehaviour",
    Request: MsgSubmitMisbehaviour,
    Response: MsgSubmitMisbehaviourResponse,
};
/**
 * RecoverClient defines a rpc handler method for MsgRecoverClient.
 *
 * @generated from rpc ibc.core.client.v1.Msg.RecoverClient
 */
export const MsgRecoverClientService = {
    typeName: TYPE_NAME,
    method: "RecoverClient",
    Request: MsgRecoverClient,
    Response: MsgRecoverClientResponse,
};
/**
 * IBCSoftwareUpgrade defines a rpc handler method for MsgIBCSoftwareUpgrade.
 *
 * @generated from rpc ibc.core.client.v1.Msg.IBCSoftwareUpgrade
 */
export const MsgIBCSoftwareUpgradeService = {
    typeName: TYPE_NAME,
    method: "IBCSoftwareUpgrade",
    Request: MsgIBCSoftwareUpgrade,
    Response: MsgIBCSoftwareUpgradeResponse,
};
/**
 * UpdateClientParams defines a rpc handler method for MsgUpdateParams.
 *
 * @generated from rpc ibc.core.client.v1.Msg.UpdateClientParams
 */
export const MsgUpdateClientParamsService = {
    typeName: TYPE_NAME,
    method: "UpdateClientParams",
    Request: MsgUpdateParams,
    Response: MsgUpdateParamsResponse,
};
//# sourceMappingURL=tx_cosmes.js.map