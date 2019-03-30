
import { Component, OnInit, Inject } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from 'src/shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
dishes: Dish[] ;
Errmsgdishes: String;



  constructor(private dishservice: DishService ,
               @Inject('baseURL') protected baseURL) { }



  ngOnInit() {

        this.dishservice.getDishes().subscribe(
          dishes => this.dishes = dishes ,
          error => this.Errmsgdishes = error
        ) ;
  }

}
