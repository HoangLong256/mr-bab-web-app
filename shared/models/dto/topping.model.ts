import type { Image } from './image.model';

export interface Topping {
  description?: string;
  id: string;
  image?: Image;
  price?: number;
  title?: string;
}
