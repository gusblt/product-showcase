import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";

export const listProductService = async (onlyStock: string | any) => {
  const productRepository = AppDataSource.getRepository(Product);

  const products = await productRepository.find();

  if (onlyStock === 'true') {
    const productsWithStock = products.filter(
      (product) => product.stockQuantity >= 1
    );
    return productsWithStock;
  }

  return products;
};
