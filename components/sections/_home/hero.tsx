import React from "react";
import hero_character from "@/public/images/hero-character.webp";
import Image from "next/image";
import HeroCtaButtons from "./ui/hero-cta-buttons";
import HeroTexts from "./hero-texts";
import HeroCourseInfo from "./hero-course-info";
import HeroCircleAnimation from "./animation/hero-circle-animation";

export const Hero = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-8 max-w-[1400px] mx-auto">
      {/* Desktop & Tablet view */}
      <div className="hidden lg:grid grid-cols-2 gap-12 xl:gap-20 items-center">
        {/* Hero text & buttons */}
        <div className="space-y-6">
          <HeroTexts />
          <HeroCtaButtons />
          <HeroCourseInfo />
        </div>

        {/* Hero image with animations */}
        <div className="relative w-[500px] h-[500px] mx-auto flex items-center justify-center">
          <Image
            src={hero_character}
            alt="Hero character image"
            fill
            className="object-contain z-20"
            loading="lazy"
          />

          {/* background blobs */}
          <div className="bg-blue-500/50 dark:bg-[#52739b] opacity-50 absolute backdrop-blur-3xl top-24 left-24 rounded-[50px] rounded-bl-[60px] w-[360px] h-[360px] -z-20 -rotate-24"></div>
          <div className="bg-green-500/30 dark:bg-[#294b46] opacity-60 absolute backdrop-blur-3xl top-24 left-24 rounded-[50px] w-[360px] h-[360px] -z-40 -rotate-45"></div>

          <HeroCircleAnimation />
        </div>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden flex flex-col items-center gap-8">
        {/* Hero image */}
        <div className="relative w-[80vw] max-w-[400px] aspect-square flex items-center justify-center">
          <Image
            src={hero_character}
            alt="Hero character image"
            fill
            className="object-contain z-20"
            loading="lazy"
          />

          {/* responsive blobs */}
          <div className="bg-blue-500/50 dark:bg-[#52739b] opacity-50 absolute backdrop-blur-3xl top-[15%] left-[15%] rounded-[40px] rounded-bl-[60px] w-[70%] h-[70%] -z-20 -rotate-24"></div>
          <div className="bg-green-500/30 dark:bg-[#294b46] opacity-60 absolute backdrop-blur-3xl top-[15%] left-[15%] rounded-[40px] w-[70%] h-[70%] -z-40 -rotate-45"></div>

          <HeroCircleAnimation />
        </div>

        {/* Hero text & buttons */}
        <div className="text-center space-y-4">
          <HeroTexts />
          <HeroCtaButtons />
          <HeroCourseInfo />
        </div>
      </div>
    </div>
  );
};
