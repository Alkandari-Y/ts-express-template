import { StatusCodes } from "http-status-codes";
import type { Request, Response, NextFunction } from "express";
import { IError } from "lib/errors";

export function errorHandler(
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
): Response {
  return res
    .status(err.status || StatusCodes.BAD_REQUEST)
    .json({ message: err.message || "an error occurred" });
}
