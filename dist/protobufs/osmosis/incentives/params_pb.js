// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/incentives/params.proto (package osmosis.incentives, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Duration, Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
/**
 * Params holds parameters for the incentives module
 *
 * @generated from message osmosis.incentives.Params
 */
class Params extends Message {
    constructor(data) {
        super();
        /**
         * distr_epoch_identifier is what epoch type distribution will be triggered by
         * (day, week, etc.)
         *
         * @generated from field: string distr_epoch_identifier = 1;
         */
        this.distrEpochIdentifier = "";
        /**
         * group_creation_fee is the fee required to create a new group
         * It is only charged to all addresses other than incentive module account
         * or addresses in the unrestricted_creator_whitelist
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin group_creation_fee = 2;
         */
        this.groupCreationFee = [];
        /**
         * unrestricted_creator_whitelist is a list of addresses that are
         * allowed to bypass restrictions on permissionless Group
         * creation. In the future, we might expand these to creating gauges
         * as well.
         * The goal of this is to allow a subdao to manage incentives efficiently
         * without being stopped by 5 day governance process or a high fee.
         * At the same time, it prevents spam by having a fee for all
         * other users.
         *
         * @generated from field: repeated string unrestricted_creator_whitelist = 3;
         */
        this.unrestrictedCreatorWhitelist = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Params().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Params().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Params().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Params, a, b);
    }
}
Params.runtime = proto3;
Params.typeName = "osmosis.incentives.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "distr_epoch_identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_creation_fee", kind: "message", T: Coin, repeated: true },
    { no: 3, name: "unrestricted_creator_whitelist", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "internal_uptime", kind: "message", T: Duration },
]);
export { Params };
//# sourceMappingURL=params_pb.js.map