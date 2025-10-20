"use client";
import MainLogo from "@/components/common/logos/main-logo";
import { usePathname } from "next/navigation";
import React from "react";

export const Footer = () => {
  const pathName = usePathname();

  if (pathName !== "/") return "";

  return (
    <div className=" mt-30 bg-[#101f31] py-12 flex items-center justify-center">
      <div className=" text-center">
        {/* Logo */}
        <div className="mb-3 inline-flex justify-center items-center">
          <MainLogo width="100" height="40" />
        </div>

        {/* footer text */}
        <h1 className=" text-xs font-medium text-white">
          © Ownership {new Date().getFullYear()} Education IT Limited
          <br />
          All rights reserved
        </h1>
      </div>
    </div>
  );
};
