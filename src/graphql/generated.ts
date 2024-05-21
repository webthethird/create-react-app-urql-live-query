import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
  Timestamp: any;
};

export type Activity = {
  __typename?: "Activity";
  fees?: Maybe<Scalars["BigInt"]>;
  id: Scalars["ID"];
  isTrader: Scalars["Boolean"];
  market: Market;
  notional?: Maybe<Scalars["BigInt"]>;
  pnl?: Maybe<Scalars["BigInt"]>;
  price?: Maybe<Scalars["BigInt"]>;
  size?: Maybe<Scalars["BigInt"]>;
  timestamp: Scalars["BigInt"];
  type: Scalars["String"];
  user: User;
};

export type Activity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Activity_Filter>>>;
  fees?: InputMaybe<Scalars["BigInt"]>;
  fees_gt?: InputMaybe<Scalars["BigInt"]>;
  fees_gte?: InputMaybe<Scalars["BigInt"]>;
  fees_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fees_lt?: InputMaybe<Scalars["BigInt"]>;
  fees_lte?: InputMaybe<Scalars["BigInt"]>;
  fees_not?: InputMaybe<Scalars["BigInt"]>;
  fees_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isTrader?: InputMaybe<Scalars["Boolean"]>;
  isTrader_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isTrader_not?: InputMaybe<Scalars["Boolean"]>;
  isTrader_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  notional?: InputMaybe<Scalars["BigInt"]>;
  notional_gt?: InputMaybe<Scalars["BigInt"]>;
  notional_gte?: InputMaybe<Scalars["BigInt"]>;
  notional_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  notional_lt?: InputMaybe<Scalars["BigInt"]>;
  notional_lte?: InputMaybe<Scalars["BigInt"]>;
  notional_not?: InputMaybe<Scalars["BigInt"]>;
  notional_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Activity_Filter>>>;
  pnl?: InputMaybe<Scalars["BigInt"]>;
  pnl_gt?: InputMaybe<Scalars["BigInt"]>;
  pnl_gte?: InputMaybe<Scalars["BigInt"]>;
  pnl_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  pnl_lt?: InputMaybe<Scalars["BigInt"]>;
  pnl_lte?: InputMaybe<Scalars["BigInt"]>;
  pnl_not?: InputMaybe<Scalars["BigInt"]>;
  pnl_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  price?: InputMaybe<Scalars["BigInt"]>;
  price_gt?: InputMaybe<Scalars["BigInt"]>;
  price_gte?: InputMaybe<Scalars["BigInt"]>;
  price_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  price_lt?: InputMaybe<Scalars["BigInt"]>;
  price_lte?: InputMaybe<Scalars["BigInt"]>;
  price_not?: InputMaybe<Scalars["BigInt"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  size?: InputMaybe<Scalars["BigInt"]>;
  size_gt?: InputMaybe<Scalars["BigInt"]>;
  size_gte?: InputMaybe<Scalars["BigInt"]>;
  size_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  size_lt?: InputMaybe<Scalars["BigInt"]>;
  size_lte?: InputMaybe<Scalars["BigInt"]>;
  size_not?: InputMaybe<Scalars["BigInt"]>;
  size_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  type?: InputMaybe<Scalars["String"]>;
  type_contains?: InputMaybe<Scalars["String"]>;
  type_contains_nocase?: InputMaybe<Scalars["String"]>;
  type_ends_with?: InputMaybe<Scalars["String"]>;
  type_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  type_gt?: InputMaybe<Scalars["String"]>;
  type_gte?: InputMaybe<Scalars["String"]>;
  type_in?: InputMaybe<Array<Scalars["String"]>>;
  type_lt?: InputMaybe<Scalars["String"]>;
  type_lte?: InputMaybe<Scalars["String"]>;
  type_not?: InputMaybe<Scalars["String"]>;
  type_not_contains?: InputMaybe<Scalars["String"]>;
  type_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  type_not_ends_with?: InputMaybe<Scalars["String"]>;
  type_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  type_not_in?: InputMaybe<Array<Scalars["String"]>>;
  type_not_starts_with?: InputMaybe<Scalars["String"]>;
  type_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  type_starts_with?: InputMaybe<Scalars["String"]>;
  type_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Activity_OrderBy {
  Fees = "fees",
  Id = "id",
  IsTrader = "isTrader",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  Notional = "notional",
  Pnl = "pnl",
  Price = "price",
  Size = "size",
  Timestamp = "timestamp",
  Type = "type",
  User = "user",
  UserId = "user__id",
  UserTradingVolume = "user__tradingVolume",
}

export enum Aggregation_Interval {
  Day = "day",
  Hour = "hour",
}

export type AnswerUpdated = {
  __typename?: "AnswerUpdated";
  answer: Scalars["BigInt"];
  decimals: Scalars["BigInt"];
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  token: Token;
};

export type AnswerUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AnswerUpdated_Filter>>>;
  answer?: InputMaybe<Scalars["BigInt"]>;
  answer_gt?: InputMaybe<Scalars["BigInt"]>;
  answer_gte?: InputMaybe<Scalars["BigInt"]>;
  answer_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  answer_lt?: InputMaybe<Scalars["BigInt"]>;
  answer_lte?: InputMaybe<Scalars["BigInt"]>;
  answer_not?: InputMaybe<Scalars["BigInt"]>;
  answer_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  decimals?: InputMaybe<Scalars["BigInt"]>;
  decimals_gt?: InputMaybe<Scalars["BigInt"]>;
  decimals_gte?: InputMaybe<Scalars["BigInt"]>;
  decimals_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  decimals_lt?: InputMaybe<Scalars["BigInt"]>;
  decimals_lte?: InputMaybe<Scalars["BigInt"]>;
  decimals_not?: InputMaybe<Scalars["BigInt"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<AnswerUpdated_Filter>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum AnswerUpdated_OrderBy {
  Answer = "answer",
  Decimals = "decimals",
  Id = "id",
  Timestamp = "timestamp",
  Token = "token",
  TokenAddress = "token__address",
  TokenAggregator = "token__aggregator",
  TokenDecimals = "token__decimals",
  TokenDepositedAmount = "token__depositedAmount",
  TokenId = "token__id",
  TokenMaxAmount = "token__maxAmount",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenUniqueDepositors = "token__uniqueDepositors",
  TokenWeight = "token__weight",
}

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type CurrentLpPosition = {
  __typename?: "CurrentLpPosition";
  depositTime: Scalars["BigInt"];
  entryAmountSum: Scalars["BigInt"];
  exitAmountSum: Scalars["BigInt"];
  fundingPayment: Scalars["BigInt"];
  id: Scalars["ID"];
  initialCumFundingPerLpToken: Scalars["BigInt"];
  initialUsdValue: Scalars["BigInt"];
  liquidityBalance: Scalars["BigInt"];
  market: Market;
  openNotional: Scalars["BigInt"];
  positionSize: Scalars["BigInt"];
  realizedProfit: Scalars["BigInt"];
  recentCumFundingPerLpToken: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  totalBaseFeesGrowth: Scalars["BigInt"];
  totalQuoteFeesGrowth: Scalars["BigInt"];
  totalTradingFeesGrowth: Scalars["BigInt"];
  tradingFeesPayed: Scalars["BigInt"];
  user: User;
  weightedEntryPriceSum: Scalars["BigInt"];
  weightedExitPriceSum: Scalars["BigInt"];
};

export type CurrentLpPosition_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CurrentLpPosition_Filter>>>;
  depositTime?: InputMaybe<Scalars["BigInt"]>;
  depositTime_gt?: InputMaybe<Scalars["BigInt"]>;
  depositTime_gte?: InputMaybe<Scalars["BigInt"]>;
  depositTime_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  depositTime_lt?: InputMaybe<Scalars["BigInt"]>;
  depositTime_lte?: InputMaybe<Scalars["BigInt"]>;
  depositTime_not?: InputMaybe<Scalars["BigInt"]>;
  depositTime_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  entryAmountSum?: InputMaybe<Scalars["BigInt"]>;
  entryAmountSum_gt?: InputMaybe<Scalars["BigInt"]>;
  entryAmountSum_gte?: InputMaybe<Scalars["BigInt"]>;
  entryAmountSum_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  entryAmountSum_lt?: InputMaybe<Scalars["BigInt"]>;
  entryAmountSum_lte?: InputMaybe<Scalars["BigInt"]>;
  entryAmountSum_not?: InputMaybe<Scalars["BigInt"]>;
  entryAmountSum_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  exitAmountSum?: InputMaybe<Scalars["BigInt"]>;
  exitAmountSum_gt?: InputMaybe<Scalars["BigInt"]>;
  exitAmountSum_gte?: InputMaybe<Scalars["BigInt"]>;
  exitAmountSum_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  exitAmountSum_lt?: InputMaybe<Scalars["BigInt"]>;
  exitAmountSum_lte?: InputMaybe<Scalars["BigInt"]>;
  exitAmountSum_not?: InputMaybe<Scalars["BigInt"]>;
  exitAmountSum_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fundingPayment?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_gt?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_gte?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fundingPayment_lt?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_lte?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_not?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  initialCumFundingPerLpToken?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingPerLpToken_gt?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingPerLpToken_gte?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingPerLpToken_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  initialCumFundingPerLpToken_lt?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingPerLpToken_lte?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingPerLpToken_not?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingPerLpToken_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  initialUsdValue?: InputMaybe<Scalars["BigInt"]>;
  initialUsdValue_gt?: InputMaybe<Scalars["BigInt"]>;
  initialUsdValue_gte?: InputMaybe<Scalars["BigInt"]>;
  initialUsdValue_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  initialUsdValue_lt?: InputMaybe<Scalars["BigInt"]>;
  initialUsdValue_lte?: InputMaybe<Scalars["BigInt"]>;
  initialUsdValue_not?: InputMaybe<Scalars["BigInt"]>;
  initialUsdValue_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityBalance?: InputMaybe<Scalars["BigInt"]>;
  liquidityBalance_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidityBalance_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidityBalance_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityBalance_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidityBalance_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidityBalance_not?: InputMaybe<Scalars["BigInt"]>;
  liquidityBalance_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  openNotional?: InputMaybe<Scalars["BigInt"]>;
  openNotional_gt?: InputMaybe<Scalars["BigInt"]>;
  openNotional_gte?: InputMaybe<Scalars["BigInt"]>;
  openNotional_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  openNotional_lt?: InputMaybe<Scalars["BigInt"]>;
  openNotional_lte?: InputMaybe<Scalars["BigInt"]>;
  openNotional_not?: InputMaybe<Scalars["BigInt"]>;
  openNotional_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<CurrentLpPosition_Filter>>>;
  positionSize?: InputMaybe<Scalars["BigInt"]>;
  positionSize_gt?: InputMaybe<Scalars["BigInt"]>;
  positionSize_gte?: InputMaybe<Scalars["BigInt"]>;
  positionSize_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  positionSize_lt?: InputMaybe<Scalars["BigInt"]>;
  positionSize_lte?: InputMaybe<Scalars["BigInt"]>;
  positionSize_not?: InputMaybe<Scalars["BigInt"]>;
  positionSize_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  realizedProfit?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_gt?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_gte?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  realizedProfit_lt?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_lte?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_not?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  recentCumFundingPerLpToken?: InputMaybe<Scalars["BigInt"]>;
  recentCumFundingPerLpToken_gt?: InputMaybe<Scalars["BigInt"]>;
  recentCumFundingPerLpToken_gte?: InputMaybe<Scalars["BigInt"]>;
  recentCumFundingPerLpToken_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  recentCumFundingPerLpToken_lt?: InputMaybe<Scalars["BigInt"]>;
  recentCumFundingPerLpToken_lte?: InputMaybe<Scalars["BigInt"]>;
  recentCumFundingPerLpToken_not?: InputMaybe<Scalars["BigInt"]>;
  recentCumFundingPerLpToken_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalBaseFeesGrowth?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_gt?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_gte?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalBaseFeesGrowth_lt?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_lte?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_not?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalQuoteFeesGrowth?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_gt?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_gte?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalQuoteFeesGrowth_lt?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_lte?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_not?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalTradingFeesGrowth?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_gt?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_gte?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalTradingFeesGrowth_lt?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_lte?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_not?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tradingFeesPayed?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_gt?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_gte?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tradingFeesPayed_lt?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_lte?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_not?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  user?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  weightedEntryPriceSum?: InputMaybe<Scalars["BigInt"]>;
  weightedEntryPriceSum_gt?: InputMaybe<Scalars["BigInt"]>;
  weightedEntryPriceSum_gte?: InputMaybe<Scalars["BigInt"]>;
  weightedEntryPriceSum_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  weightedEntryPriceSum_lt?: InputMaybe<Scalars["BigInt"]>;
  weightedEntryPriceSum_lte?: InputMaybe<Scalars["BigInt"]>;
  weightedEntryPriceSum_not?: InputMaybe<Scalars["BigInt"]>;
  weightedEntryPriceSum_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  weightedExitPriceSum?: InputMaybe<Scalars["BigInt"]>;
  weightedExitPriceSum_gt?: InputMaybe<Scalars["BigInt"]>;
  weightedExitPriceSum_gte?: InputMaybe<Scalars["BigInt"]>;
  weightedExitPriceSum_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  weightedExitPriceSum_lt?: InputMaybe<Scalars["BigInt"]>;
  weightedExitPriceSum_lte?: InputMaybe<Scalars["BigInt"]>;
  weightedExitPriceSum_not?: InputMaybe<Scalars["BigInt"]>;
  weightedExitPriceSum_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum CurrentLpPosition_OrderBy {
  DepositTime = "depositTime",
  EntryAmountSum = "entryAmountSum",
  ExitAmountSum = "exitAmountSum",
  FundingPayment = "fundingPayment",
  Id = "id",
  InitialCumFundingPerLpToken = "initialCumFundingPerLpToken",
  InitialUsdValue = "initialUsdValue",
  LiquidityBalance = "liquidityBalance",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  OpenNotional = "openNotional",
  PositionSize = "positionSize",
  RealizedProfit = "realizedProfit",
  RecentCumFundingPerLpToken = "recentCumFundingPerLpToken",
  Timestamp = "timestamp",
  TotalBaseFeesGrowth = "totalBaseFeesGrowth",
  TotalQuoteFeesGrowth = "totalQuoteFeesGrowth",
  TotalTradingFeesGrowth = "totalTradingFeesGrowth",
  TradingFeesPayed = "tradingFeesPayed",
  User = "user",
  UserId = "user__id",
  UserTradingVolume = "user__tradingVolume",
  WeightedEntryPriceSum = "weightedEntryPriceSum",
  WeightedExitPriceSum = "weightedExitPriceSum",
}

export type CurrentPosition = {
  __typename?: "CurrentPosition";
  direction: Scalars["Int"];
  entryPrice: Scalars["BigInt"];
  fundingPayment: Scalars["BigInt"];
  id: Scalars["ID"];
  initialCumFundingRate: Scalars["BigInt"];
  insuranceFeesPayed: Scalars["BigInt"];
  marginRatio: Scalars["BigInt"];
  market: Market;
  openNotional: Scalars["BigInt"];
  positionSize: Scalars["BigInt"];
  realizedProfit: Scalars["BigInt"];
  recentCumFundingRate: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  tradingFeesPayed: Scalars["BigInt"];
  user: User;
};

export type CurrentPosition_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CurrentPosition_Filter>>>;
  direction?: InputMaybe<Scalars["Int"]>;
  direction_gt?: InputMaybe<Scalars["Int"]>;
  direction_gte?: InputMaybe<Scalars["Int"]>;
  direction_in?: InputMaybe<Array<Scalars["Int"]>>;
  direction_lt?: InputMaybe<Scalars["Int"]>;
  direction_lte?: InputMaybe<Scalars["Int"]>;
  direction_not?: InputMaybe<Scalars["Int"]>;
  direction_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  entryPrice?: InputMaybe<Scalars["BigInt"]>;
  entryPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  entryPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  entryPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  entryPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  entryPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  entryPrice_not?: InputMaybe<Scalars["BigInt"]>;
  entryPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fundingPayment?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_gt?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_gte?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fundingPayment_lt?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_lte?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_not?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  initialCumFundingRate?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingRate_gt?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingRate_gte?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  initialCumFundingRate_lt?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingRate_lte?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingRate_not?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  insuranceFeesPayed?: InputMaybe<Scalars["BigInt"]>;
  insuranceFeesPayed_gt?: InputMaybe<Scalars["BigInt"]>;
  insuranceFeesPayed_gte?: InputMaybe<Scalars["BigInt"]>;
  insuranceFeesPayed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  insuranceFeesPayed_lt?: InputMaybe<Scalars["BigInt"]>;
  insuranceFeesPayed_lte?: InputMaybe<Scalars["BigInt"]>;
  insuranceFeesPayed_not?: InputMaybe<Scalars["BigInt"]>;
  insuranceFeesPayed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  marginRatio?: InputMaybe<Scalars["BigInt"]>;
  marginRatio_gt?: InputMaybe<Scalars["BigInt"]>;
  marginRatio_gte?: InputMaybe<Scalars["BigInt"]>;
  marginRatio_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  marginRatio_lt?: InputMaybe<Scalars["BigInt"]>;
  marginRatio_lte?: InputMaybe<Scalars["BigInt"]>;
  marginRatio_not?: InputMaybe<Scalars["BigInt"]>;
  marginRatio_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  openNotional?: InputMaybe<Scalars["BigInt"]>;
  openNotional_gt?: InputMaybe<Scalars["BigInt"]>;
  openNotional_gte?: InputMaybe<Scalars["BigInt"]>;
  openNotional_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  openNotional_lt?: InputMaybe<Scalars["BigInt"]>;
  openNotional_lte?: InputMaybe<Scalars["BigInt"]>;
  openNotional_not?: InputMaybe<Scalars["BigInt"]>;
  openNotional_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<CurrentPosition_Filter>>>;
  positionSize?: InputMaybe<Scalars["BigInt"]>;
  positionSize_gt?: InputMaybe<Scalars["BigInt"]>;
  positionSize_gte?: InputMaybe<Scalars["BigInt"]>;
  positionSize_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  positionSize_lt?: InputMaybe<Scalars["BigInt"]>;
  positionSize_lte?: InputMaybe<Scalars["BigInt"]>;
  positionSize_not?: InputMaybe<Scalars["BigInt"]>;
  positionSize_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  realizedProfit?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_gt?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_gte?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  realizedProfit_lt?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_lte?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_not?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  recentCumFundingRate?: InputMaybe<Scalars["BigInt"]>;
  recentCumFundingRate_gt?: InputMaybe<Scalars["BigInt"]>;
  recentCumFundingRate_gte?: InputMaybe<Scalars["BigInt"]>;
  recentCumFundingRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  recentCumFundingRate_lt?: InputMaybe<Scalars["BigInt"]>;
  recentCumFundingRate_lte?: InputMaybe<Scalars["BigInt"]>;
  recentCumFundingRate_not?: InputMaybe<Scalars["BigInt"]>;
  recentCumFundingRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tradingFeesPayed?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_gt?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_gte?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tradingFeesPayed_lt?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_lte?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_not?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  user?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum CurrentPosition_OrderBy {
  Direction = "direction",
  EntryPrice = "entryPrice",
  FundingPayment = "fundingPayment",
  Id = "id",
  InitialCumFundingRate = "initialCumFundingRate",
  InsuranceFeesPayed = "insuranceFeesPayed",
  MarginRatio = "marginRatio",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  OpenNotional = "openNotional",
  PositionSize = "positionSize",
  RealizedProfit = "realizedProfit",
  RecentCumFundingRate = "recentCumFundingRate",
  Timestamp = "timestamp",
  TradingFeesPayed = "tradingFeesPayed",
  User = "user",
  UserId = "user__id",
  UserTradingVolume = "user__tradingVolume",
}

export type CurrentTokenBalance = {
  __typename?: "CurrentTokenBalance";
  amount: Scalars["BigInt"];
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  token: Token;
  user: User;
};

export type CurrentTokenBalance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<CurrentTokenBalance_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<CurrentTokenBalance_Filter>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum CurrentTokenBalance_OrderBy {
  Amount = "amount",
  Id = "id",
  Timestamp = "timestamp",
  Token = "token",
  TokenAddress = "token__address",
  TokenAggregator = "token__aggregator",
  TokenDecimals = "token__decimals",
  TokenDepositedAmount = "token__depositedAmount",
  TokenId = "token__id",
  TokenMaxAmount = "token__maxAmount",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenUniqueDepositors = "token__uniqueDepositors",
  TokenWeight = "token__weight",
  User = "user",
  UserId = "user__id",
  UserTradingVolume = "user__tradingVolume",
}

export type DailyCandle = {
  __typename?: "DailyCandle";
  close: Scalars["BigInt"];
  closeTimestamp: Scalars["BigInt"];
  high: Scalars["BigInt"];
  id: Scalars["ID"];
  lastPrice: Price;
  low: Scalars["BigInt"];
  market: Market;
  open: Scalars["BigInt"];
  openTimestamp: Scalars["BigInt"];
  volume: Scalars["BigInt"];
};

export type DailyCandle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DailyCandle_Filter>>>;
  close?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closeTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  close_gt?: InputMaybe<Scalars["BigInt"]>;
  close_gte?: InputMaybe<Scalars["BigInt"]>;
  close_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  close_lt?: InputMaybe<Scalars["BigInt"]>;
  close_lte?: InputMaybe<Scalars["BigInt"]>;
  close_not?: InputMaybe<Scalars["BigInt"]>;
  close_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  high?: InputMaybe<Scalars["BigInt"]>;
  high_gt?: InputMaybe<Scalars["BigInt"]>;
  high_gte?: InputMaybe<Scalars["BigInt"]>;
  high_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  high_lt?: InputMaybe<Scalars["BigInt"]>;
  high_lte?: InputMaybe<Scalars["BigInt"]>;
  high_not?: InputMaybe<Scalars["BigInt"]>;
  high_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lastPrice?: InputMaybe<Scalars["String"]>;
  lastPrice_?: InputMaybe<Price_Filter>;
  lastPrice_contains?: InputMaybe<Scalars["String"]>;
  lastPrice_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_ends_with?: InputMaybe<Scalars["String"]>;
  lastPrice_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_gt?: InputMaybe<Scalars["String"]>;
  lastPrice_gte?: InputMaybe<Scalars["String"]>;
  lastPrice_in?: InputMaybe<Array<Scalars["String"]>>;
  lastPrice_lt?: InputMaybe<Scalars["String"]>;
  lastPrice_lte?: InputMaybe<Scalars["String"]>;
  lastPrice_not?: InputMaybe<Scalars["String"]>;
  lastPrice_not_contains?: InputMaybe<Scalars["String"]>;
  lastPrice_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_not_ends_with?: InputMaybe<Scalars["String"]>;
  lastPrice_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lastPrice_not_starts_with?: InputMaybe<Scalars["String"]>;
  lastPrice_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_starts_with?: InputMaybe<Scalars["String"]>;
  lastPrice_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  low?: InputMaybe<Scalars["BigInt"]>;
  low_gt?: InputMaybe<Scalars["BigInt"]>;
  low_gte?: InputMaybe<Scalars["BigInt"]>;
  low_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  low_lt?: InputMaybe<Scalars["BigInt"]>;
  low_lte?: InputMaybe<Scalars["BigInt"]>;
  low_not?: InputMaybe<Scalars["BigInt"]>;
  low_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  open?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  openTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  open_gt?: InputMaybe<Scalars["BigInt"]>;
  open_gte?: InputMaybe<Scalars["BigInt"]>;
  open_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  open_lt?: InputMaybe<Scalars["BigInt"]>;
  open_lte?: InputMaybe<Scalars["BigInt"]>;
  open_not?: InputMaybe<Scalars["BigInt"]>;
  open_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<DailyCandle_Filter>>>;
  volume?: InputMaybe<Scalars["BigInt"]>;
  volume_gt?: InputMaybe<Scalars["BigInt"]>;
  volume_gte?: InputMaybe<Scalars["BigInt"]>;
  volume_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  volume_lt?: InputMaybe<Scalars["BigInt"]>;
  volume_lte?: InputMaybe<Scalars["BigInt"]>;
  volume_not?: InputMaybe<Scalars["BigInt"]>;
  volume_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum DailyCandle_OrderBy {
  Close = "close",
  CloseTimestamp = "closeTimestamp",
  High = "high",
  Id = "id",
  LastPrice = "lastPrice",
  LastPriceBaseSupply = "lastPrice__baseSupply",
  LastPriceBaseVal = "lastPrice__baseVal",
  LastPriceCumFundingPerLpToken = "lastPrice__cumFundingPerLpToken",
  LastPriceCumFundingRate = "lastPrice__cumFundingRate",
  LastPriceFundingRate = "lastPrice__fundingRate",
  LastPriceId = "lastPrice__id",
  LastPriceIndex = "lastPrice__index",
  LastPriceIndexTwap = "lastPrice__indexTwap",
  LastPriceMark = "lastPrice__mark",
  LastPricePriceOracle = "lastPrice__priceOracle",
  LastPricePriceScale = "lastPrice__priceScale",
  LastPriceQuoteSupply = "lastPrice__quoteSupply",
  LastPriceQuoteVal = "lastPrice__quoteVal",
  LastPriceTimestamp = "lastPrice__timestamp",
  LastPriceValue = "lastPrice__value",
  LastPriceVirtualPrice = "lastPrice__virtualPrice",
  Low = "low",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  Open = "open",
  OpenTimestamp = "openTimestamp",
  Volume = "volume",
}

export type FifteenMinuteCandle = {
  __typename?: "FifteenMinuteCandle";
  close: Scalars["BigInt"];
  closeTimestamp: Scalars["BigInt"];
  high: Scalars["BigInt"];
  id: Scalars["ID"];
  lastPrice: Price;
  low: Scalars["BigInt"];
  market: Market;
  open: Scalars["BigInt"];
  openTimestamp: Scalars["BigInt"];
  volume: Scalars["BigInt"];
};

export type FifteenMinuteCandle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FifteenMinuteCandle_Filter>>>;
  close?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closeTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  close_gt?: InputMaybe<Scalars["BigInt"]>;
  close_gte?: InputMaybe<Scalars["BigInt"]>;
  close_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  close_lt?: InputMaybe<Scalars["BigInt"]>;
  close_lte?: InputMaybe<Scalars["BigInt"]>;
  close_not?: InputMaybe<Scalars["BigInt"]>;
  close_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  high?: InputMaybe<Scalars["BigInt"]>;
  high_gt?: InputMaybe<Scalars["BigInt"]>;
  high_gte?: InputMaybe<Scalars["BigInt"]>;
  high_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  high_lt?: InputMaybe<Scalars["BigInt"]>;
  high_lte?: InputMaybe<Scalars["BigInt"]>;
  high_not?: InputMaybe<Scalars["BigInt"]>;
  high_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lastPrice?: InputMaybe<Scalars["String"]>;
  lastPrice_?: InputMaybe<Price_Filter>;
  lastPrice_contains?: InputMaybe<Scalars["String"]>;
  lastPrice_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_ends_with?: InputMaybe<Scalars["String"]>;
  lastPrice_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_gt?: InputMaybe<Scalars["String"]>;
  lastPrice_gte?: InputMaybe<Scalars["String"]>;
  lastPrice_in?: InputMaybe<Array<Scalars["String"]>>;
  lastPrice_lt?: InputMaybe<Scalars["String"]>;
  lastPrice_lte?: InputMaybe<Scalars["String"]>;
  lastPrice_not?: InputMaybe<Scalars["String"]>;
  lastPrice_not_contains?: InputMaybe<Scalars["String"]>;
  lastPrice_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_not_ends_with?: InputMaybe<Scalars["String"]>;
  lastPrice_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lastPrice_not_starts_with?: InputMaybe<Scalars["String"]>;
  lastPrice_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_starts_with?: InputMaybe<Scalars["String"]>;
  lastPrice_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  low?: InputMaybe<Scalars["BigInt"]>;
  low_gt?: InputMaybe<Scalars["BigInt"]>;
  low_gte?: InputMaybe<Scalars["BigInt"]>;
  low_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  low_lt?: InputMaybe<Scalars["BigInt"]>;
  low_lte?: InputMaybe<Scalars["BigInt"]>;
  low_not?: InputMaybe<Scalars["BigInt"]>;
  low_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  open?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  openTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  open_gt?: InputMaybe<Scalars["BigInt"]>;
  open_gte?: InputMaybe<Scalars["BigInt"]>;
  open_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  open_lt?: InputMaybe<Scalars["BigInt"]>;
  open_lte?: InputMaybe<Scalars["BigInt"]>;
  open_not?: InputMaybe<Scalars["BigInt"]>;
  open_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<FifteenMinuteCandle_Filter>>>;
  volume?: InputMaybe<Scalars["BigInt"]>;
  volume_gt?: InputMaybe<Scalars["BigInt"]>;
  volume_gte?: InputMaybe<Scalars["BigInt"]>;
  volume_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  volume_lt?: InputMaybe<Scalars["BigInt"]>;
  volume_lte?: InputMaybe<Scalars["BigInt"]>;
  volume_not?: InputMaybe<Scalars["BigInt"]>;
  volume_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum FifteenMinuteCandle_OrderBy {
  Close = "close",
  CloseTimestamp = "closeTimestamp",
  High = "high",
  Id = "id",
  LastPrice = "lastPrice",
  LastPriceBaseSupply = "lastPrice__baseSupply",
  LastPriceBaseVal = "lastPrice__baseVal",
  LastPriceCumFundingPerLpToken = "lastPrice__cumFundingPerLpToken",
  LastPriceCumFundingRate = "lastPrice__cumFundingRate",
  LastPriceFundingRate = "lastPrice__fundingRate",
  LastPriceId = "lastPrice__id",
  LastPriceIndex = "lastPrice__index",
  LastPriceIndexTwap = "lastPrice__indexTwap",
  LastPriceMark = "lastPrice__mark",
  LastPricePriceOracle = "lastPrice__priceOracle",
  LastPricePriceScale = "lastPrice__priceScale",
  LastPriceQuoteSupply = "lastPrice__quoteSupply",
  LastPriceQuoteVal = "lastPrice__quoteVal",
  LastPriceTimestamp = "lastPrice__timestamp",
  LastPriceValue = "lastPrice__value",
  LastPriceVirtualPrice = "lastPrice__virtualPrice",
  Low = "low",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  Open = "open",
  OpenTimestamp = "openTimestamp",
  Volume = "volume",
}

export type FundingPayment = {
  __typename?: "FundingPayment";
  amount: Scalars["BigInt"];
  id: Scalars["ID"];
  isTrader: Scalars["Boolean"];
  market: Market;
  timestamp: Scalars["BigInt"];
  user: User;
};

export type FundingPayment_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<FundingPayment_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isTrader?: InputMaybe<Scalars["Boolean"]>;
  isTrader_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isTrader_not?: InputMaybe<Scalars["Boolean"]>;
  isTrader_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<FundingPayment_Filter>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  user?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum FundingPayment_OrderBy {
  Amount = "amount",
  Id = "id",
  IsTrader = "isTrader",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  Timestamp = "timestamp",
  User = "user",
  UserId = "user__id",
  UserTradingVolume = "user__tradingVolume",
}

export type GlobalMetricStore = {
  __typename?: "GlobalMetricStore";
  id: Scalars["ID"];
  userCount: Scalars["BigInt"];
};

export type GlobalMetricStore_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GlobalMetricStore_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<GlobalMetricStore_Filter>>>;
  userCount?: InputMaybe<Scalars["BigInt"]>;
  userCount_gt?: InputMaybe<Scalars["BigInt"]>;
  userCount_gte?: InputMaybe<Scalars["BigInt"]>;
  userCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  userCount_lt?: InputMaybe<Scalars["BigInt"]>;
  userCount_lte?: InputMaybe<Scalars["BigInt"]>;
  userCount_not?: InputMaybe<Scalars["BigInt"]>;
  userCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum GlobalMetricStore_OrderBy {
  Id = "id",
  UserCount = "userCount",
}

export type GlobalPosition = {
  __typename?: "GlobalPosition";
  cumFundingPerLpToken: Scalars["BigInt"];
  cumFundingRate: Scalars["BigInt"];
  currentBlockTradeAmount: Scalars["BigInt"];
  id: Scalars["ID"];
  market: Market;
  timeOfLastTrade: Scalars["BigInt"];
  timeOfLastTwapUpdate: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  totalBaseFeesGrowth: Scalars["BigInt"];
  totalBaseProvided: Scalars["BigInt"];
  totalLiquidityProvided: Scalars["BigInt"];
  totalQuoteFeesGrowth: Scalars["BigInt"];
  totalQuoteProvided: Scalars["BigInt"];
  totalTradingFeesGrowth: Scalars["BigInt"];
  traderLongs: Scalars["BigInt"];
  traderShorts: Scalars["BigInt"];
};

export type GlobalPositionHourlyAggregate = {
  __typename?: "GlobalPositionHourlyAggregate";
  closeTimestamp: Scalars["BigInt"];
  cumFundingPerLpToken: Scalars["BigInt"];
  cumFundingRate: Scalars["BigInt"];
  id: Scalars["ID"];
  market: Market;
  openTimestamp: Scalars["BigInt"];
  totalBaseFeesGrowth: Scalars["BigInt"];
  totalBaseProvided: Scalars["BigInt"];
  totalLiquidityProvided: Scalars["BigInt"];
  totalQuoteFeesGrowth: Scalars["BigInt"];
  totalQuoteProvided: Scalars["BigInt"];
  totalTradingFeesGrowth: Scalars["BigInt"];
};

export type GlobalPositionHourlyAggregate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GlobalPositionHourlyAggregate_Filter>>>;
  closeTimestamp?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closeTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumFundingPerLpToken?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_gt?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_gte?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumFundingPerLpToken_lt?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_lte?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_not?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumFundingRate?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_gt?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_gte?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumFundingRate_lt?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_lte?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_not?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  openTimestamp?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  openTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<GlobalPositionHourlyAggregate_Filter>>>;
  totalBaseFeesGrowth?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_gt?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_gte?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalBaseFeesGrowth_lt?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_lte?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_not?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalBaseProvided?: InputMaybe<Scalars["BigInt"]>;
  totalBaseProvided_gt?: InputMaybe<Scalars["BigInt"]>;
  totalBaseProvided_gte?: InputMaybe<Scalars["BigInt"]>;
  totalBaseProvided_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalBaseProvided_lt?: InputMaybe<Scalars["BigInt"]>;
  totalBaseProvided_lte?: InputMaybe<Scalars["BigInt"]>;
  totalBaseProvided_not?: InputMaybe<Scalars["BigInt"]>;
  totalBaseProvided_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidityProvided?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityProvided_gt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityProvided_gte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityProvided_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidityProvided_lt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityProvided_lte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityProvided_not?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityProvided_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalQuoteFeesGrowth?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_gt?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_gte?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalQuoteFeesGrowth_lt?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_lte?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_not?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalQuoteProvided?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteProvided_gt?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteProvided_gte?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteProvided_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalQuoteProvided_lt?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteProvided_lte?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteProvided_not?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteProvided_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalTradingFeesGrowth?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_gt?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_gte?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalTradingFeesGrowth_lt?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_lte?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_not?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum GlobalPositionHourlyAggregate_OrderBy {
  CloseTimestamp = "closeTimestamp",
  CumFundingPerLpToken = "cumFundingPerLpToken",
  CumFundingRate = "cumFundingRate",
  Id = "id",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  OpenTimestamp = "openTimestamp",
  TotalBaseFeesGrowth = "totalBaseFeesGrowth",
  TotalBaseProvided = "totalBaseProvided",
  TotalLiquidityProvided = "totalLiquidityProvided",
  TotalQuoteFeesGrowth = "totalQuoteFeesGrowth",
  TotalQuoteProvided = "totalQuoteProvided",
  TotalTradingFeesGrowth = "totalTradingFeesGrowth",
}

export type GlobalPosition_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GlobalPosition_Filter>>>;
  cumFundingPerLpToken?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_gt?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_gte?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumFundingPerLpToken_lt?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_lte?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_not?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumFundingRate?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_gt?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_gte?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumFundingRate_lt?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_lte?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_not?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  currentBlockTradeAmount?: InputMaybe<Scalars["BigInt"]>;
  currentBlockTradeAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  currentBlockTradeAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  currentBlockTradeAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  currentBlockTradeAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  currentBlockTradeAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  currentBlockTradeAmount_not?: InputMaybe<Scalars["BigInt"]>;
  currentBlockTradeAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<GlobalPosition_Filter>>>;
  timeOfLastTrade?: InputMaybe<Scalars["BigInt"]>;
  timeOfLastTrade_gt?: InputMaybe<Scalars["BigInt"]>;
  timeOfLastTrade_gte?: InputMaybe<Scalars["BigInt"]>;
  timeOfLastTrade_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timeOfLastTrade_lt?: InputMaybe<Scalars["BigInt"]>;
  timeOfLastTrade_lte?: InputMaybe<Scalars["BigInt"]>;
  timeOfLastTrade_not?: InputMaybe<Scalars["BigInt"]>;
  timeOfLastTrade_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timeOfLastTwapUpdate?: InputMaybe<Scalars["BigInt"]>;
  timeOfLastTwapUpdate_gt?: InputMaybe<Scalars["BigInt"]>;
  timeOfLastTwapUpdate_gte?: InputMaybe<Scalars["BigInt"]>;
  timeOfLastTwapUpdate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timeOfLastTwapUpdate_lt?: InputMaybe<Scalars["BigInt"]>;
  timeOfLastTwapUpdate_lte?: InputMaybe<Scalars["BigInt"]>;
  timeOfLastTwapUpdate_not?: InputMaybe<Scalars["BigInt"]>;
  timeOfLastTwapUpdate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalBaseFeesGrowth?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_gt?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_gte?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalBaseFeesGrowth_lt?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_lte?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_not?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalBaseProvided?: InputMaybe<Scalars["BigInt"]>;
  totalBaseProvided_gt?: InputMaybe<Scalars["BigInt"]>;
  totalBaseProvided_gte?: InputMaybe<Scalars["BigInt"]>;
  totalBaseProvided_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalBaseProvided_lt?: InputMaybe<Scalars["BigInt"]>;
  totalBaseProvided_lte?: InputMaybe<Scalars["BigInt"]>;
  totalBaseProvided_not?: InputMaybe<Scalars["BigInt"]>;
  totalBaseProvided_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidityProvided?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityProvided_gt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityProvided_gte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityProvided_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalLiquidityProvided_lt?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityProvided_lte?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityProvided_not?: InputMaybe<Scalars["BigInt"]>;
  totalLiquidityProvided_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalQuoteFeesGrowth?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_gt?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_gte?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalQuoteFeesGrowth_lt?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_lte?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_not?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalQuoteProvided?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteProvided_gt?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteProvided_gte?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteProvided_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalQuoteProvided_lt?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteProvided_lte?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteProvided_not?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteProvided_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalTradingFeesGrowth?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_gt?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_gte?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalTradingFeesGrowth_lt?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_lte?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_not?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  traderLongs?: InputMaybe<Scalars["BigInt"]>;
  traderLongs_gt?: InputMaybe<Scalars["BigInt"]>;
  traderLongs_gte?: InputMaybe<Scalars["BigInt"]>;
  traderLongs_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  traderLongs_lt?: InputMaybe<Scalars["BigInt"]>;
  traderLongs_lte?: InputMaybe<Scalars["BigInt"]>;
  traderLongs_not?: InputMaybe<Scalars["BigInt"]>;
  traderLongs_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  traderShorts?: InputMaybe<Scalars["BigInt"]>;
  traderShorts_gt?: InputMaybe<Scalars["BigInt"]>;
  traderShorts_gte?: InputMaybe<Scalars["BigInt"]>;
  traderShorts_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  traderShorts_lt?: InputMaybe<Scalars["BigInt"]>;
  traderShorts_lte?: InputMaybe<Scalars["BigInt"]>;
  traderShorts_not?: InputMaybe<Scalars["BigInt"]>;
  traderShorts_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum GlobalPosition_OrderBy {
  CumFundingPerLpToken = "cumFundingPerLpToken",
  CumFundingRate = "cumFundingRate",
  CurrentBlockTradeAmount = "currentBlockTradeAmount",
  Id = "id",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  TimeOfLastTrade = "timeOfLastTrade",
  TimeOfLastTwapUpdate = "timeOfLastTwapUpdate",
  Timestamp = "timestamp",
  TotalBaseFeesGrowth = "totalBaseFeesGrowth",
  TotalBaseProvided = "totalBaseProvided",
  TotalLiquidityProvided = "totalLiquidityProvided",
  TotalQuoteFeesGrowth = "totalQuoteFeesGrowth",
  TotalQuoteProvided = "totalQuoteProvided",
  TotalTradingFeesGrowth = "totalTradingFeesGrowth",
  TraderLongs = "traderLongs",
  TraderShorts = "traderShorts",
}

export type HourlyCandle = {
  __typename?: "HourlyCandle";
  close: Scalars["BigInt"];
  closeTimestamp: Scalars["BigInt"];
  high: Scalars["BigInt"];
  id: Scalars["ID"];
  lastPrice: Price;
  low: Scalars["BigInt"];
  market: Market;
  open: Scalars["BigInt"];
  openTimestamp: Scalars["BigInt"];
  volume: Scalars["BigInt"];
};

export type HourlyCandle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HourlyCandle_Filter>>>;
  close?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closeTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  close_gt?: InputMaybe<Scalars["BigInt"]>;
  close_gte?: InputMaybe<Scalars["BigInt"]>;
  close_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  close_lt?: InputMaybe<Scalars["BigInt"]>;
  close_lte?: InputMaybe<Scalars["BigInt"]>;
  close_not?: InputMaybe<Scalars["BigInt"]>;
  close_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  high?: InputMaybe<Scalars["BigInt"]>;
  high_gt?: InputMaybe<Scalars["BigInt"]>;
  high_gte?: InputMaybe<Scalars["BigInt"]>;
  high_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  high_lt?: InputMaybe<Scalars["BigInt"]>;
  high_lte?: InputMaybe<Scalars["BigInt"]>;
  high_not?: InputMaybe<Scalars["BigInt"]>;
  high_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lastPrice?: InputMaybe<Scalars["String"]>;
  lastPrice_?: InputMaybe<Price_Filter>;
  lastPrice_contains?: InputMaybe<Scalars["String"]>;
  lastPrice_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_ends_with?: InputMaybe<Scalars["String"]>;
  lastPrice_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_gt?: InputMaybe<Scalars["String"]>;
  lastPrice_gte?: InputMaybe<Scalars["String"]>;
  lastPrice_in?: InputMaybe<Array<Scalars["String"]>>;
  lastPrice_lt?: InputMaybe<Scalars["String"]>;
  lastPrice_lte?: InputMaybe<Scalars["String"]>;
  lastPrice_not?: InputMaybe<Scalars["String"]>;
  lastPrice_not_contains?: InputMaybe<Scalars["String"]>;
  lastPrice_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_not_ends_with?: InputMaybe<Scalars["String"]>;
  lastPrice_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lastPrice_not_starts_with?: InputMaybe<Scalars["String"]>;
  lastPrice_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_starts_with?: InputMaybe<Scalars["String"]>;
  lastPrice_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  low?: InputMaybe<Scalars["BigInt"]>;
  low_gt?: InputMaybe<Scalars["BigInt"]>;
  low_gte?: InputMaybe<Scalars["BigInt"]>;
  low_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  low_lt?: InputMaybe<Scalars["BigInt"]>;
  low_lte?: InputMaybe<Scalars["BigInt"]>;
  low_not?: InputMaybe<Scalars["BigInt"]>;
  low_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  open?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  openTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  open_gt?: InputMaybe<Scalars["BigInt"]>;
  open_gte?: InputMaybe<Scalars["BigInt"]>;
  open_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  open_lt?: InputMaybe<Scalars["BigInt"]>;
  open_lte?: InputMaybe<Scalars["BigInt"]>;
  open_not?: InputMaybe<Scalars["BigInt"]>;
  open_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<HourlyCandle_Filter>>>;
  volume?: InputMaybe<Scalars["BigInt"]>;
  volume_gt?: InputMaybe<Scalars["BigInt"]>;
  volume_gte?: InputMaybe<Scalars["BigInt"]>;
  volume_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  volume_lt?: InputMaybe<Scalars["BigInt"]>;
  volume_lte?: InputMaybe<Scalars["BigInt"]>;
  volume_not?: InputMaybe<Scalars["BigInt"]>;
  volume_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum HourlyCandle_OrderBy {
  Close = "close",
  CloseTimestamp = "closeTimestamp",
  High = "high",
  Id = "id",
  LastPrice = "lastPrice",
  LastPriceBaseSupply = "lastPrice__baseSupply",
  LastPriceBaseVal = "lastPrice__baseVal",
  LastPriceCumFundingPerLpToken = "lastPrice__cumFundingPerLpToken",
  LastPriceCumFundingRate = "lastPrice__cumFundingRate",
  LastPriceFundingRate = "lastPrice__fundingRate",
  LastPriceId = "lastPrice__id",
  LastPriceIndex = "lastPrice__index",
  LastPriceIndexTwap = "lastPrice__indexTwap",
  LastPriceMark = "lastPrice__mark",
  LastPricePriceOracle = "lastPrice__priceOracle",
  LastPricePriceScale = "lastPrice__priceScale",
  LastPriceQuoteSupply = "lastPrice__quoteSupply",
  LastPriceQuoteVal = "lastPrice__quoteVal",
  LastPriceTimestamp = "lastPrice__timestamp",
  LastPriceValue = "lastPrice__value",
  LastPriceVirtualPrice = "lastPrice__virtualPrice",
  Low = "low",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  Open = "open",
  OpenTimestamp = "openTimestamp",
  Volume = "volume",
}

export type Liquidation = {
  __typename?: "Liquidation";
  id: Scalars["ID"];
  isTrader: Scalars["Boolean"];
  liquidatee: User;
  market: Market;
  pastLpPosition?: Maybe<PastLpPosition>;
  pastPosition?: Maybe<PastPosition>;
  profit: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  user: User;
};

export type Liquidation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Liquidation_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  isTrader?: InputMaybe<Scalars["Boolean"]>;
  isTrader_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isTrader_not?: InputMaybe<Scalars["Boolean"]>;
  isTrader_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  liquidatee?: InputMaybe<Scalars["String"]>;
  liquidatee_?: InputMaybe<User_Filter>;
  liquidatee_contains?: InputMaybe<Scalars["String"]>;
  liquidatee_contains_nocase?: InputMaybe<Scalars["String"]>;
  liquidatee_ends_with?: InputMaybe<Scalars["String"]>;
  liquidatee_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidatee_gt?: InputMaybe<Scalars["String"]>;
  liquidatee_gte?: InputMaybe<Scalars["String"]>;
  liquidatee_in?: InputMaybe<Array<Scalars["String"]>>;
  liquidatee_lt?: InputMaybe<Scalars["String"]>;
  liquidatee_lte?: InputMaybe<Scalars["String"]>;
  liquidatee_not?: InputMaybe<Scalars["String"]>;
  liquidatee_not_contains?: InputMaybe<Scalars["String"]>;
  liquidatee_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  liquidatee_not_ends_with?: InputMaybe<Scalars["String"]>;
  liquidatee_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidatee_not_in?: InputMaybe<Array<Scalars["String"]>>;
  liquidatee_not_starts_with?: InputMaybe<Scalars["String"]>;
  liquidatee_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidatee_starts_with?: InputMaybe<Scalars["String"]>;
  liquidatee_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<Liquidation_Filter>>>;
  pastLpPosition?: InputMaybe<Scalars["String"]>;
  pastLpPosition_?: InputMaybe<PastLpPosition_Filter>;
  pastLpPosition_contains?: InputMaybe<Scalars["String"]>;
  pastLpPosition_contains_nocase?: InputMaybe<Scalars["String"]>;
  pastLpPosition_ends_with?: InputMaybe<Scalars["String"]>;
  pastLpPosition_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pastLpPosition_gt?: InputMaybe<Scalars["String"]>;
  pastLpPosition_gte?: InputMaybe<Scalars["String"]>;
  pastLpPosition_in?: InputMaybe<Array<Scalars["String"]>>;
  pastLpPosition_lt?: InputMaybe<Scalars["String"]>;
  pastLpPosition_lte?: InputMaybe<Scalars["String"]>;
  pastLpPosition_not?: InputMaybe<Scalars["String"]>;
  pastLpPosition_not_contains?: InputMaybe<Scalars["String"]>;
  pastLpPosition_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pastLpPosition_not_ends_with?: InputMaybe<Scalars["String"]>;
  pastLpPosition_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pastLpPosition_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pastLpPosition_not_starts_with?: InputMaybe<Scalars["String"]>;
  pastLpPosition_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pastLpPosition_starts_with?: InputMaybe<Scalars["String"]>;
  pastLpPosition_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pastPosition?: InputMaybe<Scalars["String"]>;
  pastPosition_?: InputMaybe<PastPosition_Filter>;
  pastPosition_contains?: InputMaybe<Scalars["String"]>;
  pastPosition_contains_nocase?: InputMaybe<Scalars["String"]>;
  pastPosition_ends_with?: InputMaybe<Scalars["String"]>;
  pastPosition_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pastPosition_gt?: InputMaybe<Scalars["String"]>;
  pastPosition_gte?: InputMaybe<Scalars["String"]>;
  pastPosition_in?: InputMaybe<Array<Scalars["String"]>>;
  pastPosition_lt?: InputMaybe<Scalars["String"]>;
  pastPosition_lte?: InputMaybe<Scalars["String"]>;
  pastPosition_not?: InputMaybe<Scalars["String"]>;
  pastPosition_not_contains?: InputMaybe<Scalars["String"]>;
  pastPosition_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pastPosition_not_ends_with?: InputMaybe<Scalars["String"]>;
  pastPosition_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pastPosition_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pastPosition_not_starts_with?: InputMaybe<Scalars["String"]>;
  pastPosition_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pastPosition_starts_with?: InputMaybe<Scalars["String"]>;
  pastPosition_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  profit?: InputMaybe<Scalars["BigInt"]>;
  profit_gt?: InputMaybe<Scalars["BigInt"]>;
  profit_gte?: InputMaybe<Scalars["BigInt"]>;
  profit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  profit_lt?: InputMaybe<Scalars["BigInt"]>;
  profit_lte?: InputMaybe<Scalars["BigInt"]>;
  profit_not?: InputMaybe<Scalars["BigInt"]>;
  profit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  user?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Liquidation_OrderBy {
  Id = "id",
  IsTrader = "isTrader",
  Liquidatee = "liquidatee",
  LiquidateeId = "liquidatee__id",
  LiquidateeTradingVolume = "liquidatee__tradingVolume",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  PastLpPosition = "pastLpPosition",
  PastLpPositionCloseTimestamp = "pastLpPosition__closeTimestamp",
  PastLpPositionDepositTime = "pastLpPosition__depositTime",
  PastLpPositionEntryAmountSum = "pastLpPosition__entryAmountSum",
  PastLpPositionExitAmountSum = "pastLpPosition__exitAmountSum",
  PastLpPositionFundingPayment = "pastLpPosition__fundingPayment",
  PastLpPositionId = "pastLpPosition__id",
  PastLpPositionInitialCumFundingPerLpToken = "pastLpPosition__initialCumFundingPerLpToken",
  PastLpPositionInitialUsdValue = "pastLpPosition__initialUsdValue",
  PastLpPositionLiquidationFee = "pastLpPosition__liquidationFee",
  PastLpPositionLiquidityBalance = "pastLpPosition__liquidityBalance",
  PastLpPositionOpenNotional = "pastLpPosition__openNotional",
  PastLpPositionPositionSize = "pastLpPosition__positionSize",
  PastLpPositionRealizedProfit = "pastLpPosition__realizedProfit",
  PastLpPositionTimestamp = "pastLpPosition__timestamp",
  PastLpPositionTotalBaseFeesGrowth = "pastLpPosition__totalBaseFeesGrowth",
  PastLpPositionTotalQuoteFeesGrowth = "pastLpPosition__totalQuoteFeesGrowth",
  PastLpPositionTotalTradingFeesGrowth = "pastLpPosition__totalTradingFeesGrowth",
  PastLpPositionTradingFeesPayed = "pastLpPosition__tradingFeesPayed",
  PastLpPositionWasLiquidated = "pastLpPosition__wasLiquidated",
  PastLpPositionWeightedEntryPriceSum = "pastLpPosition__weightedEntryPriceSum",
  PastLpPositionWeightedExitPriceSum = "pastLpPosition__weightedExitPriceSum",
  PastPosition = "pastPosition",
  PastPositionCloseTimestamp = "pastPosition__closeTimestamp",
  PastPositionDirection = "pastPosition__direction",
  PastPositionEntryPrice = "pastPosition__entryPrice",
  PastPositionFundingPayment = "pastPosition__fundingPayment",
  PastPositionId = "pastPosition__id",
  PastPositionInitialCumFundingRate = "pastPosition__initialCumFundingRate",
  PastPositionInsurancePayed = "pastPosition__insurancePayed",
  PastPositionLiquidationFee = "pastPosition__liquidationFee",
  PastPositionMarginRatio = "pastPosition__marginRatio",
  PastPositionOpenNotional = "pastPosition__openNotional",
  PastPositionPositionSize = "pastPosition__positionSize",
  PastPositionRealizedProfit = "pastPosition__realizedProfit",
  PastPositionTimestamp = "pastPosition__timestamp",
  PastPositionTradingFeesPayed = "pastPosition__tradingFeesPayed",
  PastPositionWasLiquidated = "pastPosition__wasLiquidated",
  Profit = "profit",
  Timestamp = "timestamp",
  User = "user",
  UserId = "user__id",
  UserTradingVolume = "user__tradingVolume",
}

export type Market = {
  __typename?: "Market";
  activities: Array<Activity>;
  cryptoSwapPool: Scalars["Bytes"];
  dailyCandles: Array<DailyCandle>;
  earliestPrice: Scalars["BigInt"];
  fifteenMinuteCandles: Array<FifteenMinuteCandle>;
  fundingPayments: Array<FundingPayment>;
  globalPositionHourlyAggregates?: Maybe<Array<GlobalPositionHourlyAggregate>>;
  globalPositions?: Maybe<Array<GlobalPosition>>;
  hourlyCandles: Array<HourlyCandle>;
  id: Scalars["ID"];
  insuranceFee: Scalars["BigInt"];
  insuranceRatio: Scalars["BigInt"];
  latestPrice: Price;
  liquidationDiscount: Scalars["BigInt"];
  liquidationReward: Scalars["BigInt"];
  liquidationRewardInsuranceShare: Scalars["BigInt"];
  liquidityPositions?: Maybe<Array<CurrentLpPosition>>;
  lockPeriod: Scalars["BigInt"];
  lpDebtCoef: Scalars["BigInt"];
  maxBlockTradeAmount: Scalars["BigInt"];
  maxLiquidityProvided: Scalars["BigInt"];
  midFee: Scalars["BigInt"];
  minMargin: Scalars["BigInt"];
  minMarginAtCreation: Scalars["BigInt"];
  minPositiveOpenNotional: Scalars["BigInt"];
  minuteCandles: Array<MinuteCandle>;
  name: Scalars["String"];
  nonUACollSeizureDiscount: Scalars["BigInt"];
  outFee: Scalars["BigInt"];
  perpetual: Scalars["Bytes"];
  positions: Array<CurrentPosition>;
  prices: Array<Price>;
  quadHourlyCandles: Array<QuadHourlyCandle>;
  riskWeight: Scalars["BigInt"];
  sensitivity: Scalars["BigInt"];
  symbol: Scalars["String"];
  thirtyMinuteCandles: Array<ThirtyMinuteCandle>;
  twapFrequency: Scalars["BigInt"];
  uaDebtSeizureThreshold: Scalars["BigInt"];
  vaultAddress: Scalars["Bytes"];
};

export type MarketActivitiesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Activity_Filter>;
};

export type MarketDailyCandlesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DailyCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DailyCandle_Filter>;
};

export type MarketFifteenMinuteCandlesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FifteenMinuteCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FifteenMinuteCandle_Filter>;
};

export type MarketFundingPaymentsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FundingPayment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FundingPayment_Filter>;
};

export type MarketGlobalPositionHourlyAggregatesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GlobalPositionHourlyAggregate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<GlobalPositionHourlyAggregate_Filter>;
};

export type MarketGlobalPositionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GlobalPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<GlobalPosition_Filter>;
};

export type MarketHourlyCandlesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<HourlyCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<HourlyCandle_Filter>;
};

export type MarketLiquidityPositionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CurrentLpPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CurrentLpPosition_Filter>;
};

export type MarketMinuteCandlesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MinuteCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MinuteCandle_Filter>;
};

export type MarketPositionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CurrentPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CurrentPosition_Filter>;
};

export type MarketPricesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Price_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Price_Filter>;
};

export type MarketQuadHourlyCandlesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<QuadHourlyCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<QuadHourlyCandle_Filter>;
};

export type MarketThirtyMinuteCandlesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ThirtyMinuteCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<ThirtyMinuteCandle_Filter>;
};

export type Market_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activities_?: InputMaybe<Activity_Filter>;
  and?: InputMaybe<Array<InputMaybe<Market_Filter>>>;
  cryptoSwapPool?: InputMaybe<Scalars["Bytes"]>;
  cryptoSwapPool_contains?: InputMaybe<Scalars["Bytes"]>;
  cryptoSwapPool_gt?: InputMaybe<Scalars["Bytes"]>;
  cryptoSwapPool_gte?: InputMaybe<Scalars["Bytes"]>;
  cryptoSwapPool_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  cryptoSwapPool_lt?: InputMaybe<Scalars["Bytes"]>;
  cryptoSwapPool_lte?: InputMaybe<Scalars["Bytes"]>;
  cryptoSwapPool_not?: InputMaybe<Scalars["Bytes"]>;
  cryptoSwapPool_not_contains?: InputMaybe<Scalars["Bytes"]>;
  cryptoSwapPool_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  dailyCandles_?: InputMaybe<DailyCandle_Filter>;
  earliestPrice?: InputMaybe<Scalars["BigInt"]>;
  earliestPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  earliestPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  earliestPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  earliestPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  earliestPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  earliestPrice_not?: InputMaybe<Scalars["BigInt"]>;
  earliestPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fifteenMinuteCandles_?: InputMaybe<FifteenMinuteCandle_Filter>;
  fundingPayments_?: InputMaybe<FundingPayment_Filter>;
  globalPositionHourlyAggregates_?: InputMaybe<GlobalPositionHourlyAggregate_Filter>;
  globalPositions_?: InputMaybe<GlobalPosition_Filter>;
  hourlyCandles_?: InputMaybe<HourlyCandle_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  insuranceFee?: InputMaybe<Scalars["BigInt"]>;
  insuranceFee_gt?: InputMaybe<Scalars["BigInt"]>;
  insuranceFee_gte?: InputMaybe<Scalars["BigInt"]>;
  insuranceFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  insuranceFee_lt?: InputMaybe<Scalars["BigInt"]>;
  insuranceFee_lte?: InputMaybe<Scalars["BigInt"]>;
  insuranceFee_not?: InputMaybe<Scalars["BigInt"]>;
  insuranceFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  insuranceRatio?: InputMaybe<Scalars["BigInt"]>;
  insuranceRatio_gt?: InputMaybe<Scalars["BigInt"]>;
  insuranceRatio_gte?: InputMaybe<Scalars["BigInt"]>;
  insuranceRatio_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  insuranceRatio_lt?: InputMaybe<Scalars["BigInt"]>;
  insuranceRatio_lte?: InputMaybe<Scalars["BigInt"]>;
  insuranceRatio_not?: InputMaybe<Scalars["BigInt"]>;
  insuranceRatio_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  latestPrice?: InputMaybe<Scalars["String"]>;
  latestPrice_?: InputMaybe<Price_Filter>;
  latestPrice_contains?: InputMaybe<Scalars["String"]>;
  latestPrice_contains_nocase?: InputMaybe<Scalars["String"]>;
  latestPrice_ends_with?: InputMaybe<Scalars["String"]>;
  latestPrice_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  latestPrice_gt?: InputMaybe<Scalars["String"]>;
  latestPrice_gte?: InputMaybe<Scalars["String"]>;
  latestPrice_in?: InputMaybe<Array<Scalars["String"]>>;
  latestPrice_lt?: InputMaybe<Scalars["String"]>;
  latestPrice_lte?: InputMaybe<Scalars["String"]>;
  latestPrice_not?: InputMaybe<Scalars["String"]>;
  latestPrice_not_contains?: InputMaybe<Scalars["String"]>;
  latestPrice_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  latestPrice_not_ends_with?: InputMaybe<Scalars["String"]>;
  latestPrice_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  latestPrice_not_in?: InputMaybe<Array<Scalars["String"]>>;
  latestPrice_not_starts_with?: InputMaybe<Scalars["String"]>;
  latestPrice_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  latestPrice_starts_with?: InputMaybe<Scalars["String"]>;
  latestPrice_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidationDiscount?: InputMaybe<Scalars["BigInt"]>;
  liquidationDiscount_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidationDiscount_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidationDiscount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidationDiscount_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidationDiscount_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidationDiscount_not?: InputMaybe<Scalars["BigInt"]>;
  liquidationDiscount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidationReward?: InputMaybe<Scalars["BigInt"]>;
  liquidationRewardInsuranceShare?: InputMaybe<Scalars["BigInt"]>;
  liquidationRewardInsuranceShare_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidationRewardInsuranceShare_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidationRewardInsuranceShare_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidationRewardInsuranceShare_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidationRewardInsuranceShare_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidationRewardInsuranceShare_not?: InputMaybe<Scalars["BigInt"]>;
  liquidationRewardInsuranceShare_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidationReward_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidationReward_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidationReward_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidationReward_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidationReward_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidationReward_not?: InputMaybe<Scalars["BigInt"]>;
  liquidationReward_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityPositions_?: InputMaybe<CurrentLpPosition_Filter>;
  lockPeriod?: InputMaybe<Scalars["BigInt"]>;
  lockPeriod_gt?: InputMaybe<Scalars["BigInt"]>;
  lockPeriod_gte?: InputMaybe<Scalars["BigInt"]>;
  lockPeriod_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lockPeriod_lt?: InputMaybe<Scalars["BigInt"]>;
  lockPeriod_lte?: InputMaybe<Scalars["BigInt"]>;
  lockPeriod_not?: InputMaybe<Scalars["BigInt"]>;
  lockPeriod_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lpDebtCoef?: InputMaybe<Scalars["BigInt"]>;
  lpDebtCoef_gt?: InputMaybe<Scalars["BigInt"]>;
  lpDebtCoef_gte?: InputMaybe<Scalars["BigInt"]>;
  lpDebtCoef_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lpDebtCoef_lt?: InputMaybe<Scalars["BigInt"]>;
  lpDebtCoef_lte?: InputMaybe<Scalars["BigInt"]>;
  lpDebtCoef_not?: InputMaybe<Scalars["BigInt"]>;
  lpDebtCoef_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxBlockTradeAmount?: InputMaybe<Scalars["BigInt"]>;
  maxBlockTradeAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  maxBlockTradeAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  maxBlockTradeAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxBlockTradeAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  maxBlockTradeAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  maxBlockTradeAmount_not?: InputMaybe<Scalars["BigInt"]>;
  maxBlockTradeAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxLiquidityProvided?: InputMaybe<Scalars["BigInt"]>;
  maxLiquidityProvided_gt?: InputMaybe<Scalars["BigInt"]>;
  maxLiquidityProvided_gte?: InputMaybe<Scalars["BigInt"]>;
  maxLiquidityProvided_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxLiquidityProvided_lt?: InputMaybe<Scalars["BigInt"]>;
  maxLiquidityProvided_lte?: InputMaybe<Scalars["BigInt"]>;
  maxLiquidityProvided_not?: InputMaybe<Scalars["BigInt"]>;
  maxLiquidityProvided_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  midFee?: InputMaybe<Scalars["BigInt"]>;
  midFee_gt?: InputMaybe<Scalars["BigInt"]>;
  midFee_gte?: InputMaybe<Scalars["BigInt"]>;
  midFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  midFee_lt?: InputMaybe<Scalars["BigInt"]>;
  midFee_lte?: InputMaybe<Scalars["BigInt"]>;
  midFee_not?: InputMaybe<Scalars["BigInt"]>;
  midFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  minMargin?: InputMaybe<Scalars["BigInt"]>;
  minMarginAtCreation?: InputMaybe<Scalars["BigInt"]>;
  minMarginAtCreation_gt?: InputMaybe<Scalars["BigInt"]>;
  minMarginAtCreation_gte?: InputMaybe<Scalars["BigInt"]>;
  minMarginAtCreation_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  minMarginAtCreation_lt?: InputMaybe<Scalars["BigInt"]>;
  minMarginAtCreation_lte?: InputMaybe<Scalars["BigInt"]>;
  minMarginAtCreation_not?: InputMaybe<Scalars["BigInt"]>;
  minMarginAtCreation_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  minMargin_gt?: InputMaybe<Scalars["BigInt"]>;
  minMargin_gte?: InputMaybe<Scalars["BigInt"]>;
  minMargin_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  minMargin_lt?: InputMaybe<Scalars["BigInt"]>;
  minMargin_lte?: InputMaybe<Scalars["BigInt"]>;
  minMargin_not?: InputMaybe<Scalars["BigInt"]>;
  minMargin_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  minPositiveOpenNotional?: InputMaybe<Scalars["BigInt"]>;
  minPositiveOpenNotional_gt?: InputMaybe<Scalars["BigInt"]>;
  minPositiveOpenNotional_gte?: InputMaybe<Scalars["BigInt"]>;
  minPositiveOpenNotional_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  minPositiveOpenNotional_lt?: InputMaybe<Scalars["BigInt"]>;
  minPositiveOpenNotional_lte?: InputMaybe<Scalars["BigInt"]>;
  minPositiveOpenNotional_not?: InputMaybe<Scalars["BigInt"]>;
  minPositiveOpenNotional_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  minuteCandles_?: InputMaybe<MinuteCandle_Filter>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  nonUACollSeizureDiscount?: InputMaybe<Scalars["BigInt"]>;
  nonUACollSeizureDiscount_gt?: InputMaybe<Scalars["BigInt"]>;
  nonUACollSeizureDiscount_gte?: InputMaybe<Scalars["BigInt"]>;
  nonUACollSeizureDiscount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  nonUACollSeizureDiscount_lt?: InputMaybe<Scalars["BigInt"]>;
  nonUACollSeizureDiscount_lte?: InputMaybe<Scalars["BigInt"]>;
  nonUACollSeizureDiscount_not?: InputMaybe<Scalars["BigInt"]>;
  nonUACollSeizureDiscount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<Market_Filter>>>;
  outFee?: InputMaybe<Scalars["BigInt"]>;
  outFee_gt?: InputMaybe<Scalars["BigInt"]>;
  outFee_gte?: InputMaybe<Scalars["BigInt"]>;
  outFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  outFee_lt?: InputMaybe<Scalars["BigInt"]>;
  outFee_lte?: InputMaybe<Scalars["BigInt"]>;
  outFee_not?: InputMaybe<Scalars["BigInt"]>;
  outFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  perpetual?: InputMaybe<Scalars["Bytes"]>;
  perpetual_contains?: InputMaybe<Scalars["Bytes"]>;
  perpetual_gt?: InputMaybe<Scalars["Bytes"]>;
  perpetual_gte?: InputMaybe<Scalars["Bytes"]>;
  perpetual_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  perpetual_lt?: InputMaybe<Scalars["Bytes"]>;
  perpetual_lte?: InputMaybe<Scalars["Bytes"]>;
  perpetual_not?: InputMaybe<Scalars["Bytes"]>;
  perpetual_not_contains?: InputMaybe<Scalars["Bytes"]>;
  perpetual_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  positions_?: InputMaybe<CurrentPosition_Filter>;
  prices_?: InputMaybe<Price_Filter>;
  quadHourlyCandles_?: InputMaybe<QuadHourlyCandle_Filter>;
  riskWeight?: InputMaybe<Scalars["BigInt"]>;
  riskWeight_gt?: InputMaybe<Scalars["BigInt"]>;
  riskWeight_gte?: InputMaybe<Scalars["BigInt"]>;
  riskWeight_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  riskWeight_lt?: InputMaybe<Scalars["BigInt"]>;
  riskWeight_lte?: InputMaybe<Scalars["BigInt"]>;
  riskWeight_not?: InputMaybe<Scalars["BigInt"]>;
  riskWeight_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sensitivity?: InputMaybe<Scalars["BigInt"]>;
  sensitivity_gt?: InputMaybe<Scalars["BigInt"]>;
  sensitivity_gte?: InputMaybe<Scalars["BigInt"]>;
  sensitivity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  sensitivity_lt?: InputMaybe<Scalars["BigInt"]>;
  sensitivity_lte?: InputMaybe<Scalars["BigInt"]>;
  sensitivity_not?: InputMaybe<Scalars["BigInt"]>;
  sensitivity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  symbol?: InputMaybe<Scalars["String"]>;
  symbol_contains?: InputMaybe<Scalars["String"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_gt?: InputMaybe<Scalars["String"]>;
  symbol_gte?: InputMaybe<Scalars["String"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]>;
  symbol_lte?: InputMaybe<Scalars["String"]>;
  symbol_not?: InputMaybe<Scalars["String"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  thirtyMinuteCandles_?: InputMaybe<ThirtyMinuteCandle_Filter>;
  twapFrequency?: InputMaybe<Scalars["BigInt"]>;
  twapFrequency_gt?: InputMaybe<Scalars["BigInt"]>;
  twapFrequency_gte?: InputMaybe<Scalars["BigInt"]>;
  twapFrequency_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  twapFrequency_lt?: InputMaybe<Scalars["BigInt"]>;
  twapFrequency_lte?: InputMaybe<Scalars["BigInt"]>;
  twapFrequency_not?: InputMaybe<Scalars["BigInt"]>;
  twapFrequency_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  uaDebtSeizureThreshold?: InputMaybe<Scalars["BigInt"]>;
  uaDebtSeizureThreshold_gt?: InputMaybe<Scalars["BigInt"]>;
  uaDebtSeizureThreshold_gte?: InputMaybe<Scalars["BigInt"]>;
  uaDebtSeizureThreshold_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  uaDebtSeizureThreshold_lt?: InputMaybe<Scalars["BigInt"]>;
  uaDebtSeizureThreshold_lte?: InputMaybe<Scalars["BigInt"]>;
  uaDebtSeizureThreshold_not?: InputMaybe<Scalars["BigInt"]>;
  uaDebtSeizureThreshold_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  vaultAddress?: InputMaybe<Scalars["Bytes"]>;
  vaultAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  vaultAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  vaultAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  vaultAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  vaultAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  vaultAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  vaultAddress_not?: InputMaybe<Scalars["Bytes"]>;
  vaultAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  vaultAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum Market_OrderBy {
  Activities = "activities",
  CryptoSwapPool = "cryptoSwapPool",
  DailyCandles = "dailyCandles",
  EarliestPrice = "earliestPrice",
  FifteenMinuteCandles = "fifteenMinuteCandles",
  FundingPayments = "fundingPayments",
  GlobalPositionHourlyAggregates = "globalPositionHourlyAggregates",
  GlobalPositions = "globalPositions",
  HourlyCandles = "hourlyCandles",
  Id = "id",
  InsuranceFee = "insuranceFee",
  InsuranceRatio = "insuranceRatio",
  LatestPrice = "latestPrice",
  LatestPriceBaseSupply = "latestPrice__baseSupply",
  LatestPriceBaseVal = "latestPrice__baseVal",
  LatestPriceCumFundingPerLpToken = "latestPrice__cumFundingPerLpToken",
  LatestPriceCumFundingRate = "latestPrice__cumFundingRate",
  LatestPriceFundingRate = "latestPrice__fundingRate",
  LatestPriceId = "latestPrice__id",
  LatestPriceIndex = "latestPrice__index",
  LatestPriceIndexTwap = "latestPrice__indexTwap",
  LatestPriceMark = "latestPrice__mark",
  LatestPricePriceOracle = "latestPrice__priceOracle",
  LatestPricePriceScale = "latestPrice__priceScale",
  LatestPriceQuoteSupply = "latestPrice__quoteSupply",
  LatestPriceQuoteVal = "latestPrice__quoteVal",
  LatestPriceTimestamp = "latestPrice__timestamp",
  LatestPriceValue = "latestPrice__value",
  LatestPriceVirtualPrice = "latestPrice__virtualPrice",
  LiquidationDiscount = "liquidationDiscount",
  LiquidationReward = "liquidationReward",
  LiquidationRewardInsuranceShare = "liquidationRewardInsuranceShare",
  LiquidityPositions = "liquidityPositions",
  LockPeriod = "lockPeriod",
  LpDebtCoef = "lpDebtCoef",
  MaxBlockTradeAmount = "maxBlockTradeAmount",
  MaxLiquidityProvided = "maxLiquidityProvided",
  MidFee = "midFee",
  MinMargin = "minMargin",
  MinMarginAtCreation = "minMarginAtCreation",
  MinPositiveOpenNotional = "minPositiveOpenNotional",
  MinuteCandles = "minuteCandles",
  Name = "name",
  NonUaCollSeizureDiscount = "nonUACollSeizureDiscount",
  OutFee = "outFee",
  Perpetual = "perpetual",
  Positions = "positions",
  Prices = "prices",
  QuadHourlyCandles = "quadHourlyCandles",
  RiskWeight = "riskWeight",
  Sensitivity = "sensitivity",
  Symbol = "symbol",
  ThirtyMinuteCandles = "thirtyMinuteCandles",
  TwapFrequency = "twapFrequency",
  UaDebtSeizureThreshold = "uaDebtSeizureThreshold",
  VaultAddress = "vaultAddress",
}

export type MinuteCandle = {
  __typename?: "MinuteCandle";
  close: Scalars["BigInt"];
  closeTimestamp: Scalars["BigInt"];
  high: Scalars["BigInt"];
  id: Scalars["ID"];
  lastPrice: Price;
  low: Scalars["BigInt"];
  market: Market;
  open: Scalars["BigInt"];
  openTimestamp: Scalars["BigInt"];
  volume: Scalars["BigInt"];
};

export type MinuteCandle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MinuteCandle_Filter>>>;
  close?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closeTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  close_gt?: InputMaybe<Scalars["BigInt"]>;
  close_gte?: InputMaybe<Scalars["BigInt"]>;
  close_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  close_lt?: InputMaybe<Scalars["BigInt"]>;
  close_lte?: InputMaybe<Scalars["BigInt"]>;
  close_not?: InputMaybe<Scalars["BigInt"]>;
  close_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  high?: InputMaybe<Scalars["BigInt"]>;
  high_gt?: InputMaybe<Scalars["BigInt"]>;
  high_gte?: InputMaybe<Scalars["BigInt"]>;
  high_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  high_lt?: InputMaybe<Scalars["BigInt"]>;
  high_lte?: InputMaybe<Scalars["BigInt"]>;
  high_not?: InputMaybe<Scalars["BigInt"]>;
  high_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lastPrice?: InputMaybe<Scalars["String"]>;
  lastPrice_?: InputMaybe<Price_Filter>;
  lastPrice_contains?: InputMaybe<Scalars["String"]>;
  lastPrice_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_ends_with?: InputMaybe<Scalars["String"]>;
  lastPrice_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_gt?: InputMaybe<Scalars["String"]>;
  lastPrice_gte?: InputMaybe<Scalars["String"]>;
  lastPrice_in?: InputMaybe<Array<Scalars["String"]>>;
  lastPrice_lt?: InputMaybe<Scalars["String"]>;
  lastPrice_lte?: InputMaybe<Scalars["String"]>;
  lastPrice_not?: InputMaybe<Scalars["String"]>;
  lastPrice_not_contains?: InputMaybe<Scalars["String"]>;
  lastPrice_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_not_ends_with?: InputMaybe<Scalars["String"]>;
  lastPrice_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lastPrice_not_starts_with?: InputMaybe<Scalars["String"]>;
  lastPrice_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_starts_with?: InputMaybe<Scalars["String"]>;
  lastPrice_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  low?: InputMaybe<Scalars["BigInt"]>;
  low_gt?: InputMaybe<Scalars["BigInt"]>;
  low_gte?: InputMaybe<Scalars["BigInt"]>;
  low_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  low_lt?: InputMaybe<Scalars["BigInt"]>;
  low_lte?: InputMaybe<Scalars["BigInt"]>;
  low_not?: InputMaybe<Scalars["BigInt"]>;
  low_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  open?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  openTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  open_gt?: InputMaybe<Scalars["BigInt"]>;
  open_gte?: InputMaybe<Scalars["BigInt"]>;
  open_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  open_lt?: InputMaybe<Scalars["BigInt"]>;
  open_lte?: InputMaybe<Scalars["BigInt"]>;
  open_not?: InputMaybe<Scalars["BigInt"]>;
  open_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<MinuteCandle_Filter>>>;
  volume?: InputMaybe<Scalars["BigInt"]>;
  volume_gt?: InputMaybe<Scalars["BigInt"]>;
  volume_gte?: InputMaybe<Scalars["BigInt"]>;
  volume_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  volume_lt?: InputMaybe<Scalars["BigInt"]>;
  volume_lte?: InputMaybe<Scalars["BigInt"]>;
  volume_not?: InputMaybe<Scalars["BigInt"]>;
  volume_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum MinuteCandle_OrderBy {
  Close = "close",
  CloseTimestamp = "closeTimestamp",
  High = "high",
  Id = "id",
  LastPrice = "lastPrice",
  LastPriceBaseSupply = "lastPrice__baseSupply",
  LastPriceBaseVal = "lastPrice__baseVal",
  LastPriceCumFundingPerLpToken = "lastPrice__cumFundingPerLpToken",
  LastPriceCumFundingRate = "lastPrice__cumFundingRate",
  LastPriceFundingRate = "lastPrice__fundingRate",
  LastPriceId = "lastPrice__id",
  LastPriceIndex = "lastPrice__index",
  LastPriceIndexTwap = "lastPrice__indexTwap",
  LastPriceMark = "lastPrice__mark",
  LastPricePriceOracle = "lastPrice__priceOracle",
  LastPricePriceScale = "lastPrice__priceScale",
  LastPriceQuoteSupply = "lastPrice__quoteSupply",
  LastPriceQuoteVal = "lastPrice__quoteVal",
  LastPriceTimestamp = "lastPrice__timestamp",
  LastPriceValue = "lastPrice__value",
  LastPriceVirtualPrice = "lastPrice__virtualPrice",
  Low = "low",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  Open = "open",
  OpenTimestamp = "openTimestamp",
  Volume = "volume",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type PastLpPosition = {
  __typename?: "PastLpPosition";
  closeTimestamp: Scalars["BigInt"];
  depositTime: Scalars["BigInt"];
  entryAmountSum: Scalars["BigInt"];
  exitAmountSum: Scalars["BigInt"];
  fundingPayment: Scalars["BigInt"];
  id: Scalars["ID"];
  initialCumFundingPerLpToken: Scalars["BigInt"];
  initialUsdValue: Scalars["BigInt"];
  liquidationFee?: Maybe<Scalars["BigInt"]>;
  liquidityBalance: Scalars["BigInt"];
  market: Market;
  openNotional: Scalars["BigInt"];
  positionSize: Scalars["BigInt"];
  realizedProfit: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  totalBaseFeesGrowth: Scalars["BigInt"];
  totalQuoteFeesGrowth: Scalars["BigInt"];
  totalTradingFeesGrowth: Scalars["BigInt"];
  tradingFeesPayed: Scalars["BigInt"];
  user: User;
  wasLiquidated: Scalars["Boolean"];
  weightedEntryPriceSum: Scalars["BigInt"];
  weightedExitPriceSum: Scalars["BigInt"];
};

export type PastLpPosition_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PastLpPosition_Filter>>>;
  closeTimestamp?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closeTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  depositTime?: InputMaybe<Scalars["BigInt"]>;
  depositTime_gt?: InputMaybe<Scalars["BigInt"]>;
  depositTime_gte?: InputMaybe<Scalars["BigInt"]>;
  depositTime_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  depositTime_lt?: InputMaybe<Scalars["BigInt"]>;
  depositTime_lte?: InputMaybe<Scalars["BigInt"]>;
  depositTime_not?: InputMaybe<Scalars["BigInt"]>;
  depositTime_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  entryAmountSum?: InputMaybe<Scalars["BigInt"]>;
  entryAmountSum_gt?: InputMaybe<Scalars["BigInt"]>;
  entryAmountSum_gte?: InputMaybe<Scalars["BigInt"]>;
  entryAmountSum_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  entryAmountSum_lt?: InputMaybe<Scalars["BigInt"]>;
  entryAmountSum_lte?: InputMaybe<Scalars["BigInt"]>;
  entryAmountSum_not?: InputMaybe<Scalars["BigInt"]>;
  entryAmountSum_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  exitAmountSum?: InputMaybe<Scalars["BigInt"]>;
  exitAmountSum_gt?: InputMaybe<Scalars["BigInt"]>;
  exitAmountSum_gte?: InputMaybe<Scalars["BigInt"]>;
  exitAmountSum_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  exitAmountSum_lt?: InputMaybe<Scalars["BigInt"]>;
  exitAmountSum_lte?: InputMaybe<Scalars["BigInt"]>;
  exitAmountSum_not?: InputMaybe<Scalars["BigInt"]>;
  exitAmountSum_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fundingPayment?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_gt?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_gte?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fundingPayment_lt?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_lte?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_not?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  initialCumFundingPerLpToken?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingPerLpToken_gt?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingPerLpToken_gte?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingPerLpToken_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  initialCumFundingPerLpToken_lt?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingPerLpToken_lte?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingPerLpToken_not?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingPerLpToken_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  initialUsdValue?: InputMaybe<Scalars["BigInt"]>;
  initialUsdValue_gt?: InputMaybe<Scalars["BigInt"]>;
  initialUsdValue_gte?: InputMaybe<Scalars["BigInt"]>;
  initialUsdValue_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  initialUsdValue_lt?: InputMaybe<Scalars["BigInt"]>;
  initialUsdValue_lte?: InputMaybe<Scalars["BigInt"]>;
  initialUsdValue_not?: InputMaybe<Scalars["BigInt"]>;
  initialUsdValue_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidationFee?: InputMaybe<Scalars["BigInt"]>;
  liquidationFee_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidationFee_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidationFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidationFee_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidationFee_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidationFee_not?: InputMaybe<Scalars["BigInt"]>;
  liquidationFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityBalance?: InputMaybe<Scalars["BigInt"]>;
  liquidityBalance_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidityBalance_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidityBalance_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidityBalance_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidityBalance_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidityBalance_not?: InputMaybe<Scalars["BigInt"]>;
  liquidityBalance_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  openNotional?: InputMaybe<Scalars["BigInt"]>;
  openNotional_gt?: InputMaybe<Scalars["BigInt"]>;
  openNotional_gte?: InputMaybe<Scalars["BigInt"]>;
  openNotional_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  openNotional_lt?: InputMaybe<Scalars["BigInt"]>;
  openNotional_lte?: InputMaybe<Scalars["BigInt"]>;
  openNotional_not?: InputMaybe<Scalars["BigInt"]>;
  openNotional_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<PastLpPosition_Filter>>>;
  positionSize?: InputMaybe<Scalars["BigInt"]>;
  positionSize_gt?: InputMaybe<Scalars["BigInt"]>;
  positionSize_gte?: InputMaybe<Scalars["BigInt"]>;
  positionSize_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  positionSize_lt?: InputMaybe<Scalars["BigInt"]>;
  positionSize_lte?: InputMaybe<Scalars["BigInt"]>;
  positionSize_not?: InputMaybe<Scalars["BigInt"]>;
  positionSize_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  realizedProfit?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_gt?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_gte?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  realizedProfit_lt?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_lte?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_not?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalBaseFeesGrowth?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_gt?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_gte?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalBaseFeesGrowth_lt?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_lte?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_not?: InputMaybe<Scalars["BigInt"]>;
  totalBaseFeesGrowth_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalQuoteFeesGrowth?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_gt?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_gte?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalQuoteFeesGrowth_lt?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_lte?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_not?: InputMaybe<Scalars["BigInt"]>;
  totalQuoteFeesGrowth_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalTradingFeesGrowth?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_gt?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_gte?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalTradingFeesGrowth_lt?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_lte?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_not?: InputMaybe<Scalars["BigInt"]>;
  totalTradingFeesGrowth_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tradingFeesPayed?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_gt?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_gte?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tradingFeesPayed_lt?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_lte?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_not?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  user?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  wasLiquidated?: InputMaybe<Scalars["Boolean"]>;
  wasLiquidated_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  wasLiquidated_not?: InputMaybe<Scalars["Boolean"]>;
  wasLiquidated_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  weightedEntryPriceSum?: InputMaybe<Scalars["BigInt"]>;
  weightedEntryPriceSum_gt?: InputMaybe<Scalars["BigInt"]>;
  weightedEntryPriceSum_gte?: InputMaybe<Scalars["BigInt"]>;
  weightedEntryPriceSum_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  weightedEntryPriceSum_lt?: InputMaybe<Scalars["BigInt"]>;
  weightedEntryPriceSum_lte?: InputMaybe<Scalars["BigInt"]>;
  weightedEntryPriceSum_not?: InputMaybe<Scalars["BigInt"]>;
  weightedEntryPriceSum_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  weightedExitPriceSum?: InputMaybe<Scalars["BigInt"]>;
  weightedExitPriceSum_gt?: InputMaybe<Scalars["BigInt"]>;
  weightedExitPriceSum_gte?: InputMaybe<Scalars["BigInt"]>;
  weightedExitPriceSum_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  weightedExitPriceSum_lt?: InputMaybe<Scalars["BigInt"]>;
  weightedExitPriceSum_lte?: InputMaybe<Scalars["BigInt"]>;
  weightedExitPriceSum_not?: InputMaybe<Scalars["BigInt"]>;
  weightedExitPriceSum_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum PastLpPosition_OrderBy {
  CloseTimestamp = "closeTimestamp",
  DepositTime = "depositTime",
  EntryAmountSum = "entryAmountSum",
  ExitAmountSum = "exitAmountSum",
  FundingPayment = "fundingPayment",
  Id = "id",
  InitialCumFundingPerLpToken = "initialCumFundingPerLpToken",
  InitialUsdValue = "initialUsdValue",
  LiquidationFee = "liquidationFee",
  LiquidityBalance = "liquidityBalance",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  OpenNotional = "openNotional",
  PositionSize = "positionSize",
  RealizedProfit = "realizedProfit",
  Timestamp = "timestamp",
  TotalBaseFeesGrowth = "totalBaseFeesGrowth",
  TotalQuoteFeesGrowth = "totalQuoteFeesGrowth",
  TotalTradingFeesGrowth = "totalTradingFeesGrowth",
  TradingFeesPayed = "tradingFeesPayed",
  User = "user",
  UserId = "user__id",
  UserTradingVolume = "user__tradingVolume",
  WasLiquidated = "wasLiquidated",
  WeightedEntryPriceSum = "weightedEntryPriceSum",
  WeightedExitPriceSum = "weightedExitPriceSum",
}

export type PastPosition = {
  __typename?: "PastPosition";
  closeTimestamp?: Maybe<Scalars["BigInt"]>;
  direction: Scalars["Int"];
  entryPrice: Scalars["BigInt"];
  fundingPayment: Scalars["BigInt"];
  id: Scalars["ID"];
  initialCumFundingRate: Scalars["BigInt"];
  insurancePayed: Scalars["BigInt"];
  liquidationFee?: Maybe<Scalars["BigInt"]>;
  marginRatio: Scalars["BigInt"];
  market: Market;
  openNotional: Scalars["BigInt"];
  positionSize: Scalars["BigInt"];
  realizedProfit: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  tradingFeesPayed: Scalars["BigInt"];
  user: User;
  wasLiquidated: Scalars["Boolean"];
};

export type PastPosition_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PastPosition_Filter>>>;
  closeTimestamp?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closeTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  direction?: InputMaybe<Scalars["Int"]>;
  direction_gt?: InputMaybe<Scalars["Int"]>;
  direction_gte?: InputMaybe<Scalars["Int"]>;
  direction_in?: InputMaybe<Array<Scalars["Int"]>>;
  direction_lt?: InputMaybe<Scalars["Int"]>;
  direction_lte?: InputMaybe<Scalars["Int"]>;
  direction_not?: InputMaybe<Scalars["Int"]>;
  direction_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  entryPrice?: InputMaybe<Scalars["BigInt"]>;
  entryPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  entryPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  entryPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  entryPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  entryPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  entryPrice_not?: InputMaybe<Scalars["BigInt"]>;
  entryPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fundingPayment?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_gt?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_gte?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fundingPayment_lt?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_lte?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_not?: InputMaybe<Scalars["BigInt"]>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  initialCumFundingRate?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingRate_gt?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingRate_gte?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  initialCumFundingRate_lt?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingRate_lte?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingRate_not?: InputMaybe<Scalars["BigInt"]>;
  initialCumFundingRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  insurancePayed?: InputMaybe<Scalars["BigInt"]>;
  insurancePayed_gt?: InputMaybe<Scalars["BigInt"]>;
  insurancePayed_gte?: InputMaybe<Scalars["BigInt"]>;
  insurancePayed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  insurancePayed_lt?: InputMaybe<Scalars["BigInt"]>;
  insurancePayed_lte?: InputMaybe<Scalars["BigInt"]>;
  insurancePayed_not?: InputMaybe<Scalars["BigInt"]>;
  insurancePayed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidationFee?: InputMaybe<Scalars["BigInt"]>;
  liquidationFee_gt?: InputMaybe<Scalars["BigInt"]>;
  liquidationFee_gte?: InputMaybe<Scalars["BigInt"]>;
  liquidationFee_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  liquidationFee_lt?: InputMaybe<Scalars["BigInt"]>;
  liquidationFee_lte?: InputMaybe<Scalars["BigInt"]>;
  liquidationFee_not?: InputMaybe<Scalars["BigInt"]>;
  liquidationFee_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  marginRatio?: InputMaybe<Scalars["BigInt"]>;
  marginRatio_gt?: InputMaybe<Scalars["BigInt"]>;
  marginRatio_gte?: InputMaybe<Scalars["BigInt"]>;
  marginRatio_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  marginRatio_lt?: InputMaybe<Scalars["BigInt"]>;
  marginRatio_lte?: InputMaybe<Scalars["BigInt"]>;
  marginRatio_not?: InputMaybe<Scalars["BigInt"]>;
  marginRatio_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  openNotional?: InputMaybe<Scalars["BigInt"]>;
  openNotional_gt?: InputMaybe<Scalars["BigInt"]>;
  openNotional_gte?: InputMaybe<Scalars["BigInt"]>;
  openNotional_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  openNotional_lt?: InputMaybe<Scalars["BigInt"]>;
  openNotional_lte?: InputMaybe<Scalars["BigInt"]>;
  openNotional_not?: InputMaybe<Scalars["BigInt"]>;
  openNotional_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<PastPosition_Filter>>>;
  positionSize?: InputMaybe<Scalars["BigInt"]>;
  positionSize_gt?: InputMaybe<Scalars["BigInt"]>;
  positionSize_gte?: InputMaybe<Scalars["BigInt"]>;
  positionSize_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  positionSize_lt?: InputMaybe<Scalars["BigInt"]>;
  positionSize_lte?: InputMaybe<Scalars["BigInt"]>;
  positionSize_not?: InputMaybe<Scalars["BigInt"]>;
  positionSize_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  realizedProfit?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_gt?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_gte?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  realizedProfit_lt?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_lte?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_not?: InputMaybe<Scalars["BigInt"]>;
  realizedProfit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tradingFeesPayed?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_gt?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_gte?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tradingFeesPayed_lt?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_lte?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_not?: InputMaybe<Scalars["BigInt"]>;
  tradingFeesPayed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  user?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  wasLiquidated?: InputMaybe<Scalars["Boolean"]>;
  wasLiquidated_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  wasLiquidated_not?: InputMaybe<Scalars["Boolean"]>;
  wasLiquidated_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
};

export enum PastPosition_OrderBy {
  CloseTimestamp = "closeTimestamp",
  Direction = "direction",
  EntryPrice = "entryPrice",
  FundingPayment = "fundingPayment",
  Id = "id",
  InitialCumFundingRate = "initialCumFundingRate",
  InsurancePayed = "insurancePayed",
  LiquidationFee = "liquidationFee",
  MarginRatio = "marginRatio",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  OpenNotional = "openNotional",
  PositionSize = "positionSize",
  RealizedProfit = "realizedProfit",
  Timestamp = "timestamp",
  TradingFeesPayed = "tradingFeesPayed",
  User = "user",
  UserId = "user__id",
  UserTradingVolume = "user__tradingVolume",
  WasLiquidated = "wasLiquidated",
}

export type PastTokenBalance = {
  __typename?: "PastTokenBalance";
  amount: Scalars["BigInt"];
  closeTimestamp: Scalars["BigInt"];
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  token: Token;
  user: User;
};

export type PastTokenBalance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<PastTokenBalance_Filter>>>;
  closeTimestamp?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closeTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<PastTokenBalance_Filter>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<Scalars["String"]>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars["String"]>;
  user_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_ends_with?: InputMaybe<Scalars["String"]>;
  user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_gt?: InputMaybe<Scalars["String"]>;
  user_gte?: InputMaybe<Scalars["String"]>;
  user_in?: InputMaybe<Array<Scalars["String"]>>;
  user_lt?: InputMaybe<Scalars["String"]>;
  user_lte?: InputMaybe<Scalars["String"]>;
  user_not?: InputMaybe<Scalars["String"]>;
  user_not_contains?: InputMaybe<Scalars["String"]>;
  user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  user_not_ends_with?: InputMaybe<Scalars["String"]>;
  user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  user_not_in?: InputMaybe<Array<Scalars["String"]>>;
  user_not_starts_with?: InputMaybe<Scalars["String"]>;
  user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  user_starts_with?: InputMaybe<Scalars["String"]>;
  user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum PastTokenBalance_OrderBy {
  Amount = "amount",
  CloseTimestamp = "closeTimestamp",
  Id = "id",
  Timestamp = "timestamp",
  Token = "token",
  TokenAddress = "token__address",
  TokenAggregator = "token__aggregator",
  TokenDecimals = "token__decimals",
  TokenDepositedAmount = "token__depositedAmount",
  TokenId = "token__id",
  TokenMaxAmount = "token__maxAmount",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenUniqueDepositors = "token__uniqueDepositors",
  TokenWeight = "token__weight",
  User = "user",
  UserId = "user__id",
  UserTradingVolume = "user__tradingVolume",
}

export type Price = {
  __typename?: "Price";
  baseSupply: Scalars["BigInt"];
  baseVal: Scalars["BigInt"];
  cumFundingPerLpToken: Scalars["BigInt"];
  cumFundingRate: Scalars["BigInt"];
  fundingRate: Scalars["BigInt"];
  id: Scalars["ID"];
  index: Scalars["BigInt"];
  indexTwap: Scalars["BigInt"];
  mark: Scalars["BigInt"];
  market: Market;
  priceOracle: Scalars["BigInt"];
  priceScale: Scalars["BigInt"];
  quoteSupply: Scalars["BigInt"];
  quoteVal: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  value: Scalars["BigInt"];
  virtualPrice: Scalars["BigInt"];
};

export type Price_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Price_Filter>>>;
  baseSupply?: InputMaybe<Scalars["BigInt"]>;
  baseSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  baseSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  baseSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  baseSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  baseSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  baseSupply_not?: InputMaybe<Scalars["BigInt"]>;
  baseSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  baseVal?: InputMaybe<Scalars["BigInt"]>;
  baseVal_gt?: InputMaybe<Scalars["BigInt"]>;
  baseVal_gte?: InputMaybe<Scalars["BigInt"]>;
  baseVal_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  baseVal_lt?: InputMaybe<Scalars["BigInt"]>;
  baseVal_lte?: InputMaybe<Scalars["BigInt"]>;
  baseVal_not?: InputMaybe<Scalars["BigInt"]>;
  baseVal_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumFundingPerLpToken?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_gt?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_gte?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumFundingPerLpToken_lt?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_lte?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_not?: InputMaybe<Scalars["BigInt"]>;
  cumFundingPerLpToken_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumFundingRate?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_gt?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_gte?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  cumFundingRate_lt?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_lte?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_not?: InputMaybe<Scalars["BigInt"]>;
  cumFundingRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fundingRate?: InputMaybe<Scalars["BigInt"]>;
  fundingRate_gt?: InputMaybe<Scalars["BigInt"]>;
  fundingRate_gte?: InputMaybe<Scalars["BigInt"]>;
  fundingRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  fundingRate_lt?: InputMaybe<Scalars["BigInt"]>;
  fundingRate_lte?: InputMaybe<Scalars["BigInt"]>;
  fundingRate_not?: InputMaybe<Scalars["BigInt"]>;
  fundingRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  index?: InputMaybe<Scalars["BigInt"]>;
  indexTwap?: InputMaybe<Scalars["BigInt"]>;
  indexTwap_gt?: InputMaybe<Scalars["BigInt"]>;
  indexTwap_gte?: InputMaybe<Scalars["BigInt"]>;
  indexTwap_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  indexTwap_lt?: InputMaybe<Scalars["BigInt"]>;
  indexTwap_lte?: InputMaybe<Scalars["BigInt"]>;
  indexTwap_not?: InputMaybe<Scalars["BigInt"]>;
  indexTwap_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  index_gt?: InputMaybe<Scalars["BigInt"]>;
  index_gte?: InputMaybe<Scalars["BigInt"]>;
  index_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  index_lt?: InputMaybe<Scalars["BigInt"]>;
  index_lte?: InputMaybe<Scalars["BigInt"]>;
  index_not?: InputMaybe<Scalars["BigInt"]>;
  index_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  mark?: InputMaybe<Scalars["BigInt"]>;
  mark_gt?: InputMaybe<Scalars["BigInt"]>;
  mark_gte?: InputMaybe<Scalars["BigInt"]>;
  mark_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  mark_lt?: InputMaybe<Scalars["BigInt"]>;
  mark_lte?: InputMaybe<Scalars["BigInt"]>;
  mark_not?: InputMaybe<Scalars["BigInt"]>;
  mark_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<Price_Filter>>>;
  priceOracle?: InputMaybe<Scalars["BigInt"]>;
  priceOracle_gt?: InputMaybe<Scalars["BigInt"]>;
  priceOracle_gte?: InputMaybe<Scalars["BigInt"]>;
  priceOracle_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  priceOracle_lt?: InputMaybe<Scalars["BigInt"]>;
  priceOracle_lte?: InputMaybe<Scalars["BigInt"]>;
  priceOracle_not?: InputMaybe<Scalars["BigInt"]>;
  priceOracle_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  priceScale?: InputMaybe<Scalars["BigInt"]>;
  priceScale_gt?: InputMaybe<Scalars["BigInt"]>;
  priceScale_gte?: InputMaybe<Scalars["BigInt"]>;
  priceScale_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  priceScale_lt?: InputMaybe<Scalars["BigInt"]>;
  priceScale_lte?: InputMaybe<Scalars["BigInt"]>;
  priceScale_not?: InputMaybe<Scalars["BigInt"]>;
  priceScale_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  quoteSupply?: InputMaybe<Scalars["BigInt"]>;
  quoteSupply_gt?: InputMaybe<Scalars["BigInt"]>;
  quoteSupply_gte?: InputMaybe<Scalars["BigInt"]>;
  quoteSupply_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  quoteSupply_lt?: InputMaybe<Scalars["BigInt"]>;
  quoteSupply_lte?: InputMaybe<Scalars["BigInt"]>;
  quoteSupply_not?: InputMaybe<Scalars["BigInt"]>;
  quoteSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  quoteVal?: InputMaybe<Scalars["BigInt"]>;
  quoteVal_gt?: InputMaybe<Scalars["BigInt"]>;
  quoteVal_gte?: InputMaybe<Scalars["BigInt"]>;
  quoteVal_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  quoteVal_lt?: InputMaybe<Scalars["BigInt"]>;
  quoteVal_lte?: InputMaybe<Scalars["BigInt"]>;
  quoteVal_not?: InputMaybe<Scalars["BigInt"]>;
  quoteVal_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  value?: InputMaybe<Scalars["BigInt"]>;
  value_gt?: InputMaybe<Scalars["BigInt"]>;
  value_gte?: InputMaybe<Scalars["BigInt"]>;
  value_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  value_lt?: InputMaybe<Scalars["BigInt"]>;
  value_lte?: InputMaybe<Scalars["BigInt"]>;
  value_not?: InputMaybe<Scalars["BigInt"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  virtualPrice?: InputMaybe<Scalars["BigInt"]>;
  virtualPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  virtualPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  virtualPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  virtualPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  virtualPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  virtualPrice_not?: InputMaybe<Scalars["BigInt"]>;
  virtualPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Price_OrderBy {
  BaseSupply = "baseSupply",
  BaseVal = "baseVal",
  CumFundingPerLpToken = "cumFundingPerLpToken",
  CumFundingRate = "cumFundingRate",
  FundingRate = "fundingRate",
  Id = "id",
  Index = "index",
  IndexTwap = "indexTwap",
  Mark = "mark",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  PriceOracle = "priceOracle",
  PriceScale = "priceScale",
  QuoteSupply = "quoteSupply",
  QuoteVal = "quoteVal",
  Timestamp = "timestamp",
  Value = "value",
  VirtualPrice = "virtualPrice",
}

export type QuadHourlyCandle = {
  __typename?: "QuadHourlyCandle";
  close: Scalars["BigInt"];
  closeTimestamp: Scalars["BigInt"];
  high: Scalars["BigInt"];
  id: Scalars["ID"];
  lastPrice: Price;
  low: Scalars["BigInt"];
  market: Market;
  open: Scalars["BigInt"];
  openTimestamp: Scalars["BigInt"];
  volume: Scalars["BigInt"];
};

export type QuadHourlyCandle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<QuadHourlyCandle_Filter>>>;
  close?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closeTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  close_gt?: InputMaybe<Scalars["BigInt"]>;
  close_gte?: InputMaybe<Scalars["BigInt"]>;
  close_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  close_lt?: InputMaybe<Scalars["BigInt"]>;
  close_lte?: InputMaybe<Scalars["BigInt"]>;
  close_not?: InputMaybe<Scalars["BigInt"]>;
  close_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  high?: InputMaybe<Scalars["BigInt"]>;
  high_gt?: InputMaybe<Scalars["BigInt"]>;
  high_gte?: InputMaybe<Scalars["BigInt"]>;
  high_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  high_lt?: InputMaybe<Scalars["BigInt"]>;
  high_lte?: InputMaybe<Scalars["BigInt"]>;
  high_not?: InputMaybe<Scalars["BigInt"]>;
  high_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lastPrice?: InputMaybe<Scalars["String"]>;
  lastPrice_?: InputMaybe<Price_Filter>;
  lastPrice_contains?: InputMaybe<Scalars["String"]>;
  lastPrice_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_ends_with?: InputMaybe<Scalars["String"]>;
  lastPrice_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_gt?: InputMaybe<Scalars["String"]>;
  lastPrice_gte?: InputMaybe<Scalars["String"]>;
  lastPrice_in?: InputMaybe<Array<Scalars["String"]>>;
  lastPrice_lt?: InputMaybe<Scalars["String"]>;
  lastPrice_lte?: InputMaybe<Scalars["String"]>;
  lastPrice_not?: InputMaybe<Scalars["String"]>;
  lastPrice_not_contains?: InputMaybe<Scalars["String"]>;
  lastPrice_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_not_ends_with?: InputMaybe<Scalars["String"]>;
  lastPrice_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lastPrice_not_starts_with?: InputMaybe<Scalars["String"]>;
  lastPrice_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_starts_with?: InputMaybe<Scalars["String"]>;
  lastPrice_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  low?: InputMaybe<Scalars["BigInt"]>;
  low_gt?: InputMaybe<Scalars["BigInt"]>;
  low_gte?: InputMaybe<Scalars["BigInt"]>;
  low_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  low_lt?: InputMaybe<Scalars["BigInt"]>;
  low_lte?: InputMaybe<Scalars["BigInt"]>;
  low_not?: InputMaybe<Scalars["BigInt"]>;
  low_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  open?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  openTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  open_gt?: InputMaybe<Scalars["BigInt"]>;
  open_gte?: InputMaybe<Scalars["BigInt"]>;
  open_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  open_lt?: InputMaybe<Scalars["BigInt"]>;
  open_lte?: InputMaybe<Scalars["BigInt"]>;
  open_not?: InputMaybe<Scalars["BigInt"]>;
  open_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<QuadHourlyCandle_Filter>>>;
  volume?: InputMaybe<Scalars["BigInt"]>;
  volume_gt?: InputMaybe<Scalars["BigInt"]>;
  volume_gte?: InputMaybe<Scalars["BigInt"]>;
  volume_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  volume_lt?: InputMaybe<Scalars["BigInt"]>;
  volume_lte?: InputMaybe<Scalars["BigInt"]>;
  volume_not?: InputMaybe<Scalars["BigInt"]>;
  volume_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum QuadHourlyCandle_OrderBy {
  Close = "close",
  CloseTimestamp = "closeTimestamp",
  High = "high",
  Id = "id",
  LastPrice = "lastPrice",
  LastPriceBaseSupply = "lastPrice__baseSupply",
  LastPriceBaseVal = "lastPrice__baseVal",
  LastPriceCumFundingPerLpToken = "lastPrice__cumFundingPerLpToken",
  LastPriceCumFundingRate = "lastPrice__cumFundingRate",
  LastPriceFundingRate = "lastPrice__fundingRate",
  LastPriceId = "lastPrice__id",
  LastPriceIndex = "lastPrice__index",
  LastPriceIndexTwap = "lastPrice__indexTwap",
  LastPriceMark = "lastPrice__mark",
  LastPricePriceOracle = "lastPrice__priceOracle",
  LastPricePriceScale = "lastPrice__priceScale",
  LastPriceQuoteSupply = "lastPrice__quoteSupply",
  LastPriceQuoteVal = "lastPrice__quoteVal",
  LastPriceTimestamp = "lastPrice__timestamp",
  LastPriceValue = "lastPrice__value",
  LastPriceVirtualPrice = "lastPrice__virtualPrice",
  Low = "low",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  Open = "open",
  OpenTimestamp = "openTimestamp",
  Volume = "volume",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  activities: Array<Activity>;
  activity?: Maybe<Activity>;
  answerUpdated?: Maybe<AnswerUpdated>;
  answerUpdateds: Array<AnswerUpdated>;
  currentLpPosition?: Maybe<CurrentLpPosition>;
  currentLpPositions: Array<CurrentLpPosition>;
  currentPosition?: Maybe<CurrentPosition>;
  currentPositions: Array<CurrentPosition>;
  currentTokenBalance?: Maybe<CurrentTokenBalance>;
  currentTokenBalances: Array<CurrentTokenBalance>;
  dailyCandle?: Maybe<DailyCandle>;
  dailyCandles: Array<DailyCandle>;
  fifteenMinuteCandle?: Maybe<FifteenMinuteCandle>;
  fifteenMinuteCandles: Array<FifteenMinuteCandle>;
  fundingPayment?: Maybe<FundingPayment>;
  fundingPayments: Array<FundingPayment>;
  globalMetricStore?: Maybe<GlobalMetricStore>;
  globalMetricStores: Array<GlobalMetricStore>;
  globalPosition?: Maybe<GlobalPosition>;
  globalPositionHourlyAggregate?: Maybe<GlobalPositionHourlyAggregate>;
  globalPositionHourlyAggregates: Array<GlobalPositionHourlyAggregate>;
  globalPositions: Array<GlobalPosition>;
  hourlyCandle?: Maybe<HourlyCandle>;
  hourlyCandles: Array<HourlyCandle>;
  liquidation?: Maybe<Liquidation>;
  liquidations: Array<Liquidation>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  minuteCandle?: Maybe<MinuteCandle>;
  minuteCandles: Array<MinuteCandle>;
  pastLpPosition?: Maybe<PastLpPosition>;
  pastLpPositions: Array<PastLpPosition>;
  pastPosition?: Maybe<PastPosition>;
  pastPositions: Array<PastPosition>;
  pastTokenBalance?: Maybe<PastTokenBalance>;
  pastTokenBalances: Array<PastTokenBalance>;
  price?: Maybe<Price>;
  prices: Array<Price>;
  quadHourlyCandle?: Maybe<QuadHourlyCandle>;
  quadHourlyCandles: Array<QuadHourlyCandle>;
  reserveToken?: Maybe<ReserveToken>;
  reserveTokens: Array<ReserveToken>;
  thirtyMinuteCandle?: Maybe<ThirtyMinuteCandle>;
  thirtyMinuteCandles: Array<ThirtyMinuteCandle>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  totalTVL?: Maybe<TotalTvl>;
  totalTVLs: Array<TotalTvl>;
  tvlHourlyAggregate?: Maybe<TvlHourlyAggregate>;
  tvlHourlyAggregates: Array<TvlHourlyAggregate>;
  user?: Maybe<User>;
  users: Array<User>;
  vault?: Maybe<Vault>;
  vaults: Array<Vault>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryActivitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Activity_Filter>;
};

export type QueryActivityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAnswerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAnswerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AnswerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AnswerUpdated_Filter>;
};

export type QueryCurrentLpPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCurrentLpPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CurrentLpPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CurrentLpPosition_Filter>;
};

export type QueryCurrentPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCurrentPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CurrentPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CurrentPosition_Filter>;
};

