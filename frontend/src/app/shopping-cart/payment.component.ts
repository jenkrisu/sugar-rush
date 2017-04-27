import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chooseMethod(event: any) {
    event.preventDefault();
  }

}
