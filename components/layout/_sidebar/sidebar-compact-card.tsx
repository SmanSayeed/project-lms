import { Button } from "@/components/ui/button";
import { Contrast, ToggleLeft } from "lucide-react";
import React from "react";

export default function SidebarCompactCard() {
  return (
    <div className=" p-5 border">
      <div className=" flex flex-row items-center justify-between mb-5">
        <Contrast />

        <Button size={"icon-lg"} variant={"ghost"}>
          <ToggleLeft className=" size-7" />
        </Button>
      </div>

      <p>Compact</p>
    </div>
  );
}
