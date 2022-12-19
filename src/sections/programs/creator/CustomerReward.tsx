import { Card } from "common-ui";
import NumericInput from "components/NumericInput";
import Tab from "components/Tab";
import { useFormContext } from "react-hook-form";
import { DiscountUnit } from "types/programs";

const UNIT_MAPPING = {
  $: DiscountUnit.FixedAmount,
  "%": DiscountUnit.Percentage,
} as Record<string, DiscountUnit>;

export default function CustomerReward() {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const setSelectedLabel = (data: string) => {
    setValue("leadRewardUnit", UNIT_MAPPING[data]);
  };

  return (
    <div className="flex flex-col mt-12">
      <div className="font-normal text-gray-600">Step 2 of 4</div>
      <h2 className="text-xl font-medium font-display">
        Set discount rules for referred customers
      </h2>

      <Card className="flex flex-col py-6 my-2">
        <div className="flex flex-wrap items-center gap-2">
          <div className="grow">
            <div className="font-semibold">Discount Amount</div>
            <div className="text-sm opacity-[.72]">
              This discount is for customers who are referred to your brand by a
              Superfiliate
            </div>
          </div>

          <div className="flex gap-2 justify-end w-full lg:w-auto">
            <Tab labels={["$", "%"]} onChange={setSelectedLabel} />

            <NumericInput
              className="w-24"
              placeholder={
                watch("leadRewardUnit") === DiscountUnit.FixedAmount
                  ? "$ 0.00"
                  : "0.00 %"
              }
              format={
                watch("leadRewardUnit") === DiscountUnit.FixedAmount
                  ? "currency"
                  : "percentage"
              }
              max={99.99}
              type="number"
              status={errors.leadRewardValue ? "error" : "default"}
            />
          </div>
        </div>

        <div className="font-semibold mb-2 mt-8">Rules</div>

        <Card className="flex-1 flex text-sm items-center">
          <div className="flex flex-col grow">
            <div className="font-semibold">Minimum cart value</div>

            <div className="flex items-center w-full">
              <div className="opacity-[.72]">
                Order total that qualifies for a successful referral
              </div>
            </div>
          </div>

          <div className="flex gap-2 text-base">
            <Tab labels={["$"]} />

            <NumericInput
              className="w-24"
              placeholder="$ 0.00"
              format="currency"
              max={99.99}
              status={errors.minimumSubtotalValue ? "error" : "default"}
            />
          </div>
        </Card>
      </Card>
    </div>
  );
}
