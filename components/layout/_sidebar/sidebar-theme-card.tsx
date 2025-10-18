"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export default function SidebarThemeCard() {
  const { setTheme, theme } = useTheme();

  return (
    <div className=" relative border dark:border-gray-700 shadow-md rounded-2xl p-5">
      <>
        <div>
          <span className=" absolute -top-3.5 left-5">
            <Badge className="bg-gray-800 dark:bg-white dark:text-gray-950">
              Mod
            </Badge>
          </span>

          {/* light, dark & system theme buttons */}
          <div className="">
            <div className=" grid grid-cols-2 gap-2 mb-2">
              <Button
                onClick={() => setTheme("light")}
                variant={"custom_ghost"}
                className={`${
                  theme === "light" && "shadow-2xl"
                } px-5 py-7 rounded-xl`}
              >
                Light
                <Sun
                  className={`${
                    theme === "light" && "text-green-600"
                  } size-5.5`}
                />
              </Button>
              <Button
                onClick={() => setTheme("dark")}
                variant={"custom_ghost"}
                className={`${
                  theme === "dark" && "shadow-2xl bg-gray-800"
                } px-5 py-7 rounded-xl`}
              >
                Dark
                <Moon
                  className={`${
                    theme === "dark" && "text-green-600"
                  } size-5.5`}
                />
              </Button>
            </div>
            <Button
              variant={"custom_ghost"}
              size={"lg"}
              className={`${
                theme === "system" && "shadow-2xl bg-gray-800"
              } py-8 w-full rounded-2xl`}
              onClick={() => setTheme("system")}
            >
              Use system mode
            </Button>
          </div>
        </div>
      </>
    </div>
  );
}
