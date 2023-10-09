export interface IProductCreate {
  title: string;
  price: number;
  tags: Array<IProductTag>;
}

export interface IProductTag {
  name: string;
}
