import type { Image } from "~/shared/models/dto/image.model";
import type {
  ContentfulImageAsset,
  ContentfulImageCollection,
} from "~/shared/models/graphql/image.model";

export function transformContentfulImageAsset({
  title,
  description,
  contentType,
  fileName,
  size,
  url,
  width,
  height,
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
  imageCollection: ContentfulImageCollection
): Image[] {
  return imageCollection.items?.map(transformContentfulImageAsset) || [];
}
