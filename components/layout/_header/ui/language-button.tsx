import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function LanguageButton() {
  return (
    <Button>
      <Image
        src={
          "https://purecatamphetamine.github.io/country-flag-icons/3x2/BD.svg"
        }
        className=""
        width={20}
        height={20}
        alt="Flag icon"
      />
    </Button>
  );
}
