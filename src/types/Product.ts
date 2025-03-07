export interface Product {
  ProductId: string;
  Name: string;
  ShortDescription: string;
  LongDescription?: string;
  Stock: number;
  Price: number;
  MainImageUrl: string;
}

export type productType = Product[];
