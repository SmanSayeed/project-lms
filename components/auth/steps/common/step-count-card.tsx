"use client";
import { RootState } from "@/redux/store";
import { Check } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

export default function StepsCountCard({ step }: { step: number }) {
  // step one status
  const stepOneStatus = useSelector(
    (state: RootState) => state.auth.registrationSteps.stepOne
  );
  const stepTwoStatus = useSelector(
    (state: RootState) => state.auth.registrationSteps.stepTwo
  );
  const stepThreeStatus = useSelector(
    (state: RootState) => state.auth.registrationSteps.stepThree
  );

  return (
    <div className=" w-full text-xs md:text-sm">
      <div className=" grid grid-cols-3  relative  ">
        <div className="flex flex-col items-center justify-center">
          <span
            className={`${
              step === 1 || stepOneStatus
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-gray-700 "
            } "  w-6 h-6 rounded-full font-semibold mb-3 grid place-items-center text-sm  dark:opacity-80"`}
          >
            {stepOneStatus ? <Check size={16} /> : 1}
          </span>
          <h2 className={`${step !== 1 && "opacity-80"}  text-center`}>
            Mobile number
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center">
          <span
            className={`${
              step === 2 || stepTwoStatus
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-gray-700 "
            } "  w-6 h-6 rounded-full font-semibold grid mb-3 place-items-center text-sm dark:opacity-80 "`}
          >
            {stepTwoStatus ? <Check size={16} /> : 2}
          </span>
          <h2 className={`${step !== 2 && "opacity-80"} text-center`}>
            Basic information
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center">
          <span
            className={`${
              step === 3 || stepThreeStatus
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-gray-700"
            } "  w-6 font-semibold h-6 rounded-full mb-3 grid place-items-center text-sm  dark:opacity-80"`}
          >
            {stepThreeStatus ? <Check size={16} /> : 3}
          </span>
          <h2 className={`${step !== 3 && "opacity-80"}  text-center`}>
            E-mail address
          </h2>
        </div>

        <hr className=" absolute top-[16%] left-[23%] w-[20%] bg-gray-200" />
        <hr className=" absolute top-[16%] left-[57%] w-[20%] bg-gray-200" />
      </div>
    </div>
  );
}
