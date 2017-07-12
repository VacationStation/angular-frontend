/**
 * Created by christiankalig on 03.07.17.
 */

import {Component, OnInit} from '@angular/core';

import {GroupService} from '../../_services/group.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my_groups.component.html'
})
export class MyGroupsComponent implements OnInit {

  public groups: Array<any>;
  public numberOfCols = 2;

  constructor(private groupService: GroupService, private router: Router) {
    this.groups = new Array<any>();
    if (window.innerWidth < 600) {
      this.numberOfCols = 1;
    }
  }

  ngOnInit() {
    this.groupService.getOwnGroups().subscribe(data => {
      console.log(data);
      this.groups = data.groups;
      console.log(this.groups);
    });
  }

  public navigateToGroup(id: any) {
    this.router.navigate(['group/'+id]);
  }

}
