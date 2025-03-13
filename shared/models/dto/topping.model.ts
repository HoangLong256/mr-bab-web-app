import type { Image } from "./image.model";

export interface Topping {
  id: string;
  description: string;
  image: Image;
  price: number;
  title: string;
}
