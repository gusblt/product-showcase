import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";
import { IProductUpdate } from "../../interfaces/product.interface";

export const updateProductService = async (data: IProductUpdate, id: string) => {
  const productRepository = AppDataSource.getRepository(Product);

  const product = await productRepository.findOneBy({ id });

  if (!product) throw new AppError(404, "Product not found!");

  await productRepository.update(product.id, data);

  const updatedProduct = await productRepository.findOneBy({ id });

  return updatedProduct;
};
