import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form;

  constructor(private loginService: LoginService,
  private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control('' /*, Validators.compose([
       Validators.required,
       Validators.pattern('[\\w\\-\\s\\/]+')
       ]) */),
      lastName: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      street: this.formBuilder.control(''),
      postal: this.formBuilder.control(''),
      city: this.formBuilder.control('' /*, Validators.compose([
       Validators.required,
       Validators.pattern('^[0-9]*$')
       ])*/),
      country: this.formBuilder.control(''),
      username: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    });
  }

  onSubmit(form) {
    this.loginService.registerUser(form);
  }

}
