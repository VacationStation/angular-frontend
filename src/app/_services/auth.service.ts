/**
 * Created by christiankalig on 19.06.17.
 */

import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private _isLoggedIn: boolean;

  constructor(public http: Http, private router: Router) {
    console.log()
    this._isLoggedIn = tokenNotExpired('id_token');
  }

  public login(username: string, password: string) {
    // TODO: implement real login communication
    console.log(username, password);
    this.http.post('http://localhost:4201/api/v1/auth/login', {username: username, password: password})
      .map(this.extractData)
      .catch(this.handleError)
      .subscribe(res => {
        console.log(res);
        if (res.auth.user.token && res.auth.user.user) {
          localStorage.setItem('id_token', res.auth.user.token);
          localStorage.setItem('profile', JSON.stringify(res.auth.user.user));
          this.router.navigate(['home']);
        }
      }, err => console.log(err));
  }

  public logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn = tokenNotExpired('id_token');
  }

  private extractData(res: any) {
    console.log(res);
    const body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
