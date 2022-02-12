import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../app.constants';
import { User, UserDTO } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_ENDPOINT + '/users');
  }

  getUser(): Observable<UserDTO> {
    return this.http.get<UserDTO>(API_ENDPOINT + '/user');
  }

  updateUser(user: User): Observable<UserDTO> {
    return this.http.put<UserDTO>(API_ENDPOINT + '/user', user);
  }

  deleteUser(user: User): Observable<any> {
    let email = user.email;
    return this.http.delete<any>(API_ENDPOINT + '/users/' + email);
  }
}
