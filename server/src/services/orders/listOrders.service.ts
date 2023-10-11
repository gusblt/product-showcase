import { AppDataSource } from "../../data-source";
import { Order } from "../../entities/order.entity";

export const listOrdersService = async (page: any, limit: number) => {
  const orderRepository = AppDataSource.getRepository(Order);

  const skip = page * limit - limit;

  const order = await orderRepository.find({ take: limit });

  return order;
};
