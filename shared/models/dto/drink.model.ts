import type { Image } from "./image.model";
import type { Topping } from "./topping.model";

export interface Drink {
  id: string;
  iceLevel: string[];
  images: Image[];
  price: number;
  size: string[];
  sugarLevel: string[];
  title: string;
  toppings: Topping[];
}
