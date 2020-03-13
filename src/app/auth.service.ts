import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  params: any = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  };

  loginAPI(customerData): Observable<any> {
    return this.http.post('https://reqres.in/api/login', this.params).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }

  getAuthorizationToken() {
    return 'some-auth-token';
  }
}
