import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { OrderItems } from "./orderItems.entity";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn("increment")
  readonly id: string;

  @CreateDateColumn()
  date: Date;

  @ManyToOne((type) => User, (user) => user.orders)
  user: User;

  @OneToMany((type) => OrderItems, (orderItems) => orderItems.order)
  orderItems: Array<OrderItems>;
}
