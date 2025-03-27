export interface ContentfulImageAsset {
  contentType?: string;
  description?: string;
  fileName?: string;
  height?: number;
  size?: number;
  title?: string;
  url?: string;
  width?: number;
}

export interface ContentfulImageCollection {
  items?: ContentfulImageAsset[];
}
