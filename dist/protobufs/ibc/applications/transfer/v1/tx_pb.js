// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/applications/transfer/v1/tx.proto (package ibc.applications.transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
import { Height } from "../../../core/client/v1/client_pb.js";
import { Params } from "./transfer_pb.js";
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 *
 * @generated from message ibc.applications.transfer.v1.MsgTransfer
 */
export class MsgTransfer extends Message {
    constructor(data) {
        super();
        /**
         * the port on which the packet will be sent
         *
         * @generated from field: string source_port = 1;
         */
        this.sourcePort = "";
        /**
         * the channel by which the packet will be sent
         *
         * @generated from field: string source_channel = 2;
         */
        this.sourceChannel = "";
        /**
         * the sender address
         *
         * @generated from field: string sender = 4;
         */
        this.sender = "";
        /**
         * the recipient address on the destination chain
         *
         * @generated from field: string receiver = 5;
         */
        this.receiver = "";
        /**
         * Timeout timestamp in absolute nanoseconds since unix epoch.
         * The timeout is disabled when set to 0.
         *
         * @generated from field: uint64 timeout_timestamp = 7;
         */
        this.timeoutTimestamp = protoInt64.zero;
        /**
         * optional memo
         *
         * @generated from field: string memo = 8;
         */
        this.memo = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgTransfer().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgTransfer().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgTransfer().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgTransfer, a, b);
    }
}
MsgTransfer.runtime = proto3;
MsgTransfer.typeName = "ibc.applications.transfer.v1.MsgTransfer";
MsgTransfer.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "source_port", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "source_channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "token", kind: "message", T: Coin },
    { no: 4, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "timeout_height", kind: "message", T: Height },
    { no: 7, name: "timeout_timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "memo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgTransferResponse defines the Msg/Transfer response type.
 *
 * @generated from message ibc.applications.transfer.v1.MsgTransferResponse
 */
export class MsgTransferResponse extends Message {
    constructor(data) {
        super();
        /**
         * sequence number of the transfer packet sent
         *
         * @generated from field: uint64 sequence = 1;
         */
        this.sequence = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgTransferResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgTransferResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgTransferResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgTransferResponse, a, b);
    }
}
MsgTransferResponse.runtime = proto3;
MsgTransferResponse.typeName = "ibc.applications.transfer.v1.MsgTransferResponse";
MsgTransferResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * @generated from message ibc.applications.transfer.v1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message {
    constructor(data) {
        super();
        /**
         * signer address
         *
         * @generated from field: string signer = 1;
         */
        this.signer = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateParams, a, b);
    }
}
MsgUpdateParams.runtime = proto3;
MsgUpdateParams.typeName = "ibc.applications.transfer.v1.MsgUpdateParams";
MsgUpdateParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
]);
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * @generated from message ibc.applications.transfer.v1.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateParamsResponse, a, b);
    }
}
MsgUpdateParamsResponse.runtime = proto3;
MsgUpdateParamsResponse.typeName = "ibc.applications.transfer.v1.MsgUpdateParamsResponse";
MsgUpdateParamsResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map