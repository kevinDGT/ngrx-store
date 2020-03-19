import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.authenticationService.loginAPI(customerData).subscribe(res => {
      if (res.token !== null) {
        this.router.navigate(['/user']);
      }
    });
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }

}
