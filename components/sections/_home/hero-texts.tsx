import SecondaryLogo from "@/components/common/logos/secondary-logo";
import React from "react";

export default function HeroTexts() {
  return (
    <div className=" mt-5 xl:mt-10">
      <div className="">
        <h1 className="text-7xl leading-20 font-bold">
          Create your website today with{" "}
          <span className="bg-gradient-to-r from-orange-500 to-indigo-400 text-transparent bg-clip-text">
            ZONE
          </span>
        </h1>

        <p className=" mt-6 opacity-80 font-medium max-w-[80%]">
          The ZONE UI is built on top of MUI, a powerful library that provides
          flexible, customizable, and easy-to-use components.
        </p>
      </div>

      <div className="mt-6 text-xl font-medium  flex flex-row items-center gap-x-5">
        {/* Logo */}
        <SecondaryLogo />

        <p>
          We will learn, we will teach, build together
          <br />
          technology Bangladesh 2.0 with education.
        </p>
      </div>
    </div>
  );
}
