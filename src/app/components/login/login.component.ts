import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    });
    // this.checkoutForm = this.formBuilder.group({
    //   email: '',
    //   password: ''
    // });
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.authenticationService.loginAPI(customerData).subscribe(res => {
      if (res.token !== null) {
        const returnUrl = this.router.routerState.snapshot.root.queryParams.returnUrl;
        this.router.navigate([typeof returnUrl !== 'undefined' ? returnUrl : '/user']);
      }
    });
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }

}
