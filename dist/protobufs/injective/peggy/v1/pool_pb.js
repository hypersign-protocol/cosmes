// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/peggy/v1/pool.proto (package injective.peggy.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * IDSet represents a set of IDs
 *
 * @generated from message injective.peggy.v1.IDSet
 */
class IDSet extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated uint64 ids = 1;
         */
        this.ids = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IDSet().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IDSet().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IDSet().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(IDSet, a, b);
    }
}
IDSet.runtime = proto3;
IDSet.typeName = "injective.peggy.v1.IDSet";
IDSet.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
]);
export { IDSet };
/**
 * @generated from message injective.peggy.v1.BatchFees
 */
class BatchFees extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string token = 1;
         */
        this.token = "";
        /**
         * @generated from field: string total_fees = 2;
         */
        this.totalFees = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BatchFees().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BatchFees().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BatchFees().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(BatchFees, a, b);
    }
}
BatchFees.runtime = proto3;
BatchFees.typeName = "injective.peggy.v1.BatchFees";
BatchFees.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "total_fees", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { BatchFees };
//# sourceMappingURL=pool_pb.js.map