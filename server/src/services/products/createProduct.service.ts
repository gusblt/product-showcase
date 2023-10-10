import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";
import { IProductCreate } from "../../interfaces/product.interface";

export const createProductService = async (data: IProductCreate) => {
  const productRepository = AppDataSource.getRepository(Product);

  const productTitleAlreadyInUse = await productRepository.findOneBy({
    title: data.title,
  });

  if (productTitleAlreadyInUse)
    throw new AppError(409, "Product title already in use!");

  const newProduct = productRepository.create(data);

  await productRepository.save(newProduct);

  return newProduct;
};
