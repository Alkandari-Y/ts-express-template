import http from "http";

import app from "./app";
import { app as appConfig } from "./config";
import { connectDb } from "./loaders";

const server = http.createServer(app);

connectDb()

server.listen(appConfig.PORT, () => {
  console.log(`Server running on port http://localhost:${appConfig.PORT}`);
});
