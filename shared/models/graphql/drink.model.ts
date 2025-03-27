import type { ContentfulImageCollection } from './image.model';
import type { ContentfulToppingCollection } from './topping.model';

export interface ContentfulDrink {
  _id: string;
  iceLevels?: string[];
  imagesCollection?: ContentfulImageCollection;
  price?: number;
  sizes?: string[];
  sugarLevels?: string[];
  title?: string;
  toppingsCollection?: ContentfulToppingCollection;
}

export interface ContentfulDrinkCollection {
  items?: ContentfulDrink[];
}
