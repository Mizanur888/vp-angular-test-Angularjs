import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Configaration } from './DataModel'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private Api = "https://randomuser.me/api/?results=10";
  public config = Configaration;
  constructor(private httpClient: HttpClient) { }
  sendGetRequest() {
    return this.httpClient.get(this.Api).pipe(catchError(this.handleError));

  }
  getNavAppName() {
    return this.config;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
