import type { Drink } from '~/shared/models/dto/drink.model';
import type { ContentfulDrink, ContentfulDrinkCollection } from '~/shared/models/graphql/drink.model';

import { transformContentfulImageCollection } from './image.mapper';
import { transformContentfulToppingCollection } from './topping.mapper';

export const transformContentfulDrink = (drink: ContentfulDrink | undefined): Drink | undefined => {
  if (!drink) return undefined;

  const {
    _id,
    iceLevels = [],
    imagesCollection = {},
    price = 0,
    sizes = [],
    sugarLevels = [],
    title = '',
    toppingsCollection = {},
  } = drink;

  return {
    iceLevels,
    id: _id,
    images: imagesCollection ? transformContentfulImageCollection(imagesCollection) : [],
    price: price,
    sizes,
    sugarLevels,
    title: title,
    toppings: toppingsCollection ? transformContentfulToppingCollection(toppingsCollection) : [],
  };
};

export function transformContentfulDrinkCollection(collection: ContentfulDrinkCollection | undefined): Drink[] {
  if (!collection) return [];

  return (collection?.items?.map(transformContentfulDrink) as Drink[]) || [];
}
