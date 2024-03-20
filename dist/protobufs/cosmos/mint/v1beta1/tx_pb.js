// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/mint/v1beta1/tx.proto (package cosmos.mint.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./mint_pb.js";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.mint.v1beta1.MsgUpdateParams
 */
class MsgUpdateParams extends Message {
    constructor(data) {
        super();
        /**
         * authority is the address that controls the module (defaults to x/gov unless overwritten).
         *
         * @generated from field: string authority = 1;
         */
        this.authority = "";
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
MsgUpdateParams.typeName = "cosmos.mint.v1beta1.MsgUpdateParams";
MsgUpdateParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
]);
export { MsgUpdateParams };
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.mint.v1beta1.MsgUpdateParamsResponse
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
MsgUpdateParamsResponse.typeName = "cosmos.mint.v1beta1.MsgUpdateParamsResponse";
MsgUpdateParamsResponse.fields = proto3.util.newFieldList(() => []);
export { MsgUpdateParamsResponse };
//# sourceMappingURL=tx_pb.js.map