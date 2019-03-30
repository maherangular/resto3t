
import { Leader } from 'src/shared/leader';
import { Component, OnInit, Inject } from '@angular/core';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
leaders: Leader[] ;

Errmsgleader: string ;


  constructor(private leaderservice: LeaderService ,
              @Inject('baseURL') protected baseURL ) { }

  ngOnInit() {

     this.leaderservice.getLeaders().subscribe(
       leaders => this.leaders = leaders ,
       error => this.Errmsgleader = error
     ) ;

  }

}
