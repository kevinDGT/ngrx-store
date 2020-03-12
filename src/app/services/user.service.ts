import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IUser} from '../models/user.interface';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  url = 'https://reqres.in/api/users';

  getUsers(paginationData): Observable<IUser[]> {
    return this.http.get<any>(this.url, {
      params: paginationData
    }).pipe(map((val) => {
      return val.data.map((u) => {
        return {
          id: u.id,
          email: u.email,
          firstName: u.first_name,
          lastName: u.last_name
        };
      });
    }));
  }
}