export type QueryCurrentTokenBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCurrentTokenBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CurrentTokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CurrentTokenBalance_Filter>;
};

export type QueryDailyCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDailyCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DailyCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyCandle_Filter>;
};

export type QueryFifteenMinuteCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFifteenMinuteCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FifteenMinuteCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FifteenMinuteCandle_Filter>;
};

export type QueryFundingPaymentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFundingPaymentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FundingPayment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundingPayment_Filter>;
};

export type QueryGlobalMetricStoreArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryGlobalMetricStoresArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GlobalMetricStore_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalMetricStore_Filter>;
};

export type QueryGlobalPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryGlobalPositionHourlyAggregateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryGlobalPositionHourlyAggregatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GlobalPositionHourlyAggregate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalPositionHourlyAggregate_Filter>;
};

export type QueryGlobalPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GlobalPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalPosition_Filter>;
};

export type QueryHourlyCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryHourlyCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<HourlyCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HourlyCandle_Filter>;
};

export type QueryLiquidationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLiquidationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Liquidation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Liquidation_Filter>;
};

export type QueryMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Market_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Market_Filter>;
};

export type QueryMinuteCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMinuteCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MinuteCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MinuteCandle_Filter>;
};

export type QueryPastLpPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPastLpPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PastLpPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PastLpPosition_Filter>;
};

