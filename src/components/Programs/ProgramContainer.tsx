import MainContent from "components/Layout/MainContent";
import sdk from "lib/gql/sdk";
import useProgram from "lib/hooks/useProgram";

export type CampaignType = NonNullable<
  NonNullable<ReturnType<typeof sdk.useCampaign>["data"]>
>["campaign"];

const ProgramContainer: React.FC<{
  title: string;
  children: React.ReactNode;
  actions?: (program: CampaignType | null) => React.ReactNode;
}> = ({ title, children, actions }) => {
  const { data } = useProgram();

  const program = data?.campaign || null;

  return (
    <MainContent
      navigation={[
        {
          name: program?.name || "Superfiliates",
          href: `/programs/${program?.id}/experiences`,
        },
        { name: title, href: "#" },
      ]}
      actions={actions?.(program)}
    >
      {children}
    </MainContent>
  );
};

export default ProgramContainer;
