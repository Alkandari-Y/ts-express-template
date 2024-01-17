export default {
  PORT: process.env.PORT || 8000,
  env: process.env.NODE_ENV || "development", // development || production
  stage: process.env.STAGE || "local", // local || testing || staging || production
  logging: Boolean(process.env.LOGGING?.toLowerCase()),
};
