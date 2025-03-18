import type { ContentfulImageCollection } from "./image.model";
import type { ContentfulToppingCollection } from "./topping.model";

export interface ContentfulDrink {
  _id: string;
  title?: string;
  price?: number;
  sizes?: string[];
  iceLevels?: string[];
  sugarLevels?: string[];
  toppingsCollection?: ContentfulToppingCollection;
  imagesCollection?: ContentfulImageCollection;
}

export interface ContentfulDrinkCollection {
  items?: ContentfulDrink[];
}
