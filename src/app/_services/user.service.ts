/**
 * Created by christiankalig on 04.07.17.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {AuthHttp} from 'angular2-jwt';

import { Config } from '../_cfg/Config';

@Injectable()
export class UserService {

  private base_url = Config.BACKEND_BASE_URL + '/user';
  private headers;
  constructor(private authHttp: AuthHttp, private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
  }

  public register(user: any): Observable<any> {
    return this.http.post(this.base_url, user, {headers: this.headers})
      .map(data => data.json());
  }

}
