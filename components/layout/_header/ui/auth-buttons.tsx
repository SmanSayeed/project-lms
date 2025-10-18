import { Button } from "@/components/ui/button";
import React from "react";

export default function AuthButtons() {
  return (
    <div className=" flex items-center gap-x-2 flex-row">
      <Button
        variant={"outline"}
        className=" font-semibold dark:border dark:border-gray-600 dark:hover:opacity-80"
      >
        Sign in
      </Button>
      <Button variant={"default"} className=" font-semibold">
        Start
      </Button>
    </div>
  );
}
