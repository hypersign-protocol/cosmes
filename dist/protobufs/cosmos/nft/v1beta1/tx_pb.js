// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/nft/v1beta1/tx.proto (package cosmos.nft.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * MsgSend represents a message to send a nft from one account to another account.
 *
 * @generated from message cosmos.nft.v1beta1.MsgSend
 */
export class MsgSend extends Message {
    constructor(data) {
        super();
        /**
         * class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721
         *
         * @generated from field: string class_id = 1;
         */
        this.classId = "";
        /**
         * id defines the unique identification of nft
         *
         * @generated from field: string id = 2;
         */
        this.id = "";
        /**
         * sender is the address of the owner of nft
         *
         * @generated from field: string sender = 3;
         */
        this.sender = "";
        /**
         * receiver is the receiver address of nft
         *
         * @generated from field: string receiver = 4;
         */
        this.receiver = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSend().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSend().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSend().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSend, a, b);
    }
}
MsgSend.runtime = proto3;
MsgSend.typeName = "cosmos.nft.v1beta1.MsgSend";
MsgSend.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgSendResponse defines the Msg/Send response type.
 *
 * @generated from message cosmos.nft.v1beta1.MsgSendResponse
 */
export class MsgSendResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSendResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSendResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSendResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSendResponse, a, b);
    }
}
MsgSendResponse.runtime = proto3;
MsgSendResponse.typeName = "cosmos.nft.v1beta1.MsgSendResponse";
MsgSendResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map