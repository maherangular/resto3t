import { ProcessMSGHTTPService } from './process-msghttp.service';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leader } from 'src/shared/leader';
import { baseURL } from 'src/shared/baseURL';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http:HttpClient , private processhttpmsgservice: ProcessMSGHTTPService) { }

  getLeaders(): Observable<Leader []> {
    return this.http.get<Leader[]>(baseURL +'leaders' )
    .pipe(catchError(this.processhttpmsgservice.ErrorHandler));

  }
  getLeader(id : string): Observable<Leader>{
    return this.http.get<Leader>(baseURL + 'leaders/'+id)
    .pipe(catchError(this.processhttpmsgservice.ErrorHandler));

  }
  getFeaturedLeader():Observable<Leader>{
    return this.http.get<Leader>(baseURL +'leaders?featured=true').pipe(map(Leader => Leader[0]))
    .pipe(catchError(this.processhttpmsgservice.ErrorHandler));

  }
}
