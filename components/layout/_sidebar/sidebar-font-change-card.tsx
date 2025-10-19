"use client";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import SidebarFontChangeSlider from "./ui/sidebar-font-change-slider";

export default function SidebarFontChangeCard() {
  const [fontSize, setFontSize] = useState<number>(16);

  return (
    <div className="relative mt-10 p-5 border rounded-2xl dark:border-gray-700  shadow-md">
      {/* font badge */}
      <span className=" absolute -top-3.5 left-5">
        <Badge className="bg-gray-800 dark:bg-white dark:text-gray-950">
          Navigation
        </Badge>
      </span>

      <div className="mt-3 ">
        <h1 className="dark:opacity-80 text-sm">Size</h1>
      </div>

        {/* font change slider */}
      <div className="mt-4">
        {/* {fontSize} */}
        <SidebarFontChangeSlider
          fontSize={fontSize}
          setFontSize={setFontSize}
        />
      </div>
    </div>
  );
}
