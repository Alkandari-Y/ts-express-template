import express from "express";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middlewares/errors";
import router from "./routes";

const app = express();

app.use(cors({ credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cookieParser());

app.use("/api", router);

app.use(notFound);
app.use(errorHandler);

export default app;
