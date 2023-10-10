import { Request, Response } from "express";
import { IProductUpdate } from "../../interfaces/product.interface";
import { updateProductService } from "../../services/products/updateProduct.service";

export const updateProductController = async (req: Request, res: Response) => {
  const productId: string = req.params.id;
  const data: IProductUpdate = req.body;

  const updatedProduct = await updateProductService(data, productId);

  return res.status(202).json(updatedProduct);
};
