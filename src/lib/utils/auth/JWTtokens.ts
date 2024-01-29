import jsonwebtoken from "jsonwebtoken";
import { jwt as jwtConfig } from "../../../config";

export const createJWTToken = (user: any, tokenType: "access" | "refresh") => {
  const payload = {
    _id: user._id,
    type: tokenType === "access" ? "access" : "refresh",
    username: user.username,
  };
  const token = jsonwebtoken.sign(payload, jwtConfig.JWT_SECRET, {
    expiresIn:
      tokenType === "access"
        ? jwtConfig.JWT_ACCESS_EXP
        : jwtConfig.JWT_REFRESH_EXP,
  });
  return token;
};

export const createUserTokens = (user: any) => {
  const access = createJWTToken(user, "access");
  const refresh = createJWTToken(user, "refresh");
  return { access, refresh };
};
