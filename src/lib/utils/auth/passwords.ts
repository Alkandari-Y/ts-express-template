import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

export const comparePassword = async (
  userInput: string,
  savedPassword: string
) => {
  return await bcrypt.compare(userInput, savedPassword);
};
