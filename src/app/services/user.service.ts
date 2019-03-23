import { User } from './../../shared/user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from 'src/shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser (user: any): Observable<User> {

  return this.http.get<User>(baseURL + `users?username=${user.username}&password=${user.password}`);

  }
  isLoggedIn(): Boolean {

     return (localStorage.getItem('login') !== null);
  }

}
