import { AppDataSource } from "../../data-source";
import { Order } from "../../entities/order.entity";

export const listOrdersByUserService = async (userId: string) => {
  const ordersRepository = AppDataSource.getRepository(Order);

  const orders = await ordersRepository.findBy({ user: { id: userId } });

  return orders
};
