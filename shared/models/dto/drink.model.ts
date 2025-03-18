import type { Image } from "./image.model";
import type { Topping } from "./topping.model";

export interface Drink {
  id: string;
  iceLevels?: string[];
  images?: Image[];
  price?: number;
  sizes?: string[];
  sugarLevels?: string[];
  title?: string;
  toppings?: Topping[];
}
