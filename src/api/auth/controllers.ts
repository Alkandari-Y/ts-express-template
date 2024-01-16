import { Request, Response, NextFunction } from 'express';

export const userLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.json({ message: "login api" });
    } catch (err) {
        return next(err)
    }
}

export const userRegister = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.json({ message: "register api" });
    } catch (err) {
        return next(err)
    }
}