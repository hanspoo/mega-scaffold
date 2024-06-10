import { Cart } from '../cart/Cart';
import { ContactInfo } from './ContactInfo';

export type PedidoRequest = {
  cart: Cart;
  contact: ContactInfo;
};
