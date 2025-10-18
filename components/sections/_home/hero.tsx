import React from "react";
import hero_character from "@/public/images/hero-character.webp";
import Image from "next/image";
import HeroCtaButtons from "./ui/hero-cta-buttons";
import HeroTexts from "./hero-texts";
import HeroCourseInfo from "./hero-course-info";

export const Hero = () => {
  return (
    <div>
      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="flex flex-row justify-between items-center">
          {/* Hero text & buttons */}
          <div className=" self-start">
            <HeroTexts />

            <HeroCtaButtons />

            <HeroCourseInfo />
          </div>

          {/* Hero image */}
          <Image
            src={hero_character}
            alt="Hero character image"
            width={420}
            height={420}
          />
        </div>
      </div>

      {/* Responsive view */}
      <div className=" md:hidden"></div>
    </div>
  );
};
