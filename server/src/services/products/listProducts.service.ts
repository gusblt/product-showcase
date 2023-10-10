import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";

export const listProductService = async (
  onlyStock: any,
  page: any,
  limit: number
) => {
  const productRepository = AppDataSource.getRepository(Product);

  const products = await productRepository.find();

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const productsByPage = products.slice(startIndex, endIndex);
  const lastPage = products.length / 10 + 1;

  if (page > lastPage) throw new AppError(404, "Page not found");

  if (onlyStock === "true") {
    const productsWithStock = productsByPage.filter(
      (product) => product.stockQuantity >= 1
    );
    return { page: page, products: productsWithStock };
  }

  return { currentPage: page, products: productsByPage };
};
