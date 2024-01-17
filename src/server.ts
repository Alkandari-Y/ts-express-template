import http from "http";

import app from "./app";
import { app as appConfig } from "./config";

const server = http.createServer(app);

server.listen(appConfig.PORT, () => {
  console.log(`Server running on port http://localhost:${appConfig.PORT}`);
});
