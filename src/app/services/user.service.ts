import { ProcessMSGHTTPService } from './process-msghttp.service';
import { map, catchError } from 'rxjs/operators';
import { User } from './../../shared/user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from 'src/shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient , private processhttpmsgservice: ProcessMSGHTTPService ) { }

  getUser (user: any): Observable<User> {

  return this.http.get<User>(baseURL + `users?username=${user.username}&password=${user.password}`)
           .pipe(map(users => users[0]))
           .pipe(catchError(this.processhttpmsgservice.ErrorHandler));

  }
  isLoggedIn(): Boolean {

     return (localStorage.getItem('login') !== null);
  }

}
