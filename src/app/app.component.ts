import { Component } from '@angular/core';

import {AuthService} from './_services/auth.service';

function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

const SidepanelMode = strEnum([
  'side',
  'over'
]);

type SidepanelMode = keyof typeof SidepanelMode;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public sideMenuOpen: Boolean = false;
  public innerWidth: any;
  public innerHeight: any;
  public sidePanelMode = SidepanelMode.over;

  constructor (private authService: AuthService) {
    this.innerHeight = window.screen.height;
    this.innerWidth = window.screen.width;
    if (this.innerWidth > 800) {
      this.sidePanelMode = SidepanelMode.side;
      this.sideMenuOpen = true;
    }
    console.log(this.innerWidth, this.innerHeight, this.sidePanelMode);
  }

  public toggleSidenav(sidenav) {
    if (this.sidePanelMode !== SidepanelMode.side) {
      sidenav.toggle();
    }
  }

  public logout () {
    this.authService.logout();
  }

  public isLoggedIn() {
    //console.log("logged in:", this.authService.isLoggedIn);
    return this.authService.isLoggedIn;
  }

}
