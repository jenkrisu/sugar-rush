import { Product } from './product';
import { CartItem } from './cart-item';

export class ShoppingCart {

    totalAmount: number;
    items: CartItem[];

    constructor(totalAmount: number, items: CartItem[]) {
        this.totalAmount = totalAmount;
        this.items = items;
    }

}