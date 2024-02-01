import { StatusCodes } from "http-status-codes";

export class ValidationError extends Error {
  constructor(
    message: string,
    public status: StatusCodes = StatusCodes.BAD_REQUEST
  ) {
    super(message);
  }
}
