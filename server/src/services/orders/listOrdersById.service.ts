import { AppDataSource } from "../../data-source";
import { Order } from "../../entities/order.entity";

export const listOrdersByIdService = async (orderId: any) => {
  const orderRepository = AppDataSource.getRepository(Order);

  const order = await orderRepository.findOneBy({ id: orderId });

  return order;
};
