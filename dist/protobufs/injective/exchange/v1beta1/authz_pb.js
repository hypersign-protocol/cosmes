// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file injective/exchange/v1beta1/authz.proto (package injective.exchange.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * spot authz messages
 *
 * @generated from message injective.exchange.v1beta1.CreateSpotLimitOrderAuthz
 */
class CreateSpotLimitOrderAuthz extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subaccount_id = 1;
         */
        this.subaccountId = "";
        /**
         * @generated from field: repeated string market_ids = 2;
         */
        this.marketIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CreateSpotLimitOrderAuthz().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CreateSpotLimitOrderAuthz().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CreateSpotLimitOrderAuthz().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CreateSpotLimitOrderAuthz, a, b);
    }
}
CreateSpotLimitOrderAuthz.runtime = proto3;
CreateSpotLimitOrderAuthz.typeName = "injective.exchange.v1beta1.CreateSpotLimitOrderAuthz";
CreateSpotLimitOrderAuthz.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "market_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
export { CreateSpotLimitOrderAuthz };
/**
 * @generated from message injective.exchange.v1beta1.CreateSpotMarketOrderAuthz
 */
class CreateSpotMarketOrderAuthz extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subaccount_id = 1;
         */
        this.subaccountId = "";
        /**
         * @generated from field: repeated string market_ids = 2;
         */
        this.marketIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CreateSpotMarketOrderAuthz().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CreateSpotMarketOrderAuthz().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CreateSpotMarketOrderAuthz().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CreateSpotMarketOrderAuthz, a, b);
    }
}
CreateSpotMarketOrderAuthz.runtime = proto3;
CreateSpotMarketOrderAuthz.typeName = "injective.exchange.v1beta1.CreateSpotMarketOrderAuthz";
CreateSpotMarketOrderAuthz.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "market_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
export { CreateSpotMarketOrderAuthz };
/**
 * @generated from message injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz
 */
class BatchCreateSpotLimitOrdersAuthz extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subaccount_id = 1;
         */
        this.subaccountId = "";
        /**
         * @generated from field: repeated string market_ids = 2;
         */
        this.marketIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BatchCreateSpotLimitOrdersAuthz().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BatchCreateSpotLimitOrdersAuthz().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BatchCreateSpotLimitOrdersAuthz().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(BatchCreateSpotLimitOrdersAuthz, a, b);
    }
}
BatchCreateSpotLimitOrdersAuthz.runtime = proto3;
BatchCreateSpotLimitOrdersAuthz.typeName = "injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz";
BatchCreateSpotLimitOrdersAuthz.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "market_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
export { BatchCreateSpotLimitOrdersAuthz };
/**
 * @generated from message injective.exchange.v1beta1.CancelSpotOrderAuthz
 */
class CancelSpotOrderAuthz extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subaccount_id = 1;
         */
        this.subaccountId = "";
        /**
         * @generated from field: repeated string market_ids = 2;
         */
        this.marketIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CancelSpotOrderAuthz().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CancelSpotOrderAuthz().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CancelSpotOrderAuthz().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CancelSpotOrderAuthz, a, b);
    }
}
CancelSpotOrderAuthz.runtime = proto3;
CancelSpotOrderAuthz.typeName = "injective.exchange.v1beta1.CancelSpotOrderAuthz";
CancelSpotOrderAuthz.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "market_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
export { CancelSpotOrderAuthz };
/**
 * @generated from message injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz
 */
class BatchCancelSpotOrdersAuthz extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subaccount_id = 1;
         */
        this.subaccountId = "";
        /**
         * @generated from field: repeated string market_ids = 2;
         */
        this.marketIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BatchCancelSpotOrdersAuthz().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BatchCancelSpotOrdersAuthz().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BatchCancelSpotOrdersAuthz().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(BatchCancelSpotOrdersAuthz, a, b);
    }
}
BatchCancelSpotOrdersAuthz.runtime = proto3;
BatchCancelSpotOrdersAuthz.typeName = "injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz";
BatchCancelSpotOrdersAuthz.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "market_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
export { BatchCancelSpotOrdersAuthz };
/**
 * derivative authz messages
 *
 * @generated from message injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz
 */
