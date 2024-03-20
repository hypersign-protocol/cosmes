// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/applications/interchain_accounts/controller/v1/tx.proto (package ibc.applications.interchain_accounts.controller.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Order } from "../../../../core/channel/v1/channel_pb.js";
import { InterchainAccountPacketData } from "../../v1/packet_pb.js";
import { Params } from "./controller_pb.js";
/**
 * MsgRegisterInterchainAccount defines the payload for Msg/RegisterAccount
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount
 */
class MsgRegisterInterchainAccount extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string owner = 1;
         */
        this.owner = "";
        /**
         * @generated from field: string connection_id = 2;
         */
        this.connectionId = "";
        /**
         * @generated from field: string version = 3;
         */
        this.version = "";
        /**
         * @generated from field: ibc.core.channel.v1.Order ordering = 4;
         */
        this.ordering = Order.NONE_UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgRegisterInterchainAccount().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgRegisterInterchainAccount().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgRegisterInterchainAccount().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgRegisterInterchainAccount, a, b);
    }
}
MsgRegisterInterchainAccount.runtime = proto3;
MsgRegisterInterchainAccount.typeName = "ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount";
MsgRegisterInterchainAccount.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ordering", kind: "enum", T: proto3.getEnumType(Order) },
]);
export { MsgRegisterInterchainAccount };
/**
 * MsgRegisterInterchainAccountResponse defines the response for Msg/RegisterAccount
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse
 */
class MsgRegisterInterchainAccountResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string channel_id = 1;
         */
        this.channelId = "";
        /**
         * @generated from field: string port_id = 2;
         */
        this.portId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgRegisterInterchainAccountResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgRegisterInterchainAccountResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgRegisterInterchainAccountResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgRegisterInterchainAccountResponse, a, b);
    }
}
MsgRegisterInterchainAccountResponse.runtime = proto3;
MsgRegisterInterchainAccountResponse.typeName = "ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse";
MsgRegisterInterchainAccountResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { MsgRegisterInterchainAccountResponse };
/**
 * MsgSendTx defines the payload for Msg/SendTx
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.MsgSendTx
 */
class MsgSendTx extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string owner = 1;
         */
        this.owner = "";
        /**
         * @generated from field: string connection_id = 2;
         */
        this.connectionId = "";
        /**
         * Relative timeout timestamp provided will be added to the current block time during transaction execution.
         * The timeout timestamp must be non-zero.
         *
         * @generated from field: uint64 relative_timeout = 4;
         */
        this.relativeTimeout = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSendTx().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSendTx().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSendTx().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSendTx, a, b);
    }
}
MsgSendTx.runtime = proto3;
MsgSendTx.typeName = "ibc.applications.interchain_accounts.controller.v1.MsgSendTx";
MsgSendTx.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "packet_data", kind: "message", T: InterchainAccountPacketData },
    { no: 4, name: "relative_timeout", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { MsgSendTx };
/**
 * MsgSendTxResponse defines the response for MsgSendTx
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse
 */
class MsgSendTxResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 sequence = 1;
         */
        this.sequence = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSendTxResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSendTxResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSendTxResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSendTxResponse, a, b);
    }
}
MsgSendTxResponse.runtime = proto3;
MsgSendTxResponse.typeName = "ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse";
MsgSendTxResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { MsgSendTxResponse };
/**
 * MsgUpdateParams defines the payload for Msg/UpdateParams
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams
 */
class MsgUpdateParams extends Message {
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
MsgUpdateParams.typeName = "ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams";
MsgUpdateParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
]);
export { MsgUpdateParams };
/**
 * MsgUpdateParamsResponse defines the response for Msg/UpdateParams
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.MsgUpdateParamsResponse
 */
class MsgUpdateParamsResponse extends Message {
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
MsgUpdateParamsResponse.typeName = "ibc.applications.interchain_accounts.controller.v1.MsgUpdateParamsResponse";
MsgUpdateParamsResponse.fields = proto3.util.newFieldList(() => []);
export { MsgUpdateParamsResponse };
//# sourceMappingURL=tx_pb.js.map