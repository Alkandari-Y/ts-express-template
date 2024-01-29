import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import express from "express";
import morgan from "morgan";
import passport from "passport";

import { errorHandler, notFound } from "./lib/middlewares/errors";
import router from "./routes";
import { localStrategy, jwtStrategy } from "./lib/middlewares/auth";

const app = express();

app.use(cors({ credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cookieParser());
app.use(passport.initialize());

passport.use("jwt", jwtStrategy);
passport.use("local", localStrategy);

app.use(router);

app.use(notFound);
app.use(errorHandler);

export default app;