export type QueryPastPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPastPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PastPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PastPosition_Filter>;
};

export type QueryPastTokenBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPastTokenBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PastTokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PastTokenBalance_Filter>;
};

export type QueryPriceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPricesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Price_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Price_Filter>;
};

export type QueryQuadHourlyCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryQuadHourlyCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<QuadHourlyCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<QuadHourlyCandle_Filter>;
};

export type QueryReserveTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryReserveTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReserveToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReserveToken_Filter>;
};

export type QueryThirtyMinuteCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryThirtyMinuteCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ThirtyMinuteCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ThirtyMinuteCandle_Filter>;
};

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type QueryTotalTvlArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTotalTvLsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TotalTvl_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TotalTvl_Filter>;
};

export type QueryTvlHourlyAggregateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTvlHourlyAggregatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TvlHourlyAggregate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TvlHourlyAggregate_Filter>;
};

export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type QueryVaultArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVaultsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vault_Filter>;
};

export type ReserveToken = {
  __typename?: "ReserveToken";
  address: Scalars["Bytes"];
  decimals: Scalars["BigInt"];
  id: Scalars["ID"];
  mintCap: Scalars["BigInt"];
  name: Scalars["String"];
  symbol: Scalars["String"];
  tokenIdx: Scalars["BigInt"];
};

