import { Dish } from './../../shared/dish';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from 'src/shared/baseURL';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  getDishes(): Observable<Dish []> {

     return this.http.get<Dish []>(baseURL + 'dishes');
  }
  getDish(id: string ) : Observable<Dish> {

    return this.http.get<Dish>(baseURL + 'dishes/' + id);

  }
  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0])) ;
  }
}
