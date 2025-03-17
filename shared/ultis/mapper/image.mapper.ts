import type { Image } from "~/shared/models/dto/image.model";
import type {
  ContentfulImageAsset,
  ContentfulImageCollection,
} from "~/shared/models/graphql/image.model";

export function transformContentfulImageAsset(
  asset: ContentfulImageAsset | undefined
): Image | undefined {
  if (!asset) return undefined;

  const {
    title = "",
    description = "",
    contentType = "",
    fileName = "",
    size = 0,
    url = "",
    width = 0,
    height = 0,
  } = asset;

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
  collection: ContentfulImageCollection | undefined
): Image[] {
  if (!collection) return [];

  return (
    (collection?.items?.map(transformContentfulImageAsset) as Image[]) || []
  );
}
