export class Product {
  
  id:number;
  title:string;
  desc:string;
  ingredients:string;
  weight:number;
  price:number;
  stock:number;

  constructor(title:string, desc:string, ingredients:string, 
              weight:number, price:number, stock:number) {
    this.title = title;
    this.desc = desc;
    this.ingredients = ingredients;
    this.weight = weight;
    this.price = price;
    this.stock = stock;
  }
}
