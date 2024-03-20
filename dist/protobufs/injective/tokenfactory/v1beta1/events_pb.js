// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/tokenfactory/v1beta1/events.proto (package injective.tokenfactory.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
import { Metadata } from "../../../cosmos/bank/v1beta1/bank_pb.js";
/**
 * @generated from message injective.tokenfactory.v1beta1.EventCreateTFDenom
 */
class EventCreateTFDenom extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string account = 1;
         */
        this.account = "";
        /**
         * @generated from field: string denom = 2;
         */
        this.denom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventCreateTFDenom().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventCreateTFDenom().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventCreateTFDenom().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventCreateTFDenom, a, b);
    }
}
EventCreateTFDenom.runtime = proto3;
EventCreateTFDenom.typeName = "injective.tokenfactory.v1beta1.EventCreateTFDenom";
EventCreateTFDenom.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { EventCreateTFDenom };
/**
 * @generated from message injective.tokenfactory.v1beta1.EventMintTFDenom
 */
class EventMintTFDenom extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string recipient_address = 1;
         */
        this.recipientAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventMintTFDenom().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventMintTFDenom().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventMintTFDenom().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventMintTFDenom, a, b);
    }
}
EventMintTFDenom.runtime = proto3;
EventMintTFDenom.typeName = "injective.tokenfactory.v1beta1.EventMintTFDenom";
EventMintTFDenom.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "recipient_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
]);
export { EventMintTFDenom };
/**
 * @generated from message injective.tokenfactory.v1beta1.EventBurnDenom
 */
class EventBurnDenom extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string burner_address = 1;
         */
        this.burnerAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventBurnDenom().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventBurnDenom().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventBurnDenom().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventBurnDenom, a, b);
    }
}
EventBurnDenom.runtime = proto3;
EventBurnDenom.typeName = "injective.tokenfactory.v1beta1.EventBurnDenom";
EventBurnDenom.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "burner_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "message", T: Coin },
]);
export { EventBurnDenom };
/**
 * @generated from message injective.tokenfactory.v1beta1.EventChangeTFAdmin
 */
class EventChangeTFAdmin extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        /**
         * @generated from field: string new_admin_address = 2;
         */
        this.newAdminAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventChangeTFAdmin().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventChangeTFAdmin().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventChangeTFAdmin().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventChangeTFAdmin, a, b);
    }
}
EventChangeTFAdmin.runtime = proto3;
EventChangeTFAdmin.typeName = "injective.tokenfactory.v1beta1.EventChangeTFAdmin";
EventChangeTFAdmin.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_admin_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { EventChangeTFAdmin };
/**
 * @generated from message injective.tokenfactory.v1beta1.EventSetTFDenomMetadata
 */
class EventSetTFDenomMetadata extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string denom = 1;
         */
        this.denom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventSetTFDenomMetadata().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventSetTFDenomMetadata().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventSetTFDenomMetadata().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventSetTFDenomMetadata, a, b);
    }
}
EventSetTFDenomMetadata.runtime = proto3;
EventSetTFDenomMetadata.typeName = "injective.tokenfactory.v1beta1.EventSetTFDenomMetadata";
EventSetTFDenomMetadata.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "metadata", kind: "message", T: Metadata },
]);
export { EventSetTFDenomMetadata };
//# sourceMappingURL=events_pb.js.map