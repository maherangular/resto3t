import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessMSGHTTPService {


public ErrorHandler (error: HttpResponse<any> | any ) {

// tslint:disable-next-line: label-position
  let Errmsg: String ;

    if (error instanceof ErrorEvent) {

      Errmsg = error.message ;
    } else {

      Errmsg = `${error.status} - ${error.statusText || ''} ` ;


    }

    return throwError(Errmsg);




}

}
