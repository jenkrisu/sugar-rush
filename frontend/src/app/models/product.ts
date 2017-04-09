export class Product {
  id:number;
  title:string;
  desc:string;
  ingredients:string;
  weight:number;
  price:number;
  stock:number;
  isNew:boolean;

  constructor(id:number, title:string, desc:string, ingredients:string, weight:number, price:number, stock:number, isNew:boolean) {
    this.id = id;
    this.title = title;
    this.ingredients = ingredients;
    this.weight = weight;
    this.price = price;
    this.stock = stock;
    this.isNew = isNew;
  }
}
