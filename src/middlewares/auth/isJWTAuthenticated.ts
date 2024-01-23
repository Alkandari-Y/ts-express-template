import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

import { jwt as jwtConfig } from "../../config";

export async function isJWTAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const bearer = req.headers.authorization;

  if (!bearer) {
    return next({
      status: StatusCodes.UNAUTHORIZED,
      message: "No auth headers",
    });
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    return next({
      status: StatusCodes.UNAUTHORIZED,
      message: "No auth headers",
    });
  }
  try {
    const decoded = jwt.verify(token, jwtConfig.JWT_SECRET);
    // const user = await UserModel.findone(something)
    // req.user = user
    return next();
  } catch (error) {
    return next({ status: StatusCodes.UNAUTHORIZED, message: "Invalid token" });
  }
}
