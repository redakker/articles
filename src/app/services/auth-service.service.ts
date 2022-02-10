import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_ENDPOINT, httpOptions, TOKEN_NAME } from '../app.constants';
import { User, UserDTO, UserToken } from '../models/user.model';
import * as _ from "lodash";
import * as moment from 'moment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  helper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  authenticate(email: string, password: string): Observable<UserDTO> {
    return this.http.post<UserDTO>(API_ENDPOINT + '/login', {email: email, password: password}, httpOptions);
  }

  storeUser(user: User) {
      localStorage.setItem(TOKEN_NAME, user.token);
      console.log(this.isLoggedin());
  }

  getUser(): Observable<UserDTO> {
    return this.http.get<UserDTO>(API_ENDPOINT + '/user', httpOptions);
  }

  updateUser(user: User): Observable<UserDTO> {
    return this.http.put<UserDTO>(API_ENDPOINT + '/user', user, httpOptions);
  }

  isLoggedin() {
    let token = localStorage.getItem(TOKEN_NAME);
    if (token) {
      let extractedToken = this.getDecodedAccessToken(token);
      
      const expiresAt = moment().add(extractedToken.exp,'second');
      return moment().isBefore(expiresAt);
    }

    return false;
  }

  logout() {
    localStorage.removeItem(TOKEN_NAME);
    this.router.navigate(['/']);
  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>(API_ENDPOINT + '/users', user, httpOptions);
  }

  deleteUser(user: User) {
    
  }

  private getDecodedAccessToken(token: string): UserToken {
    return this.helper.decodeToken(token) as UserToken;
  }
}


