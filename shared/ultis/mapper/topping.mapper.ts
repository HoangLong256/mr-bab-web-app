import type { Topping } from "~/shared/models/dto/topping.model";
import type {
  ContentfulTopping,
  ContentfulToppingCollection,
} from "~/shared/models/graphql/topping.model";
import { transformContentfulImageAsset } from "./image.mapper";

export function transformContentfulTopping(
  topping: ContentfulTopping | undefined
): Topping | undefined {
  if (!topping) return undefined;

  const { _id, title = "", description = "", price = 0, image = {} } = topping;

  return {
    id: _id,
    title,
    description,
    price,
    image: image ? transformContentfulImageAsset(image) : undefined,
  };
}

export function transformContentfulToppingCollection(
  collection: ContentfulToppingCollection | undefined
): Topping[] {
  if (!collection) return [];

  return (
    (collection?.items?.map(transformContentfulTopping) as Topping[]) || []
  );
}
