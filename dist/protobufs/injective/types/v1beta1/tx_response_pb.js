// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/types/v1beta1/tx_response.proto (package injective.types.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * base header ak message type, we can cast the bytes into corresponding message
 * response type
 *
 * @generated from message injective.types.v1beta1.TxResponseGenericMessage
 */
class TxResponseGenericMessage extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string header = 1;
         */
        this.header = "";
        /**
         * @generated from field: bytes data = 2;
         */
        this.data = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TxResponseGenericMessage().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TxResponseGenericMessage().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TxResponseGenericMessage().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TxResponseGenericMessage, a, b);
    }
}
TxResponseGenericMessage.runtime = proto3;
TxResponseGenericMessage.typeName = "injective.types.v1beta1.TxResponseGenericMessage";
TxResponseGenericMessage.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "header", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
export { TxResponseGenericMessage };
/**
 * improvised message to unpack length prefixed messages in tx response data
 *
 * @generated from message injective.types.v1beta1.TxResponseData
 */
class TxResponseData extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated injective.types.v1beta1.TxResponseGenericMessage messages = 1;
         */
        this.messages = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TxResponseData().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TxResponseData().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TxResponseData().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TxResponseData, a, b);
    }
}
TxResponseData.runtime = proto3;
TxResponseData.typeName = "injective.types.v1beta1.TxResponseData";
TxResponseData.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "messages", kind: "message", T: TxResponseGenericMessage, repeated: true },
]);
export { TxResponseData };
//# sourceMappingURL=tx_response_pb.js.map