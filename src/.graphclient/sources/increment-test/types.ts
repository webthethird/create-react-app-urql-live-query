// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace IncrementTestTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Activity = {
  id: Scalars['ID']['output'];
  market: Market;
  user: User;
  type: Scalars['String']['output'];
  size?: Maybe<Scalars['BigInt']['output']>;
  notional?: Maybe<Scalars['BigInt']['output']>;
  price?: Maybe<Scalars['BigInt']['output']>;
  pnl?: Maybe<Scalars['BigInt']['output']>;
  fees?: Maybe<Scalars['BigInt']['output']>;
  timestamp: Scalars['BigInt']['output'];
  isTrader: Scalars['Boolean']['output'];
};

export type Activity_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_gt?: InputMaybe<Scalars['String']['input']>;
  type_lt?: InputMaybe<Scalars['String']['input']>;
  type_gte?: InputMaybe<Scalars['String']['input']>;
  type_lte?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['BigInt']['input']>;
  size_not?: InputMaybe<Scalars['BigInt']['input']>;
  size_gt?: InputMaybe<Scalars['BigInt']['input']>;
  size_lt?: InputMaybe<Scalars['BigInt']['input']>;
  size_gte?: InputMaybe<Scalars['BigInt']['input']>;
  size_lte?: InputMaybe<Scalars['BigInt']['input']>;
  size_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  notional?: InputMaybe<Scalars['BigInt']['input']>;
  notional_not?: InputMaybe<Scalars['BigInt']['input']>;
  notional_gt?: InputMaybe<Scalars['BigInt']['input']>;
  notional_lt?: InputMaybe<Scalars['BigInt']['input']>;
  notional_gte?: InputMaybe<Scalars['BigInt']['input']>;
  notional_lte?: InputMaybe<Scalars['BigInt']['input']>;
  notional_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  notional_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnl?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_not?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pnl_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pnl_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fees?: InputMaybe<Scalars['BigInt']['input']>;
  fees_not?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fees_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  isTrader?: InputMaybe<Scalars['Boolean']['input']>;
  isTrader_not?: InputMaybe<Scalars['Boolean']['input']>;
  isTrader_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isTrader_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Activity_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Activity_filter>>>;
};

export type Activity_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'user'
  | 'user__id'
  | 'user__tradingVolume'
  | 'type'
  | 'size'
  | 'notional'
  | 'price'
  | 'pnl'
  | 'fees'
  | 'timestamp'
  | 'isTrader';

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type AnswerUpdated = {
  id: Scalars['ID']['output'];
  token: Token;
  decimals: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  answer: Scalars['BigInt']['output'];
};

export type AnswerUpdated_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  decimals?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  answer?: InputMaybe<Scalars['BigInt']['input']>;
  answer_not?: InputMaybe<Scalars['BigInt']['input']>;
  answer_gt?: InputMaybe<Scalars['BigInt']['input']>;
  answer_lt?: InputMaybe<Scalars['BigInt']['input']>;
  answer_gte?: InputMaybe<Scalars['BigInt']['input']>;
  answer_lte?: InputMaybe<Scalars['BigInt']['input']>;
  answer_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  answer_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AnswerUpdated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AnswerUpdated_filter>>>;
};

export type AnswerUpdated_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__address'
  | 'token__name'
  | 'token__symbol'
  | 'token__aggregator'
  | 'token__decimals'
  | 'token__weight'
  | 'token__maxAmount'
  | 'token__depositedAmount'
  | 'token__uniqueDepositors'
  | 'decimals'
  | 'timestamp'
  | 'answer';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type CurrentLpPosition = {
  id: Scalars['ID']['output'];
  market: Market;
  user: User;
  timestamp: Scalars['BigInt']['output'];
  openNotional: Scalars['BigInt']['output'];
  positionSize: Scalars['BigInt']['output'];
  initialCumFundingPerLpToken: Scalars['BigInt']['output'];
  recentCumFundingPerLpToken: Scalars['BigInt']['output'];
  weightedEntryPriceSum: Scalars['BigInt']['output'];
  entryAmountSum: Scalars['BigInt']['output'];
  weightedExitPriceSum: Scalars['BigInt']['output'];
  exitAmountSum: Scalars['BigInt']['output'];
  liquidityBalance: Scalars['BigInt']['output'];
  totalTradingFeesGrowth: Scalars['BigInt']['output'];
  totalQuoteFeesGrowth: Scalars['BigInt']['output'];
  totalBaseFeesGrowth: Scalars['BigInt']['output'];
  depositTime: Scalars['BigInt']['output'];
  realizedProfit: Scalars['BigInt']['output'];
  fundingPayment: Scalars['BigInt']['output'];
  tradingFeesPayed: Scalars['BigInt']['output'];
  initialUsdValue: Scalars['BigInt']['output'];
};

export type CurrentLpPosition_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openNotional?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_not?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openNotional_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionSize?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialCumFundingPerLpToken?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingPerLpToken_not?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingPerLpToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingPerLpToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingPerLpToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingPerLpToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingPerLpToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialCumFundingPerLpToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recentCumFundingPerLpToken?: InputMaybe<Scalars['BigInt']['input']>;
  recentCumFundingPerLpToken_not?: InputMaybe<Scalars['BigInt']['input']>;
  recentCumFundingPerLpToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  recentCumFundingPerLpToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  recentCumFundingPerLpToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  recentCumFundingPerLpToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  recentCumFundingPerLpToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recentCumFundingPerLpToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedEntryPriceSum?: InputMaybe<Scalars['BigInt']['input']>;
  weightedEntryPriceSum_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedEntryPriceSum_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedEntryPriceSum_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedEntryPriceSum_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedEntryPriceSum_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedEntryPriceSum_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedEntryPriceSum_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  entryAmountSum?: InputMaybe<Scalars['BigInt']['input']>;
  entryAmountSum_not?: InputMaybe<Scalars['BigInt']['input']>;
  entryAmountSum_gt?: InputMaybe<Scalars['BigInt']['input']>;
  entryAmountSum_lt?: InputMaybe<Scalars['BigInt']['input']>;
  entryAmountSum_gte?: InputMaybe<Scalars['BigInt']['input']>;
  entryAmountSum_lte?: InputMaybe<Scalars['BigInt']['input']>;
  entryAmountSum_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  entryAmountSum_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedExitPriceSum?: InputMaybe<Scalars['BigInt']['input']>;
  weightedExitPriceSum_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedExitPriceSum_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedExitPriceSum_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedExitPriceSum_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedExitPriceSum_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedExitPriceSum_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedExitPriceSum_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exitAmountSum?: InputMaybe<Scalars['BigInt']['input']>;
  exitAmountSum_not?: InputMaybe<Scalars['BigInt']['input']>;
  exitAmountSum_gt?: InputMaybe<Scalars['BigInt']['input']>;
  exitAmountSum_lt?: InputMaybe<Scalars['BigInt']['input']>;
  exitAmountSum_gte?: InputMaybe<Scalars['BigInt']['input']>;
  exitAmountSum_lte?: InputMaybe<Scalars['BigInt']['input']>;
  exitAmountSum_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exitAmountSum_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityBalance?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTradingFeesGrowth?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTradingFeesGrowth_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQuoteFeesGrowth?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQuoteFeesGrowth_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBaseFeesGrowth?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBaseFeesGrowth_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositTime?: InputMaybe<Scalars['BigInt']['input']>;
  depositTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  depositTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  depositTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  depositTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  depositTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  depositTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedProfit?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_not?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedProfit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingPayment?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingFeesPayed?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_not?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingFeesPayed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialUsdValue?: InputMaybe<Scalars['BigInt']['input']>;
  initialUsdValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  initialUsdValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  initialUsdValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  initialUsdValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  initialUsdValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  initialUsdValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialUsdValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CurrentLpPosition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CurrentLpPosition_filter>>>;
};

export type CurrentLpPosition_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'user'
  | 'user__id'
  | 'user__tradingVolume'
  | 'timestamp'
  | 'openNotional'
  | 'positionSize'
  | 'initialCumFundingPerLpToken'
  | 'recentCumFundingPerLpToken'
  | 'weightedEntryPriceSum'
  | 'entryAmountSum'
  | 'weightedExitPriceSum'
  | 'exitAmountSum'
  | 'liquidityBalance'
  | 'totalTradingFeesGrowth'
  | 'totalQuoteFeesGrowth'
  | 'totalBaseFeesGrowth'
  | 'depositTime'
  | 'realizedProfit'
  | 'fundingPayment'
  | 'tradingFeesPayed'
  | 'initialUsdValue';

export type CurrentPosition = {
  id: Scalars['ID']['output'];
  market: Market;
  user: User;
  timestamp: Scalars['BigInt']['output'];
  direction: Scalars['Int']['output'];
  marginRatio: Scalars['BigInt']['output'];
  openNotional: Scalars['BigInt']['output'];
  positionSize: Scalars['BigInt']['output'];
  initialCumFundingRate: Scalars['BigInt']['output'];
  recentCumFundingRate: Scalars['BigInt']['output'];
  entryPrice: Scalars['BigInt']['output'];
  realizedProfit: Scalars['BigInt']['output'];
  insuranceFeesPayed: Scalars['BigInt']['output'];
  tradingFeesPayed: Scalars['BigInt']['output'];
  fundingPayment: Scalars['BigInt']['output'];
};

export type CurrentPosition_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  direction?: InputMaybe<Scalars['Int']['input']>;
  direction_not?: InputMaybe<Scalars['Int']['input']>;
  direction_gt?: InputMaybe<Scalars['Int']['input']>;
  direction_lt?: InputMaybe<Scalars['Int']['input']>;
  direction_gte?: InputMaybe<Scalars['Int']['input']>;
  direction_lte?: InputMaybe<Scalars['Int']['input']>;
  direction_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  direction_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  marginRatio?: InputMaybe<Scalars['BigInt']['input']>;
  marginRatio_not?: InputMaybe<Scalars['BigInt']['input']>;
  marginRatio_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marginRatio_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marginRatio_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marginRatio_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marginRatio_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marginRatio_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openNotional?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_not?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openNotional_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionSize?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialCumFundingRate?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialCumFundingRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recentCumFundingRate?: InputMaybe<Scalars['BigInt']['input']>;
  recentCumFundingRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  recentCumFundingRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  recentCumFundingRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  recentCumFundingRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  recentCumFundingRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  recentCumFundingRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  recentCumFundingRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  entryPrice?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  entryPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedProfit?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_not?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedProfit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  insuranceFeesPayed?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceFeesPayed_not?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceFeesPayed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceFeesPayed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceFeesPayed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceFeesPayed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceFeesPayed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  insuranceFeesPayed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingFeesPayed?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_not?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingFeesPayed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingPayment?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CurrentPosition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CurrentPosition_filter>>>;
};

export type CurrentPosition_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'user'
  | 'user__id'
  | 'user__tradingVolume'
  | 'timestamp'
  | 'direction'
  | 'marginRatio'
  | 'openNotional'
  | 'positionSize'
  | 'initialCumFundingRate'
  | 'recentCumFundingRate'
  | 'entryPrice'
  | 'realizedProfit'
  | 'insuranceFeesPayed'
  | 'tradingFeesPayed'
  | 'fundingPayment';

export type CurrentTokenBalance = {
  id: Scalars['ID']['output'];
  user: User;
  token: Token;
  amount: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type CurrentTokenBalance_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CurrentTokenBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CurrentTokenBalance_filter>>>;
};

export type CurrentTokenBalance_orderBy =
  | 'id'
  | 'user'
  | 'user__id'
  | 'user__tradingVolume'
  | 'token'
  | 'token__id'
  | 'token__address'
  | 'token__name'
  | 'token__symbol'
  | 'token__aggregator'
  | 'token__decimals'
  | 'token__weight'
  | 'token__maxAmount'
  | 'token__depositedAmount'
  | 'token__uniqueDepositors'
  | 'amount'
  | 'timestamp';

export type DailyCandle = {
  id: Scalars['ID']['output'];
  market: Market;
  openTimestamp: Scalars['BigInt']['output'];
  closeTimestamp: Scalars['BigInt']['output'];
  high: Scalars['BigInt']['output'];
  low: Scalars['BigInt']['output'];
  open: Scalars['BigInt']['output'];
  close: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
  lastPrice: Price;
};

