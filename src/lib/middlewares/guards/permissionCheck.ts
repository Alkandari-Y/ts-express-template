import type { Request, Response, NextFunction } from "express";
import type { IApiError } from "lib/errors";
import { StatusCodes } from "http-status-codes";

export type PermissionCondition = (req: Request) => boolean;

export type PermissionCheck = (
  condition: PermissionCondition,
  options?: IApiError
) => (req: Request, res: Response, next: NextFunction) => void;

export const permissionCheck: PermissionCheck =
  (condition: PermissionCondition, errorResponse?: IApiError) =>
  (req: Request, res: Response, next: NextFunction) => {
    // if permissions are valid go next
    if (condition(req)) {
      return next();
    }
    return res
      .status(errorResponse?.status || StatusCodes.UNAUTHORIZED)
      .json({ message: errorResponse?.message || "Unauthorized Request" });
  };