export type ReserveToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["Bytes"]>;
  address_contains?: InputMaybe<Scalars["Bytes"]>;
  address_gt?: InputMaybe<Scalars["Bytes"]>;
  address_gte?: InputMaybe<Scalars["Bytes"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  address_lt?: InputMaybe<Scalars["Bytes"]>;
  address_lte?: InputMaybe<Scalars["Bytes"]>;
  address_not?: InputMaybe<Scalars["Bytes"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  and?: InputMaybe<Array<InputMaybe<ReserveToken_Filter>>>;
  decimals?: InputMaybe<Scalars["BigInt"]>;
  decimals_gt?: InputMaybe<Scalars["BigInt"]>;
  decimals_gte?: InputMaybe<Scalars["BigInt"]>;
  decimals_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  decimals_lt?: InputMaybe<Scalars["BigInt"]>;
  decimals_lte?: InputMaybe<Scalars["BigInt"]>;
  decimals_not?: InputMaybe<Scalars["BigInt"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  mintCap?: InputMaybe<Scalars["BigInt"]>;
  mintCap_gt?: InputMaybe<Scalars["BigInt"]>;
  mintCap_gte?: InputMaybe<Scalars["BigInt"]>;
  mintCap_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  mintCap_lt?: InputMaybe<Scalars["BigInt"]>;
  mintCap_lte?: InputMaybe<Scalars["BigInt"]>;
  mintCap_not?: InputMaybe<Scalars["BigInt"]>;
  mintCap_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<ReserveToken_Filter>>>;
  symbol?: InputMaybe<Scalars["String"]>;
  symbol_contains?: InputMaybe<Scalars["String"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_gt?: InputMaybe<Scalars["String"]>;
  symbol_gte?: InputMaybe<Scalars["String"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]>;
  symbol_lte?: InputMaybe<Scalars["String"]>;
  symbol_not?: InputMaybe<Scalars["String"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenIdx?: InputMaybe<Scalars["BigInt"]>;
  tokenIdx_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenIdx_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenIdx_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenIdx_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenIdx_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenIdx_not?: InputMaybe<Scalars["BigInt"]>;
  tokenIdx_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum ReserveToken_OrderBy {
  Address = "address",
  Decimals = "decimals",
  Id = "id",
  MintCap = "mintCap",
  Name = "name",
  Symbol = "symbol",
  TokenIdx = "tokenIdx",
}

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  activities: Array<Activity>;
  activity?: Maybe<Activity>;
  answerUpdated?: Maybe<AnswerUpdated>;
  answerUpdateds: Array<AnswerUpdated>;
  currentLpPosition?: Maybe<CurrentLpPosition>;
  currentLpPositions: Array<CurrentLpPosition>;
  currentPosition?: Maybe<CurrentPosition>;
  currentPositions: Array<CurrentPosition>;
  currentTokenBalance?: Maybe<CurrentTokenBalance>;
  currentTokenBalances: Array<CurrentTokenBalance>;
  dailyCandle?: Maybe<DailyCandle>;
  dailyCandles: Array<DailyCandle>;
  fifteenMinuteCandle?: Maybe<FifteenMinuteCandle>;
  fifteenMinuteCandles: Array<FifteenMinuteCandle>;
  fundingPayment?: Maybe<FundingPayment>;
  fundingPayments: Array<FundingPayment>;
  globalMetricStore?: Maybe<GlobalMetricStore>;
  globalMetricStores: Array<GlobalMetricStore>;
  globalPosition?: Maybe<GlobalPosition>;
  globalPositionHourlyAggregate?: Maybe<GlobalPositionHourlyAggregate>;
  globalPositionHourlyAggregates: Array<GlobalPositionHourlyAggregate>;
  globalPositions: Array<GlobalPosition>;
  hourlyCandle?: Maybe<HourlyCandle>;
  hourlyCandles: Array<HourlyCandle>;
  liquidation?: Maybe<Liquidation>;
  liquidations: Array<Liquidation>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  minuteCandle?: Maybe<MinuteCandle>;
  minuteCandles: Array<MinuteCandle>;
  pastLpPosition?: Maybe<PastLpPosition>;
  pastLpPositions: Array<PastLpPosition>;
  pastPosition?: Maybe<PastPosition>;
  pastPositions: Array<PastPosition>;
  pastTokenBalance?: Maybe<PastTokenBalance>;
  pastTokenBalances: Array<PastTokenBalance>;
  price?: Maybe<Price>;
  prices: Array<Price>;
  quadHourlyCandle?: Maybe<QuadHourlyCandle>;
  quadHourlyCandles: Array<QuadHourlyCandle>;
  reserveToken?: Maybe<ReserveToken>;
  reserveTokens: Array<ReserveToken>;
  thirtyMinuteCandle?: Maybe<ThirtyMinuteCandle>;
  thirtyMinuteCandles: Array<ThirtyMinuteCandle>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  totalTVL?: Maybe<TotalTvl>;
  totalTVLs: Array<TotalTvl>;
  tvlHourlyAggregate?: Maybe<TvlHourlyAggregate>;
  tvlHourlyAggregates: Array<TvlHourlyAggregate>;
  user?: Maybe<User>;
  users: Array<User>;
  vault?: Maybe<Vault>;
  vaults: Array<Vault>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionActivitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Activity_Filter>;
};

export type SubscriptionActivityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAnswerUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAnswerUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AnswerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AnswerUpdated_Filter>;
};

export type SubscriptionCurrentLpPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCurrentLpPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CurrentLpPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CurrentLpPosition_Filter>;
};

export type SubscriptionCurrentPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCurrentPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CurrentPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CurrentPosition_Filter>;
};

export type SubscriptionCurrentTokenBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCurrentTokenBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CurrentTokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CurrentTokenBalance_Filter>;
};

