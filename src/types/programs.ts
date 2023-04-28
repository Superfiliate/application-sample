export enum ProgramTypes {
  Referral = "on_site",
  Creators = "influencers",
}

export enum RewardCurrency {
  StoreCredit = "store_credit",
  Payouts = "payouts",
}
export enum DiscountUnit {
  FixedAmount = "fixed_amount",
  Percentage = "percentage",
}
export enum RewardType {
  FixedAmount = "fixed_amount",
  Comission = "comission",
}

export interface ProgramFormInput {
  /* Program Type */
  programType: ProgramTypes;
  title: string;

  /* Customer Reward */
  leadRewardUnit: DiscountUnit;
  leadRewardValue: number;
  minimumSubtotalValue: number;

  /* Superfiliate Reward */
  rewardCurrency?: RewardCurrency;
  rewardType: RewardType;
  value: number;

  /* Loyalty Reward */
  cashbackValue: number;
  cashbackDuration: number;
}
