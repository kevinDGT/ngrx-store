import {AfterViewInit, Component, Injectable, Input, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {UserService} from '../../services/user.service';
import {GetUsers, GetUsersSuccess} from '../../store/actions/user.actions';
import {tap} from 'rxjs/operators';
import {IAppState} from '../../store/state/app.state';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user.component',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

@Injectable({ providedIn: 'root' })
export class UserComponent implements OnInit, AfterViewInit {
  users$ = this.store.pipe(select('users'));
  showBtn = true;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];
  paginatorData = {
    page: 1,
    pageSize: 6,
    pageSizeOptions: [5, 10, 20],
    length: 12
  };
  pageEvent: PageEvent;

  constructor(
    private userService: UserService,
    private store: Store<IAppState>
  ) {}

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.store.dispatch(new GetUsers());
  }

  ngAfterViewInit() {
    this.paginator.page.pipe(
      tap((res) => {
        this.paginatorData.page = res.pageIndex + 1;
        this.paginatorData.pageSize = res.pageSize;
        this.paginatorData.length = res.length;
        this.queryAPI();
      })
    ).subscribe();
  }



  queryAPI() {
    this.userService.getUsers(this.paginatorData).subscribe((users) => {
      this.store.dispatch(new GetUsersSuccess(users));
    });
  }
}
