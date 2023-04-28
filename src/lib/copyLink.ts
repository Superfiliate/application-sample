import { toast } from "react-hot-toast";

const copyLink = (link: string) => async (event: React.MouseEvent) => {
  if (!navigator.clipboard) return;

  event.stopPropagation();
  event.preventDefault();

  try {
    await navigator.clipboard.writeText(link);
    toast.success("Link copied!");
  } catch (e) {
    toast.error("Unexpected error copying link, try again later");
    console.error(e); // eslint-disable-line no-console
  }
};

export default copyLink;
