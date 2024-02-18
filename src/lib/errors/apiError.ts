import { StatusCodes } from "http-status-codes";

export interface IApiError extends Error {
  name: string;
  status: StatusCodes | undefined;
  error?: string[] | string;
}

export class ApiError extends Error implements IApiError {
  name = "API Error";
  constructor(
    message: string,
    public status: StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super(message);
  }
}