export type DailyCandle_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  openTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  high?: InputMaybe<Scalars['BigInt']['input']>;
  high_not?: InputMaybe<Scalars['BigInt']['input']>;
  high_gt?: InputMaybe<Scalars['BigInt']['input']>;
  high_lt?: InputMaybe<Scalars['BigInt']['input']>;
  high_gte?: InputMaybe<Scalars['BigInt']['input']>;
  high_lte?: InputMaybe<Scalars['BigInt']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low?: InputMaybe<Scalars['BigInt']['input']>;
  low_not?: InputMaybe<Scalars['BigInt']['input']>;
  low_gt?: InputMaybe<Scalars['BigInt']['input']>;
  low_lt?: InputMaybe<Scalars['BigInt']['input']>;
  low_gte?: InputMaybe<Scalars['BigInt']['input']>;
  low_lte?: InputMaybe<Scalars['BigInt']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  open?: InputMaybe<Scalars['BigInt']['input']>;
  open_not?: InputMaybe<Scalars['BigInt']['input']>;
  open_gt?: InputMaybe<Scalars['BigInt']['input']>;
  open_lt?: InputMaybe<Scalars['BigInt']['input']>;
  open_gte?: InputMaybe<Scalars['BigInt']['input']>;
  open_lte?: InputMaybe<Scalars['BigInt']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close?: InputMaybe<Scalars['BigInt']['input']>;
  close_not?: InputMaybe<Scalars['BigInt']['input']>;
  close_gt?: InputMaybe<Scalars['BigInt']['input']>;
  close_lt?: InputMaybe<Scalars['BigInt']['input']>;
  close_gte?: InputMaybe<Scalars['BigInt']['input']>;
  close_lte?: InputMaybe<Scalars['BigInt']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastPrice?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not?: InputMaybe<Scalars['String']['input']>;
  lastPrice_gt?: InputMaybe<Scalars['String']['input']>;
  lastPrice_lt?: InputMaybe<Scalars['String']['input']>;
  lastPrice_gte?: InputMaybe<Scalars['String']['input']>;
  lastPrice_lte?: InputMaybe<Scalars['String']['input']>;
  lastPrice_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPrice_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPrice_contains?: InputMaybe<Scalars['String']['input']>;
  lastPrice_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_?: InputMaybe<Price_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DailyCandle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DailyCandle_filter>>>;
};

export type DailyCandle_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'openTimestamp'
  | 'closeTimestamp'
  | 'high'
  | 'low'
  | 'open'
  | 'close'
  | 'volume'
  | 'lastPrice'
  | 'lastPrice__id'
  | 'lastPrice__timestamp'
  | 'lastPrice__value'
  | 'lastPrice__mark'
  | 'lastPrice__index'
  | 'lastPrice__indexTwap'
  | 'lastPrice__fundingRate'
  | 'lastPrice__cumFundingRate'
  | 'lastPrice__cumFundingPerLpToken'
  | 'lastPrice__baseVal'
  | 'lastPrice__quoteVal'
  | 'lastPrice__priceScale'
  | 'lastPrice__priceOracle'
  | 'lastPrice__quoteSupply'
  | 'lastPrice__baseSupply'
  | 'lastPrice__virtualPrice';

export type FifteenMinuteCandle = {
  id: Scalars['ID']['output'];
  market: Market;
  openTimestamp: Scalars['BigInt']['output'];
  closeTimestamp: Scalars['BigInt']['output'];
  high: Scalars['BigInt']['output'];
  low: Scalars['BigInt']['output'];
  open: Scalars['BigInt']['output'];
  close: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
  lastPrice: Price;
};

export type FifteenMinuteCandle_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  openTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  high?: InputMaybe<Scalars['BigInt']['input']>;
  high_not?: InputMaybe<Scalars['BigInt']['input']>;
  high_gt?: InputMaybe<Scalars['BigInt']['input']>;
  high_lt?: InputMaybe<Scalars['BigInt']['input']>;
  high_gte?: InputMaybe<Scalars['BigInt']['input']>;
  high_lte?: InputMaybe<Scalars['BigInt']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low?: InputMaybe<Scalars['BigInt']['input']>;
  low_not?: InputMaybe<Scalars['BigInt']['input']>;
  low_gt?: InputMaybe<Scalars['BigInt']['input']>;
  low_lt?: InputMaybe<Scalars['BigInt']['input']>;
  low_gte?: InputMaybe<Scalars['BigInt']['input']>;
  low_lte?: InputMaybe<Scalars['BigInt']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  open?: InputMaybe<Scalars['BigInt']['input']>;
  open_not?: InputMaybe<Scalars['BigInt']['input']>;
  open_gt?: InputMaybe<Scalars['BigInt']['input']>;
  open_lt?: InputMaybe<Scalars['BigInt']['input']>;
  open_gte?: InputMaybe<Scalars['BigInt']['input']>;
  open_lte?: InputMaybe<Scalars['BigInt']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close?: InputMaybe<Scalars['BigInt']['input']>;
  close_not?: InputMaybe<Scalars['BigInt']['input']>;
  close_gt?: InputMaybe<Scalars['BigInt']['input']>;
  close_lt?: InputMaybe<Scalars['BigInt']['input']>;
  close_gte?: InputMaybe<Scalars['BigInt']['input']>;
  close_lte?: InputMaybe<Scalars['BigInt']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastPrice?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not?: InputMaybe<Scalars['String']['input']>;
  lastPrice_gt?: InputMaybe<Scalars['String']['input']>;
  lastPrice_lt?: InputMaybe<Scalars['String']['input']>;
  lastPrice_gte?: InputMaybe<Scalars['String']['input']>;
  lastPrice_lte?: InputMaybe<Scalars['String']['input']>;
  lastPrice_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPrice_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPrice_contains?: InputMaybe<Scalars['String']['input']>;
  lastPrice_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_?: InputMaybe<Price_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FifteenMinuteCandle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FifteenMinuteCandle_filter>>>;
};

export type FifteenMinuteCandle_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'openTimestamp'
  | 'closeTimestamp'
  | 'high'
  | 'low'
  | 'open'
  | 'close'
  | 'volume'
  | 'lastPrice'
  | 'lastPrice__id'
  | 'lastPrice__timestamp'
  | 'lastPrice__value'
  | 'lastPrice__mark'
  | 'lastPrice__index'
  | 'lastPrice__indexTwap'
  | 'lastPrice__fundingRate'
  | 'lastPrice__cumFundingRate'
  | 'lastPrice__cumFundingPerLpToken'
  | 'lastPrice__baseVal'
  | 'lastPrice__quoteVal'
  | 'lastPrice__priceScale'
  | 'lastPrice__priceOracle'
  | 'lastPrice__quoteSupply'
  | 'lastPrice__baseSupply'
  | 'lastPrice__virtualPrice';

export type FundingPayment = {
  id: Scalars['ID']['output'];
  market: Market;
  user: User;
  timestamp: Scalars['BigInt']['output'];
  amount: Scalars['BigInt']['output'];
  isTrader: Scalars['Boolean']['output'];
};

export type FundingPayment_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  isTrader?: InputMaybe<Scalars['Boolean']['input']>;
  isTrader_not?: InputMaybe<Scalars['Boolean']['input']>;
  isTrader_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isTrader_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FundingPayment_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FundingPayment_filter>>>;
};

export type FundingPayment_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'user'
  | 'user__id'
  | 'user__tradingVolume'
  | 'timestamp'
  | 'amount'
  | 'isTrader';

export type GlobalMetricStore = {
  id: Scalars['ID']['output'];
  userCount: Scalars['BigInt']['output'];
};

export type GlobalMetricStore_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  userCount?: InputMaybe<Scalars['BigInt']['input']>;
  userCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  userCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  userCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  userCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  userCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  userCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  userCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GlobalMetricStore_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GlobalMetricStore_filter>>>;
};

export type GlobalMetricStore_orderBy =
  | 'id'
  | 'userCount';

export type GlobalPosition = {
  id: Scalars['ID']['output'];
  market: Market;
  timestamp: Scalars['BigInt']['output'];
  timeOfLastTrade: Scalars['BigInt']['output'];
  timeOfLastTwapUpdate: Scalars['BigInt']['output'];
  cumFundingRate: Scalars['BigInt']['output'];
  totalQuoteProvided: Scalars['BigInt']['output'];
  totalBaseProvided: Scalars['BigInt']['output'];
  cumFundingPerLpToken: Scalars['BigInt']['output'];
  currentBlockTradeAmount: Scalars['BigInt']['output'];
  totalTradingFeesGrowth: Scalars['BigInt']['output'];
  totalLiquidityProvided: Scalars['BigInt']['output'];
  totalBaseFeesGrowth: Scalars['BigInt']['output'];
  totalQuoteFeesGrowth: Scalars['BigInt']['output'];
  traderLongs: Scalars['BigInt']['output'];
  traderShorts: Scalars['BigInt']['output'];
};

export type GlobalPositionHourlyAggregate = {
  id: Scalars['ID']['output'];
  market: Market;
  openTimestamp: Scalars['BigInt']['output'];
  closeTimestamp: Scalars['BigInt']['output'];
  cumFundingRate: Scalars['BigInt']['output'];
  totalQuoteProvided: Scalars['BigInt']['output'];
  totalBaseProvided: Scalars['BigInt']['output'];
  cumFundingPerLpToken: Scalars['BigInt']['output'];
  totalTradingFeesGrowth: Scalars['BigInt']['output'];
  totalLiquidityProvided: Scalars['BigInt']['output'];
  totalBaseFeesGrowth: Scalars['BigInt']['output'];
  totalQuoteFeesGrowth: Scalars['BigInt']['output'];
};

export type GlobalPositionHourlyAggregate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  openTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumFundingRate?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumFundingRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQuoteProvided?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteProvided_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteProvided_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteProvided_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteProvided_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteProvided_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteProvided_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQuoteProvided_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBaseProvided?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseProvided_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseProvided_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseProvided_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseProvided_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseProvided_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseProvided_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBaseProvided_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumFundingPerLpToken?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumFundingPerLpToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTradingFeesGrowth?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTradingFeesGrowth_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidityProvided?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidityProvided_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidityProvided_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidityProvided_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidityProvided_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidityProvided_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidityProvided_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidityProvided_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBaseFeesGrowth?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBaseFeesGrowth_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQuoteFeesGrowth?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQuoteFeesGrowth_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GlobalPositionHourlyAggregate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GlobalPositionHourlyAggregate_filter>>>;
};

export type GlobalPositionHourlyAggregate_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'openTimestamp'
  | 'closeTimestamp'
  | 'cumFundingRate'
  | 'totalQuoteProvided'
  | 'totalBaseProvided'
  | 'cumFundingPerLpToken'
  | 'totalTradingFeesGrowth'
  | 'totalLiquidityProvided'
  | 'totalBaseFeesGrowth'
  | 'totalQuoteFeesGrowth';

export type GlobalPosition_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeOfLastTrade?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfLastTrade_not?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfLastTrade_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfLastTrade_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfLastTrade_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfLastTrade_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfLastTrade_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeOfLastTrade_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeOfLastTwapUpdate?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfLastTwapUpdate_not?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfLastTwapUpdate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfLastTwapUpdate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfLastTwapUpdate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfLastTwapUpdate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timeOfLastTwapUpdate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timeOfLastTwapUpdate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumFundingRate?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumFundingRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQuoteProvided?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteProvided_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteProvided_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteProvided_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteProvided_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteProvided_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteProvided_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQuoteProvided_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBaseProvided?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseProvided_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseProvided_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseProvided_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseProvided_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseProvided_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseProvided_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBaseProvided_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumFundingPerLpToken?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumFundingPerLpToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentBlockTradeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  currentBlockTradeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  currentBlockTradeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  currentBlockTradeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  currentBlockTradeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  currentBlockTradeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  currentBlockTradeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentBlockTradeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTradingFeesGrowth?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTradingFeesGrowth_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidityProvided?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidityProvided_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidityProvided_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidityProvided_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidityProvided_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidityProvided_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidityProvided_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidityProvided_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBaseFeesGrowth?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBaseFeesGrowth_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQuoteFeesGrowth?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQuoteFeesGrowth_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  traderLongs?: InputMaybe<Scalars['BigInt']['input']>;
  traderLongs_not?: InputMaybe<Scalars['BigInt']['input']>;
  traderLongs_gt?: InputMaybe<Scalars['BigInt']['input']>;
  traderLongs_lt?: InputMaybe<Scalars['BigInt']['input']>;
  traderLongs_gte?: InputMaybe<Scalars['BigInt']['input']>;
  traderLongs_lte?: InputMaybe<Scalars['BigInt']['input']>;
  traderLongs_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  traderLongs_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  traderShorts?: InputMaybe<Scalars['BigInt']['input']>;
  traderShorts_not?: InputMaybe<Scalars['BigInt']['input']>;
  traderShorts_gt?: InputMaybe<Scalars['BigInt']['input']>;
  traderShorts_lt?: InputMaybe<Scalars['BigInt']['input']>;
  traderShorts_gte?: InputMaybe<Scalars['BigInt']['input']>;
  traderShorts_lte?: InputMaybe<Scalars['BigInt']['input']>;
  traderShorts_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  traderShorts_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GlobalPosition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<GlobalPosition_filter>>>;
};

export type GlobalPosition_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'timestamp'
  | 'timeOfLastTrade'
  | 'timeOfLastTwapUpdate'
  | 'cumFundingRate'
  | 'totalQuoteProvided'
  | 'totalBaseProvided'
  | 'cumFundingPerLpToken'
  | 'currentBlockTradeAmount'
  | 'totalTradingFeesGrowth'
  | 'totalLiquidityProvided'
  | 'totalBaseFeesGrowth'
  | 'totalQuoteFeesGrowth'
  | 'traderLongs'
  | 'traderShorts';

export type HourlyCandle = {
  id: Scalars['ID']['output'];
  market: Market;
  openTimestamp: Scalars['BigInt']['output'];
  closeTimestamp: Scalars['BigInt']['output'];
  high: Scalars['BigInt']['output'];
  low: Scalars['BigInt']['output'];
  open: Scalars['BigInt']['output'];
  close: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
  lastPrice: Price;
};

