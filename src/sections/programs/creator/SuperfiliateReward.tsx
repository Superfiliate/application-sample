import { Transition } from "@headlessui/react";
import { Card, Select } from "common-ui";
import NumericInput from "components/NumericInput";
import Tab from "components/Tab";
import { Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { RewardCurrency, RewardType } from "types/programs";

const CONFIGURABLE_CURRENCIES: RewardCurrency[] = [
  RewardCurrency.StoreCredit,
  RewardCurrency.Payouts,
];

const CURRENCIES_LABEL = {
  "Store credit": RewardCurrency.StoreCredit,
  Payouts: RewardCurrency.Payouts,
};

const UNIT_MAPPING = {
  $: RewardType.FixedAmount,
  "%": RewardType.Comission,
} as Record<string, RewardType>;

export default function SuperfiliateReward() {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const setSelected = (currency: RewardCurrency | null) => {
    setValue("rewardCurrency", currency);
  };
  const setSelectedLabel = (data: string) => {
    setValue("rewardType", UNIT_MAPPING[data]);
  };

  return (
    <div className="flex flex-col mt-12">
      <div className="font-normal text-gray-600">Step 3 of 4</div>
      <h2 className="text-xl font-medium font-display">
        Set Superfiliate reward
      </h2>

      <Card className="flex flex-col py-6 my-2 gap-8">
        <div className="flex flex-wrap items-center gap-2">
          <div className="grow">
            <div className="font-semibold">Reward currency</div>
            <div className="text-sm opacity-[.72]">
              Superfiliates will be able to access their rewards in their portal
            </div>
          </div>

          <div className="w-full flex justify-end lg:w-auto">
            <Select
              items={CURRENCIES_LABEL}
              onChange={setSelected}
              initialValue={watch("rewardCurrency")}
            />
          </div>
        </div>

        <Transition
          as={Fragment}
          show={CONFIGURABLE_CURRENCIES.includes(watch("rewardCurrency") || "")}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transform duration-400 transition ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="flex flex-wrap items-center gap-2">
            <div className="grow">
              <div className="font-semibold">Reward value</div>
              <div className="text-sm opacity-[.72]">
                Set flate rate rewards or a commission based structure
              </div>
            </div>

            <div className="flex gap-2 justify-end w-full lg:w-auto">
              <Tab labels={["$", "%"]} onChange={setSelectedLabel} />

              <NumericInput
                className="w-24"
                placeholder={
                  watch("rewardType") === RewardType.FixedAmount
                    ? "$ 0.00"
                    : "0.00 %"
                }
                format={
                  watch("rewardType") === RewardType.FixedAmount
                    ? "currency"
                    : "percentage"
                }
                max={99.99}
                type="number"
                status={errors.value ? "error" : "default"}
              />
            </div>
          </div>
        </Transition>
      </Card>
    </div>
  );
}
