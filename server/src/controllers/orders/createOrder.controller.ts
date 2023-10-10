import { Request, Response } from "express";
import { IOrderCreate } from "../../interfaces/order.interface";
import { createOrderService } from "../../services/orders/createOrder.service";
import { instanceToPlain } from "class-transformer";

export const createOrderController = async (req: Request, res: Response) => {
  const orderData: IOrderCreate = req.body;
  const userId = req.user.id;

  const newOrder = await createOrderService(orderData, userId);

  return res.status(201).json(instanceToPlain(newOrder));
};
