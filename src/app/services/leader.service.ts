import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leader } from 'src/shared/leader';
import { baseURL } from 'src/shared/baseURL';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http:HttpClient ) { }

  getLeaders(): Observable<Leader []> {
    return this.http.get<Leader[]>(baseURL +'leaders' );

  }
  getLeader(id : string): Observable<Leader>{
    return this.http.get<Leader>(baseURL + 'leaders/'+id);

  }
  getFeaturedLeader():Observable<Leader>{
    return this.http.get<Leader>(baseURL +'leaders?featured=true').pipe(map(Leader => Leader[0]));

  }
}
