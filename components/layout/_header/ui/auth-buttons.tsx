import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function AuthButtons() {
  return (
    <div className="items-center gap-x-2 flex-row hidden md:flex">
      <Link href={"/login"}>
        <Button
          variant={"outline"}
          className=" font-semibold dark:border dark:border-gray-600 dark:hover:opacity-80"
        >
          Sign in
        </Button>
      </Link>
      <Button variant={"default"} className=" font-semibold">
        Start
      </Button>
    </div>
  );
}
