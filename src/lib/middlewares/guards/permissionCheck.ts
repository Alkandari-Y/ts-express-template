import { StatusCodes } from "http-status-codes";
import type { Request, Response, NextFunction } from "express";

export type PermissionCondition = (req: Request) => boolean;

// could also implement solution where Error instance is passed and used

export type UnauthorizedStatusCodes =
  | StatusCodes.BAD_REQUEST
  | StatusCodes.UNAUTHORIZED
  | StatusCodes.PAYMENT_REQUIRED
  | StatusCodes.FORBIDDEN
  | StatusCodes.NOT_FOUND
  | StatusCodes.METHOD_NOT_ALLOWED;

export type PermissionCheckOptions = {
  statusCode?: UnauthorizedStatusCodes;
  message?: string;
};

export type PermissionCheck = (
  condition: PermissionCondition,
  options?: PermissionCheckOptions
) => (req: Request, res: Response, next: NextFunction) => void;

export const permissionCheck: PermissionCheck =
  (condition: PermissionCondition, options?: PermissionCheckOptions) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (condition(req)) {
      return res
        .status(options?.statusCode || StatusCodes.UNAUTHORIZED)
        .json({ message: options?.message || "Unauthorized Request" });
    }
    return next();
  };
