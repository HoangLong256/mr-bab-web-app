import type { Topping } from "~/shared/models/dto/topping.model";
import type {
  ContentfulTopping,
  ContentfulToppingCollection,
} from "~/shared/models/graphql/topping.model";
import { transformContentfulImageAsset } from "./image.mapper";

export function transformContentfulTopping({
  _id,
  title = "",
  description = "",
  price = 0,
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
  value?: ContentfulToppingCollection
): Topping[] {
  if (!value) return [];

  return value.toppingCollection.items?.map(transformContentfulTopping) || [];
}
