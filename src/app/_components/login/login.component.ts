/**
 * Created by christiankalig on 19.06.17.
 */

import {Component} from '@angular/core';
import {AuthService} from '../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  public username: string;
  public password: string;

  constructor (private auth: AuthService) {}

  public login() {
    this.auth.login(this.username, this.password);
  }

}
