/**
 * Created by christiankalig on 05.07.17.
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AuthHttp} from 'angular2-jwt';
import {RequestOptions} from '@angular/http';

import {Config} from '../_cfg/Config';

@Injectable()
export class ImageService {

  private base_url = Config.BACKEND_BASE_URL + '/image';

  constructor(private http: AuthHttp) { }

  public addImage(data: any) {
    return this.http.post(this.base_url, data)
      .map(res => res.json());
  }

}

