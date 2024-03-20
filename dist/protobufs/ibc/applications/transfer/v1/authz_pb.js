// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/applications/transfer/v1/authz.proto (package ibc.applications.transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * Allocation defines the spend limit for a particular port and channel
 *
 * @generated from message ibc.applications.transfer.v1.Allocation
 */
class Allocation extends Message {
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
         * spend limitation on the channel
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin spend_limit = 3;
         */
        this.spendLimit = [];
        /**
         * allow list of receivers, an empty allow list permits any receiver address
         *
         * @generated from field: repeated string allow_list = 4;
         */
        this.allowList = [];
        /**
         * allow list of packet data keys, an empty list prohibits all packet data keys;
         * a list only with "*" permits any packet data key
         *
         * @generated from field: repeated string allowed_packet_data = 5;
         */
        this.allowedPacketData = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Allocation().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Allocation().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Allocation().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Allocation, a, b);
    }
}
Allocation.runtime = proto3;
Allocation.typeName = "ibc.applications.transfer.v1.Allocation";
Allocation.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "source_port", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "source_channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "spend_limit", kind: "message", T: Coin, repeated: true },
    { no: 4, name: "allow_list", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "allowed_packet_data", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
export { Allocation };
/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 *
 * @generated from message ibc.applications.transfer.v1.TransferAuthorization
 */
class TransferAuthorization extends Message {
    constructor(data) {
        super();
        /**
         * port and channel amounts
         *
         * @generated from field: repeated ibc.applications.transfer.v1.Allocation allocations = 1;
         */
        this.allocations = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TransferAuthorization().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TransferAuthorization().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TransferAuthorization().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TransferAuthorization, a, b);
    }
}
TransferAuthorization.runtime = proto3;
TransferAuthorization.typeName = "ibc.applications.transfer.v1.TransferAuthorization";
TransferAuthorization.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "allocations", kind: "message", T: Allocation, repeated: true },
]);
export { TransferAuthorization };
//# sourceMappingURL=authz_pb.js.map