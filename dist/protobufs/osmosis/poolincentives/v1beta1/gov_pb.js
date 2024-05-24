// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/poolincentives/v1beta1/gov.proto (package osmosis.poolincentives.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { DistrRecord } from "./incentives_pb.js";
/**
 * ReplacePoolIncentivesProposal is a gov Content type for updating the pool
 * incentives. If a ReplacePoolIncentivesProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight. The incentives are put in the fee
 * pool and it is allocated to gauges and community pool by the DistrRecords
 * configuration. Note that gaugeId=0 represents the community pool.
 *
 * @generated from message osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal
 */
class ReplacePoolIncentivesProposal extends Message {
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
         * @generated from field: repeated osmosis.poolincentives.v1beta1.DistrRecord records = 3;
         */
        this.records = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ReplacePoolIncentivesProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ReplacePoolIncentivesProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ReplacePoolIncentivesProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ReplacePoolIncentivesProposal, a, b);
    }
}
ReplacePoolIncentivesProposal.runtime = proto3;
ReplacePoolIncentivesProposal.typeName = "osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal";
ReplacePoolIncentivesProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "records", kind: "message", T: DistrRecord, repeated: true },
]);
export { ReplacePoolIncentivesProposal };
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 *
 * @generated from message osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal
 */
class UpdatePoolIncentivesProposal extends Message {
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
         * @generated from field: repeated osmosis.poolincentives.v1beta1.DistrRecord records = 3;
         */
        this.records = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new UpdatePoolIncentivesProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new UpdatePoolIncentivesProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new UpdatePoolIncentivesProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(UpdatePoolIncentivesProposal, a, b);
    }
}
UpdatePoolIncentivesProposal.runtime = proto3;
UpdatePoolIncentivesProposal.typeName = "osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal";
UpdatePoolIncentivesProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "records", kind: "message", T: DistrRecord, repeated: true },
]);
export { UpdatePoolIncentivesProposal };
//# sourceMappingURL=gov_pb.js.map