export type SubscriptionDailyCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDailyCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DailyCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DailyCandle_Filter>;
};

export type SubscriptionFifteenMinuteCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFifteenMinuteCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FifteenMinuteCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FifteenMinuteCandle_Filter>;
};

export type SubscriptionFundingPaymentArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFundingPaymentsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FundingPayment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundingPayment_Filter>;
};

export type SubscriptionGlobalMetricStoreArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionGlobalMetricStoresArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GlobalMetricStore_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalMetricStore_Filter>;
};

export type SubscriptionGlobalPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionGlobalPositionHourlyAggregateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionGlobalPositionHourlyAggregatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GlobalPositionHourlyAggregate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalPositionHourlyAggregate_Filter>;
};

export type SubscriptionGlobalPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<GlobalPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalPosition_Filter>;
};

export type SubscriptionHourlyCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionHourlyCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<HourlyCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<HourlyCandle_Filter>;
};

export type SubscriptionLiquidationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLiquidationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Liquidation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Liquidation_Filter>;
};

export type SubscriptionMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Market_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Market_Filter>;
};

export type SubscriptionMinuteCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMinuteCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<MinuteCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MinuteCandle_Filter>;
};

export type SubscriptionPastLpPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPastLpPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PastLpPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PastLpPosition_Filter>;
};

