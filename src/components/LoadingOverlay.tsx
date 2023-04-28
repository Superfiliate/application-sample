import { LoadingSpinner } from "@common-ui/index";
import cn from "lib/cn";
import React from "react";

const LoadingOverlay: React.FC<{
  loading: boolean;
  children: React.ReactNode;
  loadingMessage?: React.ReactNode;
  mode?: "wrap" | "cover";
}> = ({ loading, children, mode = "wrap", loadingMessage }) => {
  if (mode === "cover") {
    return (
      <>
        {children}

        <div
          className={cn(
            "absolute inset-0 transition-opacity backdrop-blur-[2px] bg-white/40 z-10",
            {
              "opacity-0 pointer-events-none": !loading,
            }
          )}
        >
          <div className="h-full w-full animate-pulse bg-white/70"></div>
        </div>

        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-center items-center z-10 cursor-wait",
            "transition-opacity",
            {
              "opacity-0 pointer-events-none": !loading,
            }
          )}
        >
          <LoadingSpinner />
          {loadingMessage}
        </div>
      </>
    );
  }

  return (
    <div
      className={cn({
        "animate-pulse cursor-wait relative": loading,
      })}
    >
      <div
        className={cn(
          "absolute inset-0 flex justify-center items-center",
          "transition-opacity",
          {
            "opacity-0 pointer-events-none": !loading,
          }
        )}
      >
        <LoadingSpinner />
      </div>

      <div
        className={cn("transition-all relative", {
          "opacity-30 pointer-events-none blur-[2px]": loading,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default LoadingOverlay;
