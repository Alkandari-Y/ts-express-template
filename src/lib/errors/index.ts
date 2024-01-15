import { StatusCodes } from "http-status-codes";

export interface IError extends Error {
  status: StatusCodes | undefined;
  error?: string[] | string;
}

export class ExpressError extends Error implements IError {
  constructor(
    message: string,
    public status: StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super(message);
  }
}
