import { Comment } from './../../shared/comment';
import { Dish } from 'src/shared/dish';
import { Component, OnInit, Inject } from '@angular/core';
import { DishService } from '../services/dish.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
dish: Dish ;
comments: Comment[];
dishesIds: String[] ;
prev;
next;

Errmsgdish: String ;
ErrmsgdishIds: String ;


    constructor(private dishservice: DishService ,
                private ActivedRoute: ActivatedRoute ,
                private location: Location ,
                   @Inject('baseURL') protected baseURL) { }

  ngOnInit() {

    this.dishservice.getDishesIds().subscribe(
      dishIds => this.dishesIds = dishIds ,
      error => this.ErrmsgdishIds = error
    )

       this.ActivedRoute.params.subscribe(param =>

            this.dishservice.getDish(param.id).subscribe(
                 dish => this.handeldish(dish) ,
                 error => this.Errmsgdish = error

        )


        );
  }





  goBack() {

    this.location.back();
}


handeldish(dish) {

  this.dish = dish ;
  this.comments = dish.comments ;
  this.SetPrevNext(dish.id);
}

SetPrevNext(id: String) {

  const index = this.dishesIds.indexOf(id);
  this.next = this.dishesIds[(this.dishesIds.length + index + 1 ) % this.dishesIds.length];
  this.prev = this.dishesIds[(this.dishesIds.length + index - 1 ) % this.dishesIds.length];

}


}
