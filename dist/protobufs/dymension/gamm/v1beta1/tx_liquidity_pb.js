// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/gamm/v1beta1/tx_liquidity.proto (package dymensionxyz.dymension.gamm.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgJoinPool
 */
class MsgJoinPool extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: uint64 pool_id = 2;
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: string share_out_amount = 3;
         */
        this.shareOutAmount = "";
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin token_in_maxs = 4;
         */
        this.tokenInMaxs = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgJoinPool().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgJoinPool().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgJoinPool().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgJoinPool, a, b);
    }
}
MsgJoinPool.runtime = proto3;
MsgJoinPool.typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgJoinPool";
MsgJoinPool.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "share_out_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "token_in_maxs", kind: "message", T: Coin, repeated: true },
]);
export { MsgJoinPool };
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgJoinPoolResponse
 */
class MsgJoinPoolResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string share_out_amount = 1;
         */
        this.shareOutAmount = "";
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin token_in = 2;
         */
        this.tokenIn = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgJoinPoolResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgJoinPoolResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgJoinPoolResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgJoinPoolResponse, a, b);
    }
}
MsgJoinPoolResponse.runtime = proto3;
MsgJoinPoolResponse.typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgJoinPoolResponse";
MsgJoinPoolResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "share_out_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "token_in", kind: "message", T: Coin, repeated: true },
]);
export { MsgJoinPoolResponse };
/**
 * ===================== MsgExitPool
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgExitPool
 */
class MsgExitPool extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: uint64 pool_id = 2;
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: string share_in_amount = 3;
         */
        this.shareInAmount = "";
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin token_out_mins = 4;
         */
        this.tokenOutMins = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExitPool().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExitPool().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExitPool().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgExitPool, a, b);
    }
}
MsgExitPool.runtime = proto3;
MsgExitPool.typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgExitPool";
MsgExitPool.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "share_in_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "token_out_mins", kind: "message", T: Coin, repeated: true },
]);
export { MsgExitPool };
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgExitPoolResponse
 */
class MsgExitPoolResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin token_out = 1;
         */
        this.tokenOut = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExitPoolResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExitPoolResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExitPoolResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgExitPoolResponse, a, b);
    }
}
MsgExitPoolResponse.runtime = proto3;
MsgExitPoolResponse.typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgExitPoolResponse";
MsgExitPoolResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "token_out", kind: "message", T: Coin, repeated: true },
]);
export { MsgExitPoolResponse };
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapExternAmountIn
 */
class MsgJoinSwapExternAmountIn extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: uint64 pool_id = 2;
         */
        this.poolId = protoInt64.zero;
        /**
         * repeated cosmos.base.v1beta1.Coin tokensIn = 5 [
         *   (gogoproto.moretags) = "yaml:\"tokens_in\"",
         *   (gogoproto.nullable) = false
         * ];
         *
         * @generated from field: string share_out_min_amount = 4;
         */
        this.shareOutMinAmount = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgJoinSwapExternAmountIn().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgJoinSwapExternAmountIn().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgJoinSwapExternAmountIn().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgJoinSwapExternAmountIn, a, b);
    }
}
MsgJoinSwapExternAmountIn.runtime = proto3;
MsgJoinSwapExternAmountIn.typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapExternAmountIn";
MsgJoinSwapExternAmountIn.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "token_in", kind: "message", T: Coin },
    { no: 4, name: "share_out_min_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { MsgJoinSwapExternAmountIn };
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapExternAmountInResponse
 */
class MsgJoinSwapExternAmountInResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string share_out_amount = 1;
         */
        this.shareOutAmount = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgJoinSwapExternAmountInResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgJoinSwapExternAmountInResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgJoinSwapExternAmountInResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgJoinSwapExternAmountInResponse, a, b);
    }
}
MsgJoinSwapExternAmountInResponse.runtime = proto3;
MsgJoinSwapExternAmountInResponse.typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapExternAmountInResponse";
MsgJoinSwapExternAmountInResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "share_out_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { MsgJoinSwapExternAmountInResponse };
/**
 * ===================== MsgJoinSwapShareAmountOut
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapShareAmountOut
 */
