import { AppDataSource } from "../../data-source";
import { Order } from "../../entities/order.entity";
import { OrderItems } from "../../entities/orderItems.entity";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IOrderCreate } from "../../interfaces/order.interface";

export const createOrderService = async (
  orderData: IOrderCreate,
  UserId: string
) => {
  const orderRepository = AppDataSource.getRepository(Order);
  const orderItemsRepository = AppDataSource.getRepository(OrderItems);
  const productsRepository = AppDataSource.getRepository(Product);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: UserId });

  const newOrder = orderRepository.create({ user: user! });

  const newOrderItems: Array<OrderItems> = [];

  for (const product of orderData.products) {
    const getProduct = await productsRepository.findOneBy({ id: product.id });

    if (!getProduct)
      throw new AppError(404, `Product with id: ${product.id} not found.`);

    if (getProduct.stockQuantity <= 0)
      throw new AppError(
        404,
        `Product with id: ${product.id} not have in stock.`
      );

    if (getProduct.stockQuantity < product.quantity)
      throw new AppError(
        404,
        `Product with id: ${product.id} not have ${product.quantity} units in stock.`
      );

    const newOrderItem = orderItemsRepository.create({
      quantity: product.quantity,
      product: getProduct,
    });

    newOrderItems.push(newOrderItem);
  }

  for (const orderItem of newOrderItems) {
    const getProduct = await productsRepository.findOneBy({
      id: orderItem.product.id,
    });

    await productsRepository.update(getProduct!, {
      stockQuantity: getProduct!.stockQuantity - orderItem.quantity,
    });

    await orderRepository.save(newOrder);
    await orderItemsRepository.save({ ...orderItem, order: newOrder });
  }

  return await orderRepository.findOneBy({ id: newOrder.id });
};
