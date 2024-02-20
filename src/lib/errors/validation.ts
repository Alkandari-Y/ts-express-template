import { StatusCodes } from "http-status-codes";
import { ApiError } from "./base";
import type { IApiError, ErrorArrayType } from "./base";

// Used from when request is invalid
// or does not pass schema validation
// Returns a status code of 400

export class ValidationError extends ApiError implements IApiError {
  name = "Validation";
  constructor(message?: string, public error?: ErrorArrayType) {
    super(message || "Bad Request", StatusCodes.BAD_REQUEST);
  }
}
