/**
 * Created by christiankalig on 02.07.17.
 */

import {Component} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {Router} from '@angular/router';

import {UserService} from '../../_services/user.service';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  public confirmedPassword: string;

  public user: User;

  constructor (private userService: UserService, private snackBar: MdSnackBar, private router: Router) {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }

  public register() {
    if (this.user.password === this.confirmedPassword) {
      this.userService.register(this.user).subscribe(res => {
        if (res.success) {
          this.snackBar.open('Registrierung erfolgreich', '', {duration: 3000});
          this.router.navigate(['login']);
        }
        console.log(res);
      });
    } else {
      console.log("passwords do not match");
    }
  }

}
