import { Router } from "express";

const router = Router();

router.route("/").get((req, res, next) => {
  return res.json({ message: "api" });
});

export default router;
