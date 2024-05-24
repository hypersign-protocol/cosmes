// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/poolmanager/v1beta1/gov.proto (package osmosis.poolmanager.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { DenomPairTakerFee } from "./tx_pb.js";
/**
 * DenomPairTakerFeeProposal is a type for adding/removing a custom taker fee(s)
 * for one or more denom pairs.
 *
 * @generated from message osmosis.poolmanager.v1beta1.DenomPairTakerFeeProposal
 */
class DenomPairTakerFeeProposal extends Message {
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
         * @generated from field: repeated osmosis.poolmanager.v1beta1.DenomPairTakerFee denom_pair_taker_fee = 3;
         */
        this.denomPairTakerFee = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DenomPairTakerFeeProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DenomPairTakerFeeProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DenomPairTakerFeeProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(DenomPairTakerFeeProposal, a, b);
    }
}
DenomPairTakerFeeProposal.runtime = proto3;
DenomPairTakerFeeProposal.typeName = "osmosis.poolmanager.v1beta1.DenomPairTakerFeeProposal";
DenomPairTakerFeeProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "denom_pair_taker_fee", kind: "message", T: DenomPairTakerFee, repeated: true },
]);
export { DenomPairTakerFeeProposal };
//# sourceMappingURL=gov_pb.js.map