import { User } from "../entity/user";
import { sign, verify } from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "1h",
  });
};

export const createStringToken = (user: User) => {
  const token = bcrypt.hash(user.email, 10);
  return sign(
    { userId: user.id },
    `${token}${process.env.ACCESS_TOKEN_SECRET!}`,
    { expiresIn: "1h" }
  );
};

export const createDigitToken = (digit: number, user: User) => {
  return sign(
    { userId: user.id },
    `${digit}${process.env.ACCESS_TOKEN_SECRET!}`,
    { expiresIn: "1h" }
  );
};

export const getDigitToken = (token: string, digit: number) => {
  return verify(token, `${digit}${process.env.ACCESS_TOKEN_SECRET}`);
};