export type HourlyCandle_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  openTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  high?: InputMaybe<Scalars['BigInt']['input']>;
  high_not?: InputMaybe<Scalars['BigInt']['input']>;
  high_gt?: InputMaybe<Scalars['BigInt']['input']>;
  high_lt?: InputMaybe<Scalars['BigInt']['input']>;
  high_gte?: InputMaybe<Scalars['BigInt']['input']>;
  high_lte?: InputMaybe<Scalars['BigInt']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low?: InputMaybe<Scalars['BigInt']['input']>;
  low_not?: InputMaybe<Scalars['BigInt']['input']>;
  low_gt?: InputMaybe<Scalars['BigInt']['input']>;
  low_lt?: InputMaybe<Scalars['BigInt']['input']>;
  low_gte?: InputMaybe<Scalars['BigInt']['input']>;
  low_lte?: InputMaybe<Scalars['BigInt']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  open?: InputMaybe<Scalars['BigInt']['input']>;
  open_not?: InputMaybe<Scalars['BigInt']['input']>;
  open_gt?: InputMaybe<Scalars['BigInt']['input']>;
  open_lt?: InputMaybe<Scalars['BigInt']['input']>;
  open_gte?: InputMaybe<Scalars['BigInt']['input']>;
  open_lte?: InputMaybe<Scalars['BigInt']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close?: InputMaybe<Scalars['BigInt']['input']>;
  close_not?: InputMaybe<Scalars['BigInt']['input']>;
  close_gt?: InputMaybe<Scalars['BigInt']['input']>;
  close_lt?: InputMaybe<Scalars['BigInt']['input']>;
  close_gte?: InputMaybe<Scalars['BigInt']['input']>;
  close_lte?: InputMaybe<Scalars['BigInt']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastPrice?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not?: InputMaybe<Scalars['String']['input']>;
  lastPrice_gt?: InputMaybe<Scalars['String']['input']>;
  lastPrice_lt?: InputMaybe<Scalars['String']['input']>;
  lastPrice_gte?: InputMaybe<Scalars['String']['input']>;
  lastPrice_lte?: InputMaybe<Scalars['String']['input']>;
  lastPrice_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPrice_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPrice_contains?: InputMaybe<Scalars['String']['input']>;
  lastPrice_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_?: InputMaybe<Price_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<HourlyCandle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<HourlyCandle_filter>>>;
};

export type HourlyCandle_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'openTimestamp'
  | 'closeTimestamp'
  | 'high'
  | 'low'
  | 'open'
  | 'close'
  | 'volume'
  | 'lastPrice'
  | 'lastPrice__id'
  | 'lastPrice__timestamp'
  | 'lastPrice__value'
  | 'lastPrice__mark'
  | 'lastPrice__index'
  | 'lastPrice__indexTwap'
  | 'lastPrice__fundingRate'
  | 'lastPrice__cumFundingRate'
  | 'lastPrice__cumFundingPerLpToken'
  | 'lastPrice__baseVal'
  | 'lastPrice__quoteVal'
  | 'lastPrice__priceScale'
  | 'lastPrice__priceOracle'
  | 'lastPrice__quoteSupply'
  | 'lastPrice__baseSupply'
  | 'lastPrice__virtualPrice';

export type Liquidation = {
  id: Scalars['ID']['output'];
  market: Market;
  user: User;
  timestamp: Scalars['BigInt']['output'];
  liquidatee: User;
  profit: Scalars['BigInt']['output'];
  isTrader: Scalars['Boolean']['output'];
  pastPosition?: Maybe<PastPosition>;
  pastLpPosition?: Maybe<PastLpPosition>;
};

export type Liquidation_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidatee?: InputMaybe<Scalars['String']['input']>;
  liquidatee_not?: InputMaybe<Scalars['String']['input']>;
  liquidatee_gt?: InputMaybe<Scalars['String']['input']>;
  liquidatee_lt?: InputMaybe<Scalars['String']['input']>;
  liquidatee_gte?: InputMaybe<Scalars['String']['input']>;
  liquidatee_lte?: InputMaybe<Scalars['String']['input']>;
  liquidatee_in?: InputMaybe<Array<Scalars['String']['input']>>;
  liquidatee_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  liquidatee_contains?: InputMaybe<Scalars['String']['input']>;
  liquidatee_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidatee_not_contains?: InputMaybe<Scalars['String']['input']>;
  liquidatee_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidatee_starts_with?: InputMaybe<Scalars['String']['input']>;
  liquidatee_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidatee_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  liquidatee_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidatee_ends_with?: InputMaybe<Scalars['String']['input']>;
  liquidatee_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidatee_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  liquidatee_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidatee_?: InputMaybe<User_filter>;
  profit?: InputMaybe<Scalars['BigInt']['input']>;
  profit_not?: InputMaybe<Scalars['BigInt']['input']>;
  profit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  profit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  profit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  profit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  profit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  profit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  isTrader?: InputMaybe<Scalars['Boolean']['input']>;
  isTrader_not?: InputMaybe<Scalars['Boolean']['input']>;
  isTrader_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isTrader_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  pastPosition?: InputMaybe<Scalars['String']['input']>;
  pastPosition_not?: InputMaybe<Scalars['String']['input']>;
  pastPosition_gt?: InputMaybe<Scalars['String']['input']>;
  pastPosition_lt?: InputMaybe<Scalars['String']['input']>;
  pastPosition_gte?: InputMaybe<Scalars['String']['input']>;
  pastPosition_lte?: InputMaybe<Scalars['String']['input']>;
  pastPosition_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pastPosition_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pastPosition_contains?: InputMaybe<Scalars['String']['input']>;
  pastPosition_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pastPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  pastPosition_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pastPosition_starts_with?: InputMaybe<Scalars['String']['input']>;
  pastPosition_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pastPosition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pastPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pastPosition_ends_with?: InputMaybe<Scalars['String']['input']>;
  pastPosition_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pastPosition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pastPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pastPosition_?: InputMaybe<PastPosition_filter>;
  pastLpPosition?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_not?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_gt?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_lt?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_gte?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_lte?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pastLpPosition_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pastLpPosition_contains?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_starts_with?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_ends_with?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pastLpPosition_?: InputMaybe<PastLpPosition_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Liquidation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Liquidation_filter>>>;
};

export type Liquidation_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'user'
  | 'user__id'
  | 'user__tradingVolume'
  | 'timestamp'
  | 'liquidatee'
  | 'liquidatee__id'
  | 'liquidatee__tradingVolume'
  | 'profit'
  | 'isTrader'
  | 'pastPosition'
  | 'pastPosition__id'
  | 'pastPosition__timestamp'
  | 'pastPosition__closeTimestamp'
  | 'pastPosition__direction'
  | 'pastPosition__marginRatio'
  | 'pastPosition__openNotional'
  | 'pastPosition__positionSize'
  | 'pastPosition__initialCumFundingRate'
  | 'pastPosition__entryPrice'
  | 'pastPosition__wasLiquidated'
  | 'pastPosition__liquidationFee'
  | 'pastPosition__realizedProfit'
  | 'pastPosition__insurancePayed'
  | 'pastPosition__tradingFeesPayed'
  | 'pastPosition__fundingPayment'
  | 'pastLpPosition'
  | 'pastLpPosition__id'
  | 'pastLpPosition__timestamp'
  | 'pastLpPosition__closeTimestamp'
  | 'pastLpPosition__openNotional'
  | 'pastLpPosition__positionSize'
  | 'pastLpPosition__initialCumFundingPerLpToken'
  | 'pastLpPosition__weightedEntryPriceSum'
  | 'pastLpPosition__entryAmountSum'
  | 'pastLpPosition__weightedExitPriceSum'
  | 'pastLpPosition__exitAmountSum'
  | 'pastLpPosition__liquidityBalance'
  | 'pastLpPosition__totalTradingFeesGrowth'
  | 'pastLpPosition__totalQuoteFeesGrowth'
  | 'pastLpPosition__totalBaseFeesGrowth'
  | 'pastLpPosition__depositTime'
  | 'pastLpPosition__realizedProfit'
  | 'pastLpPosition__wasLiquidated'
  | 'pastLpPosition__liquidationFee'
  | 'pastLpPosition__fundingPayment'
  | 'pastLpPosition__tradingFeesPayed'
  | 'pastLpPosition__initialUsdValue';

export type Market = {
  id: Scalars['ID']['output'];
  perpetual: Scalars['Bytes']['output'];
  cryptoSwapPool: Scalars['Bytes']['output'];
  vaultAddress: Scalars['Bytes']['output'];
  minMargin: Scalars['BigInt']['output'];
  minMarginAtCreation: Scalars['BigInt']['output'];
  minPositiveOpenNotional: Scalars['BigInt']['output'];
  liquidationReward: Scalars['BigInt']['output'];
  insuranceRatio: Scalars['BigInt']['output'];
  liquidationRewardInsuranceShare: Scalars['BigInt']['output'];
  liquidationDiscount: Scalars['BigInt']['output'];
  nonUACollSeizureDiscount: Scalars['BigInt']['output'];
  uaDebtSeizureThreshold: Scalars['BigInt']['output'];
  riskWeight: Scalars['BigInt']['output'];
  maxLiquidityProvided: Scalars['BigInt']['output'];
  twapFrequency: Scalars['BigInt']['output'];
  sensitivity: Scalars['BigInt']['output'];
  maxBlockTradeAmount: Scalars['BigInt']['output'];
  insuranceFee: Scalars['BigInt']['output'];
  lpDebtCoef: Scalars['BigInt']['output'];
  lockPeriod: Scalars['BigInt']['output'];
  midFee: Scalars['BigInt']['output'];
  outFee: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  latestPrice: Price;
  earliestPrice: Scalars['BigInt']['output'];
  globalPositions?: Maybe<Array<GlobalPosition>>;
  globalPositionHourlyAggregates?: Maybe<Array<GlobalPositionHourlyAggregate>>;
  liquidityPositions?: Maybe<Array<CurrentLpPosition>>;
  prices: Array<Price>;
  positions: Array<CurrentPosition>;
  fundingPayments: Array<FundingPayment>;
  activities: Array<Activity>;
  minuteCandles: Array<MinuteCandle>;
  fifteenMinuteCandles: Array<FifteenMinuteCandle>;
  thirtyMinuteCandles: Array<ThirtyMinuteCandle>;
  hourlyCandles: Array<HourlyCandle>;
  quadHourlyCandles: Array<QuadHourlyCandle>;
  dailyCandles: Array<DailyCandle>;
};


export type MarketglobalPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlobalPosition_filter>;
};


export type MarketglobalPositionHourlyAggregatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalPositionHourlyAggregate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlobalPositionHourlyAggregate_filter>;
};


export type MarketliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrentLpPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrentLpPosition_filter>;
};


export type MarketpricesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Price_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Price_filter>;
};


export type MarketpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrentPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrentPosition_filter>;
};


export type MarketfundingPaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FundingPayment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FundingPayment_filter>;
};


export type MarketactivitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Activity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Activity_filter>;
};


export type MarketminuteCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MinuteCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MinuteCandle_filter>;
};


export type MarketfifteenMinuteCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FifteenMinuteCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FifteenMinuteCandle_filter>;
};


export type MarketthirtyMinuteCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ThirtyMinuteCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ThirtyMinuteCandle_filter>;
};


export type MarkethourlyCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HourlyCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HourlyCandle_filter>;
};


export type MarketquadHourlyCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<QuadHourlyCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<QuadHourlyCandle_filter>;
};


export type MarketdailyCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DailyCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyCandle_filter>;
};

