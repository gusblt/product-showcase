import { Request, Response } from "express";
import { userAuthService } from "../services/auth.user";

export interface IUserAuth {
  email: string;
  password: string;
}

export const userAuthController = async (req: Request, res: Response) => {
  const body: IUserAuth = req.body;

  const token = await userAuthService(body);

  return res.json({ token });
};
