import cn from "lib/cn";
import React from "react";
import { Icon as IconType } from "react-bootstrap-icons";

const VARIANT_CLASSES = {
  warning: { card: "bg-warning-100", icon: "text-warning-400" },
  info: { card: "bg-info-100", icon: "text-info-400" },
  danger: { card: "bg-danger-100", icon: "text-danger-400" },
};

type Variant = keyof typeof VARIANT_CLASSES;

const Alert: React.FC<{
  children: React.ReactNode;
  title: React.ReactNode;
  variant?: Variant;
  className?: string;
  Icon?: IconType;
}> = ({ children, title, variant = "warning", className, Icon }) => (
  <div
    className={cn(
      "p-6 rounded-2xl",
      "flex items-center",
      VARIANT_CLASSES[variant].card,
      className
    )}
  >
    {Icon && (
      <div className={cn("text-4xl mr-4", VARIANT_CLASSES[variant].icon)}>
        <Icon />
      </div>
    )}

    <div className="grow">
      <div className="font-medium text-base font-header">{title}</div>
      <div className="text-sm">{children}</div>
    </div>
  </div>
);

export default Alert;
