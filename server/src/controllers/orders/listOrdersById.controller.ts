import { Request, Response } from "express";
import { listOrdersByIdService } from "../../services/orders/listOrdersById.service";

export const listOrdersByIdController = async (req: Request, res: Response) => {
  const orderId = req.params.id;

  const order = await listOrdersByIdService(orderId);

  return res.json(order);
};
