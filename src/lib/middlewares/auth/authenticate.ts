import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { ExpressError } from "lib/errors";
import { authenticate } from "passport";

export const passportAuthenticator =
  (loginType: string, refresh: boolean | undefined) =>
  (req: Request, res: Response, next: NextFunction) => {
    authenticate(
      loginType,
      (
        err: ExpressError,
        user: Express.User,
        info?: { type: "refresh" | "access" }
      ) => {
        if (err || !user)
          return next({
            status: StatusCodes.UNAUTHORIZED,
            name: "Authentication Error",
            message: "Invalid Credentials",
          });

        if (refresh && info?.hasOwnProperty("type") && info.type === "access") {
          return next({
            status: StatusCodes.UNAUTHORIZED,
            name: "Authentication Error",
            message: "Invalid refresh token",
          });
        } else if (
          !refresh &&
          info?.hasOwnProperty("type") &&
          info.type === "refresh"
        ) {
          return next({
            status: StatusCodes.UNAUTHORIZED,
            name: "Authentication Error",
            message: "Invalid access token",
          });
        }

        req.user = user;
        return next();
      }
    )(req, res, next);
  };

module.exports = passportAuthenticator;
