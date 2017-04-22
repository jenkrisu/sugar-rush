import { CartItem } from './cart-item';

export class Cart {

  items: CartItem[];
  total: number;

  constructor(items: CartItem[], total: number) {
      this.items = items;
      this.total = total;
  }

}
