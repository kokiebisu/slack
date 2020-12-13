import { v4 } from "uuid";
import { redis } from "../redis";

export const createConfirmationUrl = async (userId: number) => {
  const token = v4();
  await redis.set("confirmation: " + token, userId, "ex", 60 * 60 * 24);

  return `http://localhost:4000/user/confirm/${token}`;
};
