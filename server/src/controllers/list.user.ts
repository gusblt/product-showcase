import { Request, Response } from "express";
import { listUserService } from "../services/list.user";
import { instanceToPlain } from "class-transformer";

export const listUserController = async (req: Request, res: Response) => {
  const userId = req.user.id;

  const user = await listUserService(userId);

  return res.json(instanceToPlain(user));
};
