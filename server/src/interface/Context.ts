import { Request, Response } from 'express';
import { createUsersLoader } from 'src/util/usersLoader';

export interface Context {
  req: Request;
  res: Response;
  payload?: { userId: string };
  usersLoader: ReturnType<typeof createUsersLoader>;
}