export type Market_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  perpetual?: InputMaybe<Scalars['Bytes']['input']>;
  perpetual_not?: InputMaybe<Scalars['Bytes']['input']>;
  perpetual_gt?: InputMaybe<Scalars['Bytes']['input']>;
  perpetual_lt?: InputMaybe<Scalars['Bytes']['input']>;
  perpetual_gte?: InputMaybe<Scalars['Bytes']['input']>;
  perpetual_lte?: InputMaybe<Scalars['Bytes']['input']>;
  perpetual_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  perpetual_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  perpetual_contains?: InputMaybe<Scalars['Bytes']['input']>;
  perpetual_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  cryptoSwapPool?: InputMaybe<Scalars['Bytes']['input']>;
  cryptoSwapPool_not?: InputMaybe<Scalars['Bytes']['input']>;
  cryptoSwapPool_gt?: InputMaybe<Scalars['Bytes']['input']>;
  cryptoSwapPool_lt?: InputMaybe<Scalars['Bytes']['input']>;
  cryptoSwapPool_gte?: InputMaybe<Scalars['Bytes']['input']>;
  cryptoSwapPool_lte?: InputMaybe<Scalars['Bytes']['input']>;
  cryptoSwapPool_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  cryptoSwapPool_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  cryptoSwapPool_contains?: InputMaybe<Scalars['Bytes']['input']>;
  cryptoSwapPool_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vaultAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vaultAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  minMargin?: InputMaybe<Scalars['BigInt']['input']>;
  minMargin_not?: InputMaybe<Scalars['BigInt']['input']>;
  minMargin_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minMargin_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minMargin_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minMargin_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minMargin_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minMargin_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minMarginAtCreation?: InputMaybe<Scalars['BigInt']['input']>;
  minMarginAtCreation_not?: InputMaybe<Scalars['BigInt']['input']>;
  minMarginAtCreation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minMarginAtCreation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minMarginAtCreation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minMarginAtCreation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minMarginAtCreation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minMarginAtCreation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minPositiveOpenNotional?: InputMaybe<Scalars['BigInt']['input']>;
  minPositiveOpenNotional_not?: InputMaybe<Scalars['BigInt']['input']>;
  minPositiveOpenNotional_gt?: InputMaybe<Scalars['BigInt']['input']>;
  minPositiveOpenNotional_lt?: InputMaybe<Scalars['BigInt']['input']>;
  minPositiveOpenNotional_gte?: InputMaybe<Scalars['BigInt']['input']>;
  minPositiveOpenNotional_lte?: InputMaybe<Scalars['BigInt']['input']>;
  minPositiveOpenNotional_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  minPositiveOpenNotional_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationReward?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationReward_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationReward_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  insuranceRatio?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceRatio_not?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceRatio_gt?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceRatio_lt?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceRatio_gte?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceRatio_lte?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceRatio_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  insuranceRatio_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationRewardInsuranceShare?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardInsuranceShare_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardInsuranceShare_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardInsuranceShare_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardInsuranceShare_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardInsuranceShare_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationRewardInsuranceShare_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationRewardInsuranceShare_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationDiscount?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationDiscount_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationDiscount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationDiscount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationDiscount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationDiscount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationDiscount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationDiscount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonUACollSeizureDiscount?: InputMaybe<Scalars['BigInt']['input']>;
  nonUACollSeizureDiscount_not?: InputMaybe<Scalars['BigInt']['input']>;
  nonUACollSeizureDiscount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nonUACollSeizureDiscount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nonUACollSeizureDiscount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nonUACollSeizureDiscount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nonUACollSeizureDiscount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonUACollSeizureDiscount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uaDebtSeizureThreshold?: InputMaybe<Scalars['BigInt']['input']>;
  uaDebtSeizureThreshold_not?: InputMaybe<Scalars['BigInt']['input']>;
  uaDebtSeizureThreshold_gt?: InputMaybe<Scalars['BigInt']['input']>;
  uaDebtSeizureThreshold_lt?: InputMaybe<Scalars['BigInt']['input']>;
  uaDebtSeizureThreshold_gte?: InputMaybe<Scalars['BigInt']['input']>;
  uaDebtSeizureThreshold_lte?: InputMaybe<Scalars['BigInt']['input']>;
  uaDebtSeizureThreshold_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uaDebtSeizureThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  riskWeight?: InputMaybe<Scalars['BigInt']['input']>;
  riskWeight_not?: InputMaybe<Scalars['BigInt']['input']>;
  riskWeight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  riskWeight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  riskWeight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  riskWeight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  riskWeight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  riskWeight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxLiquidityProvided?: InputMaybe<Scalars['BigInt']['input']>;
  maxLiquidityProvided_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxLiquidityProvided_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxLiquidityProvided_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxLiquidityProvided_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxLiquidityProvided_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxLiquidityProvided_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxLiquidityProvided_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  twapFrequency?: InputMaybe<Scalars['BigInt']['input']>;
  twapFrequency_not?: InputMaybe<Scalars['BigInt']['input']>;
  twapFrequency_gt?: InputMaybe<Scalars['BigInt']['input']>;
  twapFrequency_lt?: InputMaybe<Scalars['BigInt']['input']>;
  twapFrequency_gte?: InputMaybe<Scalars['BigInt']['input']>;
  twapFrequency_lte?: InputMaybe<Scalars['BigInt']['input']>;
  twapFrequency_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  twapFrequency_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sensitivity?: InputMaybe<Scalars['BigInt']['input']>;
  sensitivity_not?: InputMaybe<Scalars['BigInt']['input']>;
  sensitivity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sensitivity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sensitivity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sensitivity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sensitivity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sensitivity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxBlockTradeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  maxBlockTradeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxBlockTradeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxBlockTradeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxBlockTradeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxBlockTradeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxBlockTradeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxBlockTradeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  insuranceFee?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  insuranceFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  insuranceFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpDebtCoef?: InputMaybe<Scalars['BigInt']['input']>;
  lpDebtCoef_not?: InputMaybe<Scalars['BigInt']['input']>;
  lpDebtCoef_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpDebtCoef_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpDebtCoef_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpDebtCoef_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpDebtCoef_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpDebtCoef_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  lockPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  lockPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lockPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lockPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lockPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lockPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  midFee?: InputMaybe<Scalars['BigInt']['input']>;
  midFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  midFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  midFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  midFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  midFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  midFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  midFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outFee?: InputMaybe<Scalars['BigInt']['input']>;
  outFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  outFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  outFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  outFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  outFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  outFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  outFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not?: InputMaybe<Scalars['String']['input']>;
  latestPrice_gt?: InputMaybe<Scalars['String']['input']>;
  latestPrice_lt?: InputMaybe<Scalars['String']['input']>;
  latestPrice_gte?: InputMaybe<Scalars['String']['input']>;
  latestPrice_lte?: InputMaybe<Scalars['String']['input']>;
  latestPrice_in?: InputMaybe<Array<Scalars['String']['input']>>;
  latestPrice_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  latestPrice_contains?: InputMaybe<Scalars['String']['input']>;
  latestPrice_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_contains?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_starts_with?: InputMaybe<Scalars['String']['input']>;
  latestPrice_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_ends_with?: InputMaybe<Scalars['String']['input']>;
  latestPrice_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_?: InputMaybe<Price_filter>;
  earliestPrice?: InputMaybe<Scalars['BigInt']['input']>;
  earliestPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  earliestPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  earliestPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  earliestPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  earliestPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  earliestPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  earliestPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  globalPositions_?: InputMaybe<GlobalPosition_filter>;
  globalPositionHourlyAggregates_?: InputMaybe<GlobalPositionHourlyAggregate_filter>;
  liquidityPositions_?: InputMaybe<CurrentLpPosition_filter>;
  prices_?: InputMaybe<Price_filter>;
  positions_?: InputMaybe<CurrentPosition_filter>;
  fundingPayments_?: InputMaybe<FundingPayment_filter>;
  activities_?: InputMaybe<Activity_filter>;
  minuteCandles_?: InputMaybe<MinuteCandle_filter>;
  fifteenMinuteCandles_?: InputMaybe<FifteenMinuteCandle_filter>;
  thirtyMinuteCandles_?: InputMaybe<ThirtyMinuteCandle_filter>;
  hourlyCandles_?: InputMaybe<HourlyCandle_filter>;
  quadHourlyCandles_?: InputMaybe<QuadHourlyCandle_filter>;
  dailyCandles_?: InputMaybe<DailyCandle_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Market_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Market_filter>>>;
};

export type Market_orderBy =
  | 'id'
  | 'perpetual'
  | 'cryptoSwapPool'
  | 'vaultAddress'
  | 'minMargin'
  | 'minMarginAtCreation'
  | 'minPositiveOpenNotional'
  | 'liquidationReward'
  | 'insuranceRatio'
  | 'liquidationRewardInsuranceShare'
  | 'liquidationDiscount'
  | 'nonUACollSeizureDiscount'
  | 'uaDebtSeizureThreshold'
  | 'riskWeight'
  | 'maxLiquidityProvided'
  | 'twapFrequency'
  | 'sensitivity'
  | 'maxBlockTradeAmount'
  | 'insuranceFee'
  | 'lpDebtCoef'
  | 'lockPeriod'
  | 'midFee'
  | 'outFee'
  | 'name'
  | 'symbol'
  | 'latestPrice'
  | 'latestPrice__id'
  | 'latestPrice__timestamp'
  | 'latestPrice__value'
  | 'latestPrice__mark'
  | 'latestPrice__index'
  | 'latestPrice__indexTwap'
  | 'latestPrice__fundingRate'
  | 'latestPrice__cumFundingRate'
  | 'latestPrice__cumFundingPerLpToken'
  | 'latestPrice__baseVal'
  | 'latestPrice__quoteVal'
  | 'latestPrice__priceScale'
  | 'latestPrice__priceOracle'
  | 'latestPrice__quoteSupply'
  | 'latestPrice__baseSupply'
  | 'latestPrice__virtualPrice'
  | 'earliestPrice'
  | 'globalPositions'
  | 'globalPositionHourlyAggregates'
  | 'liquidityPositions'
  | 'prices'
  | 'positions'
  | 'fundingPayments'
  | 'activities'
  | 'minuteCandles'
  | 'fifteenMinuteCandles'
  | 'thirtyMinuteCandles'
  | 'hourlyCandles'
  | 'quadHourlyCandles'
  | 'dailyCandles';

export type MinuteCandle = {
  id: Scalars['ID']['output'];
  market: Market;
  openTimestamp: Scalars['BigInt']['output'];
  closeTimestamp: Scalars['BigInt']['output'];
  high: Scalars['BigInt']['output'];
  low: Scalars['BigInt']['output'];
  open: Scalars['BigInt']['output'];
  close: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
  lastPrice: Price;
};

export type MinuteCandle_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  openTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  high?: InputMaybe<Scalars['BigInt']['input']>;
  high_not?: InputMaybe<Scalars['BigInt']['input']>;
  high_gt?: InputMaybe<Scalars['BigInt']['input']>;
  high_lt?: InputMaybe<Scalars['BigInt']['input']>;
  high_gte?: InputMaybe<Scalars['BigInt']['input']>;
  high_lte?: InputMaybe<Scalars['BigInt']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low?: InputMaybe<Scalars['BigInt']['input']>;
  low_not?: InputMaybe<Scalars['BigInt']['input']>;
  low_gt?: InputMaybe<Scalars['BigInt']['input']>;
  low_lt?: InputMaybe<Scalars['BigInt']['input']>;
  low_gte?: InputMaybe<Scalars['BigInt']['input']>;
  low_lte?: InputMaybe<Scalars['BigInt']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  open?: InputMaybe<Scalars['BigInt']['input']>;
  open_not?: InputMaybe<Scalars['BigInt']['input']>;
  open_gt?: InputMaybe<Scalars['BigInt']['input']>;
  open_lt?: InputMaybe<Scalars['BigInt']['input']>;
  open_gte?: InputMaybe<Scalars['BigInt']['input']>;
  open_lte?: InputMaybe<Scalars['BigInt']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close?: InputMaybe<Scalars['BigInt']['input']>;
  close_not?: InputMaybe<Scalars['BigInt']['input']>;
  close_gt?: InputMaybe<Scalars['BigInt']['input']>;
  close_lt?: InputMaybe<Scalars['BigInt']['input']>;
  close_gte?: InputMaybe<Scalars['BigInt']['input']>;
  close_lte?: InputMaybe<Scalars['BigInt']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastPrice?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not?: InputMaybe<Scalars['String']['input']>;
  lastPrice_gt?: InputMaybe<Scalars['String']['input']>;
  lastPrice_lt?: InputMaybe<Scalars['String']['input']>;
  lastPrice_gte?: InputMaybe<Scalars['String']['input']>;
  lastPrice_lte?: InputMaybe<Scalars['String']['input']>;
  lastPrice_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPrice_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPrice_contains?: InputMaybe<Scalars['String']['input']>;
  lastPrice_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_?: InputMaybe<Price_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MinuteCandle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MinuteCandle_filter>>>;
};

export type MinuteCandle_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'openTimestamp'
  | 'closeTimestamp'
  | 'high'
  | 'low'
  | 'open'
  | 'close'
  | 'volume'
  | 'lastPrice'
  | 'lastPrice__id'
  | 'lastPrice__timestamp'
  | 'lastPrice__value'
  | 'lastPrice__mark'
  | 'lastPrice__index'
  | 'lastPrice__indexTwap'
  | 'lastPrice__fundingRate'
  | 'lastPrice__cumFundingRate'
  | 'lastPrice__cumFundingPerLpToken'
  | 'lastPrice__baseVal'
  | 'lastPrice__quoteVal'
  | 'lastPrice__priceScale'
  | 'lastPrice__priceOracle'
  | 'lastPrice__quoteSupply'
  | 'lastPrice__baseSupply'
  | 'lastPrice__virtualPrice';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type PastLpPosition = {
  id: Scalars['ID']['output'];
  market: Market;
  user: User;
  timestamp: Scalars['BigInt']['output'];
  closeTimestamp: Scalars['BigInt']['output'];
  openNotional: Scalars['BigInt']['output'];
  positionSize: Scalars['BigInt']['output'];
  initialCumFundingPerLpToken: Scalars['BigInt']['output'];
  weightedEntryPriceSum: Scalars['BigInt']['output'];
  entryAmountSum: Scalars['BigInt']['output'];
  weightedExitPriceSum: Scalars['BigInt']['output'];
  exitAmountSum: Scalars['BigInt']['output'];
  liquidityBalance: Scalars['BigInt']['output'];
  totalTradingFeesGrowth: Scalars['BigInt']['output'];
  totalQuoteFeesGrowth: Scalars['BigInt']['output'];
  totalBaseFeesGrowth: Scalars['BigInt']['output'];
  depositTime: Scalars['BigInt']['output'];
  realizedProfit: Scalars['BigInt']['output'];
  wasLiquidated: Scalars['Boolean']['output'];
  liquidationFee?: Maybe<Scalars['BigInt']['output']>;
  fundingPayment: Scalars['BigInt']['output'];
  tradingFeesPayed: Scalars['BigInt']['output'];
  initialUsdValue: Scalars['BigInt']['output'];
};

