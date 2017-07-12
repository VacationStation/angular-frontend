/**
 * Created by christiankalig on 05.07.17.
 */
/**
 * Created by christiankalig on 05.07.17.
 */

import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../_services/group.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add_user.component.html'
})
export class AddUserComponent implements OnInit {


  public code: string;

  constructor(private groupService: GroupService, private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.groupService.getGroupInvitation(params['id'])
        .subscribe(data => this.code = data.invite);
    });
  }
}
