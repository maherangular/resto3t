import { ProcessMSGHTTPService } from './process-msghttp.service';
import { Promotion } from './../../shared/promotion';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from 'src/shared/baseURL';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient , private processhttpmsgservice: ProcessMSGHTTPService) { }
  getPromotions():Observable<Promotion[]>{
    return this.http.get<Promotion[]>(baseURL + 'promotions')
    .pipe(catchError(this.processhttpmsgservice.ErrorHandler));
  }
  getPromotion(id :string):Observable<Promotion>{
    return this.http.get<Promotion>(baseURL + 'promotions/'+id)
    .pipe(catchError(this.processhttpmsgservice.ErrorHandler));
  }
  getFeaturedPromotion():Observable<Promotion>{
    return this.http.get<Promotion>(baseURL+'promotions?featured=true').pipe(map(Promotion=>Promotion[0]))
    .pipe(catchError(this.processhttpmsgservice.ErrorHandler));
  }
}
