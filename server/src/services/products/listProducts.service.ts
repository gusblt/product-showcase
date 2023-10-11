import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";

export const listProductService = async (
  onlyStock: any,
  page: any,
  limit: number
) => {
  const productRepository = AppDataSource.getRepository(Product);

  page = parseInt(page);
  const startIndex = page * limit - limit;

  const products = await productRepository.find({
    take: limit,
    skip: startIndex,
  });

  if (products.length <= 0) throw new AppError(404, "Page not found!");

  if (onlyStock === "true") {
    const productsWithStock = products.filter(
      (product) => product.stockQuantity >= 1
    );
    return { page: page, products: productsWithStock };
  }

  return { currentPage: page, products: products };
};
