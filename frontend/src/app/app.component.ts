import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private http: Http) {}

  onClick() {
this.http.get('/api/products').map(res => res.json()).subscribe(
      data => {
        console.log('data')
        console.log(data._embedded.products)
      },
      error => {
        console.log('error')
        console.log(error)
      }

    );
  }

}
