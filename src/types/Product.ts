export interface Product {
  productId: string;
  name: string;
  shortDescription: string;
  longDescription?: string;
  stock: number;
  price: number;
  mainImageUrl: string;
  imagesUrl:string[]
}

export type productType = Product[];
