export default {
  service: process.env.EMAIL_SERVICE || "default",
  from: process.env.EMAIL_SERVICE || "default",
  auth: {
    user: process.env.EMAIL_USERNAME || "default",
    pass: process.env.EMAIL_PASSWORD || "default",
  },
};