export type PastLpPosition_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openNotional?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_not?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openNotional_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionSize?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialCumFundingPerLpToken?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingPerLpToken_not?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingPerLpToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingPerLpToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingPerLpToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingPerLpToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingPerLpToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialCumFundingPerLpToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedEntryPriceSum?: InputMaybe<Scalars['BigInt']['input']>;
  weightedEntryPriceSum_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedEntryPriceSum_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedEntryPriceSum_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedEntryPriceSum_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedEntryPriceSum_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedEntryPriceSum_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedEntryPriceSum_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  entryAmountSum?: InputMaybe<Scalars['BigInt']['input']>;
  entryAmountSum_not?: InputMaybe<Scalars['BigInt']['input']>;
  entryAmountSum_gt?: InputMaybe<Scalars['BigInt']['input']>;
  entryAmountSum_lt?: InputMaybe<Scalars['BigInt']['input']>;
  entryAmountSum_gte?: InputMaybe<Scalars['BigInt']['input']>;
  entryAmountSum_lte?: InputMaybe<Scalars['BigInt']['input']>;
  entryAmountSum_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  entryAmountSum_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedExitPriceSum?: InputMaybe<Scalars['BigInt']['input']>;
  weightedExitPriceSum_not?: InputMaybe<Scalars['BigInt']['input']>;
  weightedExitPriceSum_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedExitPriceSum_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weightedExitPriceSum_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedExitPriceSum_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weightedExitPriceSum_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weightedExitPriceSum_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exitAmountSum?: InputMaybe<Scalars['BigInt']['input']>;
  exitAmountSum_not?: InputMaybe<Scalars['BigInt']['input']>;
  exitAmountSum_gt?: InputMaybe<Scalars['BigInt']['input']>;
  exitAmountSum_lt?: InputMaybe<Scalars['BigInt']['input']>;
  exitAmountSum_gte?: InputMaybe<Scalars['BigInt']['input']>;
  exitAmountSum_lte?: InputMaybe<Scalars['BigInt']['input']>;
  exitAmountSum_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  exitAmountSum_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityBalance?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTradingFeesGrowth?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalTradingFeesGrowth_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalTradingFeesGrowth_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQuoteFeesGrowth?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalQuoteFeesGrowth_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalQuoteFeesGrowth_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBaseFeesGrowth?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalBaseFeesGrowth_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalBaseFeesGrowth_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositTime?: InputMaybe<Scalars['BigInt']['input']>;
  depositTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  depositTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  depositTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  depositTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  depositTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  depositTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedProfit?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_not?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedProfit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wasLiquidated?: InputMaybe<Scalars['Boolean']['input']>;
  wasLiquidated_not?: InputMaybe<Scalars['Boolean']['input']>;
  wasLiquidated_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  wasLiquidated_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  liquidationFee?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingPayment?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingFeesPayed?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_not?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingFeesPayed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialUsdValue?: InputMaybe<Scalars['BigInt']['input']>;
  initialUsdValue_not?: InputMaybe<Scalars['BigInt']['input']>;
  initialUsdValue_gt?: InputMaybe<Scalars['BigInt']['input']>;
  initialUsdValue_lt?: InputMaybe<Scalars['BigInt']['input']>;
  initialUsdValue_gte?: InputMaybe<Scalars['BigInt']['input']>;
  initialUsdValue_lte?: InputMaybe<Scalars['BigInt']['input']>;
  initialUsdValue_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialUsdValue_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PastLpPosition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PastLpPosition_filter>>>;
};

export type PastLpPosition_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'user'
  | 'user__id'
  | 'user__tradingVolume'
  | 'timestamp'
  | 'closeTimestamp'
  | 'openNotional'
  | 'positionSize'
  | 'initialCumFundingPerLpToken'
  | 'weightedEntryPriceSum'
  | 'entryAmountSum'
  | 'weightedExitPriceSum'
  | 'exitAmountSum'
  | 'liquidityBalance'
  | 'totalTradingFeesGrowth'
  | 'totalQuoteFeesGrowth'
  | 'totalBaseFeesGrowth'
  | 'depositTime'
  | 'realizedProfit'
  | 'wasLiquidated'
  | 'liquidationFee'
  | 'fundingPayment'
  | 'tradingFeesPayed'
  | 'initialUsdValue';

export type PastPosition = {
  id: Scalars['ID']['output'];
  market: Market;
  user: User;
  timestamp: Scalars['BigInt']['output'];
  closeTimestamp?: Maybe<Scalars['BigInt']['output']>;
  direction: Scalars['Int']['output'];
  marginRatio: Scalars['BigInt']['output'];
  openNotional: Scalars['BigInt']['output'];
  positionSize: Scalars['BigInt']['output'];
  initialCumFundingRate: Scalars['BigInt']['output'];
  entryPrice: Scalars['BigInt']['output'];
  wasLiquidated: Scalars['Boolean']['output'];
  liquidationFee?: Maybe<Scalars['BigInt']['output']>;
  realizedProfit: Scalars['BigInt']['output'];
  insurancePayed: Scalars['BigInt']['output'];
  tradingFeesPayed: Scalars['BigInt']['output'];
  fundingPayment: Scalars['BigInt']['output'];
};

export type PastPosition_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  direction?: InputMaybe<Scalars['Int']['input']>;
  direction_not?: InputMaybe<Scalars['Int']['input']>;
  direction_gt?: InputMaybe<Scalars['Int']['input']>;
  direction_lt?: InputMaybe<Scalars['Int']['input']>;
  direction_gte?: InputMaybe<Scalars['Int']['input']>;
  direction_lte?: InputMaybe<Scalars['Int']['input']>;
  direction_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  direction_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  marginRatio?: InputMaybe<Scalars['BigInt']['input']>;
  marginRatio_not?: InputMaybe<Scalars['BigInt']['input']>;
  marginRatio_gt?: InputMaybe<Scalars['BigInt']['input']>;
  marginRatio_lt?: InputMaybe<Scalars['BigInt']['input']>;
  marginRatio_gte?: InputMaybe<Scalars['BigInt']['input']>;
  marginRatio_lte?: InputMaybe<Scalars['BigInt']['input']>;
  marginRatio_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marginRatio_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openNotional?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_not?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openNotional_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openNotional_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionSize?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_not?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_gt?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_lt?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_gte?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_lte?: InputMaybe<Scalars['BigInt']['input']>;
  positionSize_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  positionSize_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialCumFundingRate?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  initialCumFundingRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  initialCumFundingRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  entryPrice?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  entryPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  entryPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wasLiquidated?: InputMaybe<Scalars['Boolean']['input']>;
  wasLiquidated_not?: InputMaybe<Scalars['Boolean']['input']>;
  wasLiquidated_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  wasLiquidated_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  liquidationFee?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidationFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidationFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedProfit?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_not?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  realizedProfit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  realizedProfit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  insurancePayed?: InputMaybe<Scalars['BigInt']['input']>;
  insurancePayed_not?: InputMaybe<Scalars['BigInt']['input']>;
  insurancePayed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  insurancePayed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  insurancePayed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  insurancePayed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  insurancePayed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  insurancePayed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingFeesPayed?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_not?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingFeesPayed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingFeesPayed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingPayment?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingPayment_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PastPosition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PastPosition_filter>>>;
};

export type PastPosition_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'user'
  | 'user__id'
  | 'user__tradingVolume'
  | 'timestamp'
  | 'closeTimestamp'
  | 'direction'
  | 'marginRatio'
  | 'openNotional'
  | 'positionSize'
  | 'initialCumFundingRate'
  | 'entryPrice'
  | 'wasLiquidated'
  | 'liquidationFee'
  | 'realizedProfit'
  | 'insurancePayed'
  | 'tradingFeesPayed'
  | 'fundingPayment';

export type PastTokenBalance = {
  id: Scalars['ID']['output'];
  user: User;
  token: Token;
  amount: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  closeTimestamp: Scalars['BigInt']['output'];
};

export type PastTokenBalance_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_filter>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PastTokenBalance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PastTokenBalance_filter>>>;
};

export type PastTokenBalance_orderBy =
  | 'id'
  | 'user'
  | 'user__id'
  | 'user__tradingVolume'
  | 'token'
  | 'token__id'
  | 'token__address'
  | 'token__name'
  | 'token__symbol'
  | 'token__aggregator'
  | 'token__decimals'
  | 'token__weight'
  | 'token__maxAmount'
  | 'token__depositedAmount'
  | 'token__uniqueDepositors'
  | 'amount'
  | 'timestamp'
  | 'closeTimestamp';

export type Price = {
  id: Scalars['ID']['output'];
  market: Market;
  timestamp: Scalars['BigInt']['output'];
  value: Scalars['BigInt']['output'];
  mark: Scalars['BigInt']['output'];
  index: Scalars['BigInt']['output'];
  indexTwap: Scalars['BigInt']['output'];
  fundingRate: Scalars['BigInt']['output'];
  cumFundingRate: Scalars['BigInt']['output'];
  cumFundingPerLpToken: Scalars['BigInt']['output'];
  baseVal: Scalars['BigInt']['output'];
  quoteVal: Scalars['BigInt']['output'];
  priceScale: Scalars['BigInt']['output'];
  priceOracle: Scalars['BigInt']['output'];
  quoteSupply: Scalars['BigInt']['output'];
  baseSupply: Scalars['BigInt']['output'];
  virtualPrice: Scalars['BigInt']['output'];
};

export type Price_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mark?: InputMaybe<Scalars['BigInt']['input']>;
  mark_not?: InputMaybe<Scalars['BigInt']['input']>;
  mark_gt?: InputMaybe<Scalars['BigInt']['input']>;
  mark_lt?: InputMaybe<Scalars['BigInt']['input']>;
  mark_gte?: InputMaybe<Scalars['BigInt']['input']>;
  mark_lte?: InputMaybe<Scalars['BigInt']['input']>;
  mark_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mark_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index?: InputMaybe<Scalars['BigInt']['input']>;
  index_not?: InputMaybe<Scalars['BigInt']['input']>;
  index_gt?: InputMaybe<Scalars['BigInt']['input']>;
  index_lt?: InputMaybe<Scalars['BigInt']['input']>;
  index_gte?: InputMaybe<Scalars['BigInt']['input']>;
  index_lte?: InputMaybe<Scalars['BigInt']['input']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexTwap?: InputMaybe<Scalars['BigInt']['input']>;
  indexTwap_not?: InputMaybe<Scalars['BigInt']['input']>;
  indexTwap_gt?: InputMaybe<Scalars['BigInt']['input']>;
  indexTwap_lt?: InputMaybe<Scalars['BigInt']['input']>;
  indexTwap_gte?: InputMaybe<Scalars['BigInt']['input']>;
  indexTwap_lte?: InputMaybe<Scalars['BigInt']['input']>;
  indexTwap_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  indexTwap_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingRate?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  fundingRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  fundingRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumFundingRate?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumFundingRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumFundingPerLpToken?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_not?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  cumFundingPerLpToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumFundingPerLpToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  baseVal?: InputMaybe<Scalars['BigInt']['input']>;
  baseVal_not?: InputMaybe<Scalars['BigInt']['input']>;
  baseVal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  baseVal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  baseVal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  baseVal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  baseVal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  baseVal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteVal?: InputMaybe<Scalars['BigInt']['input']>;
  quoteVal_not?: InputMaybe<Scalars['BigInt']['input']>;
  quoteVal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quoteVal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quoteVal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quoteVal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quoteVal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteVal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  priceScale?: InputMaybe<Scalars['BigInt']['input']>;
  priceScale_not?: InputMaybe<Scalars['BigInt']['input']>;
  priceScale_gt?: InputMaybe<Scalars['BigInt']['input']>;
  priceScale_lt?: InputMaybe<Scalars['BigInt']['input']>;
  priceScale_gte?: InputMaybe<Scalars['BigInt']['input']>;
  priceScale_lte?: InputMaybe<Scalars['BigInt']['input']>;
  priceScale_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  priceScale_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  priceOracle?: InputMaybe<Scalars['BigInt']['input']>;
  priceOracle_not?: InputMaybe<Scalars['BigInt']['input']>;
  priceOracle_gt?: InputMaybe<Scalars['BigInt']['input']>;
  priceOracle_lt?: InputMaybe<Scalars['BigInt']['input']>;
  priceOracle_gte?: InputMaybe<Scalars['BigInt']['input']>;
  priceOracle_lte?: InputMaybe<Scalars['BigInt']['input']>;
  priceOracle_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  priceOracle_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteSupply?: InputMaybe<Scalars['BigInt']['input']>;
  quoteSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  quoteSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quoteSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quoteSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quoteSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quoteSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  baseSupply?: InputMaybe<Scalars['BigInt']['input']>;
  baseSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  baseSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  baseSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  baseSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  baseSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  baseSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  baseSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  virtualPrice?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  virtualPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  virtualPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Price_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Price_filter>>>;
};

export type Price_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'timestamp'
  | 'value'
  | 'mark'
  | 'index'
  | 'indexTwap'
  | 'fundingRate'
  | 'cumFundingRate'
  | 'cumFundingPerLpToken'
  | 'baseVal'
  | 'quoteVal'
  | 'priceScale'
  | 'priceOracle'
  | 'quoteSupply'
  | 'baseSupply'
  | 'virtualPrice';

export type QuadHourlyCandle = {
  id: Scalars['ID']['output'];
  market: Market;
  openTimestamp: Scalars['BigInt']['output'];
  closeTimestamp: Scalars['BigInt']['output'];
  high: Scalars['BigInt']['output'];
  low: Scalars['BigInt']['output'];
  open: Scalars['BigInt']['output'];
  close: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
  lastPrice: Price;
};

