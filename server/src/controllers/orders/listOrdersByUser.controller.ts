import { Request, Response } from "express";
import { listOrdersByUserService } from "../../services/orders/listOrdersByUser.service";

export const listOrdersByUserController = async (
  req: Request,
  res: Response
) => {
  const userId = req.user.id;

  const orders = await listOrdersByUserService(userId);

  return res.json(orders);
};
