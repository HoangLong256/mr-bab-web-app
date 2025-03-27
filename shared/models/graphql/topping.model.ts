import type { ContentfulImageAsset } from './image.model';

export interface ContentfulTopping {
  _id: string;
  description?: string;
  image?: ContentfulImageAsset;
  price?: number;
  title?: string;
}

export interface ContentfulToppingCollection {
  items?: ContentfulTopping[];
}
