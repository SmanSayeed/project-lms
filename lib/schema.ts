import * as z from "zod/v4";

// register schema (part - 01)
export const RegisterSchemaStepOne = z.object({
  number: z
    .string()
    .refine((num) => num.trim() !== "", {
      message: "Please enter your phone number",
    })
    .length(11, { message: "Please enter a valid phone number" }),
});

export type RegisterSchemaStepOneInput = z.infer<typeof RegisterSchemaStepOne>;

// register schema (part - 02)
export const RegisterSchemaStepTwo = z.object({
  first_name: z
    .string()
    .refine((name) => name.trim() !== "", {
      message: "Please enter your first name",
    })
    .min(5, { message: "First name has to be at least 5 characters long" })
    .max(50, { message: "Last name must be under 50 characters" }),
  last_name: z
    .string()
    .refine((name) => name.trim() !== "", {
      message: "Please enter your first name",
    })
    .min(5, { message: "First name has to be at least 5 characters long" })
    .max(50, { message: "Last name must be under 50 characters" }),
  birth_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Please select your birth date",
  }),
  gender: z.enum(["men", "women"], { message: "Please select your gender" }),
});

export type RegisterSchemaStepTwoInput = z.infer<typeof RegisterSchemaStepTwo>;

// register schema (part - 03)
export const RegisterSchemaStepThree = z.object({
  username: z
    .string()
    .refine((uname) => uname.trim() !== "", {
      message: "Please enter your username",
    })
    .refine((uname) => !uname.startsWith("@shikkha.dev"), {
      message: "Username cannot start with or contain '@shikkha.dev' ",
    })
    .min(5, { message: "Username has to be at least 5 characters long" })
    .max(30, { message: "Username must be under 30 characters" }),
});

export type RegisterSchemaStepThreeInput = z.infer<
  typeof RegisterSchemaStepThree
>;

// login schema

export const LoginSchema = z.object({
  username: z
    .string()
    .refine((uname) => uname.trim() !== "", {
      message: "Please enter your username",
    })
    .refine((uname) => !uname.startsWith("@shikkha.dev"), {
      message: "Username cannot start with or contain '@shikkha.dev' ",
    })
    .min(5, { message: "Username has to be at least 5 characters long" })
    .max(30, { message: "Username must be under 30 characters" }),
});

export type LoginSchemaInput = z.infer<typeof LoginSchema>;
