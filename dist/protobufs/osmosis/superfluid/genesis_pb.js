// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/superfluid/genesis.proto (package osmosis.superfluid, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { LockIdIntermediaryAccountConnection, OsmoEquivalentMultiplierRecord, SuperfluidAsset, SuperfluidIntermediaryAccount } from "./superfluid_pb.js";
/**
 * GenesisState defines the module's genesis state.
 *
 * @generated from message osmosis.superfluid.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * superfluid_assets defines the registered superfluid assets that have been
         * registered via governance.
         *
         * @generated from field: repeated osmosis.superfluid.SuperfluidAsset superfluid_assets = 2;
         */
        this.superfluidAssets = [];
        /**
         * osmo_equivalent_multipliers is the records of osmo equivalent amount of
         * each superfluid registered pool, updated every epoch.
         *
         * @generated from field: repeated osmosis.superfluid.OsmoEquivalentMultiplierRecord osmo_equivalent_multipliers = 3;
         */
        this.osmoEquivalentMultipliers = [];
        /**
         * intermediary_accounts is a secondary account for superfluid staking that
         * plays an intermediary role between validators and the delegators.
         *
         * @generated from field: repeated osmosis.superfluid.SuperfluidIntermediaryAccount intermediary_accounts = 4;
         */
        this.intermediaryAccounts = [];
        /**
         * @generated from field: repeated osmosis.superfluid.LockIdIntermediaryAccountConnection intemediary_account_connections = 5;
         */
        this.intemediaryAccountConnections = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GenesisState().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GenesisState().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GenesisState().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GenesisState, a, b);
    }
}
GenesisState.runtime = proto3;
GenesisState.typeName = "osmosis.superfluid.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "superfluid_assets", kind: "message", T: SuperfluidAsset, repeated: true },
    { no: 3, name: "osmo_equivalent_multipliers", kind: "message", T: OsmoEquivalentMultiplierRecord, repeated: true },
    { no: 4, name: "intermediary_accounts", kind: "message", T: SuperfluidIntermediaryAccount, repeated: true },
    { no: 5, name: "intemediary_account_connections", kind: "message", T: LockIdIntermediaryAccountConnection, repeated: true },
]);
//# sourceMappingURL=genesis_pb.js.map