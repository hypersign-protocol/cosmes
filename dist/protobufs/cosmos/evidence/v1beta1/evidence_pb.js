// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/evidence/v1beta1/evidence.proto (package cosmos.evidence.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 *
 * @generated from message cosmos.evidence.v1beta1.Equivocation
 */
class Equivocation extends Message {
    constructor(data) {
        super();
        /**
         * height is the equivocation height.
         *
         * @generated from field: int64 height = 1;
         */
        this.height = protoInt64.zero;
        /**
         * power is the equivocation validator power.
         *
         * @generated from field: int64 power = 3;
         */
        this.power = protoInt64.zero;
        /**
         * consensus_address is the equivocation validator consensus address.
         *
         * @generated from field: string consensus_address = 4;
         */
        this.consensusAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Equivocation().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Equivocation().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Equivocation().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Equivocation, a, b);
    }
}
Equivocation.runtime = proto3;
Equivocation.typeName = "cosmos.evidence.v1beta1.Equivocation";
Equivocation.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "time", kind: "message", T: Timestamp },
    { no: 3, name: "power", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "consensus_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { Equivocation };
//# sourceMappingURL=evidence_pb.js.map