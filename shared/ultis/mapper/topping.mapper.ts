import type { Topping } from "~/shared/models/dto/topping.model";
import type {
  ContentfulTopping,
  ContentfulToppingCollection,
} from "~/shared/models/graphql/topping.model";
import { transformContentfulImageAsset } from "./image.mapper";

export function transformContentfulTopping({
  _id,
  title,
  description,
  price,
  image,
}: ContentfulTopping): Topping {
  return {
    id: _id,
    title,
    description,
    price,
    image: transformContentfulImageAsset(image),
  };
}

export function transformContentfulToppingCollection(
  toppingCollection: ContentfulToppingCollection
): Topping[] {
  return toppingCollection.items?.map(transformContentfulTopping) || [];
}
