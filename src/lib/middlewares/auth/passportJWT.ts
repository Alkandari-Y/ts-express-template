import { Strategy, ExtractJwt } from "passport-jwt";

import { UnauthorizedError } from "../../../lib/errors";

export const jwtStrategy = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "test", // use the jwt env
  },
  async (jwtPayload, done) => {
    if (Date.now() > jwtPayload.exp * 1000) {
      return done(new UnauthorizedError("Expired token"));
    }
    try {
      const user = { username: "test" }; // implement data fetching
      done(null, user, jwtPayload);
    } catch (error) {
      done(error);
    }
  }
);
