// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/gamm/pool-models/balancer/tx.proto (package dymensionxyz.dymension.gamm.poolmodels.balancer.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { PoolAsset, PoolParams } from "./balancerPool_pb.js";
/**
 * ===================== MsgCreatePool
 *
 * @generated from message dymensionxyz.dymension.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool
 */
class MsgCreateBalancerPool extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string sender = 1;
         */
        this.sender = "";
        /**
         * @generated from field: repeated dymensionxyz.dymension.gamm.v1beta1.PoolAsset pool_assets = 3;
         */
        this.poolAssets = [];
        /**
         * @generated from field: string future_pool_governor = 4;
         */
        this.futurePoolGovernor = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateBalancerPool().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateBalancerPool().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateBalancerPool().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateBalancerPool, a, b);
    }
}
MsgCreateBalancerPool.runtime = proto3;
MsgCreateBalancerPool.typeName = "dymensionxyz.dymension.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool";
MsgCreateBalancerPool.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pool_params", kind: "message", T: PoolParams },
    { no: 3, name: "pool_assets", kind: "message", T: PoolAsset, repeated: true },
    { no: 4, name: "future_pool_governor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { MsgCreateBalancerPool };
/**
 * Returns the poolID
 *
 * @generated from message dymensionxyz.dymension.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse
 */
class MsgCreateBalancerPoolResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 pool_id = 1;
         */
        this.poolId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateBalancerPoolResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateBalancerPoolResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateBalancerPoolResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateBalancerPoolResponse, a, b);
    }
}
MsgCreateBalancerPoolResponse.runtime = proto3;
MsgCreateBalancerPoolResponse.typeName = "dymensionxyz.dymension.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse";
MsgCreateBalancerPoolResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { MsgCreateBalancerPoolResponse };
//# sourceMappingURL=tx_pb.js.map