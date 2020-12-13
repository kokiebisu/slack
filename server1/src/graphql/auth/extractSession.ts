import { Mutation, Ctx } from "type-graphql";

import { Context } from "../../interface/Context";
import { ExtractResponse } from "../response/authResponse";

declare module "express-session" {
  interface Session {
    userId: string;
  }
}

export class VerifyResolver {
  @Mutation(() => ExtractResponse)
  async extractSession(
    @Ctx() context: Context
  ): Promise<ExtractResponse | Error> {
    try {
      const userId = context.req.session!.userId;

      if (!userId) {
        return {
          ok: false,
          errorlog: "cannot extract",
          userId: "",
        };
      }

      return {
        ok: true,
        userId,
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
