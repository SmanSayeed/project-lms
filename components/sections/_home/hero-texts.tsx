import React from "react";

export default function HeroTexts() {
  return (
    <div className=" mt-5 xl:mt-10  lg:px-14">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl leading-relaxed font-extrabold">
          Create your website today with{" "}
          <span className="bg-gradient-to-r from-orange-500 to-indigo-400 text-transparent bg-clip-text">
            ZONE
          </span>
        </h1>

        <p className=" mt-6 opacity-80 font-medium px-2">
          The ZONE UI is built on top of MUI, a powerful library that provides
          flexible, customizable, and easy-to-use components.
        </p>
      </div>
    </div>
  );
}
