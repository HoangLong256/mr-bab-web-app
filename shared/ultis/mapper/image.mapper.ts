import type { Image } from '~/shared/models/dto/image.model';
import type { ContentfulImageAsset, ContentfulImageCollection } from '~/shared/models/graphql/image.model';

export function transformContentfulImageAsset(asset: ContentfulImageAsset | undefined): Image | undefined {
  if (!asset) return undefined;

  const {
    contentType = '',
    description = '',
    fileName = '',
    height = 0,
    size = 0,
    title = '',
    url = '',
    width = 0,
  } = asset;

  return {
    contentType,
    description,
    fileName,
    height,
    size,
    title,
    url,
    width,
  };
}

export function transformContentfulImageCollection(collection: ContentfulImageCollection | undefined): Image[] {
  if (!collection) return [];

  return (collection?.items?.map(transformContentfulImageAsset) as Image[]) || [];
}
