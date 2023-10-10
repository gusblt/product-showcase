import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Order } from "./order.entity";

@Entity("order_items")

export class OrderItems{
  @PrimaryGeneratedColumn('uuid')
  readonly id: string

  @Column()
  quantity: number

  @ManyToOne(type => Product, (product) => product.id, {eager: true})
  product: Product

  @ManyToOne(type => Order, (order) => order.id)
  order: Order
}