export type SubscriptionPastPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPastPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PastPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PastPosition_Filter>;
};

export type SubscriptionPastTokenBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPastTokenBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PastTokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PastTokenBalance_Filter>;
};

export type SubscriptionPriceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPricesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Price_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Price_Filter>;
};

export type SubscriptionQuadHourlyCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionQuadHourlyCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<QuadHourlyCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<QuadHourlyCandle_Filter>;
};

export type SubscriptionReserveTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionReserveTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ReserveToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReserveToken_Filter>;
};

export type SubscriptionThirtyMinuteCandleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionThirtyMinuteCandlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<ThirtyMinuteCandle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ThirtyMinuteCandle_Filter>;
};

export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type SubscriptionTotalTvlArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTotalTvLsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TotalTvl_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TotalTvl_Filter>;
};

export type SubscriptionTvlHourlyAggregateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTvlHourlyAggregatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TvlHourlyAggregate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TvlHourlyAggregate_Filter>;
};

export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type SubscriptionVaultArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVaultsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vault_Filter>;
};

export type ThirtyMinuteCandle = {
  __typename?: "ThirtyMinuteCandle";
  close: Scalars["BigInt"];
  closeTimestamp: Scalars["BigInt"];
  high: Scalars["BigInt"];
  id: Scalars["ID"];
  lastPrice: Price;
  low: Scalars["BigInt"];
  market: Market;
  open: Scalars["BigInt"];
  openTimestamp: Scalars["BigInt"];
  volume: Scalars["BigInt"];
};

