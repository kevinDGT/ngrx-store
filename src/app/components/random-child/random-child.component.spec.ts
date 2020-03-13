import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomChildComponent } from './random-child.component';
import {AppService} from '../../app.service';
import {AuthService} from '../../auth.service';

describe('RandomChildComponent', () => {
  let component: RandomChildComponent;
  let fixture: ComponentFixture<RandomChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomChildComponent ],
      providers: [AppService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RandomChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
