import { ProcessMSGHTTPService } from './process-msghttp.service';
import { Dish } from './../../shared/dish';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from 'src/shared/baseURL';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient , private processhttpmsgservice: ProcessMSGHTTPService) { }

  getDishes(): Observable<Dish []> {

     return this.http.get<Dish []>(baseURL + 'dishes')
     .pipe(catchError(this.processhttpmsgservice.ErrorHandler));
  }
  getDish(id: string ) : Observable<Dish> {

    return this.http.get<Dish>(baseURL + 'dishes/' + id)
    .pipe(catchError(this.processhttpmsgservice.ErrorHandler));

  }
  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
    .pipe(catchError(this.processhttpmsgservice.ErrorHandler));
  }

  getDishesIds(): Observable<String[] | any> {

     return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));

  }
}
