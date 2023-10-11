import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { OrderItems } from "./orderItems.entity";
import { IOrderStatus } from "../interfaces/order.interface";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn("increment")
  readonly id: string;

  @CreateDateColumn()
  date: Date;

  @Column({ default: "pending" })
  status: string;

  @ManyToOne((type) => User, (user) => user.orders)
  user: User;

  @OneToMany((type) => OrderItems, (orderItems) => orderItems.order, {eager: true})
  orderItems: Array<OrderItems>;
}
