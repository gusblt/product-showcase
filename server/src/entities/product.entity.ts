import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItems } from "./orderItems.entity";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 256 })
  title: string;

  @Column()
  price: number;

  @Column()
  tag: string;

  @Column({ name: "stock_quantity" })
  stockQuantity: number;

  @OneToMany((type) => OrderItems, (orderItems) => orderItems.product)
  ordersItems: Array<OrderItems>;
}
