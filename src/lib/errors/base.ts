import { StatusCodes } from "http-status-codes";
import type { ZodIssue } from "zod";

export type ErrorArrayType = {[key:string]: string}[] | string[] | ZodIssue[];

export interface IApiError extends Error {
  name: string;
  status: StatusCodes | undefined;
  error?: ErrorArrayType
}

export class ApiError extends Error implements IApiError {
  name = "API Error";
  constructor(
    message: string,
    public status: StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR,
    public error?: ErrorArrayType
  ) {
    super(message);
  }
}
