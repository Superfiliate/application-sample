import { Button } from "common-ui";
import cn from "lib/cn";
import { Icon } from "react-bootstrap-icons";

interface EmptyStateProps {
  Icon: Icon;
  title: string;
  description?: string;
  children?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export default function EmptyState({
  Icon,
  title,
  description,
  buttonText,
  buttonHref,
  className,
  children,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "w-full border rounded-4xl items-center py-16 md:py-20 flex flex-col",
        className
      )}
    >
      <div className="max-w-[480px]">
        <Icon className="w-14 h-12 md:w-16 md:h-14 mx-auto mb-4" />
        <div className="text-sm md:text-lg font-display tracking-tighter font-semibold text-gray-900 text-center">
          {title}
        </div>
        <div className="text-xs md:text-sm font-normal text-gray-900 text-center mt-1">
          {description}
          {children}
        </div>
        {buttonText && buttonHref && (
          <Button
            href={buttonHref}
            className="px-[20px] !py-[10px] !font-header !font-medium text-xs md:text-sm w-fit mx-auto rounded-xl mt-6"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}
