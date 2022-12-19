import Welcome from "components/Onboarding/steps/0_Welcome";
import Integrations from "components/Onboarding/steps/1_Integrations";
import Preview from "components/Onboarding/steps/2_Preview";
import Routes from "lib/routes";
import { queryTypes, useQueryStates } from "next-usequerystate";
import { useEffect } from "react";

export interface OnboardingStepProps {
  next: () => void;
}

const Steps = [Welcome, Integrations, Preview];

const StepsManager = () => {
  const [{ onboarding, step }, setOnboarding] = useQueryStates(
    {
      onboarding: queryTypes.boolean,
      step: queryTypes.integer,
    },
    {
      history: "push",
    }
  );

  useEffect(() => {
    if (!onboarding) return;

    if (typeof step === "undefined" || step === null)
      setOnboarding({ step: 0 });
  }, [onboarding, step]);

  if (!onboarding || step === null) return null;

  const next = () => {
    const nextIdx = (step + 1) % Steps.length;
    nextIdx
      ? setOnboarding({ step: nextIdx }, { shallow: true })
      : (window.location.href = Routes.ShopifyApp.programCreator);
  };

  const StepComponent = Steps[step];

  return <StepComponent next={next} />;
};

export default StepsManager;
