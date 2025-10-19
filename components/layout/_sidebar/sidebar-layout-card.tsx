"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";
import React, { useState } from "react";
import SidebarNavigationToolTip from "./ui/sidebar-navigation-tooltip";

export default function SidebarLayoutCard() {
  const [currentLayout, setCurrentLayout] = useState<number>(1);

  return (
    <div className=" relative  p-5 border rounded-2xl dark:border-gray-700  shadow-md">
      <div >
        {/* navigation badge */}
        <span className=" absolute -top-3.5 left-5">
          <Badge className="bg-gray-800 dark:bg-white dark:text-gray-950">
            Navigation <SidebarNavigationToolTip />
          </Badge>
        </span>

        {/* layout change btn */}
        <div className=" mb-2">
          <Button
            size={"sm"}
            variant={"ghost"}
            onClick={() => setCurrentLayout(1)}
            className="text-sm font-medium dark:opacity-80"
          >
            {" "}
            {currentLayout !== 1 ? <RotateCw /> : ""} Format
          </Button>
        </div>

        {/* layouts */}
        <div className=" grid grid-cols-3 gap-2 min-h-[60px]">
          {/* 1st layout */}
          <div
            onClick={() => setCurrentLayout(1)}
            className={`${
              currentLayout === 1 && "border-2"
            } border cursor-pointer border-gray-400/60 dark:border-gray-700 rounded-md p-1 grid grid-cols-2 gap-1`}
          >
            <div className="flex flex-col gap-1  rounded-md">
              <div
                className={`${
                  currentLayout === 1 && "bg-green-500/80 dark:bg-green-500/90"
                } w-4 h-4 rounded-full bg-gray-500 dark:bg-gray-300`}
              ></div>
              <div
                className={`${
                  currentLayout === 1 && "bg-green-500/70 dark:bg-green-500/60"
                } w-[80%] rounded-2xl h-1 bg-gray-500/70 dark:bg-gray-500`}
              ></div>
              <div
                className={`${
                  currentLayout === 1 && "bg-green-500/60 dark:bg-green-500/40"
                } w-[40%] rounded-2xl h-1 bg-gray-500/50 dark:bg-gray-400`}
              ></div>
            </div>
            <div
              className={`${
                currentLayout === 1 && "bg-green-500 dark:bg-green-700"
              } h-full rounded-sm w-full bg-gray-400 dark:bg-gray-500`}
            ></div>
          </div>

          {/* 2nd layout */}
          <div
            onClick={() => setCurrentLayout(2)}
            className={`${
              currentLayout === 2 && "border-2"
            } border cursor-pointer border-gray-400/60 dark:border-gray-700 rounded-md p-1 flex flex-col gap-1`}
          >
            <div className="flex flex-row gap-1 items-center  rounded-md">
              <div
                className={`${
                  currentLayout === 2 && "bg-green-500/80 dark:bg-green-500/90"
                } w-4 h-4 rounded-full bg-gray-500 dark:bg-gray-300`}
              ></div>
              <div
                className={`${
                  currentLayout === 2 && "bg-green-500/70 dark:bg-green-500/60"
                } w-[20%] h-1 rounded-2xl bg-gray-500/70 dark:bg-gray-500`}
              ></div>
              <div
                className={`${
                  currentLayout === 2 && "bg-green-500/60 dark:bg-green-500/40"
                } w-[30%] h-1 rounded-2xl bg-gray-500/50 dark:bg-gray-400`}
              ></div>
            </div>
            <div
              className={`${
                currentLayout === 2 && "bg-green-500 dark:bg-green-700"
              } h-[35px] rounded-sm w-full bg-gray-400 dark:bg-gray-500`}
            ></div>
          </div>

          {/* 3rd layout */}
          <div
            onClick={() => setCurrentLayout(3)}
            className={`${
              currentLayout === 3 && "border-2"
            } border cursor-pointer border-gray-400/60 dark:border-gray-700 rounded-md p-1 grid grid-cols-2 gap-1`}
          >
            <div className="flex flex-col gap-1 items-center  rounded-md">
              <div
                className={`${
                  currentLayout === 3 && "bg-green-500/80 dark:bg-green-500/90"
                } w-4 h-4 rounded-full bg-gray-500 dark:bg-gray-300`}
              ></div>
              <div
                className={`${
                  currentLayout === 3 && "bg-green-500/70 dark:bg-green-500/60"
                } w-[80%] rounded-2xl h-1  bg-gray-500/70 dark:bg-gray-500`}
              ></div>
              <div
                className={`${
                  currentLayout === 3 && "bg-green-500/60 dark:bg-green-500/40"
                } w-[80%] rounded-2xl h-1 bg-gray-500/50 dark:bg-gray-400`}
              ></div>
            </div>
            <div
              className={`${
                currentLayout === 3 && "bg-green-500 dark:bg-green-700"
              } h-full rounded-sm w-full bg-gray-400 dark:bg-gray-500`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
