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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'testApp';
  showLogin = true;
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
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
    this.appService.loginAPI(customerData).subscribe(res => {
      this.showLogin = false;
      this.userComponent.showBtn = true;
      this.router.navigate(['/user']).then(r => console.log(r));
    });
    this.checkoutForm.reset();
  }
}
