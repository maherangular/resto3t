import { Leader } from 'src/shared/leader';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from 'src/shared/dish';
import { Promotion } from 'src/shared/promotion';
import { Subscription } from 'rxjs';
import { expand } from '../animations/app.animation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] ,
  animations: [expand()]
})
export class HomeComponent implements OnInit, OnDestroy  {

dish: Dish ;
leader: Leader ;
promotion: Promotion ;

Errmsgdish: String ;
Errmsgleader: String ;
Errmsgpromotion: String ;

subdish: Subscription ;
subleader: Subscription;
subpromotion: Subscription ;


  constructor(private dishservice: DishService ,
              private promotionservice: PromotionService ,
              private leaderservice: LeaderService   ,
              @Inject('baseURL') protected BaseURL    ) { }


     ngOnInit() {


      this.subdish = this.dishservice.getFeaturedDish().subscribe(
                                  dish => {this.dish =  dish ; } ,
                                  error => {this.Errmsgdish = error; }
                                  ,
                                  () =>  {console.log('obervable complete') ; }
                              );

      this.subpromotion  = this.promotionservice.getFeaturedPromotion().subscribe(

                            promotion => {this.promotion = promotion ; } ,
                            error => {this.Errmsgpromotion = error ; }
                    );

        this.subleader  =   this.leaderservice.getFeaturedLeader().subscribe(
                          leader => this.leader = leader ,
                          error => this.Errmsgleader = error
                    );



                            }


 ngOnDestroy() {

    this.subdish.unsubscribe();
    this.subleader.unsubscribe();
    this.subpromotion.unsubscribe();
  }

}
