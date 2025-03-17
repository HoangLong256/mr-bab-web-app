import type { Image } from "~/shared/models/dto/image.model";
import type {
  ContentfulImageAsset,
  ContentfulImageCollection,
} from "~/shared/models/graphql/image.model";

export function transformContentfulImageAsset({
  title = "",
  description = "",
  contentType = "",
  fileName = "",
  size = 0,
  url = "",
  width = 0,
  height = 0,
}: ContentfulImageAsset): Image {
  return {
    title,
    description,
    contentType,
    fileName,
    size,
    url,
    width,
    height,
  };
}

export function transformContentfulImageCollection(
  value?: ContentfulImageCollection
): Image[] {
  if (!value) return [];

  return value.imageCollection.items?.map(transformContentfulImageAsset) || [];
}
