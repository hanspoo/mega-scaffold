import { CartItem } from './CartItem';

export interface Cart {
  createdAt: number;
  items: CartItem[];
}
