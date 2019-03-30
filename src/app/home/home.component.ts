import { Leader } from 'src/shared/leader';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from 'src/shared/dish';
import { Promotion } from 'src/shared/promotion';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy  {

dish: Dish ;
leader: Leader ;
promotion: Promotion ;

Errmsgdish: Dish ;

subdish: Subscription ;

  constructor(private dishservice: DishService ,
              private promotionservice: PromotionService ,
              private leaderservice: LeaderService   ,
              @Inject('baseURL') private BaseURL    ) { }


     ngOnInit() {


     this.subdish = this.dishservice.getFeaturedDish().subscribe(
                                  dish => {this.dish =  dish ; } ,
                                  error => {this.Errmsgdish = error; }
                                  ,
                                  () =>  {console.log('obervable complete') ; }
                              );

}


 ngOnDestroy() {

    this.subdish.unsubscribe();
  }

}
