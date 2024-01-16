import { Router } from "express";
import authRoutes from "./api/auth/routes";

const apiRouter = Router();

apiRouter.use("/auth", authRoutes);

export default apiRouter;
