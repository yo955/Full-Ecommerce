export interface Product {
  ProductId: string;
  Name: string;
  Price: number;
  quantity?: number;
  MainImageUrl: string;
}

export type productType = Product[];
