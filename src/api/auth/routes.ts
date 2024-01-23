import { Router } from "express";
import { userLogin, userRegister } from "./controllers";

const router = Router();

router.post("/login", userLogin);
router.post("/register/:id", userRegister);

export default router;
