import {Component} from '@angular/core';

import {AppService} from './app.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppState} from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'testApp';
  testNumber = 5;

  constructor(
    private appService: AppService,
    private router: Router,
    private store: Store<IAppState>
  ) {}
}
