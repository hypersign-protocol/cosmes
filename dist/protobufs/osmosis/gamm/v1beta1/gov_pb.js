// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/gamm/v1beta1/gov.proto (package osmosis.gamm.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { BalancerToConcentratedPoolLink } from "./shared_pb.js";
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 *
 * @generated from message osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal
 */
class ReplaceMigrationRecordsProposal extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string title = 1;
         */
        this.title = "";
        /**
         * @generated from field: string description = 2;
         */
        this.description = "";
        /**
         * @generated from field: repeated osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink records = 3;
         */
        this.records = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ReplaceMigrationRecordsProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ReplaceMigrationRecordsProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ReplaceMigrationRecordsProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ReplaceMigrationRecordsProposal, a, b);
    }
}
ReplaceMigrationRecordsProposal.runtime = proto3;
ReplaceMigrationRecordsProposal.typeName = "osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal";
ReplaceMigrationRecordsProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "records", kind: "message", T: BalancerToConcentratedPoolLink, repeated: true },
]);
export { ReplaceMigrationRecordsProposal };
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 *
 * @generated from message osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal
 */
class UpdateMigrationRecordsProposal extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string title = 1;
         */
        this.title = "";
        /**
         * @generated from field: string description = 2;
         */
        this.description = "";
        /**
         * @generated from field: repeated osmosis.gamm.v1beta1.BalancerToConcentratedPoolLink records = 3;
         */
        this.records = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new UpdateMigrationRecordsProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new UpdateMigrationRecordsProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new UpdateMigrationRecordsProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(UpdateMigrationRecordsProposal, a, b);
    }
}
UpdateMigrationRecordsProposal.runtime = proto3;
UpdateMigrationRecordsProposal.typeName = "osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal";
UpdateMigrationRecordsProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "records", kind: "message", T: BalancerToConcentratedPoolLink, repeated: true },
]);
export { UpdateMigrationRecordsProposal };
/**
 * @generated from message osmosis.gamm.v1beta1.PoolRecordWithCFMMLink
 */
class PoolRecordWithCFMMLink extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string denom0 = 1;
         */
        this.denom0 = "";
        /**
         * @generated from field: string denom1 = 2;
         */
        this.denom1 = "";
        /**
         * @generated from field: uint64 tick_spacing = 3;
         */
        this.tickSpacing = protoInt64.zero;
        /**
         * @generated from field: string exponent_at_price_one = 4;
         */
        this.exponentAtPriceOne = "";
        /**
         * @generated from field: string spread_factor = 5;
         */
        this.spreadFactor = "";
        /**
         * @generated from field: uint64 balancer_pool_id = 6;
         */
        this.balancerPoolId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PoolRecordWithCFMMLink().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PoolRecordWithCFMMLink().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PoolRecordWithCFMMLink().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PoolRecordWithCFMMLink, a, b);
    }
}
PoolRecordWithCFMMLink.runtime = proto3;
PoolRecordWithCFMMLink.typeName = "osmosis.gamm.v1beta1.PoolRecordWithCFMMLink";
PoolRecordWithCFMMLink.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "denom0", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "denom1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "tick_spacing", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "exponent_at_price_one", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "spread_factor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "balancer_pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { PoolRecordWithCFMMLink };
/**
 * CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal is a gov Content type
 * for creating concentrated liquidity pools and linking it to a CFMM pool.
 *
 * @generated from message osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal
 */
class CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string title = 1;
         */
        this.title = "";
        /**
         * @generated from field: string description = 2;
         */
        this.description = "";
        /**
         * @generated from field: repeated osmosis.gamm.v1beta1.PoolRecordWithCFMMLink pool_records_with_cfmm_link = 3;
         */
        this.poolRecordsWithCfmmLink = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal, a, b);
    }
}
CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.runtime = proto3;
CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.typeName = "osmosis.gamm.v1beta1.CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal";
CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pool_records_with_cfmm_link", kind: "message", T: PoolRecordWithCFMMLink, repeated: true },
]);
export { CreateConcentratedLiquidityPoolsAndLinktoCFMMProposal };
/**
 * SetScalingFactorControllerProposal is a gov Content type for updating the
 * scaling factor controller address of a stableswap pool
 *
 * @generated from message osmosis.gamm.v1beta1.SetScalingFactorControllerProposal
 */
class SetScalingFactorControllerProposal extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string title = 1;
         */
        this.title = "";
        /**
         * @generated from field: string description = 2;
         */
        this.description = "";
        /**
         * @generated from field: uint64 pool_id = 3;
         */
        this.poolId = protoInt64.zero;
        /**
         * @generated from field: string controller_address = 4;
         */
        this.controllerAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new SetScalingFactorControllerProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new SetScalingFactorControllerProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new SetScalingFactorControllerProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(SetScalingFactorControllerProposal, a, b);
    }
}
SetScalingFactorControllerProposal.runtime = proto3;
SetScalingFactorControllerProposal.typeName = "osmosis.gamm.v1beta1.SetScalingFactorControllerProposal";
SetScalingFactorControllerProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "controller_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { SetScalingFactorControllerProposal };
//# sourceMappingURL=gov_pb.js.map