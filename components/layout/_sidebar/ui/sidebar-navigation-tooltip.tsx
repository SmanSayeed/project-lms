import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleAlert } from "lucide-react";

export default function SidebarNavigationToolTip() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <CircleAlert size={14} />
      </TooltipTrigger>
      <TooltipContent
        side="right"
        className=" dark:bg-gray-600 dark:text-white"
      >
        <p>Available only on dashboard</p>
      </TooltipContent>
    </Tooltip>
  );
}
