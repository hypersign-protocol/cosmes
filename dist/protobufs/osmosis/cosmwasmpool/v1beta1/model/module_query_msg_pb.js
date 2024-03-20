// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/cosmwasmpool/v1beta1/model/module_query_msg.proto (package osmosis.cosmwasmpool.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * ===================== CalcOutAmtGivenIn
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn
 */
class CalcOutAmtGivenIn extends Message {
    constructor(data) {
        super();
        /**
         * token_out_denom is the token denom to be received from the pool.
         *
         * @generated from field: string token_out_denom = 2;
         */
        this.tokenOutDenom = "";
        /**
         * swap_fee is the swap fee for this swap estimate.
         *
         * @generated from field: string swap_fee = 3;
         */
        this.swapFee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CalcOutAmtGivenIn().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CalcOutAmtGivenIn().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CalcOutAmtGivenIn().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CalcOutAmtGivenIn, a, b);
    }
}
CalcOutAmtGivenIn.runtime = proto3;
CalcOutAmtGivenIn.typeName = "osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenIn";
CalcOutAmtGivenIn.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "token_in", kind: "message", T: Coin },
    { no: 2, name: "token_out_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "swap_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { CalcOutAmtGivenIn };
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInRequest
 */
class CalcOutAmtGivenInRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CalcOutAmtGivenInRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CalcOutAmtGivenInRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CalcOutAmtGivenInRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CalcOutAmtGivenInRequest, a, b);
    }
}
CalcOutAmtGivenInRequest.runtime = proto3;
CalcOutAmtGivenInRequest.typeName = "osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInRequest";
CalcOutAmtGivenInRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "calc_out_amt_given_in", kind: "message", T: CalcOutAmtGivenIn },
]);
export { CalcOutAmtGivenInRequest };
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInResponse
 */
class CalcOutAmtGivenInResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CalcOutAmtGivenInResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CalcOutAmtGivenInResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CalcOutAmtGivenInResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CalcOutAmtGivenInResponse, a, b);
    }
}
CalcOutAmtGivenInResponse.runtime = proto3;
CalcOutAmtGivenInResponse.typeName = "osmosis.cosmwasmpool.v1beta1.CalcOutAmtGivenInResponse";
CalcOutAmtGivenInResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "token_out", kind: "message", T: Coin },
]);
export { CalcOutAmtGivenInResponse };
/**
 * ===================== CalcInAmtGivenOut
 *
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut
 */
class CalcInAmtGivenOut extends Message {
    constructor(data) {
        super();
        /**
         * token_in_denom is the token denom to be sentt to the pool.
         *
         * @generated from field: string token_in_denom = 2;
         */
        this.tokenInDenom = "";
        /**
         * swap_fee is the swap fee for this swap estimate.
         *
         * @generated from field: string swap_fee = 3;
         */
        this.swapFee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CalcInAmtGivenOut().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CalcInAmtGivenOut().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CalcInAmtGivenOut().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CalcInAmtGivenOut, a, b);
    }
}
CalcInAmtGivenOut.runtime = proto3;
CalcInAmtGivenOut.typeName = "osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOut";
CalcInAmtGivenOut.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "token_out", kind: "message", T: Coin },
    { no: 2, name: "token_in_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "swap_fee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { CalcInAmtGivenOut };
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutRequest
 */
class CalcInAmtGivenOutRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CalcInAmtGivenOutRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CalcInAmtGivenOutRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CalcInAmtGivenOutRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CalcInAmtGivenOutRequest, a, b);
    }
}
CalcInAmtGivenOutRequest.runtime = proto3;
CalcInAmtGivenOutRequest.typeName = "osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutRequest";
CalcInAmtGivenOutRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "calc_in_amt_given_out", kind: "message", T: CalcInAmtGivenOut },
]);
export { CalcInAmtGivenOutRequest };
/**
 * @generated from message osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutResponse
 */
class CalcInAmtGivenOutResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CalcInAmtGivenOutResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CalcInAmtGivenOutResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CalcInAmtGivenOutResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CalcInAmtGivenOutResponse, a, b);
    }
}
CalcInAmtGivenOutResponse.runtime = proto3;
CalcInAmtGivenOutResponse.typeName = "osmosis.cosmwasmpool.v1beta1.CalcInAmtGivenOutResponse";
CalcInAmtGivenOutResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "token_in", kind: "message", T: Coin },
]);
export { CalcInAmtGivenOutResponse };
//# sourceMappingURL=module_query_msg_pb.js.map