import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  chooseMethod(event: any) {
    event.preventDefault();
  }

  continue() {
    this.router.navigate(['/shoppingcart/confirmation']);
  }

}
