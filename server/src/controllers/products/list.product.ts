import { Request, Response } from "express";
import { listProductService } from "../../services/products/list.product";

export const listProductController = async (req: Request, res: Response) => {
  const onlyStock = req.query.only_stock;

  const products = await listProductService(onlyStock);

  return res.json(products);
};
