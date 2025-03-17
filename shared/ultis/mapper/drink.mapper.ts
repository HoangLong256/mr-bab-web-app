import type { Drink } from "~/shared/models/dto/drink.model";
import type {
  ContentfulDrink,
  ContentfulDrinkCollection,
} from "~/shared/models/graphql/drink.model";
import { transformContentfulImageCollection } from "./image.mapper";
import { transformContentfulToppingCollection } from "./topping.mapper";

export const transformContentfulDrink = ({
  _id,
  title = "",
  price = 0,
  size = [],
  sugarLevel = [],
  iceLevel = [],
  toppingsCollection,
  imagesCollection,
}: ContentfulDrink): Drink => {
  return {
    id: _id,
    title,
    price,
    size,
    sugarLevel,
    iceLevel,
    toppings: transformContentfulToppingCollection(toppingsCollection),
    images: transformContentfulImageCollection(imagesCollection),
  };
};

export function transformContentfulDrinkCollection(
  value?: ContentfulDrinkCollection
): Drink[] {
  if (!value) return [];

  return value.drinkCollection.items?.map(transformContentfulDrink) || [];
}
