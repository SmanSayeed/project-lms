import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function LanguageSelect() {
  return (
    <Select>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Bangla" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="bangla">
          <Image
            src={
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/BD.svg"
            }
            alt="flag icon"
            width={30}
            height={30}
          />
          BN
        </SelectItem>
        <SelectItem value="english">
          <Image
            src={
              "https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
            }
            alt="flag icon"
            width={30}
            height={30}
          />
          EN
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
