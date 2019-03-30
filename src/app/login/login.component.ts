import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user = {username: '' , password: ''};
errorLogin = false  ;
  constructor(private userservice: UserService, private dialog: MatDialogRef<LoginComponent> ) { }

  ngOnInit() {
  }

  login() {

    this.userservice.getUser(this.user).subscribe(
      data => this.handel(data) ,
      error => console.log(error)


    ) ;

  }
      handel(user) {

    if ( user.length === 0) {
          this.errorLogin = true ;

        } else {
          localStorage.setItem('login', user.username);
        this.errorLogin = false ;
        this.dialog.close();
        }

      }

}
