export default {
  JWT_ACCESS_EXP: process.env.JWT_ACCESS_EXP || "2d",
  JWT_REFRESH_EXP: process.env.JWT_REFRESH_EXP || "1m",
  JWT_SECRET: process.env.JWT_SECRET || "somethingSecret",
};
