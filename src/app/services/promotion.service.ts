import { Promotion } from './../../shared/promotion';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from 'src/shared/baseURL';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient) { }
  getPromotions():Observable<Promotion[]>{
    return this.http.get<Promotion[]>(baseURL + 'promotions');
  }
  getPromotion(id :string):Observable<Promotion>{
    return this.http.get<Promotion>(baseURL + 'promotions/'+id);
  }
  getFeaturedPromotion():Observable<Promotion>{
    return this.http.get<Promotion>(baseURL+'promotions?featured=true').pipe(map(Promotion=>Promotion[0]));
  }
}
