import type { ContentfulImageAsset } from "./image.model";

export interface ContentfulTopping {
  _id: string;
  title?: string;
  description?: string;
  price?: number;
  image?: ContentfulImageAsset;
}

export interface ContentfulToppingCollection {
  items?: ContentfulTopping[];
}
