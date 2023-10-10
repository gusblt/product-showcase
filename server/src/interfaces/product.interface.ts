export interface IProductCreate {
  title: string;
  price: number;
  tags: Array<IProductTag>;
  stockQuantity: number;
}

export interface IProductTag {
  name: string;
}

export interface IProductUpdate {
  title?: string;
  price?: number;
  tags?: Array<IProductTag>;
  stockQuantity?: number;
}
