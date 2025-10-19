"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SettingsButton from "../_header/ui/settings-button";
import { Button } from "@/components/ui/button";
import { Fullscreen, RotateCw } from "lucide-react";
import SidebarThemeCard from "./sidebar-theme-card";
import SidebarContrastCard from "./sidebar-contrast-card";
import SidebarCompactCard from "./sidebar-compact-card";
import SidebarLayoutCard from "./sidebar-layout-card";

export default function SidebarSettings() {
  return (
    <Sheet>
      <SheetTrigger>
        <SettingsButton />
      </SheetTrigger>
      <SheetContent className=" backdrop-blur-md bg-white/85 dark:bg-gray-800/75">
        <SheetHeader className=" hidden">
          <SheetTitle>{}</SheetTitle>
          <SheetDescription>{}</SheetDescription>
        </SheetHeader>

        <div className="">
          {/* Sidebar header */}
          <div className=" flex flex-row justify-between items-start px-5 mr-4 mt-2">
            <h1 className=" text-lg font-bold opacity-90">Settings</h1>

            <div>
              <Button variant={"ghost"} size={"icon"} className=" rounded-full">
                <Fullscreen />
              </Button>
              <Button variant={"ghost"} size={"icon"} className=" rounded-full">
                <RotateCw />
              </Button>
            </div>
          </div>

          <div className="mt-5 px-5">
            {/* theme card */}
            <SidebarThemeCard />

            {/* contrast & compact */}
            <div className=" grid grid-cols-2 gap-3 mt-10">
              <SidebarContrastCard />
              <SidebarCompactCard />
            </div>

            {/* Layout change */}
            <div className="">
              <SidebarLayoutCard/>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
