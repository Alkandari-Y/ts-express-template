import type { Request, Response, NextFunction } from "express";
import type { AnyZodObject, ZodError } from "zod";

// Can validate query params if schema object contains a query object
const schemaValidator =
  <T extends AnyZodObject>(schema: T) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await schema.parseAsync(req);
      console.log("Validation Result");

      for (const [key, value] of Object.entries(result)) {
        if (key in req) {
          (req as any)[key] = value;
        }
      }
      return next();
    } catch (error) {
      return next(error);
    }
  };

export { schemaValidator };
