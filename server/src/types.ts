import { Request, Response } from "express";
import { Redis } from "ioredis";

declare global {
  namespace Express {
    interface Session {
      userId: any;
    }
  }
}

export type Context = {
  req: Request & { session: Express.Session };
  res: Response;
  redis: Redis;
};
