import { StatusCodes } from "http-status-codes";
import { Strategy, ExtractJwt } from "passport-jwt";

import { ExpressError } from "../../errors";

export const jwtStrategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "test", // use the jwt env
  },
  async (jwtPayload, done) => {
    if (Date.now() > jwtPayload.exp * 1000) {
      return done(new ExpressError("Invalid token", StatusCodes.UNAUTHORIZED));
    }
    try {
      const user = { username: "test" }; // implement data fetching
      done(null, user, jwtPayload);
    } catch (error) {
      done(error);
    }
  }
);
