import type { Request, Response, NextFunction } from "express";

export type GoNextRouteCondition = (req: Request) => boolean;

export type GoNextRoute = (
  goNextCallbackCheck: GoNextRouteCondition
) => (req: Request, res: Response, next: NextFunction) => void;

export const goNextRoute: GoNextRoute =
  (goNextCallbackCheck: GoNextRouteCondition) =>
  (req: Request, _: Response, next: NextFunction) => {
    if (goNextCallbackCheck(req)) {
      return next("route");
    }
    return next();
  };
