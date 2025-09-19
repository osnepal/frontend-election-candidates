import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

export default function AppTooltip({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string | React.ReactNode;
  className?: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          {typeof title === "string" ? (
            <p className={className}>{title}</p>
          ) : (
            title
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
