import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {AppService} from './app.service';
import {RandomChildComponent} from './components/random-child/random-child.component';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {map, take, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {GetUsers, GetUsersSuccess} from './store/actions/user.actions';
import {Store, select, State} from '@ngrx/store';
import {IAppState} from './store/state/app.state';
import {UserService} from './services/user.service';
import {UserComponent} from './components/user/user.component';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'testApp';
  testNumber = 5;
  showLogin = true;
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthService,
    private appService: AppService,
    private router: Router,
    private store: Store<IAppState>,
    private userComponent: UserComponent
  ) {
    this.checkoutForm = this.formBuilder.group({
      user: '',
      password: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.authenticationService.loginAPI(customerData).subscribe(res => {
      if (res) {
        this.showLogin = false;
        this.userComponent.showBtn = res;
        this.appService.getUser({id: 2});
        this.router.navigate(['/user']);
      }
    });
    this.checkoutForm.reset();
  }
}
