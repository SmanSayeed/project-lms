"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import StepsCountCard from "./common/step-count-card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterSchemaStepThree,
  RegisterSchemaStepThreeInput,
} from "@/lib/schema";
import { useRouter } from "next/navigation";

export default function RegisterStepThree() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchemaStepThreeInput>({
    resolver: zodResolver(RegisterSchemaStepThree),
  });

  const router = useRouter();

  const onSubmit = async (data: RegisterSchemaStepThreeInput) => {
    try {
      console.log("Validated data \n", data);
      // router.push("")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className=" max-w-[420px] shadow-md w-full mx-auto dark:bg-[#101f31]">
      <CardHeader>
        <div className="flex flex-col justify-center items-center">
          <h1 className="my-8">LOGO</h1>
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-3">
              Create a new e-mail address
            </h2>
            <p className="">Write your username</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            {/* step count card */}
            <StepsCountCard step={3} />

            {/* inputs */}

            <div className="mb-3 mt-16 relative">
              <Label className=" mb-1.5">Username</Label>
              <Input
                {...register("username")}
                className="py-5 pr-30"
                // placeholder="@shikkha.dev"
              />
              {/* @shikkha.devv placeholder */}
              <span className=" absolute top-[45%] right-[4%] opacity-60">
                @shikkha.dev
              </span>
            </div>

            {errors && errors.username && (
              <p className="text-sm font-medium text-red-500 dark:text-red-400 mb-2">
                {errors.username.message}
              </p>
            )}

            <Button
              disabled={isSubmitting}
              type="submit"
              size={"lg"}
              className=" w-full text-lg"
            >
              {isSubmitting ? "Pending..." : "Submit"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
