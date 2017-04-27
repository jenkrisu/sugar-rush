import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  registerUser(user) {
    console.log("User: " + JSON.stringify(user));
  }
}
