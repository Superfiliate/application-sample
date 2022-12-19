import cn from "lib/cn";
import React from "react";

const Display1: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => (
  <h1 className={cn("font-display text-7xl font-semibold", className)}>
    {children}
  </h1>
);

const Display2: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => (
  <h2 className={cn("font-display text-6xl font-semibold", className)}>
    {children}
  </h2>
);

const Display3: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => (
  <h3 className={cn("font-display text-5xl font-semibold", className)}>
    {children}
  </h3>
);

const Display4: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => (
  <h4 className={cn("font-display text-4xl font-semibold", className)}>
    {children}
  </h4>
);

const Header1: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => (
  <h1 className={cn("font-display text-3xl font-semibold", className)}>
    {children}
  </h1>
);

const Header2: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => (
  <h2 className={cn("font-display text-2xl font-semibold", className)}>
    {children}
  </h2>
);

const Header3: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => (
  <h3 className={cn("font-display text-xl font-semibold", className)}>
    {children}
  </h3>
);

const Header4: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => (
  <h4 className={cn("font-display text-lg font-semibold", className)}>
    {children}
  </h4>
);

const Header5: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => (
  <h5 className={cn("font-header text-base font-medium", className)}>
    {children}
  </h5>
);

const Header6: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => (
  <h6 className={cn("font-header text-sm font-medium", className)}>
    {children}
  </h6>
);

const Typography = {
  Display1,
  Display2,
  Display3,
  Display4,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
};

export default Typography;