export type QuadHourlyCandle_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  openTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  high?: InputMaybe<Scalars['BigInt']['input']>;
  high_not?: InputMaybe<Scalars['BigInt']['input']>;
  high_gt?: InputMaybe<Scalars['BigInt']['input']>;
  high_lt?: InputMaybe<Scalars['BigInt']['input']>;
  high_gte?: InputMaybe<Scalars['BigInt']['input']>;
  high_lte?: InputMaybe<Scalars['BigInt']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low?: InputMaybe<Scalars['BigInt']['input']>;
  low_not?: InputMaybe<Scalars['BigInt']['input']>;
  low_gt?: InputMaybe<Scalars['BigInt']['input']>;
  low_lt?: InputMaybe<Scalars['BigInt']['input']>;
  low_gte?: InputMaybe<Scalars['BigInt']['input']>;
  low_lte?: InputMaybe<Scalars['BigInt']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  open?: InputMaybe<Scalars['BigInt']['input']>;
  open_not?: InputMaybe<Scalars['BigInt']['input']>;
  open_gt?: InputMaybe<Scalars['BigInt']['input']>;
  open_lt?: InputMaybe<Scalars['BigInt']['input']>;
  open_gte?: InputMaybe<Scalars['BigInt']['input']>;
  open_lte?: InputMaybe<Scalars['BigInt']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close?: InputMaybe<Scalars['BigInt']['input']>;
  close_not?: InputMaybe<Scalars['BigInt']['input']>;
  close_gt?: InputMaybe<Scalars['BigInt']['input']>;
  close_lt?: InputMaybe<Scalars['BigInt']['input']>;
  close_gte?: InputMaybe<Scalars['BigInt']['input']>;
  close_lte?: InputMaybe<Scalars['BigInt']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastPrice?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not?: InputMaybe<Scalars['String']['input']>;
  lastPrice_gt?: InputMaybe<Scalars['String']['input']>;
  lastPrice_lt?: InputMaybe<Scalars['String']['input']>;
  lastPrice_gte?: InputMaybe<Scalars['String']['input']>;
  lastPrice_lte?: InputMaybe<Scalars['String']['input']>;
  lastPrice_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPrice_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPrice_contains?: InputMaybe<Scalars['String']['input']>;
  lastPrice_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_?: InputMaybe<Price_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<QuadHourlyCandle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<QuadHourlyCandle_filter>>>;
};

export type QuadHourlyCandle_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'openTimestamp'
  | 'closeTimestamp'
  | 'high'
  | 'low'
  | 'open'
  | 'close'
  | 'volume'
  | 'lastPrice'
  | 'lastPrice__id'
  | 'lastPrice__timestamp'
  | 'lastPrice__value'
  | 'lastPrice__mark'
  | 'lastPrice__index'
  | 'lastPrice__indexTwap'
  | 'lastPrice__fundingRate'
  | 'lastPrice__cumFundingRate'
  | 'lastPrice__cumFundingPerLpToken'
  | 'lastPrice__baseVal'
  | 'lastPrice__quoteVal'
  | 'lastPrice__priceScale'
  | 'lastPrice__priceOracle'
  | 'lastPrice__quoteSupply'
  | 'lastPrice__baseSupply'
  | 'lastPrice__virtualPrice';

export type Query = {
  globalMetricStore?: Maybe<GlobalMetricStore>;
  globalMetricStores: Array<GlobalMetricStore>;
  totalTVL?: Maybe<TotalTVL>;
  totalTVLs: Array<TotalTVL>;
  tvlHourlyAggregate?: Maybe<TvlHourlyAggregate>;
  tvlHourlyAggregates: Array<TvlHourlyAggregate>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  globalPosition?: Maybe<GlobalPosition>;
  globalPositions: Array<GlobalPosition>;
  globalPositionHourlyAggregate?: Maybe<GlobalPositionHourlyAggregate>;
  globalPositionHourlyAggregates: Array<GlobalPositionHourlyAggregate>;
  user?: Maybe<User>;
  users: Array<User>;
  currentLpPosition?: Maybe<CurrentLpPosition>;
  currentLpPositions: Array<CurrentLpPosition>;
  pastLpPosition?: Maybe<PastLpPosition>;
  pastLpPositions: Array<PastLpPosition>;
  currentPosition?: Maybe<CurrentPosition>;
  currentPositions: Array<CurrentPosition>;
  pastPosition?: Maybe<PastPosition>;
  pastPositions: Array<PastPosition>;
  fundingPayment?: Maybe<FundingPayment>;
  fundingPayments: Array<FundingPayment>;
  activity?: Maybe<Activity>;
  activities: Array<Activity>;
  liquidation?: Maybe<Liquidation>;
  liquidations: Array<Liquidation>;
  price?: Maybe<Price>;
  prices: Array<Price>;
  vault?: Maybe<Vault>;
  vaults: Array<Vault>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  reserveToken?: Maybe<ReserveToken>;
  reserveTokens: Array<ReserveToken>;
  currentTokenBalance?: Maybe<CurrentTokenBalance>;
  currentTokenBalances: Array<CurrentTokenBalance>;
  pastTokenBalance?: Maybe<PastTokenBalance>;
  pastTokenBalances: Array<PastTokenBalance>;
  answerUpdated?: Maybe<AnswerUpdated>;
  answerUpdateds: Array<AnswerUpdated>;
  minuteCandle?: Maybe<MinuteCandle>;
  minuteCandles: Array<MinuteCandle>;
  fifteenMinuteCandle?: Maybe<FifteenMinuteCandle>;
  fifteenMinuteCandles: Array<FifteenMinuteCandle>;
  thirtyMinuteCandle?: Maybe<ThirtyMinuteCandle>;
  thirtyMinuteCandles: Array<ThirtyMinuteCandle>;
  hourlyCandle?: Maybe<HourlyCandle>;
  hourlyCandles: Array<HourlyCandle>;
  quadHourlyCandle?: Maybe<QuadHourlyCandle>;
  quadHourlyCandles: Array<QuadHourlyCandle>;
  dailyCandle?: Maybe<DailyCandle>;
  dailyCandles: Array<DailyCandle>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryglobalMetricStoreArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryglobalMetricStoresArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalMetricStore_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlobalMetricStore_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytotalTVLArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytotalTVLsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TotalTVL_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TotalTVL_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytvlHourlyAggregateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytvlHourlyAggregatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TvlHourlyAggregate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TvlHourlyAggregate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Market_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryglobalPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryglobalPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlobalPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryglobalPositionHourlyAggregateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryglobalPositionHourlyAggregatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalPositionHourlyAggregate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlobalPositionHourlyAggregate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycurrentLpPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycurrentLpPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrentLpPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrentLpPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypastLpPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypastLpPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PastLpPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PastLpPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycurrentPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycurrentPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrentPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrentPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypastPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypastPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PastPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PastPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfundingPaymentArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfundingPaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FundingPayment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FundingPayment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactivityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactivitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Activity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Activity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Liquidation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypriceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypricesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Price_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Price_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvaultArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvaultsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vault_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vault_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreserveTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryreserveTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReserveToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ReserveToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycurrentTokenBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycurrentTokenBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrentTokenBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrentTokenBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypastTokenBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypastTokenBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PastTokenBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PastTokenBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryanswerUpdatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryanswerUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AnswerUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AnswerUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryminuteCandleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryminuteCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MinuteCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MinuteCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfifteenMinuteCandleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfifteenMinuteCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FifteenMinuteCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FifteenMinuteCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerythirtyMinuteCandleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerythirtyMinuteCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ThirtyMinuteCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ThirtyMinuteCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhourlyCandleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryhourlyCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HourlyCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HourlyCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryquadHourlyCandleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryquadHourlyCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<QuadHourlyCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<QuadHourlyCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydailyCandleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydailyCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DailyCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type ReserveToken = {
  id: Scalars['ID']['output'];
  address: Scalars['Bytes']['output'];
  name: Scalars['String']['output'];
  tokenIdx: Scalars['BigInt']['output'];
  symbol: Scalars['String']['output'];
  decimals: Scalars['BigInt']['output'];
  mintCap: Scalars['BigInt']['output'];
};

export type ReserveToken_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIdx?: InputMaybe<Scalars['BigInt']['input']>;
  tokenIdx_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenIdx_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenIdx_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenIdx_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenIdx_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenIdx_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIdx_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decimals?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mintCap?: InputMaybe<Scalars['BigInt']['input']>;
  mintCap_not?: InputMaybe<Scalars['BigInt']['input']>;
  mintCap_gt?: InputMaybe<Scalars['BigInt']['input']>;
  mintCap_lt?: InputMaybe<Scalars['BigInt']['input']>;
  mintCap_gte?: InputMaybe<Scalars['BigInt']['input']>;
  mintCap_lte?: InputMaybe<Scalars['BigInt']['input']>;
  mintCap_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mintCap_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ReserveToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ReserveToken_filter>>>;
};

export type ReserveToken_orderBy =
  | 'id'
  | 'address'
  | 'name'
  | 'tokenIdx'
  | 'symbol'
  | 'decimals'
  | 'mintCap';

export type Subscription = {
  globalMetricStore?: Maybe<GlobalMetricStore>;
  globalMetricStores: Array<GlobalMetricStore>;
  totalTVL?: Maybe<TotalTVL>;
  totalTVLs: Array<TotalTVL>;
  tvlHourlyAggregate?: Maybe<TvlHourlyAggregate>;
  tvlHourlyAggregates: Array<TvlHourlyAggregate>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  globalPosition?: Maybe<GlobalPosition>;
  globalPositions: Array<GlobalPosition>;
  globalPositionHourlyAggregate?: Maybe<GlobalPositionHourlyAggregate>;
  globalPositionHourlyAggregates: Array<GlobalPositionHourlyAggregate>;
  user?: Maybe<User>;
  users: Array<User>;
  currentLpPosition?: Maybe<CurrentLpPosition>;
  currentLpPositions: Array<CurrentLpPosition>;
  pastLpPosition?: Maybe<PastLpPosition>;
  pastLpPositions: Array<PastLpPosition>;
  currentPosition?: Maybe<CurrentPosition>;
  currentPositions: Array<CurrentPosition>;
  pastPosition?: Maybe<PastPosition>;
  pastPositions: Array<PastPosition>;
  fundingPayment?: Maybe<FundingPayment>;
  fundingPayments: Array<FundingPayment>;
  activity?: Maybe<Activity>;
  activities: Array<Activity>;
  liquidation?: Maybe<Liquidation>;
  liquidations: Array<Liquidation>;
  price?: Maybe<Price>;
  prices: Array<Price>;
  vault?: Maybe<Vault>;
  vaults: Array<Vault>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
  reserveToken?: Maybe<ReserveToken>;
  reserveTokens: Array<ReserveToken>;
  currentTokenBalance?: Maybe<CurrentTokenBalance>;
  currentTokenBalances: Array<CurrentTokenBalance>;
  pastTokenBalance?: Maybe<PastTokenBalance>;
  pastTokenBalances: Array<PastTokenBalance>;
  answerUpdated?: Maybe<AnswerUpdated>;
  answerUpdateds: Array<AnswerUpdated>;
  minuteCandle?: Maybe<MinuteCandle>;
  minuteCandles: Array<MinuteCandle>;
  fifteenMinuteCandle?: Maybe<FifteenMinuteCandle>;
  fifteenMinuteCandles: Array<FifteenMinuteCandle>;
  thirtyMinuteCandle?: Maybe<ThirtyMinuteCandle>;
  thirtyMinuteCandles: Array<ThirtyMinuteCandle>;
  hourlyCandle?: Maybe<HourlyCandle>;
  hourlyCandles: Array<HourlyCandle>;
  quadHourlyCandle?: Maybe<QuadHourlyCandle>;
  quadHourlyCandles: Array<QuadHourlyCandle>;
  dailyCandle?: Maybe<DailyCandle>;
  dailyCandles: Array<DailyCandle>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionglobalMetricStoreArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionglobalMetricStoresArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalMetricStore_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlobalMetricStore_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontotalTVLArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontotalTVLsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TotalTVL_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TotalTVL_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontvlHourlyAggregateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontvlHourlyAggregatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TvlHourlyAggregate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TvlHourlyAggregate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Market_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionglobalPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionglobalPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlobalPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionglobalPositionHourlyAggregateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionglobalPositionHourlyAggregatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GlobalPositionHourlyAggregate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<GlobalPositionHourlyAggregate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncurrentLpPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncurrentLpPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrentLpPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrentLpPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpastLpPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpastLpPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PastLpPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PastLpPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncurrentPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncurrentPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrentPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrentPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpastPositionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpastPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PastPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PastPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfundingPaymentArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfundingPaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FundingPayment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FundingPayment_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactivityArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactivitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Activity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Activity_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Liquidation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpriceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpricesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Price_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Price_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvaultArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvaultsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vault_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Vault_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreserveTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionreserveTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReserveToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ReserveToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncurrentTokenBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncurrentTokenBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrentTokenBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrentTokenBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpastTokenBalanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpastTokenBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PastTokenBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PastTokenBalance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionanswerUpdatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionanswerUpdatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AnswerUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AnswerUpdated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionminuteCandleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionminuteCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MinuteCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MinuteCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfifteenMinuteCandleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfifteenMinuteCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FifteenMinuteCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FifteenMinuteCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionthirtyMinuteCandleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionthirtyMinuteCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ThirtyMinuteCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ThirtyMinuteCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhourlyCandleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionhourlyCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<HourlyCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<HourlyCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionquadHourlyCandleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionquadHourlyCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<QuadHourlyCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<QuadHourlyCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondailyCandleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondailyCandlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<DailyCandle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DailyCandle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type ThirtyMinuteCandle = {
  id: Scalars['ID']['output'];
  market: Market;
  openTimestamp: Scalars['BigInt']['output'];
  closeTimestamp: Scalars['BigInt']['output'];
  high: Scalars['BigInt']['output'];
  low: Scalars['BigInt']['output'];
  open: Scalars['BigInt']['output'];
  close: Scalars['BigInt']['output'];
  volume: Scalars['BigInt']['output'];
  lastPrice: Price;
};

export type ThirtyMinuteCandle_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  market?: InputMaybe<Scalars['String']['input']>;
  market_not?: InputMaybe<Scalars['String']['input']>;
  market_gt?: InputMaybe<Scalars['String']['input']>;
  market_lt?: InputMaybe<Scalars['String']['input']>;
  market_gte?: InputMaybe<Scalars['String']['input']>;
  market_lte?: InputMaybe<Scalars['String']['input']>;
  market_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  market_contains?: InputMaybe<Scalars['String']['input']>;
  market_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_contains?: InputMaybe<Scalars['String']['input']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  market_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  market_?: InputMaybe<Market_filter>;
  openTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  high?: InputMaybe<Scalars['BigInt']['input']>;
  high_not?: InputMaybe<Scalars['BigInt']['input']>;
  high_gt?: InputMaybe<Scalars['BigInt']['input']>;
  high_lt?: InputMaybe<Scalars['BigInt']['input']>;
  high_gte?: InputMaybe<Scalars['BigInt']['input']>;
  high_lte?: InputMaybe<Scalars['BigInt']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  high_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low?: InputMaybe<Scalars['BigInt']['input']>;
  low_not?: InputMaybe<Scalars['BigInt']['input']>;
  low_gt?: InputMaybe<Scalars['BigInt']['input']>;
  low_lt?: InputMaybe<Scalars['BigInt']['input']>;
  low_gte?: InputMaybe<Scalars['BigInt']['input']>;
  low_lte?: InputMaybe<Scalars['BigInt']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  open?: InputMaybe<Scalars['BigInt']['input']>;
  open_not?: InputMaybe<Scalars['BigInt']['input']>;
  open_gt?: InputMaybe<Scalars['BigInt']['input']>;
  open_lt?: InputMaybe<Scalars['BigInt']['input']>;
  open_gte?: InputMaybe<Scalars['BigInt']['input']>;
  open_lte?: InputMaybe<Scalars['BigInt']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  open_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close?: InputMaybe<Scalars['BigInt']['input']>;
  close_not?: InputMaybe<Scalars['BigInt']['input']>;
  close_gt?: InputMaybe<Scalars['BigInt']['input']>;
  close_lt?: InputMaybe<Scalars['BigInt']['input']>;
  close_gte?: InputMaybe<Scalars['BigInt']['input']>;
  close_lte?: InputMaybe<Scalars['BigInt']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  close_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastPrice?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not?: InputMaybe<Scalars['String']['input']>;
  lastPrice_gt?: InputMaybe<Scalars['String']['input']>;
  lastPrice_lt?: InputMaybe<Scalars['String']['input']>;
  lastPrice_gte?: InputMaybe<Scalars['String']['input']>;
  lastPrice_lte?: InputMaybe<Scalars['String']['input']>;
  lastPrice_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPrice_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lastPrice_contains?: InputMaybe<Scalars['String']['input']>;
  lastPrice_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lastPrice_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lastPrice_?: InputMaybe<Price_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ThirtyMinuteCandle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ThirtyMinuteCandle_filter>>>;
};

