import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// export class LoginInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     if (req.url) {
//       return next.handle(req);
//     }
//   }
// }

export class AppService {

  constructor(private http: HttpClient) {
  }
  items;

  params: any = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  };

  queryAPI(paginationData): Observable<any> {
    return this.http.get('https://reqres.in/api/users', {
      params: {
        page: paginationData
      }
    }).pipe(map(
      res => {
        return res;
      }
    ));
  }

  loginAPI(customerData): Observable<any> {
    return this.http.post('https://reqres.in/api/login', this.params).pipe(map(res => {
      return res;
    }));
  }

  getItems(): Observable<any> {
    return of(this.items);
  }
}
