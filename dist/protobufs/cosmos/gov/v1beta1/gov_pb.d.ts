import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
/**
 * VoteOption enumerates the valid vote options for a given governance proposal.
 *
 * @generated from enum cosmos.gov.v1beta1.VoteOption
 */
export declare enum VoteOption {
    /**
     * VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
     *
     * @generated from enum value: VOTE_OPTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * VOTE_OPTION_YES defines a yes vote option.
     *
     * @generated from enum value: VOTE_OPTION_YES = 1;
     */
    YES = 1,
    /**
     * VOTE_OPTION_ABSTAIN defines an abstain vote option.
     *
     * @generated from enum value: VOTE_OPTION_ABSTAIN = 2;
     */
    ABSTAIN = 2,
    /**
     * VOTE_OPTION_NO defines a no vote option.
     *
     * @generated from enum value: VOTE_OPTION_NO = 3;
     */
    NO = 3,
    /**
     * VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
     *
     * @generated from enum value: VOTE_OPTION_NO_WITH_VETO = 4;
     */
    NO_WITH_VETO = 4
}
/**
 * ProposalStatus enumerates the valid statuses of a proposal.
 *
 * @generated from enum cosmos.gov.v1beta1.ProposalStatus
 */
export declare enum ProposalStatus {
    /**
     * PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status.
     *
     * @generated from enum value: PROPOSAL_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     *
     * @generated from enum value: PROPOSAL_STATUS_DEPOSIT_PERIOD = 1;
     */
    DEPOSIT_PERIOD = 1,
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     *
     * @generated from enum value: PROPOSAL_STATUS_VOTING_PERIOD = 2;
     */
    VOTING_PERIOD = 2,
    /**
     * PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     *
     * @generated from enum value: PROPOSAL_STATUS_PASSED = 3;
     */
    PASSED = 3,
    /**
     * PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     *
     * @generated from enum value: PROPOSAL_STATUS_REJECTED = 4;
     */
    REJECTED = 4,
    /**
     * PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     *
     * @generated from enum value: PROPOSAL_STATUS_FAILED = 5;
     */
    FAILED = 5
}
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.gov.v1beta1.WeightedVoteOption
 */