export type ThirtyMinuteCandle_orderBy =
  | 'id'
  | 'market'
  | 'market__id'
  | 'market__perpetual'
  | 'market__cryptoSwapPool'
  | 'market__vaultAddress'
  | 'market__minMargin'
  | 'market__minMarginAtCreation'
  | 'market__minPositiveOpenNotional'
  | 'market__liquidationReward'
  | 'market__insuranceRatio'
  | 'market__liquidationRewardInsuranceShare'
  | 'market__liquidationDiscount'
  | 'market__nonUACollSeizureDiscount'
  | 'market__uaDebtSeizureThreshold'
  | 'market__riskWeight'
  | 'market__maxLiquidityProvided'
  | 'market__twapFrequency'
  | 'market__sensitivity'
  | 'market__maxBlockTradeAmount'
  | 'market__insuranceFee'
  | 'market__lpDebtCoef'
  | 'market__lockPeriod'
  | 'market__midFee'
  | 'market__outFee'
  | 'market__name'
  | 'market__symbol'
  | 'market__earliestPrice'
  | 'openTimestamp'
  | 'closeTimestamp'
  | 'high'
  | 'low'
  | 'open'
  | 'close'
  | 'volume'
  | 'lastPrice'
  | 'lastPrice__id'
  | 'lastPrice__timestamp'
  | 'lastPrice__value'
  | 'lastPrice__mark'
  | 'lastPrice__index'
  | 'lastPrice__indexTwap'
  | 'lastPrice__fundingRate'
  | 'lastPrice__cumFundingRate'
  | 'lastPrice__cumFundingPerLpToken'
  | 'lastPrice__baseVal'
  | 'lastPrice__quoteVal'
  | 'lastPrice__priceScale'
  | 'lastPrice__priceOracle'
  | 'lastPrice__quoteSupply'
  | 'lastPrice__baseSupply'
  | 'lastPrice__virtualPrice';

export type Token = {
  id: Scalars['ID']['output'];
  address: Scalars['Bytes']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  vault: Vault;
  aggregator: Scalars['Bytes']['output'];
  decimals: Scalars['BigInt']['output'];
  weight: Scalars['BigInt']['output'];
  maxAmount: Scalars['BigInt']['output'];
  depositedAmount: Scalars['BigInt']['output'];
  uniqueDepositors: Scalars['BigInt']['output'];
  prices: Array<AnswerUpdated>;
};


export type TokenpricesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AnswerUpdated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AnswerUpdated_filter>;
};

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<Vault_filter>;
  aggregator?: InputMaybe<Scalars['Bytes']['input']>;
  aggregator_not?: InputMaybe<Scalars['Bytes']['input']>;
  aggregator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  aggregator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  aggregator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  aggregator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  aggregator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  aggregator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  aggregator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  aggregator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  decimals?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weight?: InputMaybe<Scalars['BigInt']['input']>;
  weight_not?: InputMaybe<Scalars['BigInt']['input']>;
  weight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxAmount?: InputMaybe<Scalars['BigInt']['input']>;
  maxAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  maxAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maxAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maxAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maxAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maxAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  depositedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  depositedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  depositedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  depositedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  depositedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  depositedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uniqueDepositors?: InputMaybe<Scalars['BigInt']['input']>;
  uniqueDepositors_not?: InputMaybe<Scalars['BigInt']['input']>;
  uniqueDepositors_gt?: InputMaybe<Scalars['BigInt']['input']>;
  uniqueDepositors_lt?: InputMaybe<Scalars['BigInt']['input']>;
  uniqueDepositors_gte?: InputMaybe<Scalars['BigInt']['input']>;
  uniqueDepositors_lte?: InputMaybe<Scalars['BigInt']['input']>;
  uniqueDepositors_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uniqueDepositors_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  prices_?: InputMaybe<AnswerUpdated_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'address'
  | 'name'
  | 'symbol'
  | 'vault'
  | 'vault__id'
  | 'vault__oracle'
  | 'aggregator'
  | 'decimals'
  | 'weight'
  | 'maxAmount'
  | 'depositedAmount'
  | 'uniqueDepositors'
  | 'prices';

export type TotalTVL = {
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  amount: Scalars['BigInt']['output'];
};

export type TotalTVL_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TotalTVL_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TotalTVL_filter>>>;
};

export type TotalTVL_orderBy =
  | 'id'
  | 'timestamp'
  | 'amount';

export type TvlHourlyAggregate = {
  id: Scalars['ID']['output'];
  openTimestamp: Scalars['BigInt']['output'];
  closeTimestamp: Scalars['BigInt']['output'];
  amount: Scalars['BigInt']['output'];
};

export type TvlHourlyAggregate_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  openTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  openTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  openTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  closeTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  closeTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TvlHourlyAggregate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TvlHourlyAggregate_filter>>>;
};

export type TvlHourlyAggregate_orderBy =
  | 'id'
  | 'openTimestamp'
  | 'closeTimestamp'
  | 'amount';

export type User = {
  id: Scalars['ID']['output'];
  tradingVolume: Scalars['BigInt']['output'];
  currentPositions: Array<CurrentPosition>;
  pastPositions: Array<PastPosition>;
  currentLpPositions: Array<CurrentLpPosition>;
  pastLpPositions: Array<PastLpPosition>;
  currentTokenBalances: Array<CurrentTokenBalance>;
  pastTokenBalances: Array<PastTokenBalance>;
  liquidation: Array<Liquidation>;
  activities: Array<Activity>;
  fundingPayments: Array<FundingPayment>;
};


export type UsercurrentPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrentPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrentPosition_filter>;
};


export type UserpastPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PastPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PastPosition_filter>;
};


export type UsercurrentLpPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrentLpPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrentLpPosition_filter>;
};


export type UserpastLpPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PastLpPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PastLpPosition_filter>;
};


export type UsercurrentTokenBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrentTokenBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrentTokenBalance_filter>;
};


export type UserpastTokenBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PastTokenBalance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PastTokenBalance_filter>;
};


export type UserliquidationArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Liquidation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidation_filter>;
};


export type UseractivitiesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Activity_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Activity_filter>;
};


export type UserfundingPaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FundingPayment_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FundingPayment_filter>;
};

export type User_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tradingVolume?: InputMaybe<Scalars['BigInt']['input']>;
  tradingVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  tradingVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tradingVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tradingVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradingVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currentPositions_?: InputMaybe<CurrentPosition_filter>;
  pastPositions_?: InputMaybe<PastPosition_filter>;
  currentLpPositions_?: InputMaybe<CurrentLpPosition_filter>;
  pastLpPositions_?: InputMaybe<PastLpPosition_filter>;
  currentTokenBalances_?: InputMaybe<CurrentTokenBalance_filter>;
  pastTokenBalances_?: InputMaybe<PastTokenBalance_filter>;
  liquidation_?: InputMaybe<Liquidation_filter>;
  activities_?: InputMaybe<Activity_filter>;
  fundingPayments_?: InputMaybe<FundingPayment_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'tradingVolume'
  | 'currentPositions'
  | 'pastPositions'
  | 'currentLpPositions'
  | 'pastLpPositions'
  | 'currentTokenBalances'
  | 'pastTokenBalances'
  | 'liquidation'
  | 'activities'
  | 'fundingPayments';

export type Vault = {
  id: Scalars['ID']['output'];
  tokens?: Maybe<Array<Token>>;
  oracle: Scalars['String']['output'];
};


export type VaulttokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};

export type Vault_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  tokens_?: InputMaybe<Token_filter>;
  oracle?: InputMaybe<Scalars['String']['input']>;
  oracle_not?: InputMaybe<Scalars['String']['input']>;
  oracle_gt?: InputMaybe<Scalars['String']['input']>;
  oracle_lt?: InputMaybe<Scalars['String']['input']>;
  oracle_gte?: InputMaybe<Scalars['String']['input']>;
  oracle_lte?: InputMaybe<Scalars['String']['input']>;
  oracle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oracle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  oracle_contains?: InputMaybe<Scalars['String']['input']>;
  oracle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_not_contains?: InputMaybe<Scalars['String']['input']>;
  oracle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_starts_with?: InputMaybe<Scalars['String']['input']>;
  oracle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  oracle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_ends_with?: InputMaybe<Scalars['String']['input']>;
  oracle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oracle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  oracle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Vault_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Vault_filter>>>;
};

