import { Request, Response } from "express";
import { listOrdersService } from "../../services/orders/listOrders.service";

export const listOrdersController = async (req: Request, res: Response) => {
  const page = req.params.page

  const order = await listOrdersService(page, 10);

  return res.json(order);
};
