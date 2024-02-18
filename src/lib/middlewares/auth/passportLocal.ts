import { Strategy } from "passport-local";
import { comparePassword } from "../../utils/auth";
import { UnauthorizedError } from "../../../lib/errors";

export const localStrategy = new Strategy(
  { usernameField: "username" },
  async (username, password, done) => {
    try {
      const user = await { username: username || "test", password: "password" }; // implement data fetching

      const passwordsMatch = user
        ? await comparePassword(password, user.password)
        : false;

      if (passwordsMatch) return done(null, user);

      return done(new UnauthorizedError());
    } catch (error) {
      return done(error);
    }
  }
);
