import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {IUser} from './models/user.interface';

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
  currentUserValue: Observable<IUser>;
  url = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) {
  }

  queryParams = {
    id: 0
  };

  getUser(queryParams): Observable<IUser> {
    return this.http.get<any>(this.url, {
      params: queryParams
    }).pipe(map((u) => {
      console.log(u);
      return {
        id: u.id,
        email: u.email,
        firstName: u.first_name,
        lastName: u.last_name
      };
    }));
  }
}
