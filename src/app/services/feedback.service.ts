import { catchError } from 'rxjs/operators';
import { baseURL } from '../../shared/baseurl';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../../shared/feedback';
import { Injectable } from '@angular/core';
import { ProcessMSGHTTPService } from './process-msghttp.service' ;

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient , private processHTTPMsgService: ProcessMSGHTTPService) { }


  submitFeedback(feedback: Feedback): Observable<Feedback> {

    const  headers = new HttpHeaders({
        'Content-Type':  'application/json'
      });

    return this.http.post<Feedback>(baseURL + 'feedback' , feedback, {headers: headers} )
      .pipe(catchError(this.processHTTPMsgService.ErrorHandler));
}




}
