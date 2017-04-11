import { Product } from './product';

export class CartItem {
    product: Product;
    amount: number;

    constructor(product: Product, amount: number) {
        this.product = product;
        this.amount = amount;
    }
}
