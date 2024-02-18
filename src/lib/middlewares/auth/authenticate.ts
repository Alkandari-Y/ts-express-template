import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { ApiError, UnauthorizedError } from "../../../lib/errors";
import { authenticate } from "passport";

export const passportAuthenticator =
  (loginType: string, refresh: boolean | undefined) =>
  (req: Request, res: Response, next: NextFunction) => {
    authenticate(
      loginType,
      (
        err: ApiError,
        user: Express.User,
        info?: { type: "refresh" | "access" }
      ) => {
        if (err || !user) return next(new UnauthorizedError());

        if (refresh && info?.hasOwnProperty("type") && info.type === "access") {
          return next(new UnauthorizedError("Invalid refresh token"));
        } else if (
          !refresh &&
          info?.hasOwnProperty("type") &&
          info.type === "refresh"
        ) {
          return next(new UnauthorizedError("Invalid access token"));
        }

        req.user = user;
        return next();
      }
    )(req, res, next);
  };

module.exports = passportAuthenticator;
