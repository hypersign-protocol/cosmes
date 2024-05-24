// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/mint/v1beta1/mint.proto (package cosmos.mint.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
/**
 * Minter represents the minting state.
 *
 * @generated from message cosmos.mint.v1beta1.Minter
 */
class Minter extends Message {
    constructor(data) {
        super();
        /**
         * current annual inflation rate
         *
         * @generated from field: string inflation = 1;
         */
        this.inflation = "";
        /**
         * current annual expected provisions
         *
         * @generated from field: string annual_provisions = 2;
         */
        this.annualProvisions = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Minter().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Minter().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Minter().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Minter, a, b);
    }
}
Minter.runtime = proto3;
Minter.typeName = "cosmos.mint.v1beta1.Minter";
Minter.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "inflation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "annual_provisions", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { Minter };
/**
 * Params defines the parameters for the x/mint module.
 *
 * @generated from message cosmos.mint.v1beta1.Params
 */
class Params extends Message {
    constructor(data) {
        super();
        /**
         * type of coin to mint
         *
         * @generated from field: string mint_denom = 1;
         */
        this.mintDenom = "";
        /**
         * maximum annual change in inflation rate
         *
         * @generated from field: string inflation_rate_change = 2;
         */
        this.inflationRateChange = "";
        /**
         * maximum inflation rate
         *
         * @generated from field: string inflation_max = 3;
         */
        this.inflationMax = "";
        /**
         * minimum inflation rate
         *
         * @generated from field: string inflation_min = 4;
         */
        this.inflationMin = "";
        /**
         * goal of percent bonded atoms
         *
         * @generated from field: string goal_bonded = 5;
         */
        this.goalBonded = "";
        /**
         * expected blocks per year
         *
         * @generated from field: uint64 blocks_per_year = 6;
         */
        this.blocksPerYear = protoInt64.zero;
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
Params.typeName = "cosmos.mint.v1beta1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "mint_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "inflation_rate_change", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "inflation_max", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "inflation_min", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "goal_bonded", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "blocks_per_year", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
export { Params };
//# sourceMappingURL=mint_pb.js.map