export type ThirtyMinuteCandle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ThirtyMinuteCandle_Filter>>>;
  close?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closeTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  close_gt?: InputMaybe<Scalars["BigInt"]>;
  close_gte?: InputMaybe<Scalars["BigInt"]>;
  close_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  close_lt?: InputMaybe<Scalars["BigInt"]>;
  close_lte?: InputMaybe<Scalars["BigInt"]>;
  close_not?: InputMaybe<Scalars["BigInt"]>;
  close_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  high?: InputMaybe<Scalars["BigInt"]>;
  high_gt?: InputMaybe<Scalars["BigInt"]>;
  high_gte?: InputMaybe<Scalars["BigInt"]>;
  high_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  high_lt?: InputMaybe<Scalars["BigInt"]>;
  high_lte?: InputMaybe<Scalars["BigInt"]>;
  high_not?: InputMaybe<Scalars["BigInt"]>;
  high_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  lastPrice?: InputMaybe<Scalars["String"]>;
  lastPrice_?: InputMaybe<Price_Filter>;
  lastPrice_contains?: InputMaybe<Scalars["String"]>;
  lastPrice_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_ends_with?: InputMaybe<Scalars["String"]>;
  lastPrice_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_gt?: InputMaybe<Scalars["String"]>;
  lastPrice_gte?: InputMaybe<Scalars["String"]>;
  lastPrice_in?: InputMaybe<Array<Scalars["String"]>>;
  lastPrice_lt?: InputMaybe<Scalars["String"]>;
  lastPrice_lte?: InputMaybe<Scalars["String"]>;
  lastPrice_not?: InputMaybe<Scalars["String"]>;
  lastPrice_not_contains?: InputMaybe<Scalars["String"]>;
  lastPrice_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_not_ends_with?: InputMaybe<Scalars["String"]>;
  lastPrice_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_not_in?: InputMaybe<Array<Scalars["String"]>>;
  lastPrice_not_starts_with?: InputMaybe<Scalars["String"]>;
  lastPrice_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  lastPrice_starts_with?: InputMaybe<Scalars["String"]>;
  lastPrice_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  low?: InputMaybe<Scalars["BigInt"]>;
  low_gt?: InputMaybe<Scalars["BigInt"]>;
  low_gte?: InputMaybe<Scalars["BigInt"]>;
  low_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  low_lt?: InputMaybe<Scalars["BigInt"]>;
  low_lte?: InputMaybe<Scalars["BigInt"]>;
  low_not?: InputMaybe<Scalars["BigInt"]>;
  low_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  market?: InputMaybe<Scalars["String"]>;
  market_?: InputMaybe<Market_Filter>;
  market_contains?: InputMaybe<Scalars["String"]>;
  market_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_ends_with?: InputMaybe<Scalars["String"]>;
  market_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_gt?: InputMaybe<Scalars["String"]>;
  market_gte?: InputMaybe<Scalars["String"]>;
  market_in?: InputMaybe<Array<Scalars["String"]>>;
  market_lt?: InputMaybe<Scalars["String"]>;
  market_lte?: InputMaybe<Scalars["String"]>;
  market_not?: InputMaybe<Scalars["String"]>;
  market_not_contains?: InputMaybe<Scalars["String"]>;
  market_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  market_not_ends_with?: InputMaybe<Scalars["String"]>;
  market_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  market_not_in?: InputMaybe<Array<Scalars["String"]>>;
  market_not_starts_with?: InputMaybe<Scalars["String"]>;
  market_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  market_starts_with?: InputMaybe<Scalars["String"]>;
  market_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  open?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  openTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  open_gt?: InputMaybe<Scalars["BigInt"]>;
  open_gte?: InputMaybe<Scalars["BigInt"]>;
  open_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  open_lt?: InputMaybe<Scalars["BigInt"]>;
  open_lte?: InputMaybe<Scalars["BigInt"]>;
  open_not?: InputMaybe<Scalars["BigInt"]>;
  open_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<ThirtyMinuteCandle_Filter>>>;
  volume?: InputMaybe<Scalars["BigInt"]>;
  volume_gt?: InputMaybe<Scalars["BigInt"]>;
  volume_gte?: InputMaybe<Scalars["BigInt"]>;
  volume_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  volume_lt?: InputMaybe<Scalars["BigInt"]>;
  volume_lte?: InputMaybe<Scalars["BigInt"]>;
  volume_not?: InputMaybe<Scalars["BigInt"]>;
  volume_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum ThirtyMinuteCandle_OrderBy {
  Close = "close",
  CloseTimestamp = "closeTimestamp",
  High = "high",
  Id = "id",
  LastPrice = "lastPrice",
  LastPriceBaseSupply = "lastPrice__baseSupply",
  LastPriceBaseVal = "lastPrice__baseVal",
  LastPriceCumFundingPerLpToken = "lastPrice__cumFundingPerLpToken",
  LastPriceCumFundingRate = "lastPrice__cumFundingRate",
  LastPriceFundingRate = "lastPrice__fundingRate",
  LastPriceId = "lastPrice__id",
  LastPriceIndex = "lastPrice__index",
  LastPriceIndexTwap = "lastPrice__indexTwap",
  LastPriceMark = "lastPrice__mark",
  LastPricePriceOracle = "lastPrice__priceOracle",
  LastPricePriceScale = "lastPrice__priceScale",
  LastPriceQuoteSupply = "lastPrice__quoteSupply",
  LastPriceQuoteVal = "lastPrice__quoteVal",
  LastPriceTimestamp = "lastPrice__timestamp",
  LastPriceValue = "lastPrice__value",
  LastPriceVirtualPrice = "lastPrice__virtualPrice",
  Low = "low",
  Market = "market",
  MarketCryptoSwapPool = "market__cryptoSwapPool",
  MarketEarliestPrice = "market__earliestPrice",
  MarketId = "market__id",
  MarketInsuranceFee = "market__insuranceFee",
  MarketInsuranceRatio = "market__insuranceRatio",
  MarketLiquidationDiscount = "market__liquidationDiscount",
  MarketLiquidationReward = "market__liquidationReward",
  MarketLiquidationRewardInsuranceShare = "market__liquidationRewardInsuranceShare",
  MarketLockPeriod = "market__lockPeriod",
  MarketLpDebtCoef = "market__lpDebtCoef",
  MarketMaxBlockTradeAmount = "market__maxBlockTradeAmount",
  MarketMaxLiquidityProvided = "market__maxLiquidityProvided",
  MarketMidFee = "market__midFee",
  MarketMinMargin = "market__minMargin",
  MarketMinMarginAtCreation = "market__minMarginAtCreation",
  MarketMinPositiveOpenNotional = "market__minPositiveOpenNotional",
  MarketName = "market__name",
  MarketNonUaCollSeizureDiscount = "market__nonUACollSeizureDiscount",
  MarketOutFee = "market__outFee",
  MarketPerpetual = "market__perpetual",
  MarketRiskWeight = "market__riskWeight",
  MarketSensitivity = "market__sensitivity",
  MarketSymbol = "market__symbol",
  MarketTwapFrequency = "market__twapFrequency",
  MarketUaDebtSeizureThreshold = "market__uaDebtSeizureThreshold",
  MarketVaultAddress = "market__vaultAddress",
  Open = "open",
  OpenTimestamp = "openTimestamp",
  Volume = "volume",
}

export type Token = {
  __typename?: "Token";
  address: Scalars["Bytes"];
  aggregator: Scalars["Bytes"];
  decimals: Scalars["BigInt"];
  depositedAmount: Scalars["BigInt"];
  id: Scalars["ID"];
  maxAmount: Scalars["BigInt"];
  name: Scalars["String"];
  prices: Array<AnswerUpdated>;
  symbol: Scalars["String"];
  uniqueDepositors: Scalars["BigInt"];
  vault: Vault;
  weight: Scalars["BigInt"];
};

export type TokenPricesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AnswerUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AnswerUpdated_Filter>;
};

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["Bytes"]>;
  address_contains?: InputMaybe<Scalars["Bytes"]>;
  address_gt?: InputMaybe<Scalars["Bytes"]>;
  address_gte?: InputMaybe<Scalars["Bytes"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  address_lt?: InputMaybe<Scalars["Bytes"]>;
  address_lte?: InputMaybe<Scalars["Bytes"]>;
  address_not?: InputMaybe<Scalars["Bytes"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  aggregator?: InputMaybe<Scalars["Bytes"]>;
  aggregator_contains?: InputMaybe<Scalars["Bytes"]>;
  aggregator_gt?: InputMaybe<Scalars["Bytes"]>;
  aggregator_gte?: InputMaybe<Scalars["Bytes"]>;
  aggregator_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  aggregator_lt?: InputMaybe<Scalars["Bytes"]>;
  aggregator_lte?: InputMaybe<Scalars["Bytes"]>;
  aggregator_not?: InputMaybe<Scalars["Bytes"]>;
  aggregator_not_contains?: InputMaybe<Scalars["Bytes"]>;
  aggregator_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  decimals?: InputMaybe<Scalars["BigInt"]>;
  decimals_gt?: InputMaybe<Scalars["BigInt"]>;
  decimals_gte?: InputMaybe<Scalars["BigInt"]>;
  decimals_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  decimals_lt?: InputMaybe<Scalars["BigInt"]>;
  decimals_lte?: InputMaybe<Scalars["BigInt"]>;
  decimals_not?: InputMaybe<Scalars["BigInt"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  depositedAmount?: InputMaybe<Scalars["BigInt"]>;
  depositedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  depositedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  depositedAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  depositedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  depositedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  depositedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  depositedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  maxAmount?: InputMaybe<Scalars["BigInt"]>;
  maxAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  maxAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  maxAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  maxAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  maxAmount_not?: InputMaybe<Scalars["BigInt"]>;
  maxAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  prices_?: InputMaybe<AnswerUpdated_Filter>;
  symbol?: InputMaybe<Scalars["String"]>;
  symbol_contains?: InputMaybe<Scalars["String"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_gt?: InputMaybe<Scalars["String"]>;
  symbol_gte?: InputMaybe<Scalars["String"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]>;
  symbol_lte?: InputMaybe<Scalars["String"]>;
  symbol_not?: InputMaybe<Scalars["String"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  uniqueDepositors?: InputMaybe<Scalars["BigInt"]>;
  uniqueDepositors_gt?: InputMaybe<Scalars["BigInt"]>;
  uniqueDepositors_gte?: InputMaybe<Scalars["BigInt"]>;
  uniqueDepositors_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  uniqueDepositors_lt?: InputMaybe<Scalars["BigInt"]>;
  uniqueDepositors_lte?: InputMaybe<Scalars["BigInt"]>;
  uniqueDepositors_not?: InputMaybe<Scalars["BigInt"]>;
  uniqueDepositors_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  vault?: InputMaybe<Scalars["String"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_gt?: InputMaybe<Scalars["String"]>;
  vault_gte?: InputMaybe<Scalars["String"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_lt?: InputMaybe<Scalars["String"]>;
  vault_lte?: InputMaybe<Scalars["String"]>;
  vault_not?: InputMaybe<Scalars["String"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  weight?: InputMaybe<Scalars["BigInt"]>;
  weight_gt?: InputMaybe<Scalars["BigInt"]>;
  weight_gte?: InputMaybe<Scalars["BigInt"]>;
  weight_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  weight_lt?: InputMaybe<Scalars["BigInt"]>;
  weight_lte?: InputMaybe<Scalars["BigInt"]>;
  weight_not?: InputMaybe<Scalars["BigInt"]>;
  weight_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Token_OrderBy {
  Address = "address",
  Aggregator = "aggregator",
  Decimals = "decimals",
  DepositedAmount = "depositedAmount",
  Id = "id",
  MaxAmount = "maxAmount",
  Name = "name",
  Prices = "prices",
  Symbol = "symbol",
  UniqueDepositors = "uniqueDepositors",
  Vault = "vault",
  VaultId = "vault__id",
  VaultOracle = "vault__oracle",
  Weight = "weight",
}

export type TotalTvl = {
  __typename?: "TotalTVL";
  amount: Scalars["BigInt"];
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
};

export type TotalTvl_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<TotalTvl_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<TotalTvl_Filter>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum TotalTvl_OrderBy {
  Amount = "amount",
  Id = "id",
  Timestamp = "timestamp",
}

export type TvlHourlyAggregate = {
  __typename?: "TvlHourlyAggregate";
  amount: Scalars["BigInt"];
  closeTimestamp: Scalars["BigInt"];
  id: Scalars["ID"];
  openTimestamp: Scalars["BigInt"];
};

export type TvlHourlyAggregate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  and?: InputMaybe<Array<InputMaybe<TvlHourlyAggregate_Filter>>>;
  closeTimestamp?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  closeTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  openTimestamp?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  openTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  or?: InputMaybe<Array<InputMaybe<TvlHourlyAggregate_Filter>>>;
};

export enum TvlHourlyAggregate_OrderBy {
  Amount = "amount",
  CloseTimestamp = "closeTimestamp",
  Id = "id",
  OpenTimestamp = "openTimestamp",
}

export type User = {
  __typename?: "User";
  activities: Array<Activity>;
  currentLpPositions: Array<CurrentLpPosition>;
  currentPositions: Array<CurrentPosition>;
  currentTokenBalances: Array<CurrentTokenBalance>;
  fundingPayments: Array<FundingPayment>;
  id: Scalars["ID"];
  liquidation: Array<Liquidation>;
  pastLpPositions: Array<PastLpPosition>;
  pastPositions: Array<PastPosition>;
  pastTokenBalances: Array<PastTokenBalance>;
  tradingVolume: Scalars["BigInt"];
};

export type UserActivitiesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Activity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Activity_Filter>;
};

export type UserCurrentLpPositionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CurrentLpPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CurrentLpPosition_Filter>;
};

export type UserCurrentPositionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CurrentPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CurrentPosition_Filter>;
};

export type UserCurrentTokenBalancesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CurrentTokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<CurrentTokenBalance_Filter>;
};

export type UserFundingPaymentsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FundingPayment_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FundingPayment_Filter>;
};

export type UserLiquidationArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Liquidation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Liquidation_Filter>;
};

export type UserPastLpPositionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PastLpPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PastLpPosition_Filter>;
};

export type UserPastPositionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PastPosition_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PastPosition_Filter>;
};

export type UserPastTokenBalancesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PastTokenBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PastTokenBalance_Filter>;
};

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activities_?: InputMaybe<Activity_Filter>;
  and?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  currentLpPositions_?: InputMaybe<CurrentLpPosition_Filter>;
  currentPositions_?: InputMaybe<CurrentPosition_Filter>;
  currentTokenBalances_?: InputMaybe<CurrentTokenBalance_Filter>;
  fundingPayments_?: InputMaybe<FundingPayment_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  liquidation_?: InputMaybe<Liquidation_Filter>;
  or?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  pastLpPositions_?: InputMaybe<PastLpPosition_Filter>;
  pastPositions_?: InputMaybe<PastPosition_Filter>;
  pastTokenBalances_?: InputMaybe<PastTokenBalance_Filter>;
  tradingVolume?: InputMaybe<Scalars["BigInt"]>;
  tradingVolume_gt?: InputMaybe<Scalars["BigInt"]>;
  tradingVolume_gte?: InputMaybe<Scalars["BigInt"]>;
  tradingVolume_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tradingVolume_lt?: InputMaybe<Scalars["BigInt"]>;
  tradingVolume_lte?: InputMaybe<Scalars["BigInt"]>;
  tradingVolume_not?: InputMaybe<Scalars["BigInt"]>;
  tradingVolume_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum User_OrderBy {
  Activities = "activities",
  CurrentLpPositions = "currentLpPositions",
  CurrentPositions = "currentPositions",
  CurrentTokenBalances = "currentTokenBalances",
  FundingPayments = "fundingPayments",
  Id = "id",
  Liquidation = "liquidation",
  PastLpPositions = "pastLpPositions",
  PastPositions = "pastPositions",
  PastTokenBalances = "pastTokenBalances",
  TradingVolume = "tradingVolume",
}

export type Vault = {
  __typename?: "Vault";
  id: Scalars["ID"];
  oracle: Scalars["String"];
  tokens?: Maybe<Array<Token>>;
};

export type VaultTokensArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Token_Filter>;
};

export type Vault_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Vault_Filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<Vault_Filter>>>;
  oracle?: InputMaybe<Scalars["String"]>;
  oracle_contains?: InputMaybe<Scalars["String"]>;
  oracle_contains_nocase?: InputMaybe<Scalars["String"]>;
  oracle_ends_with?: InputMaybe<Scalars["String"]>;
  oracle_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  oracle_gt?: InputMaybe<Scalars["String"]>;
  oracle_gte?: InputMaybe<Scalars["String"]>;
  oracle_in?: InputMaybe<Array<Scalars["String"]>>;
  oracle_lt?: InputMaybe<Scalars["String"]>;
  oracle_lte?: InputMaybe<Scalars["String"]>;
  oracle_not?: InputMaybe<Scalars["String"]>;
  oracle_not_contains?: InputMaybe<Scalars["String"]>;
  oracle_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  oracle_not_ends_with?: InputMaybe<Scalars["String"]>;
  oracle_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  oracle_not_in?: InputMaybe<Array<Scalars["String"]>>;
  oracle_not_starts_with?: InputMaybe<Scalars["String"]>;
  oracle_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  oracle_starts_with?: InputMaybe<Scalars["String"]>;
  oracle_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokens_?: InputMaybe<Token_Filter>;
};

export enum Vault_OrderBy {
  Id = "id",
  Oracle = "oracle",
  Tokens = "tokens",
}

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars["Bytes"]>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type PastDayHourlyCandlesLiveQueryVariables = Exact<{
  marketId: Scalars["ID"];
  from?: InputMaybe<Scalars["BigInt"]>;
}>;

export type PastDayHourlyCandlesLiveQuery = {
  __typename?: "Query";
  market?: {
    __typename?: "Market";
    earliestPrice: any;
    hourlyCandles: Array<{
      __typename?: "HourlyCandle";
      openTimestamp: any;
      open: any;
      close: any;
      high: any;
      low: any;
      volume: any;
    }>;
  } | null;
};

export const PastDayHourlyCandlesLiveDocument = gql`
  query PastDayHourlyCandlesLive($marketId: ID!, $from: BigInt) @live {
    market(id: $marketId) {
      earliestPrice
      hourlyCandles(
        orderBy: openTimestamp
        orderDirection: asc
        where: { openTimestamp_gt: $from }
      ) {
        openTimestamp
        open
        close
        high
        low
        volume
      }
    }
  }
`;

export function usePastDayHourlyCandlesLiveQuery(
  options: Omit<
    Urql.UseQueryArgs<PastDayHourlyCandlesLiveQueryVariables>,
    "query"
  >
) {
  return Urql.useQuery<
    PastDayHourlyCandlesLiveQuery,
    PastDayHourlyCandlesLiveQueryVariables
  >({ query: PastDayHourlyCandlesLiveDocument, ...options });
}
