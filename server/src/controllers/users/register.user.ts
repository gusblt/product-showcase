import { Request, Response } from "express";
import { userRegisterService } from "../../services/users/register.user";
import { instanceToPlain } from "class-transformer";

export interface IUserRegister {
  email: string;
  password: string;
  name: string;
  age: number;
}

export const userRegisterController = async (req: Request, res: Response) => {
  const body: IUserRegister = req.body;

  const createdUser = await userRegisterService(body);

  return res.status(201).json(instanceToPlain(createdUser));
};
