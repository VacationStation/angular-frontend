/**
 * Created by christiankalig on 04.07.17.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AuthHttp} from 'angular2-jwt';

import { Config } from '../_cfg/Config';

@Injectable()
export class GroupService {

  private base_url = Config.BACKEND_BASE_URL + '/group';

  constructor(private http: AuthHttp) { }

  public addGroup(group: any): Observable<any> {
    return this.http.post(this.base_url, group)
      .map(data =>  data.json());
  }

  public getGroup(id: string): Observable<any> {
    console.log(this.base_url + '/' + id);
    return this.http.get(this.base_url + '/' + id)
      .map(data => data.json());
  }

  public getGroupInvitation(id: string): Observable<any> {
    return this.http.get(this.base_url + '/invite/' + id)
      .map(data => data.json());
  }

  public addBill(id: string, bill: any): Observable<any> {
    return this.http.post(this.base_url + '/' + id + '/addBill', bill)
      .map(data => data.json());
  }

  public addUser(key: any): Observable<any> {
    return this.http.put(this.base_url + '/add/user', {key: key})
      .map(data => data.json());
  }

  public removeUser(id: string, userId: string): Observable<any> {
    return this.http.delete(this.base_url + '/${id}/remove/${userId}')
      .map(data => data.json());
  }

  public getGroupByUserId(id: string): Observable<any> {
    return this.http.get(this.base_url + '/user/${id}')
      .map(data => data.json());
  }

  public getOwnGroups(): Observable<any> {
    return this.http.get(this.base_url + '/user')
      .map(data => data.json());
  }

  public makeDeposit(id: string, deposit: any): Observable<any> {
    return this.http.post(this.base_url + '/${id}/makeDeposit', deposit)
      .map(data => data.json());
  }

}
