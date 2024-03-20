// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/valsetpref/v1beta1/state.proto (package osmosis.valsetpref.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ValidatorPreference defines the message structure for
 * CreateValidatorSetPreference. It allows a user to set {val_addr, weight} in
 * state. If a user does not have a validator set preference list set, and has
 * staked, make their preference list default to their current staking
 * distribution.
 *
 * @generated from message osmosis.valsetpref.v1beta1.ValidatorPreference
 */
class ValidatorPreference extends Message {
    constructor(data) {
        super();
        /**
         * val_oper_address holds the validator address the user wants to delegate
         * funds to.
         *
         * @generated from field: string val_oper_address = 1;
         */
        this.valOperAddress = "";
        /**
         * weight is decimal between 0 and 1, and they all sum to 1.
         *
         * @generated from field: string weight = 2;
         */
        this.weight = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ValidatorPreference().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ValidatorPreference().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ValidatorPreference().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ValidatorPreference, a, b);
    }
}
ValidatorPreference.runtime = proto3;
ValidatorPreference.typeName = "osmosis.valsetpref.v1beta1.ValidatorPreference";
ValidatorPreference.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "val_oper_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { ValidatorPreference };
/**
 * ValidatorSetPreferences defines a delegator's validator set preference.
 * It contains a list of (validator, percent_allocation) pairs.
 * The percent allocation are arranged in decimal notation from 0 to 1 and must
 * add up to 1.
 *
 * @generated from message osmosis.valsetpref.v1beta1.ValidatorSetPreferences
 */
class ValidatorSetPreferences extends Message {
    constructor(data) {
        super();
        /**
         * preference holds {valAddr, weight} for the user who created it.
         *
         * @generated from field: repeated osmosis.valsetpref.v1beta1.ValidatorPreference preferences = 2;
         */
        this.preferences = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ValidatorSetPreferences().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ValidatorSetPreferences().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ValidatorSetPreferences().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ValidatorSetPreferences, a, b);
    }
}
ValidatorSetPreferences.runtime = proto3;
ValidatorSetPreferences.typeName = "osmosis.valsetpref.v1beta1.ValidatorSetPreferences";
ValidatorSetPreferences.fields = proto3.util.newFieldList(() => [
    { no: 2, name: "preferences", kind: "message", T: ValidatorPreference, repeated: true },
]);
export { ValidatorSetPreferences };
//# sourceMappingURL=state_pb.js.map