import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthService {
  private token = null;
  constructor(private http: HttpClient) {
  }

  loginAPI(customerData): Observable<any> {
    return this.http.post('https://reqres.in/api/login', customerData).pipe(map(res => {
      this.token = res;
      return res;
    }));
  }

  getAuthorizationToken() {
    if (this.token && this.token.hasOwnProperty('token')) {
      return this.token.token;
    }
  }
}
