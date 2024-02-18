import { z } from "zod";

const userRegisterSchema = z.object({
  body: z.object({
    username: z.string({
      required_error: "Username is required",
    }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email("Not a valid email"),
    password: z.string({ required_error: "Password is required" }),
  }),
  //   query: z.object({}).strict({ message: "No query params" }), // strictly no query params
});

export type UserRegisterSchema = z.infer<typeof userRegisterSchema>;

export { userRegisterSchema };
