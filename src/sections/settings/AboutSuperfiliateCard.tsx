import { Button, Card } from "common-ui";
import { BoxArrowUpRight } from "react-bootstrap-icons";

export default function AboutSuperfiliateCard() {
  return (
    <Card className="w-full p-8">
      <div className="font-normal font-display text-2xl mb-4 w-full">
        About Superfiliate
      </div>

      <div className="flex mt-6 w-full gap-6 font-body text-sm">
        <div className="w-3/6 flex flex-col gap-2">
          <div className="font-header text-base">Legal documents</div>

          <Button
            href="https://www.superfiliate.com/legal/terms"
            kind="ghost"
            color="link"
            icon={BoxArrowUpRight}
            iconPosition="right"
            iconColor="black"
            newTab
          >
            Terms of use
          </Button>
          <Button
            href="https://www.superfiliate.com/legal/privacy"
            kind="ghost"
            color="link"
            icon={BoxArrowUpRight}
            iconPosition="right"
            iconColor="black"
            newTab
          >
            Privacy policy
          </Button>
          <Button
            href="https://www.superfiliate.com/legal/brandterms"
            kind="ghost"
            color="link"
            icon={BoxArrowUpRight}
            iconPosition="right"
            iconColor="black"
            newTab
          >
            Brand terms
          </Button>
          <Button
            href="https://www.superfiliate.com/legal/copyright"
            kind="ghost"
            color="link"
            icon={BoxArrowUpRight}
            iconPosition="right"
            iconColor="black"
            newTab
          >
            Legal copyright
          </Button>
        </div>
      </div>
    </Card>
  );
}
