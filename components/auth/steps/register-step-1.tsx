"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import StepsCountCard from "./common/step-count-card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CardSim } from "lucide-react";
import gp from "@/public/images/logos/gp.png";
import airtel from "@/public/images/logos/airtel.png";
import bl from "@/public/images/logos/bl.png";
import teletalk from "@/public/images/logos/teletalk.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterSchemaStepOne,
  RegisterSchemaStepOneInput,
} from "@/lib/schema";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setRegistrationData, setStepOne } from "@/redux/reducers/authSlice";
import { RootState } from "@/redux/store";

export default function RegisterStepOne() {
  const [simValue, setSimValue] = useState<string | undefined>(undefined);

  const router = useRouter();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchemaStepOneInput>({
    resolver: zodResolver(RegisterSchemaStepOne),
  });

  const trackNumber = watch("number");
  const dispatch = useDispatch();

  const onSubmit = (data: RegisterSchemaStepOneInput) => {
    dispatch(
      setRegistrationData({
        mobile: data.number.toString(),
      })
    );
    dispatch(setStepOne(true));

    router.push("/register/step-2");
    console.log("Validated data \n", data);
  };

  // Detect sim provider
  useEffect(() => {
    if (!trackNumber || trackNumber.trim() === "") {
      setSimValue(undefined);
      return;
    }

    if (trackNumber.startsWith("017")) setSimValue("gp");
    else if (trackNumber.startsWith("019")) setSimValue("bl");
    else if (trackNumber.startsWith("016")) setSimValue("airtel");
    else if (trackNumber.startsWith("015")) setSimValue("teletalk");
    else setSimValue(undefined);
  }, [trackNumber]);

  return (
    <Card className=" max-w-[420px] shadow-md w-full mx-auto dark:bg-[#101f31]">
      <CardHeader>
        <div className="flex flex-col justify-center items-center">
          <h1 className="my-8">LOGO</h1>
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-3">
              Create an identity account
            </h2>
            <p className="">Enter your mobile number</p>
          </div>
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className=" ">
            {/* step count card */}
            <StepsCountCard step={1} />

            {/* user inputs */}
            <div className="mt-10 relative">
              <Label className=" mb-1.5">Mobile number</Label>
              {/* Use type="tel" so leading zeros and + are preserved */}
              <Input
                // onChange={(e) => setTrackNumber(e.target.value)}
                placeholder="Enter mobile number"
                className="py-5"
                type="tel"
                {...register("number")}
                // inputMode="numeric"
              />

              {/* select sim provider */}
              <div className=" absolute z-20 bottom-[6%] right-[0.9%]">
                <Select
                  value={simValue}
                  onValueChange={(val) => setSimValue(val)}
                >
                  <SelectTrigger className="w-[80px] flex items-center gap-2">
                    {/* show selected logo or fallback icon */}

                    <div className="flex items-center gap-2">
                      <SelectValue placeholder={<CardSim />} />
                    </div>
                  </SelectTrigger>

                  <SelectContent className=" w-[160px]">
                    {sims.map((sim) => (
                      <SelectItem key={sim.id} value={sim.value}>
                        <div className="flex items-center gap-3">
                          <Image
                            src={sim.path}
                            alt={sim.value}
                            width={32}
                            height={32}
                          />
                          {/* <span className="capitalize">{sim.value}</span> */}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="my-2">
              {/* input error */}
              {errors && errors.number && (
                <p className=" font-medium text-sm text-red-500">
                  {errors.number.message}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex mt-6 flex-col gap-y-3">
            <h2 className=" text-sm font-medium">
              Do you have an account?{" "}
              <Link className=" text-green-600" href={"/login"}>
                Sign in
              </Link>{" "}
              Do
            </h2>
            <Button
              type="submit"
              disabled={isSubmitting}
              size={"lg"}
              className=" w-full text-lg"
            >
              {isSubmitting ? "Pending..." : "Next"}
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
}

export const sims = [
  { id: 1, path: gp, value: "gp" },
  { id: 2, path: bl, value: "bl" },
  { id: 3, path: airtel, value: "airtel" },
  { id: 4, path: teletalk, value: "teletalk" },
];
