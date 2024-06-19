import { Item } from './Item';

export interface Pedido {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  modifiedAt: string;
  estado: string;
  coments: string;
  phone: string;
  items: Item[];
}
