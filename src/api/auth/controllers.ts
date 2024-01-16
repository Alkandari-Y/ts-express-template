import { Request, Response, NextFunction } from 'express';

export const userLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.json({ message: "login api" });
    } catch (e) {
        return next(e)
    }
}

export const userRegister = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.json({ message: "register api" });
    } catch (e) {
        return next(e)
    }
}