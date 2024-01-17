export default {
  host: process.env.DB_HOST || "default",
  port: process.env.DB_PORT || "default",
  database: process.env.DB_NAME || "default",
  user: process.env.DB_USER || "default",
  password: process.env.DB_PASSWORD || "default",
};
