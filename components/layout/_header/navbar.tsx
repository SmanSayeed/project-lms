import React from "react";
import AuthButtons from "./ui/auth-buttons";
import SidebarSettings from "../_sidebar/sidebar";
import LanguageSelect from "./ui/language-select";
import MainLogo from "@/components/common/logos/main-logo";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between lg:px-14 p-5 max-w-7xl mx-auto">
      {/* Left-side - LOGO */}
      <div className="">
        {/* LOGO */}
        <MainLogo width="100" height="40" />
      </div>

      {/* Right side - buttons & options */}
      <div className="flex flex-row items-center gap-x-3">
        {/* toggle language */}
        <LanguageSelect />

        {/* sidebar component */}
        <SidebarSettings />

        {/* auth buttons */}
        <AuthButtons />
      </div>
    </div>
  );
}
