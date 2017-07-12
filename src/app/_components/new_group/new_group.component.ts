/**
 * Created by christiankalig on 03.07.17.
 */

import {Component} from '@angular/core';

import {GroupService} from '../../_services/group.service';

@Component({
  selector: 'app-new-group',
  templateUrl: './new_group.component.html'
})
export class NewGroupComponent {

  public name: string;
  public destination: string;
  public description: string;
  public from: string;
  public to: string;

  public group: Object = {
    name: '',
    destination: '',
    description: '',
    from: '',
    to: ''
  };

  constructor(private groupService: GroupService) {
  }

  public saveGroup() {
    this.groupService.addGroup(this.group).subscribe(res => console.log(res));
  }

}