export declare class WeightedVoteOption extends Message<WeightedVoteOption> {
    /**
     * option defines the valid vote options, it must not contain duplicate vote options.
     *
     * @generated from field: cosmos.gov.v1beta1.VoteOption option = 1;
     */
    option: VoteOption;
    /**
     * weight is the vote weight associated with the vote option.
     *
     * @generated from field: string weight = 2;
     */
    weight: string;
    constructor(data?: PartialMessage<WeightedVoteOption>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.WeightedVoteOption";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WeightedVoteOption;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WeightedVoteOption;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WeightedVoteOption;
    static equals(a: WeightedVoteOption | PlainMessage<WeightedVoteOption> | undefined, b: WeightedVoteOption | PlainMessage<WeightedVoteOption> | undefined): boolean;
}
/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 *
 * @generated from message cosmos.gov.v1beta1.TextProposal
 */
export declare class TextProposal extends Message<TextProposal> {
    /**
     * title of the proposal.
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * description associated with the proposal.
     *
     * @generated from field: string description = 2;
     */
    description: string;
    constructor(data?: PartialMessage<TextProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.TextProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TextProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TextProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TextProposal;
    static equals(a: TextProposal | PlainMessage<TextProposal> | undefined, b: TextProposal | PlainMessage<TextProposal> | undefined): boolean;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 *
 * @generated from message cosmos.gov.v1beta1.Deposit
 */
export declare class Deposit extends Message<Deposit> {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * depositor defines the deposit addresses from the proposals.
     *
     * @generated from field: string depositor = 2;
     */
    depositor: string;
    /**
     * amount to be deposited by depositor.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
     */
    amount: Coin[];
    constructor(data?: PartialMessage<Deposit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.Deposit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Deposit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Deposit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Deposit;
    static equals(a: Deposit | PlainMessage<Deposit> | undefined, b: Deposit | PlainMessage<Deposit> | undefined): boolean;
}
/**
 * Proposal defines the core field members of a governance proposal.
 *
 * @generated from message cosmos.gov.v1beta1.Proposal
 */
export declare class Proposal extends Message<Proposal> {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * content is the proposal's content.
     *
     * @generated from field: google.protobuf.Any content = 2;
     */
    content?: Any;
    /**
     * status defines the proposal status.
     *
     * @generated from field: cosmos.gov.v1beta1.ProposalStatus status = 3;
     */
    status: ProposalStatus;
    /**
     * final_tally_result is the final tally result of the proposal. When
     * querying a proposal via gRPC, this field is not populated until the
     * proposal's voting period has ended.
     *
     * @generated from field: cosmos.gov.v1beta1.TallyResult final_tally_result = 4;
     */
    finalTallyResult?: TallyResult;
    /**
     * submit_time is the time of proposal submission.
     *
     * @generated from field: google.protobuf.Timestamp submit_time = 5;
     */
    submitTime?: Timestamp;
    /**
     * deposit_end_time is the end time for deposition.
     *
     * @generated from field: google.protobuf.Timestamp deposit_end_time = 6;
     */
    depositEndTime?: Timestamp;
    /**
     * total_deposit is the total deposit on the proposal.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin total_deposit = 7;
     */
    totalDeposit: Coin[];
    /**
     * voting_start_time is the starting time to vote on a proposal.
     *
     * @generated from field: google.protobuf.Timestamp voting_start_time = 8;
     */
    votingStartTime?: Timestamp;
    /**
     * voting_end_time is the end time of voting on a proposal.
     *
     * @generated from field: google.protobuf.Timestamp voting_end_time = 9;
     */
    votingEndTime?: Timestamp;
    constructor(data?: PartialMessage<Proposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.Proposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Proposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Proposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Proposal;
    static equals(a: Proposal | PlainMessage<Proposal> | undefined, b: Proposal | PlainMessage<Proposal> | undefined): boolean;
}
/**
 * TallyResult defines a standard tally for a governance proposal.
 *
 * @generated from message cosmos.gov.v1beta1.TallyResult
 */
export declare class TallyResult extends Message<TallyResult> {
    /**
     * yes is the number of yes votes on a proposal.
     *
     * @generated from field: string yes = 1;
     */
    yes: string;
    /**
     * abstain is the number of abstain votes on a proposal.
     *
     * @generated from field: string abstain = 2;
     */
    abstain: string;
    /**
     * no is the number of no votes on a proposal.
     *
     * @generated from field: string no = 3;
     */
    no: string;
    /**
     * no_with_veto is the number of no with veto votes on a proposal.
     *
     * @generated from field: string no_with_veto = 4;
     */
    noWithVeto: string;
    constructor(data?: PartialMessage<TallyResult>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.TallyResult";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TallyResult;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TallyResult;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TallyResult;
    static equals(a: TallyResult | PlainMessage<TallyResult> | undefined, b: TallyResult | PlainMessage<TallyResult> | undefined): boolean;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 *
 * @generated from message cosmos.gov.v1beta1.Vote
 */
export declare class Vote extends Message<Vote> {
    /**
     * proposal_id defines the unique id of the proposal.
     *
     * @generated from field: uint64 proposal_id = 1;
     */
    proposalId: bigint;
    /**
     * voter is the voter address of the proposal.
     *
     * @generated from field: string voter = 2;
     */
    voter: string;
    /**
     * Deprecated: Prefer to use `options` instead. This field is set in queries
     * if and only if `len(options) == 1` and that option has weight 1. In all
     * other cases, this field will default to VOTE_OPTION_UNSPECIFIED.
     *
     * @generated from field: cosmos.gov.v1beta1.VoteOption option = 3 [deprecated = true];
     * @deprecated
     */
    option: VoteOption;
    /**
     * options is the weighted vote options.
     *
     * Since: cosmos-sdk 0.43
     *
     * @generated from field: repeated cosmos.gov.v1beta1.WeightedVoteOption options = 4;
     */
    options: WeightedVoteOption[];
    constructor(data?: PartialMessage<Vote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.Vote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Vote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Vote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Vote;
    static equals(a: Vote | PlainMessage<Vote> | undefined, b: Vote | PlainMessage<Vote> | undefined): boolean;
}
/**
 * DepositParams defines the params for deposits on governance proposals.
 *
 * @generated from message cosmos.gov.v1beta1.DepositParams
 */
export declare class DepositParams extends Message<DepositParams> {
    /**
     * Minimum deposit for a proposal to enter voting period.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin min_deposit = 1;
     */
    minDeposit: Coin[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     * months.
     *
     * @generated from field: google.protobuf.Duration max_deposit_period = 2;
     */
    maxDepositPeriod?: Duration;
    constructor(data?: PartialMessage<DepositParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.DepositParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DepositParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DepositParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DepositParams;
    static equals(a: DepositParams | PlainMessage<DepositParams> | undefined, b: DepositParams | PlainMessage<DepositParams> | undefined): boolean;
}
/**
 * VotingParams defines the params for voting on governance proposals.
 *
 * @generated from message cosmos.gov.v1beta1.VotingParams
 */
export declare class VotingParams extends Message<VotingParams> {
    /**
     * Duration of the voting period.
     *
     * @generated from field: google.protobuf.Duration voting_period = 1;
     */
    votingPeriod?: Duration;
    constructor(data?: PartialMessage<VotingParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.VotingParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VotingParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VotingParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VotingParams;
    static equals(a: VotingParams | PlainMessage<VotingParams> | undefined, b: VotingParams | PlainMessage<VotingParams> | undefined): boolean;
}
/**
 * TallyParams defines the params for tallying votes on governance proposals.
 *
 * @generated from message cosmos.gov.v1beta1.TallyParams
 */
export declare class TallyParams extends Message<TallyParams> {
    /**
     * Minimum percentage of total stake needed to vote for a result to be
     * considered valid.
     *
     * @generated from field: bytes quorum = 1;
     */
    quorum: Uint8Array;
    /**
     * Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.
     *
     * @generated from field: bytes threshold = 2;
     */
    threshold: Uint8Array;
    /**
     * Minimum value of Veto votes to Total votes ratio for proposal to be
     * vetoed. Default value: 1/3.
     *
     * @generated from field: bytes veto_threshold = 3;
     */
    vetoThreshold: Uint8Array;
    constructor(data?: PartialMessage<TallyParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.gov.v1beta1.TallyParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TallyParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TallyParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TallyParams;
    static equals(a: TallyParams | PlainMessage<TallyParams> | undefined, b: TallyParams | PlainMessage<TallyParams> | undefined): boolean;
}
//# sourceMappingURL=gov_pb.d.ts.map