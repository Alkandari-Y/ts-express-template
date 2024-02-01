import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { ExpressError } from "../../lib/errors";

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.json({ message: "login api" });
  } catch (err) {
    return next(err);
  }
};

export const userRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.json({ message: "register api" });
};
