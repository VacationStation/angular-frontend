/**
 * Created by christiankalig on 19.06.17.
 */
import {Injectable} from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import {CanActivate} from '@angular/router';
import {AuthService} from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isLoggedIn) {
      return true;
    } else {
      // Save URL to redirect to after login and fetching profile to get roles
      localStorage.setItem('redirect_url', state.url);
      this.router.navigate(['login']);
      return false;
    }
  }
}
