import type { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";
import { ValidationError } from "../../errors"

// Can validate query params if schema object contains a query object
// function returns a callback from which a schema can be used per request cycle
// to validate the request body or query
const schemaValidator =
  <T extends AnyZodObject>(schema: T) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validates the request obj
      const result = await schema.parseAsync(req);

      // iterates through the request to take only required properties
      for (const [key, value] of Object.entries(result)) {
        if (key in req) {
          (req as any)[key] = value;
        }
      }
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return next(new ValidationError("Invalid request", error.errors));
      }
      // handles other possible errors
      return next(error)
    }
  };

export { schemaValidator };
