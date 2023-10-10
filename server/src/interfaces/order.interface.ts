export interface IOrderStatus{
  status: "completed" | "pending" | "canceled"
}

export interface IOrderProduct {
  id: string
  quantity: number
}

export interface IOrderCreate {
  products: Array<IOrderProduct>
}