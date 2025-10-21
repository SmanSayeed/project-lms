"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { LoginSchema, LoginSchemaInput } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaInput>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginSchemaInput) => {
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
            <h2 className="text-xl font-semibold mb-3">Sign in</h2>
            <p className="text-sm">Use your identity account</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            {/* inputs */}

            <div className="mb-3 relative">
              <Label className=" mb-1.5">Username</Label>
              <Input
                {...register("username")}
                className="py-5.5 pr-30"
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

            <div className=" grid grid-cols-1 gap-3 md:grid-cols-2">
              <Link className=" block w-full" href={"/register/step-1"}>
                <Button variant={"outline"} size={"lg"} className=" w-full ">
                  Create account
                </Button>
              </Link>

              <Button
                disabled={isSubmitting}
                type="submit"
                size={"lg"}
                className=" w-full"
              >
                {isSubmitting ? "Pending..." : "Submit"}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
