import type { Topping } from '~/shared/models/dto/topping.model';
import type { ContentfulTopping, ContentfulToppingCollection } from '~/shared/models/graphql/topping.model';

import { transformContentfulImageAsset } from './image.mapper';

export function transformContentfulTopping(topping: ContentfulTopping | undefined): Topping | undefined {
  if (!topping) return undefined;

  const { _id, description = '', image = {}, price = 0, title = '' } = topping;

  return {
    description,
    id: _id,
    image: image ? transformContentfulImageAsset(image) : undefined,
    price,
    title,
  };
}

export function transformContentfulToppingCollection(collection: ContentfulToppingCollection | undefined): Topping[] {
  if (!collection) return [];

  return (collection?.items?.map(transformContentfulTopping) as Topping[]) || [];
}
