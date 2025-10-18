  
import SecondaryLogo from "@/components/common/logos/secondary-logo";
import React from "react";

export default function HeroTexts() {
  return (
    <div className=" mt-5 xl:mt-10">
      <div className="">
        <h1 className="text-7xl leading-20 font-bold">
          <span className=" text-blue-400">Training</span>
          <br />
          From <span className=" text-green-600">Career</span>{" "}
          <span className="text-foreground/80">Journey</span>
          <br />
          With education
        </h1>

        <p className=" mt-6 opacity-80 font-medium max-w-[80%]">
          Learn from engineering, design, marketing to business or personal
          development with us. Become a co-founder, and build new technology and
          service-based startups using our funding and resources.
        </p>
      </div>

      <div className="mt-6 text-xl font-medium  flex flex-row items-center gap-x-5">
        {/* Logo */}
        <SecondaryLogo/>

        <p>
          We will learn, we will teach, build together
          <br />
          technology Bangladesh 2.0 with education.
        </p>
      </div>
    </div>
  );
}
