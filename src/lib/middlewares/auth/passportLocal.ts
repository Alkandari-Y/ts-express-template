import { StatusCodes } from "http-status-codes";
import { Strategy } from "passport-local";
import bcrypt from "bcrypt";

import { ExpressError } from "lib/errors";

export const localStrategy = new Strategy(
  { usernameField: "username" },
  async (username, password, done) => {
    try {
      const user = await { username: username || "test", password: "password" }; // implement data fetching

      const passwordsMatch = user
        ? await bcrypt.compare(password, user.password)
        : false;

      if (passwordsMatch) return done(null, user);

      return done(
        new ExpressError("Invalid Credentials", StatusCodes.UNAUTHORIZED)
      );
    } catch (error) {
      return done(error);
    }
  }
);
