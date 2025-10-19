import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import React from "react";

export default function HeroCtaButtons() {
  return (
    <div className=" flex flex-row items-center gap-x-5 mt-8 justify-center xl:justify-start xl:pl-14">
      <Button size={"lg"} className=" py-6.5 px-4 font-semibold">
        start learning
      </Button>

      <div className=" flex flex-row items-center gap-x-3">
        <Button size={"icon-lg"} className="p-6.5 rounded-full">
          <Play className=" size-7.5" />
        </Button>

        <h1 className=" font-semibold opacity-90 text-black dark:text-foreground">
          Learn more ...
        </h1>
      </div>
    </div>
  );
}
