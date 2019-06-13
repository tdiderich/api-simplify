import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {API_URL} from '../env';
import {ApiCall} from './apicall.model';
import * as Auth0 from 'auth0-web';


@Injectable()
export class ApiCallService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getApiCalls(): Observable<any> {
    return this.http
      .get(`${API_URL}/apicall`)
      .catch(ApiCallService._handleError);
  }

  saveApiCalls(apicall: ApiCall): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${Auth0.getAccessToken()}`
      })
    };
    return this.http
      .post(`${API_URL}/apicall`, apicall, httpOptions);
  }
}
