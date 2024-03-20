// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/oracle/v1beta1/genesis.proto (package injective.oracle.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { BandIBCParams, BandOracleRequest, BandPriceState, ChainlinkPriceState, CoinbasePriceState, Params, PriceFeedState, PriceRecords, ProviderState, PythPriceState } from "./oracle_pb.js";
/**
 * GenesisState defines the oracle module's genesis state.
 *
 * @generated from message injective.oracle.v1beta1.GenesisState
 */
class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated string band_relayers = 2;
         */
        this.bandRelayers = [];
        /**
         * @generated from field: repeated injective.oracle.v1beta1.BandPriceState band_price_states = 3;
         */
        this.bandPriceStates = [];
        /**
         * @generated from field: repeated injective.oracle.v1beta1.PriceFeedState price_feed_price_states = 4;
         */
        this.priceFeedPriceStates = [];
        /**
         * @generated from field: repeated injective.oracle.v1beta1.CoinbasePriceState coinbase_price_states = 5;
         */
        this.coinbasePriceStates = [];
        /**
         * @generated from field: repeated injective.oracle.v1beta1.BandPriceState band_ibc_price_states = 6;
         */
        this.bandIbcPriceStates = [];
        /**
         * @generated from field: repeated injective.oracle.v1beta1.BandOracleRequest band_ibc_oracle_requests = 7;
         */
        this.bandIbcOracleRequests = [];
        /**
         * @generated from field: uint64 band_ibc_latest_client_id = 9;
         */
        this.bandIbcLatestClientId = protoInt64.zero;
        /**
         * @generated from field: repeated injective.oracle.v1beta1.CalldataRecord calldata_records = 10;
         */
        this.calldataRecords = [];
        /**
         * @generated from field: uint64 band_ibc_latest_request_id = 11;
         */
        this.bandIbcLatestRequestId = protoInt64.zero;
        /**
         * @generated from field: repeated injective.oracle.v1beta1.ChainlinkPriceState chainlink_price_states = 12;
         */
        this.chainlinkPriceStates = [];
        /**
         * @generated from field: repeated injective.oracle.v1beta1.PriceRecords historical_price_records = 13;
         */
        this.historicalPriceRecords = [];
        /**
         * @generated from field: repeated injective.oracle.v1beta1.ProviderState provider_states = 14;
         */
        this.providerStates = [];
        /**
         * @generated from field: repeated injective.oracle.v1beta1.PythPriceState pyth_price_states = 15;
         */
        this.pythPriceStates = [];
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
GenesisState.typeName = "injective.oracle.v1beta1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "band_relayers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "band_price_states", kind: "message", T: BandPriceState, repeated: true },
    { no: 4, name: "price_feed_price_states", kind: "message", T: PriceFeedState, repeated: true },
    { no: 5, name: "coinbase_price_states", kind: "message", T: CoinbasePriceState, repeated: true },
    { no: 6, name: "band_ibc_price_states", kind: "message", T: BandPriceState, repeated: true },
    { no: 7, name: "band_ibc_oracle_requests", kind: "message", T: BandOracleRequest, repeated: true },
    { no: 8, name: "band_ibc_params", kind: "message", T: BandIBCParams },
    { no: 9, name: "band_ibc_latest_client_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 10, name: "calldata_records", kind: "message", T: CalldataRecord, repeated: true },
    { no: 11, name: "band_ibc_latest_request_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 12, name: "chainlink_price_states", kind: "message", T: ChainlinkPriceState, repeated: true },
    { no: 13, name: "historical_price_records", kind: "message", T: PriceRecords, repeated: true },
    { no: 14, name: "provider_states", kind: "message", T: ProviderState, repeated: true },
    { no: 15, name: "pyth_price_states", kind: "message", T: PythPriceState, repeated: true },
]);
export { GenesisState };
/**
 * @generated from message injective.oracle.v1beta1.CalldataRecord
 */
class CalldataRecord extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 client_id = 1;
         */
        this.clientId = protoInt64.zero;
        /**
         * @generated from field: bytes calldata = 2;
         */
        this.calldata = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CalldataRecord().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CalldataRecord().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CalldataRecord().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CalldataRecord, a, b);
    }
}
CalldataRecord.runtime = proto3;
CalldataRecord.typeName = "injective.oracle.v1beta1.CalldataRecord";
CalldataRecord.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "calldata", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
export { CalldataRecord };
//# sourceMappingURL=genesis_pb.js.map