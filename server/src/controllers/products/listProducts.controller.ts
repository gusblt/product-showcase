import { Request, Response } from "express";
import { listProductService } from "../../services/products/listProducts.service";

export const listProductController = async (req: Request, res: Response) => {
  const onlyStock = req.query.only_stock;
  const page = req.query.page || 1;

  const products = await listProductService(onlyStock, page, 10);

  return res.json(products);
};