class MsgJoinSwapShareAmountOut extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: uint64 pool_id = 2;
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: string token_in_denom = 3;
         */
        this.tokenInDenom = "";
        /**
         * @generated from field: string share_out_amount = 4;
         */
        this.shareOutAmount = "";
        /**
         * @generated from field: string token_in_max_amount = 5;
         */
        this.tokenInMaxAmount = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgJoinSwapShareAmountOut().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgJoinSwapShareAmountOut().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgJoinSwapShareAmountOut().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgJoinSwapShareAmountOut, a, b);
    }
}
MsgJoinSwapShareAmountOut.runtime = proto3;
MsgJoinSwapShareAmountOut.typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapShareAmountOut";
MsgJoinSwapShareAmountOut.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "token_in_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "share_out_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "token_in_max_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { MsgJoinSwapShareAmountOut };
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse
 */
class MsgJoinSwapShareAmountOutResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string token_in_amount = 1;
         */
        this.tokenInAmount = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgJoinSwapShareAmountOutResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgJoinSwapShareAmountOutResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgJoinSwapShareAmountOutResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgJoinSwapShareAmountOutResponse, a, b);
    }
}
MsgJoinSwapShareAmountOutResponse.runtime = proto3;
MsgJoinSwapShareAmountOutResponse.typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse";
MsgJoinSwapShareAmountOutResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "token_in_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { MsgJoinSwapShareAmountOutResponse };
/**
 * ===================== MsgExitSwapShareAmountIn
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapShareAmountIn
 */
class MsgExitSwapShareAmountIn extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: uint64 pool_id = 2;
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: string token_out_denom = 3;
         */
        this.tokenOutDenom = "";
        /**
         * @generated from field: string share_in_amount = 4;
         */
        this.shareInAmount = "";
        /**
         * @generated from field: string token_out_min_amount = 5;
         */
        this.tokenOutMinAmount = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExitSwapShareAmountIn().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExitSwapShareAmountIn().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExitSwapShareAmountIn().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgExitSwapShareAmountIn, a, b);
    }
}
MsgExitSwapShareAmountIn.runtime = proto3;
MsgExitSwapShareAmountIn.typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapShareAmountIn";
MsgExitSwapShareAmountIn.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "token_out_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "share_in_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "token_out_min_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { MsgExitSwapShareAmountIn };
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapShareAmountInResponse
 */
class MsgExitSwapShareAmountInResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string token_out_amount = 1;
         */
        this.tokenOutAmount = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExitSwapShareAmountInResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExitSwapShareAmountInResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExitSwapShareAmountInResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgExitSwapShareAmountInResponse, a, b);
    }
}
MsgExitSwapShareAmountInResponse.runtime = proto3;
MsgExitSwapShareAmountInResponse.typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapShareAmountInResponse";
MsgExitSwapShareAmountInResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "token_out_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { MsgExitSwapShareAmountInResponse };
/**
 * ===================== MsgExitSwapExternAmountOut
 *
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapExternAmountOut
 */
class MsgExitSwapExternAmountOut extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: uint64 pool_id = 2;
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: string share_in_max_amount = 4;
         */
        this.shareInMaxAmount = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExitSwapExternAmountOut().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExitSwapExternAmountOut().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExitSwapExternAmountOut().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgExitSwapExternAmountOut, a, b);
    }
}
MsgExitSwapExternAmountOut.runtime = proto3;
MsgExitSwapExternAmountOut.typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapExternAmountOut";
MsgExitSwapExternAmountOut.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "token_out", kind: "message", T: Coin },
    { no: 4, name: "share_in_max_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { MsgExitSwapExternAmountOut };
/**
 * @generated from message dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapExternAmountOutResponse
 */
class MsgExitSwapExternAmountOutResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string share_in_amount = 1;
         */
        this.shareInAmount = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExitSwapExternAmountOutResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExitSwapExternAmountOutResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExitSwapExternAmountOutResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgExitSwapExternAmountOutResponse, a, b);
    }
}
MsgExitSwapExternAmountOutResponse.runtime = proto3;
MsgExitSwapExternAmountOutResponse.typeName = "dymensionxyz.dymension.gamm.v1beta1.MsgExitSwapExternAmountOutResponse";
MsgExitSwapExternAmountOutResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "share_in_amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { MsgExitSwapExternAmountOutResponse };
//# sourceMappingURL=tx_liquidity_pb.js.map