import type { ContentfulImageCollection } from "./image.model";
import type { ContentfulToppingCollection } from "./topping.model";

export interface ContentfulDrink {
  _id: string;
  title: string;
  price: number;
  size: string[];
  iceLevel: string[];
  sugarLevel: string[];
  toppingsCollection: ContentfulToppingCollection;
  imagesCollection: ContentfulImageCollection;
}

export interface ContentfulDrinkCollection {
  drinkCollection: {
    items: ContentfulDrink[];
  };
}
