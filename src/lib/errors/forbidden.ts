import type { IApiError } from "./base";
import { StatusCodes } from "http-status-codes";
import { ApiError } from "./base";

// Used from when request and credentials are valid
// but permissions are invalid
// Returns a status code of 403
export class ForbiddenError extends ApiError implements IApiError {
  name = "Forbidden";
  constructor(message?: string) {
    super(message || "Invalid Permissions", StatusCodes.FORBIDDEN);
  }
}