export type Vault_orderBy =
  | 'id'
  | 'tokens'
  | 'oracle';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  globalMetricStore: InContextSdkMethod<Query['globalMetricStore'], QueryglobalMetricStoreArgs, MeshContext>,
  /** null **/
  globalMetricStores: InContextSdkMethod<Query['globalMetricStores'], QueryglobalMetricStoresArgs, MeshContext>,
  /** null **/
  totalTVL: InContextSdkMethod<Query['totalTVL'], QuerytotalTVLArgs, MeshContext>,
  /** null **/
  totalTVLs: InContextSdkMethod<Query['totalTVLs'], QuerytotalTVLsArgs, MeshContext>,
  /** null **/
  tvlHourlyAggregate: InContextSdkMethod<Query['tvlHourlyAggregate'], QuerytvlHourlyAggregateArgs, MeshContext>,
  /** null **/
  tvlHourlyAggregates: InContextSdkMethod<Query['tvlHourlyAggregates'], QuerytvlHourlyAggregatesArgs, MeshContext>,
  /** null **/
  market: InContextSdkMethod<Query['market'], QuerymarketArgs, MeshContext>,
  /** null **/
  markets: InContextSdkMethod<Query['markets'], QuerymarketsArgs, MeshContext>,
  /** null **/
  globalPosition: InContextSdkMethod<Query['globalPosition'], QueryglobalPositionArgs, MeshContext>,
  /** null **/
  globalPositions: InContextSdkMethod<Query['globalPositions'], QueryglobalPositionsArgs, MeshContext>,
  /** null **/
  globalPositionHourlyAggregate: InContextSdkMethod<Query['globalPositionHourlyAggregate'], QueryglobalPositionHourlyAggregateArgs, MeshContext>,
  /** null **/
  globalPositionHourlyAggregates: InContextSdkMethod<Query['globalPositionHourlyAggregates'], QueryglobalPositionHourlyAggregatesArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  currentLpPosition: InContextSdkMethod<Query['currentLpPosition'], QuerycurrentLpPositionArgs, MeshContext>,
  /** null **/
  currentLpPositions: InContextSdkMethod<Query['currentLpPositions'], QuerycurrentLpPositionsArgs, MeshContext>,
  /** null **/
  pastLpPosition: InContextSdkMethod<Query['pastLpPosition'], QuerypastLpPositionArgs, MeshContext>,
  /** null **/
  pastLpPositions: InContextSdkMethod<Query['pastLpPositions'], QuerypastLpPositionsArgs, MeshContext>,
  /** null **/
  currentPosition: InContextSdkMethod<Query['currentPosition'], QuerycurrentPositionArgs, MeshContext>,
  /** null **/
  currentPositions: InContextSdkMethod<Query['currentPositions'], QuerycurrentPositionsArgs, MeshContext>,
  /** null **/
  pastPosition: InContextSdkMethod<Query['pastPosition'], QuerypastPositionArgs, MeshContext>,
  /** null **/
  pastPositions: InContextSdkMethod<Query['pastPositions'], QuerypastPositionsArgs, MeshContext>,
  /** null **/
  fundingPayment: InContextSdkMethod<Query['fundingPayment'], QueryfundingPaymentArgs, MeshContext>,
  /** null **/
  fundingPayments: InContextSdkMethod<Query['fundingPayments'], QueryfundingPaymentsArgs, MeshContext>,
  /** null **/
  activity: InContextSdkMethod<Query['activity'], QueryactivityArgs, MeshContext>,
  /** null **/
  activities: InContextSdkMethod<Query['activities'], QueryactivitiesArgs, MeshContext>,
  /** null **/
  liquidation: InContextSdkMethod<Query['liquidation'], QueryliquidationArgs, MeshContext>,
  /** null **/
  liquidations: InContextSdkMethod<Query['liquidations'], QueryliquidationsArgs, MeshContext>,
  /** null **/
  price: InContextSdkMethod<Query['price'], QuerypriceArgs, MeshContext>,
  /** null **/
  prices: InContextSdkMethod<Query['prices'], QuerypricesArgs, MeshContext>,
  /** null **/
  vault: InContextSdkMethod<Query['vault'], QueryvaultArgs, MeshContext>,
  /** null **/
  vaults: InContextSdkMethod<Query['vaults'], QueryvaultsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  reserveToken: InContextSdkMethod<Query['reserveToken'], QueryreserveTokenArgs, MeshContext>,
  /** null **/
  reserveTokens: InContextSdkMethod<Query['reserveTokens'], QueryreserveTokensArgs, MeshContext>,
  /** null **/
  currentTokenBalance: InContextSdkMethod<Query['currentTokenBalance'], QuerycurrentTokenBalanceArgs, MeshContext>,
  /** null **/
  currentTokenBalances: InContextSdkMethod<Query['currentTokenBalances'], QuerycurrentTokenBalancesArgs, MeshContext>,
  /** null **/
  pastTokenBalance: InContextSdkMethod<Query['pastTokenBalance'], QuerypastTokenBalanceArgs, MeshContext>,
  /** null **/
  pastTokenBalances: InContextSdkMethod<Query['pastTokenBalances'], QuerypastTokenBalancesArgs, MeshContext>,
  /** null **/
  answerUpdated: InContextSdkMethod<Query['answerUpdated'], QueryanswerUpdatedArgs, MeshContext>,
  /** null **/
  answerUpdateds: InContextSdkMethod<Query['answerUpdateds'], QueryanswerUpdatedsArgs, MeshContext>,
  /** null **/
  minuteCandle: InContextSdkMethod<Query['minuteCandle'], QueryminuteCandleArgs, MeshContext>,
  /** null **/
  minuteCandles: InContextSdkMethod<Query['minuteCandles'], QueryminuteCandlesArgs, MeshContext>,
  /** null **/
  fifteenMinuteCandle: InContextSdkMethod<Query['fifteenMinuteCandle'], QueryfifteenMinuteCandleArgs, MeshContext>,
  /** null **/
  fifteenMinuteCandles: InContextSdkMethod<Query['fifteenMinuteCandles'], QueryfifteenMinuteCandlesArgs, MeshContext>,
  /** null **/
  thirtyMinuteCandle: InContextSdkMethod<Query['thirtyMinuteCandle'], QuerythirtyMinuteCandleArgs, MeshContext>,
  /** null **/
  thirtyMinuteCandles: InContextSdkMethod<Query['thirtyMinuteCandles'], QuerythirtyMinuteCandlesArgs, MeshContext>,
  /** null **/
  hourlyCandle: InContextSdkMethod<Query['hourlyCandle'], QueryhourlyCandleArgs, MeshContext>,
  /** null **/
  hourlyCandles: InContextSdkMethod<Query['hourlyCandles'], QueryhourlyCandlesArgs, MeshContext>,
  /** null **/
  quadHourlyCandle: InContextSdkMethod<Query['quadHourlyCandle'], QueryquadHourlyCandleArgs, MeshContext>,
  /** null **/
  quadHourlyCandles: InContextSdkMethod<Query['quadHourlyCandles'], QueryquadHourlyCandlesArgs, MeshContext>,
  /** null **/
  dailyCandle: InContextSdkMethod<Query['dailyCandle'], QuerydailyCandleArgs, MeshContext>,
  /** null **/
  dailyCandles: InContextSdkMethod<Query['dailyCandles'], QuerydailyCandlesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  globalMetricStore: InContextSdkMethod<Subscription['globalMetricStore'], SubscriptionglobalMetricStoreArgs, MeshContext>,
  /** null **/
  globalMetricStores: InContextSdkMethod<Subscription['globalMetricStores'], SubscriptionglobalMetricStoresArgs, MeshContext>,
  /** null **/
  totalTVL: InContextSdkMethod<Subscription['totalTVL'], SubscriptiontotalTVLArgs, MeshContext>,
  /** null **/
  totalTVLs: InContextSdkMethod<Subscription['totalTVLs'], SubscriptiontotalTVLsArgs, MeshContext>,
  /** null **/
  tvlHourlyAggregate: InContextSdkMethod<Subscription['tvlHourlyAggregate'], SubscriptiontvlHourlyAggregateArgs, MeshContext>,
  /** null **/
  tvlHourlyAggregates: InContextSdkMethod<Subscription['tvlHourlyAggregates'], SubscriptiontvlHourlyAggregatesArgs, MeshContext>,
  /** null **/
  market: InContextSdkMethod<Subscription['market'], SubscriptionmarketArgs, MeshContext>,
  /** null **/
  markets: InContextSdkMethod<Subscription['markets'], SubscriptionmarketsArgs, MeshContext>,
  /** null **/
  globalPosition: InContextSdkMethod<Subscription['globalPosition'], SubscriptionglobalPositionArgs, MeshContext>,
  /** null **/
  globalPositions: InContextSdkMethod<Subscription['globalPositions'], SubscriptionglobalPositionsArgs, MeshContext>,
  /** null **/
  globalPositionHourlyAggregate: InContextSdkMethod<Subscription['globalPositionHourlyAggregate'], SubscriptionglobalPositionHourlyAggregateArgs, MeshContext>,
  /** null **/
  globalPositionHourlyAggregates: InContextSdkMethod<Subscription['globalPositionHourlyAggregates'], SubscriptionglobalPositionHourlyAggregatesArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  currentLpPosition: InContextSdkMethod<Subscription['currentLpPosition'], SubscriptioncurrentLpPositionArgs, MeshContext>,
  /** null **/
  currentLpPositions: InContextSdkMethod<Subscription['currentLpPositions'], SubscriptioncurrentLpPositionsArgs, MeshContext>,
  /** null **/
  pastLpPosition: InContextSdkMethod<Subscription['pastLpPosition'], SubscriptionpastLpPositionArgs, MeshContext>,
  /** null **/
  pastLpPositions: InContextSdkMethod<Subscription['pastLpPositions'], SubscriptionpastLpPositionsArgs, MeshContext>,
  /** null **/
  currentPosition: InContextSdkMethod<Subscription['currentPosition'], SubscriptioncurrentPositionArgs, MeshContext>,
  /** null **/
  currentPositions: InContextSdkMethod<Subscription['currentPositions'], SubscriptioncurrentPositionsArgs, MeshContext>,
  /** null **/
  pastPosition: InContextSdkMethod<Subscription['pastPosition'], SubscriptionpastPositionArgs, MeshContext>,
  /** null **/
  pastPositions: InContextSdkMethod<Subscription['pastPositions'], SubscriptionpastPositionsArgs, MeshContext>,
  /** null **/
  fundingPayment: InContextSdkMethod<Subscription['fundingPayment'], SubscriptionfundingPaymentArgs, MeshContext>,
  /** null **/
  fundingPayments: InContextSdkMethod<Subscription['fundingPayments'], SubscriptionfundingPaymentsArgs, MeshContext>,
  /** null **/
  activity: InContextSdkMethod<Subscription['activity'], SubscriptionactivityArgs, MeshContext>,
  /** null **/
  activities: InContextSdkMethod<Subscription['activities'], SubscriptionactivitiesArgs, MeshContext>,
  /** null **/
  liquidation: InContextSdkMethod<Subscription['liquidation'], SubscriptionliquidationArgs, MeshContext>,
  /** null **/
  liquidations: InContextSdkMethod<Subscription['liquidations'], SubscriptionliquidationsArgs, MeshContext>,
  /** null **/
  price: InContextSdkMethod<Subscription['price'], SubscriptionpriceArgs, MeshContext>,
  /** null **/
  prices: InContextSdkMethod<Subscription['prices'], SubscriptionpricesArgs, MeshContext>,
  /** null **/
  vault: InContextSdkMethod<Subscription['vault'], SubscriptionvaultArgs, MeshContext>,
  /** null **/
  vaults: InContextSdkMethod<Subscription['vaults'], SubscriptionvaultsArgs, MeshContext>,
  /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  reserveToken: InContextSdkMethod<Subscription['reserveToken'], SubscriptionreserveTokenArgs, MeshContext>,
  /** null **/
  reserveTokens: InContextSdkMethod<Subscription['reserveTokens'], SubscriptionreserveTokensArgs, MeshContext>,
  /** null **/
  currentTokenBalance: InContextSdkMethod<Subscription['currentTokenBalance'], SubscriptioncurrentTokenBalanceArgs, MeshContext>,
  /** null **/
  currentTokenBalances: InContextSdkMethod<Subscription['currentTokenBalances'], SubscriptioncurrentTokenBalancesArgs, MeshContext>,
  /** null **/
  pastTokenBalance: InContextSdkMethod<Subscription['pastTokenBalance'], SubscriptionpastTokenBalanceArgs, MeshContext>,
  /** null **/
  pastTokenBalances: InContextSdkMethod<Subscription['pastTokenBalances'], SubscriptionpastTokenBalancesArgs, MeshContext>,
  /** null **/
  answerUpdated: InContextSdkMethod<Subscription['answerUpdated'], SubscriptionanswerUpdatedArgs, MeshContext>,
  /** null **/
  answerUpdateds: InContextSdkMethod<Subscription['answerUpdateds'], SubscriptionanswerUpdatedsArgs, MeshContext>,
  /** null **/
  minuteCandle: InContextSdkMethod<Subscription['minuteCandle'], SubscriptionminuteCandleArgs, MeshContext>,
  /** null **/
  minuteCandles: InContextSdkMethod<Subscription['minuteCandles'], SubscriptionminuteCandlesArgs, MeshContext>,
  /** null **/
  fifteenMinuteCandle: InContextSdkMethod<Subscription['fifteenMinuteCandle'], SubscriptionfifteenMinuteCandleArgs, MeshContext>,
  /** null **/
  fifteenMinuteCandles: InContextSdkMethod<Subscription['fifteenMinuteCandles'], SubscriptionfifteenMinuteCandlesArgs, MeshContext>,
  /** null **/
  thirtyMinuteCandle: InContextSdkMethod<Subscription['thirtyMinuteCandle'], SubscriptionthirtyMinuteCandleArgs, MeshContext>,
  /** null **/
  thirtyMinuteCandles: InContextSdkMethod<Subscription['thirtyMinuteCandles'], SubscriptionthirtyMinuteCandlesArgs, MeshContext>,
  /** null **/
  hourlyCandle: InContextSdkMethod<Subscription['hourlyCandle'], SubscriptionhourlyCandleArgs, MeshContext>,
  /** null **/
  hourlyCandles: InContextSdkMethod<Subscription['hourlyCandles'], SubscriptionhourlyCandlesArgs, MeshContext>,
  /** null **/
  quadHourlyCandle: InContextSdkMethod<Subscription['quadHourlyCandle'], SubscriptionquadHourlyCandleArgs, MeshContext>,
  /** null **/
  quadHourlyCandles: InContextSdkMethod<Subscription['quadHourlyCandles'], SubscriptionquadHourlyCandlesArgs, MeshContext>,
  /** null **/
  dailyCandle: InContextSdkMethod<Subscription['dailyCandle'], SubscriptiondailyCandleArgs, MeshContext>,
  /** null **/
  dailyCandles: InContextSdkMethod<Subscription['dailyCandles'], SubscriptiondailyCandlesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["increment-test"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
