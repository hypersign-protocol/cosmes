// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/valsetpref/v1beta1/query.proto (package osmosis.valsetpref.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { ValidatorPreference } from "./state_pb.js";
/**
 * Request type for UserValidatorPreferences.
 *
 * @generated from message osmosis.valsetpref.v1beta1.UserValidatorPreferencesRequest
 */
class UserValidatorPreferencesRequest extends Message {
    constructor(data) {
        super();
        /**
         * user account address
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new UserValidatorPreferencesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new UserValidatorPreferencesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new UserValidatorPreferencesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(UserValidatorPreferencesRequest, a, b);
    }
}
UserValidatorPreferencesRequest.runtime = proto3;
UserValidatorPreferencesRequest.typeName = "osmosis.valsetpref.v1beta1.UserValidatorPreferencesRequest";
UserValidatorPreferencesRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { UserValidatorPreferencesRequest };
/**
 * Response type the QueryUserValidatorPreferences query request
 *
 * @generated from message osmosis.valsetpref.v1beta1.UserValidatorPreferencesResponse
 */
class UserValidatorPreferencesResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated osmosis.valsetpref.v1beta1.ValidatorPreference preferences = 1;
         */
        this.preferences = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new UserValidatorPreferencesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new UserValidatorPreferencesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new UserValidatorPreferencesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(UserValidatorPreferencesResponse, a, b);
    }
}
UserValidatorPreferencesResponse.runtime = proto3;
UserValidatorPreferencesResponse.typeName = "osmosis.valsetpref.v1beta1.UserValidatorPreferencesResponse";
UserValidatorPreferencesResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "preferences", kind: "message", T: ValidatorPreference, repeated: true },
]);
export { UserValidatorPreferencesResponse };
//# sourceMappingURL=query_pb.js.map