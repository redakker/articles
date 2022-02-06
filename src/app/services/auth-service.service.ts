import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT, httpOptions } from '../app.constants';
import { User } from '../models/user.dto';
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string): Observable<User> {
    return this.http.post<User>(API_ENDPOINT + '/login', {email: email, password: password}, httpOptions);
  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>(API_ENDPOINT + '/users', user, httpOptions);
  }

  delete(user: User) {
    let extendedHttpOptions =  _.cloneDeep(httpOptions);
    extendedHttpOptions.headers.append('Authorization', user.token);

  }
}

