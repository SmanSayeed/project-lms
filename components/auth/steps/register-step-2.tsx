"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import StepsCountCard from "./common/step-count-card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterSchemaStepTwo,
  RegisterSchemaStepTwoInput,
} from "@/lib/schema";

export default function RegisterStepTwo() {
  const [genderErr, setGenderErr] = useState(true);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchemaStepTwoInput>({
    resolver: zodResolver(RegisterSchemaStepTwo),
  });

  const onSubmit = (data: RegisterSchemaStepTwoInput) => {
    try {
      console.log("Validated data \n", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className=" max-w-[420px] shadow-md w-full mx-auto dark:bg-[#101f31]">
      <CardHeader>
        <div className="flex flex-col justify-center items-center">
          <h1 className="my-6">LOGO</h1>
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-3">
              Write your personal information
            </h2>
            <p className="">Write your details</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            {/* step count card */}
            <StepsCountCard step={2} />

            {/* inputs */}

            <div className="mb-3 mt-16">
              <Label className=" mb-1.5">First name</Label>
              <Input
                {...register("first_name")}
                placeholder="Enter your first name"
                className="py-5"
              />
              {errors && errors.first_name && (
                <p className="text-sm font-medium text-red-500 my-1.5">
                  {errors.first_name.message}
                </p>
              )}
            </div>

            <div className="mb-3">
              <Label className=" mb-1.5">Last name</Label>
              <Input
                {...register("last_name")}
                placeholder="Enter your last name"
                className="py-5"
              />
              {errors && errors.last_name && (
                <p className="text-sm font-medium text-red-500 my-1.5">
                  {errors.last_name.message}
                </p>
              )}
            </div>

            <div className="mb-3">
              <Label className=" mb-1.5">Date of birth</Label>

              <Input
                {...register("birth_date")}
                type="date"
              />
              {errors && errors.birth_date && (
                <p className="text-sm font-medium text-red-500 my-1.5">
                  {errors.birth_date.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <Label className=" mb-1.5">Gender</Label>
              <Select
                onValueChange={(val: "men" | "women") => {
                  setValue("gender", val);
                  setGenderErr(false);
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup defaultValue={"men"}>
                    <SelectLabel>Gender</SelectLabel>
                    <SelectItem value="men">Men</SelectItem>
                    <SelectItem value="women">Women</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {genderErr && errors && errors.gender && (
                <p className="text-sm font-medium text-red-500 my-1.5">
                  {errors.gender.message}
                </p>
              )}
            </div>
            <Button
              disabled={isSubmitting}
              size={"lg"}
              type="submit"
              className=" w-full text-lg"
            >
              {isSubmitting ? "Pending" : "Next"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
