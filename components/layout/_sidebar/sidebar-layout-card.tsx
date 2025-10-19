import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";
import React from "react";

export default function SidebarLayoutCard() {
  return (
    <div className=" relative mt-10 p-5 border rounded-2xl dark:border-gray-700  shadow-md">
      <div className="">
        {/* navigation badge */}
        <span className=" absolute -top-3.5 left-5">
          <Badge className="bg-gray-800 dark:bg-white dark:text-gray-950">
            Navigation
          </Badge>
        </span>

        {/* layout change btn */}
        <div className=" mb-2">
          <Button
            size={"sm"}
            variant={"ghost"}
            className="text-sm font-medium dark:opacity-80"
          >
            {" "}
            <RotateCw /> Layout
          </Button>
        </div>

        {/* layouts */}
        <div className=" grid grid-cols-3 gap-2 min-h-[60px]">
          {/* 1st layout */}
          <div className="border border-gray-400/60 dark:border-gray-700 rounded-md p-1 grid grid-cols-2 gap-1">
            <div className="flex flex-col gap-1  rounded-md">
              <div className=" w-4 h-4 rounded-full bg-gray-300"></div>
              <div className="w-[80%] rounded-2xl h-1  bg-gray-500"></div>
              <div className=" w-[40%] rounded-2xl h-1 bg-gray-400"></div>
            </div>
            <div className=" h-full rounded-sm w-full bg-gray-500"></div>
          </div>

          {/* 2nd layout */}
          <div className="border border-gray-400/60 dark:border-gray-700 p-1 rounded-md flex flex-col gap-1">
            <div className="flex flex-row gap-1 items-center  rounded-md">
              <div className=" w-4 h-4 rounded-full bg-gray-300"></div>
              <div className="w-[20%] h-1 rounded-2xl bg-gray-500"></div>
              <div className=" w-[30%] h-1 rounded-2xl bg-gray-400"></div>
            </div>
            <div className=" h-[35px] rounded-sm w-full bg-gray-500"></div>
          </div>
          {/* 3rd layout */}
          <div className="border border-gray-400/60 dark:border-gray-700 rounded-md p-1 flex flex-row  gap-3">
            <div className="flex flex-col gap-1 items-center  rounded-md">
              <div className=" w-4 h-4 rounded-full bg-gray-300"></div>
              <div className="w-[80%] rounded-2xl h-1  bg-gray-500"></div>
              <div className=" w-[80%] rounded-2xl h-1 bg-gray-400"></div>
            </div>
            <div className=" h-full rounded-sm w-full bg-gray-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
