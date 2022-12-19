import { Transition } from "@headlessui/react";
import { Card, Toggle } from "common-ui";
import NumericInput from "components/NumericInput";
import { Fragment, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function LoyaltyReward() {
  const {
    formState: { errors },
  } = useFormContext();

  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex flex-col mt-12">
      <div className="font-normal text-gray-600">Step 4 of 4</div>
      <h2 className="text-xl font-medium font-display">
        Set loyalty rewards - suprise and delight
      </h2>

      <Card className="flex flex-col py-6 my-2 gap-8">
        <div className="flex items-center gap-1">
          <div className="grow">
            <div className="font-header">Cashback</div>
            <div className="text-sm opacity-[.72]">
              Set a percentage of cashback that customers will earn on purchases
            </div>
          </div>

          <div className="w-full flex justify-end lg:w-auto">
            <Toggle onChange={setEnabled} />
          </div>
        </div>

        <Transition
          as={Fragment}
          show={!enabled}
          enter="transform transition duration-[400ms]"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transform duration-400 transition ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="border-t">
            <div className="flex flex-wrap items-center gap-2 mt-6 xl:flex-nowrap">
              <div className="grow">
                <div className="font-semibold">Cashback Credit</div>
                <div className="text-sm opacity-[.72]">
                  When enabled, all customers will begin earning cashback on
                  their purchases. We recommend a value between 5-10% with an
                  expiration between 3-12 months
                </div>
              </div>

              <div className="flex gap-2 justify-end w-full lg:w-auto">
                <NumericInput
                  className="w-24"
                  placeholder="0.00 %"
                  format="percentage"
                  max={99.99}
                  status={errors.cashbackValue ? "error" : "default"}
                />
              </div>
            </div>

            <div className="font-semibold mb-2 mt-8">Rules</div>
            <Card className="flex flex-wrap text-sm gap-2 lg:flex-nowrap">
              <div className="flex flex-col w-5/6">
                <div className="font-semibold">Cashback Credit Expiration</div>

                <div className="flex items-center w-full">
                  <div className="opacity-[.72]">
                    Set the time window customers have to use their cashback
                    credit after their purchase
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-center justify-end font-semibold w-full lg:w-full">
                <NumericInput
                  className="w-16 font-semibold"
                  placeholder="365"
                  format="integer"
                  max={999}
                  status={errors.cashbackDuration ? "error" : "default"}
                />

                <span className="w-fit">days</span>
              </div>
            </Card>
          </div>
        </Transition>
      </Card>
    </div>
  );
}
