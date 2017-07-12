/**
 * Created by christiankalig on 05.07.17.
 */
/**
 * Created by christiankalig on 05.07.17.
 */

import {Component} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {GroupService} from '../../_services/group.service';


@Component({
  selector: 'app-join-group',
  templateUrl: './join_group.component.html'
})
export class JoinGroupComponent {

  public key: string;

  constructor(private groupService: GroupService, private router: Router) {}

  public joinGroup() {
    this.groupService.addUser(this.key)
      .subscribe(res => {
        console.log(res);
        if (res.success) {
          this.router.navigate(['my_groups']);
        }
      });
  }

}
