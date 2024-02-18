import { StatusCodes } from "http-status-codes";
import type { Request, Response, NextFunction } from "express";
import type { ErrorArrayType, IApiError } from "../../errors";
import { ValidationError } from "../../errors"

type errorResponse = {
  message: string;
  error?: ErrorArrayType
}

export function errorHandler(
  err: IApiError,
  req: Request,
  res: Response,
  next: NextFunction
): Response {

  const responseObject: errorResponse = { message: err.message || "an error occurred" }
  
  if (err instanceof ValidationError && err.error !== undefined) {
    responseObject.error = err.error
  }
  return res
    .status(err.status || StatusCodes.BAD_REQUEST)
    .json(responseObject);
}
