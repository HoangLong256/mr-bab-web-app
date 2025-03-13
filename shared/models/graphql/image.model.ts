export interface ContentfulImageAsset {
  title: string;
  description: string;
  contentType: string;
  fileName: string;
  size: number;
  url: string;
  width: number;
  height: number;
}

export interface ContentfulImageCollection {
  items: ContentfulImageAsset[];
}
