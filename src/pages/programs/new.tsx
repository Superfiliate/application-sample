import { Button } from "common-ui";
import MainContent from "components/Layout/MainContent";

import { CreateProgramInput } from "graphql-sdk";

import { useState } from "react";
import {
  SubmitErrorHandler,
  SubmitHandler,
} from "react-hook-form";
import { toast } from "react-hot-toast";

import CustomerReward from "sections/programs/creator/CustomerReward";
import LoyaltyReward from "sections/programs/creator/LoyaltyReward";
import ProgramType from "sections/programs/creator/ProgramType";
import SuccessModal from "sections/programs/creator/SuccessModal";
import SuperfiliateReward from "sections/programs/creator/SuperfiliateReward";

import { ProgramFormInput } from "types/programs";

export default function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [programId, setProgramId] = useState<string | undefined>();

  const onSubmit: SubmitHandler<CreateProgramInput> = async (input) => {
    const program = await createProgram(input)

    setProgramId(program.id);
    setSubmitted(true);
  };

  const onError: SubmitErrorHandler<ProgramFormInput> = () => {
    toast.error("Error submitting the form. Review the items and try again");
  };

  return (
    <MainContent
      navigation={[
        { name: "Programs", href: "/home" },
        { name: "New program", href: "/programs/new" },
      ]}
    >
      <SuccessModal show={submitted} programId={programId} />

      <form onSubmit={formControls.handleSubmit(onSubmit, onError)}>
        <ProgramType />

        <CustomerReward />

        <SuperfiliateReward />

        <LoyaltyReward />

        <div className="w-full flex justify-end gap-8 mt-8">
          <Button color="white" kind="ghost" href="/home">
            Cancel
          </Button>

          <Button type="submit" iconPosition="right">
            Create program
          </Button>
        </div>
      </form>
    </MainContent>
  );
}
