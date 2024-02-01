import { z } from "zod";

const userSchema = z.object({
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

type UserSchema = z.infer<typeof userSchema>;

export { userSchema, UserSchema };