class CreateDerivativeLimitOrderAuthz extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subaccount_id = 1;
         */
        this.subaccountId = "";
        /**
         * @generated from field: repeated string market_ids = 2;
         */
        this.marketIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CreateDerivativeLimitOrderAuthz().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CreateDerivativeLimitOrderAuthz().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CreateDerivativeLimitOrderAuthz().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CreateDerivativeLimitOrderAuthz, a, b);
    }
}
CreateDerivativeLimitOrderAuthz.runtime = proto3;
CreateDerivativeLimitOrderAuthz.typeName = "injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz";
CreateDerivativeLimitOrderAuthz.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "market_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
export { CreateDerivativeLimitOrderAuthz };
/**
 * @generated from message injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz
 */
class CreateDerivativeMarketOrderAuthz extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subaccount_id = 1;
         */
        this.subaccountId = "";
        /**
         * @generated from field: repeated string market_ids = 2;
         */
        this.marketIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CreateDerivativeMarketOrderAuthz().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CreateDerivativeMarketOrderAuthz().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CreateDerivativeMarketOrderAuthz().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CreateDerivativeMarketOrderAuthz, a, b);
    }
}
CreateDerivativeMarketOrderAuthz.runtime = proto3;
CreateDerivativeMarketOrderAuthz.typeName = "injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz";
CreateDerivativeMarketOrderAuthz.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "market_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
export { CreateDerivativeMarketOrderAuthz };
/**
 * @generated from message injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz
 */
class BatchCreateDerivativeLimitOrdersAuthz extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subaccount_id = 1;
         */
        this.subaccountId = "";
        /**
         * @generated from field: repeated string market_ids = 2;
         */
        this.marketIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BatchCreateDerivativeLimitOrdersAuthz().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BatchCreateDerivativeLimitOrdersAuthz().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BatchCreateDerivativeLimitOrdersAuthz().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(BatchCreateDerivativeLimitOrdersAuthz, a, b);
    }
}
BatchCreateDerivativeLimitOrdersAuthz.runtime = proto3;
BatchCreateDerivativeLimitOrdersAuthz.typeName = "injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz";
BatchCreateDerivativeLimitOrdersAuthz.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "market_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
export { BatchCreateDerivativeLimitOrdersAuthz };
/**
 * @generated from message injective.exchange.v1beta1.CancelDerivativeOrderAuthz
 */
class CancelDerivativeOrderAuthz extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subaccount_id = 1;
         */
        this.subaccountId = "";
        /**
         * @generated from field: repeated string market_ids = 2;
         */
        this.marketIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CancelDerivativeOrderAuthz().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CancelDerivativeOrderAuthz().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CancelDerivativeOrderAuthz().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CancelDerivativeOrderAuthz, a, b);
    }
}
CancelDerivativeOrderAuthz.runtime = proto3;
CancelDerivativeOrderAuthz.typeName = "injective.exchange.v1beta1.CancelDerivativeOrderAuthz";
CancelDerivativeOrderAuthz.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "market_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
export { CancelDerivativeOrderAuthz };
/**
 * @generated from message injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz
 */
class BatchCancelDerivativeOrdersAuthz extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subaccount_id = 1;
         */
        this.subaccountId = "";
        /**
         * @generated from field: repeated string market_ids = 2;
         */
        this.marketIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BatchCancelDerivativeOrdersAuthz().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BatchCancelDerivativeOrdersAuthz().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BatchCancelDerivativeOrdersAuthz().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(BatchCancelDerivativeOrdersAuthz, a, b);
    }
}
BatchCancelDerivativeOrdersAuthz.runtime = proto3;
BatchCancelDerivativeOrdersAuthz.typeName = "injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz";
BatchCancelDerivativeOrdersAuthz.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "market_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
export { BatchCancelDerivativeOrdersAuthz };
/**
 * common authz message used in both spot & derivative markets
 *
 * @generated from message injective.exchange.v1beta1.BatchUpdateOrdersAuthz
 */
class BatchUpdateOrdersAuthz extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subaccount_id = 1;
         */
        this.subaccountId = "";
        /**
         * @generated from field: repeated string spot_markets = 2;
         */
        this.spotMarkets = [];
        /**
         * @generated from field: repeated string derivative_markets = 3;
         */
        this.derivativeMarkets = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BatchUpdateOrdersAuthz().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BatchUpdateOrdersAuthz().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BatchUpdateOrdersAuthz().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(BatchUpdateOrdersAuthz, a, b);
    }
}
BatchUpdateOrdersAuthz.runtime = proto3;
BatchUpdateOrdersAuthz.typeName = "injective.exchange.v1beta1.BatchUpdateOrdersAuthz";
BatchUpdateOrdersAuthz.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subaccount_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "spot_markets", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "derivative_markets", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
export { BatchUpdateOrdersAuthz };
//# sourceMappingURL=authz_pb.js.map