"use client";
import React from "react";
import { motion as m } from "framer-motion";

export default function HeroCircleAnimation() {
  return (
    <m.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 60,
        ease: "linear",
      }}
      style={{
        transformOrigin: "center center",
        backfaceVisibility: "hidden",
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] rounded-full border border-dashed 
                 dark:border-white border-gray-400 opacity-50 will-change-transform -z-50"
    ></m.div>
  );
}
