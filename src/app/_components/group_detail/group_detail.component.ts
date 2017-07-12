/**
 * Created by christiankalig on 05.07.17.
 */

import {Component, OnInit} from '@angular/core';


import {GroupService} from '../../_services/group.service';
import {ActivatedRoute, Router} from '@angular/router';

interface IGroup {
  name: string;
  description: string;
  destination: string;
  dateFrom: Date;
  dateTo: Date;
  owner: any;
  member: Array<any>;
  bookings: Array<IBooking>;
  invite: string;
}

interface IBooking {
  usage?: string;
  biller: any;
  forAll?: boolean;
  recipients?: Array<any>;
  bill?: any;
  type: any;
  amount?: number; // in cents
  date: Date;
  active: boolean;
}

@Component({
  selector: 'app-group-detail',
  templateUrl: './group_detail.component.html'
})
export class GroupDetailComponent implements OnInit {

  public group: IGroup;
  private sub: any;
  private id: any;
  public numberOfColsOverview = 2;
  public numberOfColsUser = 3;

  constructor(private groupService: GroupService, private route: ActivatedRoute, private router: Router) {
    this.group = {
      name: '',
      description: '',
      destination: '',
      dateFrom: new Date(),
      dateTo: new Date(),
      owner: '',
      member: [],
      bookings: [],
      invite: ''
    };
    if (window.innerWidth < 600) {
      this.numberOfColsOverview = 1;
      this.numberOfColsUser = 2;
    }
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.groupService.getGroup(this.id).subscribe(data => {
        console.log(data);
        this.group = data.data;
        console.log(this.group);
      });
    });
  }

  public addBooking() {
    console.log(this.id);
    this.router.navigate(['group/' + this.id + '/addBooking']);
  }

  public addUser() {
    this.router.navigate(['group/' + this.id + '/addUser']);
  }

}
