"use client";
import React from "react";
import { Settings } from "lucide-react";
import { motion as m } from "framer-motion";

export default function SettingsButton() {
  return (
    <m.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 8, // speed (lower = faster)
        ease: "linear",
      }}
      className=" cursor-pointer p-2 hover:bg-gray-200 hover:scale-[105%] dark:hover:bg-gray-700 rounded-full"
    >
      <Settings className=" size-5.5 " />
    </m.div>
  );
}
