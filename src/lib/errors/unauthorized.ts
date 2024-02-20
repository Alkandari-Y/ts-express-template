import type { IApiError } from "./base";
import { StatusCodes } from "http-status-codes";
import { ApiError } from "./base";

// Used from when credentials are invalid
// or request lacks correct credentials
// Returns a status code of 401
export class UnauthorizedError extends ApiError implements IApiError {
  name = "Authentication";
  constructor(message?: string) {
    super(message || "Invalid Credentials", StatusCodes.FORBIDDEN);
  }
}
