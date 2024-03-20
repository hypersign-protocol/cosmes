// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file ibc/lightclients/wasm/v1/wasm.proto (package ibc.lightclients.wasm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Height } from "../../../core/client/v1/client_pb.js";
/**
 * Wasm light client's Client state
 *
 * @generated from message ibc.lightclients.wasm.v1.ClientState
 */
export class ClientState extends Message {
    constructor(data) {
        super();
        /**
         * bytes encoding the client state of the underlying light client
         * implemented as a Wasm contract.
         *
         * @generated from field: bytes data = 1;
         */
        this.data = new Uint8Array(0);
        /**
         * @generated from field: bytes checksum = 2;
         */
        this.checksum = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClientState().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClientState().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClientState().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ClientState, a, b);
    }
}
ClientState.runtime = proto3;
ClientState.typeName = "ibc.lightclients.wasm.v1.ClientState";
ClientState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "checksum", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "latest_height", kind: "message", T: Height },
]);
/**
 * Wasm light client's ConsensusState
 *
 * @generated from message ibc.lightclients.wasm.v1.ConsensusState
 */
export class ConsensusState extends Message {
    constructor(data) {
        super();
        /**
         * bytes encoding the consensus state of the underlying light client
         * implemented as a Wasm contract.
         *
         * @generated from field: bytes data = 1;
         */
        this.data = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ConsensusState().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ConsensusState().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ConsensusState().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ConsensusState, a, b);
    }
}
ConsensusState.runtime = proto3;
ConsensusState.typeName = "ibc.lightclients.wasm.v1.ConsensusState";
ConsensusState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * Wasm light client message (either header(s) or misbehaviour)
 *
 * @generated from message ibc.lightclients.wasm.v1.ClientMessage
 */
export class ClientMessage extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes data = 1;
         */
        this.data = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClientMessage().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClientMessage().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClientMessage().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ClientMessage, a, b);
    }
}
ClientMessage.runtime = proto3;
ClientMessage.typeName = "ibc.lightclients.wasm.v1.ClientMessage";
ClientMessage.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * Checksums defines a list of all checksums that are stored
 *
 * Deprecated: This message is deprecated in favor of storing the checksums
 * using a Collections.KeySet.
 *
 * @generated from message ibc.lightclients.wasm.v1.Checksums
 * @deprecated
 */
export class Checksums extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated bytes checksums = 1;
         */
        this.checksums = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Checksums().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Checksums().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Checksums().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Checksums, a, b);
    }
}
Checksums.runtime = proto3;
Checksums.typeName = "ibc.lightclients.wasm.v1.Checksums";
Checksums.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "checksums", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
]);
//# sourceMappingURL=wasm_pb.js.map