import { UserService } from './../services/user.service';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog, protected userservice: UserService) { }

  ngOnInit() {
  }

  openLogin() {

  this.dialog.open(LoginComponent , {width:'500px' , height: '450px'})
  }
    logout() {
        localStorage.clear();
    }
}
