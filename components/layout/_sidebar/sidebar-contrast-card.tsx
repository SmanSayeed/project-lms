import { Button } from "@/components/ui/button";
import { Contrast, ToggleLeft } from "lucide-react";
import React from "react";

export default function SidebarContrastCard() {
  return (
    <div className=" p-5 border rounded-2xl">
      <div className=" flex flex-row items-center justify-between mb-5">
        <Contrast />

        <Button size={"icon-lg"} variant={"ghost"}>
          <ToggleLeft className=" size-7" />
        </Button>
      </div>

      <p>Contrast</p>
    </div>
  );
}
