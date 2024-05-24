// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file cosmwasm/wasm/v1/tx.proto (package cosmwasm.wasm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { MsgAddCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddressesResponse, MsgClearAdmin, MsgClearAdminResponse, MsgExecuteContract, MsgExecuteContractResponse, MsgInstantiateContract, MsgInstantiateContract2, MsgInstantiateContract2Response, MsgInstantiateContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgPinCodes, MsgPinCodesResponse, MsgRemoveCodeUploadParamsAddresses, MsgRemoveCodeUploadParamsAddressesResponse, MsgStoreAndInstantiateContract, MsgStoreAndInstantiateContractResponse, MsgStoreAndMigrateContract, MsgStoreAndMigrateContractResponse, MsgStoreCode, MsgStoreCodeResponse, MsgSudoContract, MsgSudoContractResponse, MsgUnpinCodes, MsgUnpinCodesResponse, MsgUpdateAdmin, MsgUpdateAdminResponse, MsgUpdateContractLabel, MsgUpdateContractLabelResponse, MsgUpdateInstantiateConfig, MsgUpdateInstantiateConfigResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
const TYPE_NAME = "cosmwasm.wasm.v1.Msg";
/**
 * StoreCode to submit Wasm code to the system
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.StoreCode
 */
export const MsgStoreCodeService = {
    typeName: TYPE_NAME,
    method: "StoreCode",
    Request: MsgStoreCode,
    Response: MsgStoreCodeResponse,
};
/**
 *  InstantiateContract creates a new smart contract instance for the given
 *  code id.
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.InstantiateContract
 */
export const MsgInstantiateContractService = {
    typeName: TYPE_NAME,
    method: "InstantiateContract",
    Request: MsgInstantiateContract,
    Response: MsgInstantiateContractResponse,
};
/**
 *  InstantiateContract2 creates a new smart contract instance for the given
 *  code id with a predictable address
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.InstantiateContract2
 */
export const MsgInstantiateContract2Service = {
    typeName: TYPE_NAME,
    method: "InstantiateContract2",
    Request: MsgInstantiateContract2,
    Response: MsgInstantiateContract2Response,
};
/**
 * Execute submits the given message data to a smart contract
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.ExecuteContract
 */
export const MsgExecuteContractService = {
    typeName: TYPE_NAME,
    method: "ExecuteContract",
    Request: MsgExecuteContract,
    Response: MsgExecuteContractResponse,
};
/**
 * Migrate runs a code upgrade/ downgrade for a smart contract
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.MigrateContract
 */
export const MsgMigrateContractService = {
    typeName: TYPE_NAME,
    method: "MigrateContract",
    Request: MsgMigrateContract,
    Response: MsgMigrateContractResponse,
};
/**
 * UpdateAdmin sets a new admin for a smart contract
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.UpdateAdmin
 */
export const MsgUpdateAdminService = {
    typeName: TYPE_NAME,
    method: "UpdateAdmin",
    Request: MsgUpdateAdmin,
    Response: MsgUpdateAdminResponse,
};
/**
 * ClearAdmin removes any admin stored for a smart contract
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.ClearAdmin
 */
export const MsgClearAdminService = {
    typeName: TYPE_NAME,
    method: "ClearAdmin",
    Request: MsgClearAdmin,
    Response: MsgClearAdminResponse,
};
/**
 * UpdateInstantiateConfig updates instantiate config for a smart contract
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.UpdateInstantiateConfig
 */
export const MsgUpdateInstantiateConfigService = {
    typeName: TYPE_NAME,
    method: "UpdateInstantiateConfig",
    Request: MsgUpdateInstantiateConfig,
    Response: MsgUpdateInstantiateConfigResponse,
};
/**
 * UpdateParams defines a governance operation for updating the x/wasm
 * module parameters. The authority is defined in the keeper.
 *
 * Since: 0.40
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
    typeName: TYPE_NAME,
    method: "UpdateParams",
    Request: MsgUpdateParams,
    Response: MsgUpdateParamsResponse,
};
/**
 * SudoContract defines a governance operation for calling sudo
 * on a contract. The authority is defined in the keeper.
 *
 * Since: 0.40
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.SudoContract
 */
export const MsgSudoContractService = {
    typeName: TYPE_NAME,
    method: "SudoContract",
    Request: MsgSudoContract,
    Response: MsgSudoContractResponse,
};
/**
 * PinCodes defines a governance operation for pinning a set of
 * code ids in the wasmvm cache. The authority is defined in the keeper.
 *
 * Since: 0.40
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.PinCodes
 */
export const MsgPinCodesService = {
    typeName: TYPE_NAME,
    method: "PinCodes",
    Request: MsgPinCodes,
    Response: MsgPinCodesResponse,
};
/**
 * UnpinCodes defines a governance operation for unpinning a set of
 * code ids in the wasmvm cache. The authority is defined in the keeper.
 *
 * Since: 0.40
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.UnpinCodes
 */
export const MsgUnpinCodesService = {
    typeName: TYPE_NAME,
    method: "UnpinCodes",
    Request: MsgUnpinCodes,
    Response: MsgUnpinCodesResponse,
};
/**
 * StoreAndInstantiateContract defines a governance operation for storing
 * and instantiating the contract. The authority is defined in the keeper.
 *
 * Since: 0.40
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.StoreAndInstantiateContract
 */
export const MsgStoreAndInstantiateContractService = {
    typeName: TYPE_NAME,
    method: "StoreAndInstantiateContract",
    Request: MsgStoreAndInstantiateContract,
    Response: MsgStoreAndInstantiateContractResponse,
};
/**
 * RemoveCodeUploadParamsAddresses defines a governance operation for
 * removing addresses from code upload params.
 * The authority is defined in the keeper.
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.RemoveCodeUploadParamsAddresses
 */
export const MsgRemoveCodeUploadParamsAddressesService = {
    typeName: TYPE_NAME,
    method: "RemoveCodeUploadParamsAddresses",
    Request: MsgRemoveCodeUploadParamsAddresses,
    Response: MsgRemoveCodeUploadParamsAddressesResponse,
};
/**
 * AddCodeUploadParamsAddresses defines a governance operation for
 * adding addresses to code upload params.
 * The authority is defined in the keeper.
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.AddCodeUploadParamsAddresses
 */
export const MsgAddCodeUploadParamsAddressesService = {
    typeName: TYPE_NAME,
    method: "AddCodeUploadParamsAddresses",
    Request: MsgAddCodeUploadParamsAddresses,
    Response: MsgAddCodeUploadParamsAddressesResponse,
};
/**
 * StoreAndMigrateContract defines a governance operation for storing
 * and migrating the contract. The authority is defined in the keeper.
 *
 * Since: 0.42
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.StoreAndMigrateContract
 */
export const MsgStoreAndMigrateContractService = {
    typeName: TYPE_NAME,
    method: "StoreAndMigrateContract",
    Request: MsgStoreAndMigrateContract,
    Response: MsgStoreAndMigrateContractResponse,
};
/**
 * UpdateContractLabel sets a new label for a smart contract
 *
 * Since: 0.43
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.UpdateContractLabel
 */
export const MsgUpdateContractLabelService = {
    typeName: TYPE_NAME,
    method: "UpdateContractLabel",
    Request: MsgUpdateContractLabel,
    Response: MsgUpdateContractLabelResponse,
};
//# sourceMappingURL=tx_cosmes.js.map