import { Request, Response } from "express";
import { createProductService } from "../../services/products/createProduct.service";

export const createProductController = async (req: Request, res: Response) => {
  const productData = req.body;

  const newProduct = await createProductService(productData);

  return res.status(201).json(newProduct);
};
