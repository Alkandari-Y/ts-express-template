import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

export function notFound(
  req: Request,
  res: Response,
  next: NextFunction
): Response {
  return res.status(StatusCodes.NOT_FOUND).json({ message: "not found" });
}
