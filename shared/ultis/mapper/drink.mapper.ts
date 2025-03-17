import type { Drink } from "~/shared/models/dto/drink.model";
import type {
  ContentfulDrink,
  ContentfulDrinkCollection,
} from "~/shared/models/graphql/drink.model";
import { transformContentfulImageCollection } from "./image.mapper";
import { transformContentfulToppingCollection } from "./topping.mapper";

export const transformContentfulDrink = (
  drink: ContentfulDrink | undefined
): Drink | undefined => {
  if (!drink) return undefined;

  const {
    _id,
    title = "",
    price = 0,
    size = [],
    sugarLevel = [],
    iceLevel = [],
    toppingsCollection = {},
    imagesCollection = {},
  } = drink;

  return {
    id: _id,
    title: title,
    price: price,
    size: size,
    sugarLevel: sugarLevel,
    iceLevel: iceLevel,
    toppings: toppingsCollection
      ? transformContentfulToppingCollection(toppingsCollection)
      : [],
    images: imagesCollection
      ? transformContentfulImageCollection(imagesCollection)
      : [],
  };
};

export function transformContentfulDrinkCollection(
  collection: ContentfulDrinkCollection | undefined
): Drink[] {
  if (!collection) return [];

  return (collection?.items?.map(transformContentfulDrink) as Drink[]) || [];
}
