import { RadioGroup } from "@headlessui/react";
import fetchReferralPrograms from "backend";
import cn from "classnames";
import { Card, Input } from "common-ui";
import sdk from "lib/gql/sdk";
import { useEffect, useState } from "react";
import { PersonPlus, Star } from "react-bootstrap-icons";
import { useFormContext } from "react-hook-form";
import ReactTooltip from "react-tooltip";
import { ProgramTypes } from "types/programs";

const DEFAULT_PROGRAM_TITLES = {
  [ProgramTypes.Referral]: "Referral & Loyalty",
  [ProgramTypes.Creators]: "Creators",
};

export default function ProgramType() {
  const {
    control,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const [selected, setSelected] = useState<ProgramTypes | null>(null);
  const { data } = sdk.useCampaigns();
  const referralPrograms = fetchReferralPrograms();

  // if Referral Program Type is selected and shop already have one active, deselect it
  useEffect(() => {
    if (selected != ProgramTypes.Referral || !!referralPrograms.length) return;

    setSelected(null);
  }, [referralPrograms]);

  const onProgramSelected = (program: ProgramTypes) => {
    setValue("programType", program);
    setValue("title", DEFAULT_PROGRAM_TITLES[program]);
  };

  return (
    <div className="flex flex-col">
      {!!referralPrograms.length && (
        <ReactTooltip
          place="bottom"
          effect="solid"
          className="max-w-[240px] !px-[6px] !py-2 font-normal text-md"
        />
      )}

      <div className="font-normal text-gray-600">Step 1 of 4</div>
      <h2 className="text-xl font-medium font-display">
        Let’s get this program started 🕺
      </h2>

      <Card className="flex flex-col py-6 my-2">
        <div className="font-semibold mb-2">Select program type</div>

        <RadioGroup
          className="flex flex-wrap gap-2"
          value={watch("programType")}
          onChange={onProgramSelected}
        >
          <RadioGroup.Option
            value={ProgramTypes.Referral}
            key={ProgramTypes.Referral}
            className="w-full lg:w-2/6"
            disabled={!!referralPrograms.length}
          >
            {({ checked }) => (
              <Card
                className={cn(
                  "group flex flex-col text-sm text-left h-full border-1  relative",
                  {
                    "!border-success": checked,
                    "cursor-pointer": !referralPrograms.length,
                  }
                )}
              >
                <div
                  className={cn({
                    "opacity-50": !!referralPrograms.length,
                  })}
                  data-tip={
                    "You cannot have two referral and loyalty programs running at the same time."
                  }
                >
                  <div className="absolute right-0 top-0 rounded-full bg-gray-50 border border-transparent mr-4 mt-4 py-1 px-2">
                    {referralPrograms.length} / 1
                  </div>
                  <PersonPlus className="h-7 w-7 mb-2 text-success-500" />

                  <b className="font-semibold">Referral & Loyalty</b>

                  <div className="flex flex-col gap-2">
                    <p className="font-normal opacity-[.72]">
                      Empower your customers with personalized experiences to
                      share with their friends and rewards to drive retention.
                    </p>

                    <p className="font-normal opacity-[.72]">
                      <b>Rewards Include:</b> Store credit, cashback, gifting
                      (coming soon), merch (coming soon)
                    </p>

                    <p className="font-normal opacity-[.72]">
                      <b>Experiences Include:</b> Program Widget, Portal, and
                      Microsites
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </RadioGroup.Option>

          <RadioGroup.Option
            value={ProgramTypes.Creators}
            key={ProgramTypes.Creators}
            className="w-full lg:w-2/6"
          >
            {({ checked }) => (
              <Card
                className={cn(
                  "flex flex-col text-sm text-left h-full border-1 cursor-pointer",
                  {
                    "!border-success": checked,
                  }
                )}
              >
                <Star className="h-7 w-7 mb-2 text-warning" />

                <b className="font-semibold">Creators</b>

                <div className="flex flex-col gap-2">
                  <p className="font-normal opacity-[.72]">
                    Leverage personalized storefronts to build cobranded
                    experiences for your influencers, affiliates, podcasts,
                    newsletters etc.
                  </p>

                  <p className="font-normal opacity-[.72]">
                    <b>Rewards Include:</b> Cash payouts or augment an existing
                    creator program
                  </p>

                  <p className="font-normal opacity-[.72]">
                    <b>Experiences Include:</b> Portal and Microsites
                  </p>
                </div>
              </Card>
            )}
          </RadioGroup.Option>
        </RadioGroup>

        <div className="font-semibold mt-8 mb-2">Name your program</div>

        <Input
          className="w-5/12"
          status={errors.title ? "error" : "default"}
        />
      </Card>
    </div>
  );
}
