/**
 * Created by christiankalig on 05.07.17.
 */

import {Component, OnInit} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

import {ImageService} from '../../_services/image.service';
import {GroupService} from '../../_services/group.service';

interface Position {
  name?: string;
  quantity: number;
  price: number; //in cents
}

@Component({
  selector: 'app-add-booking',
  templateUrl: './add_booking.component.html'
})
export class AddBookingComponent implements OnInit {

  private file: string = null;
  private rawFile: File;
  public fileName = '';
  public positions: Array<Position> = [];
  public newPosition = {
    name: '',
    quantity: 0,
    price: ''
  };
  public group: any;
  public forAll = true;
  public recipients: Map<String, boolean>;
  public usage = '';

  constructor(private imageService: ImageService,
              private snackBar: MdSnackBar,
              private router: Router,
              private route: ActivatedRoute,
              private groupService: GroupService) {
    this.recipients = new Map<String, boolean>();
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.groupService.getGroup(params['id'])
        .subscribe(data => {
          this.group = data.data;
          for (let i = 0; i < data.data.member.length; i++) {
            console.log(data.data.member[i]);
            this.recipients.set(data.data.member[i]._id, false);
          }
          console.log(this.recipients);
        });
    });
  }

  public addPosition() {
    console.log(this.newPosition.price.replace('.', '').replace(',', ''));
    const price = parseFloat(this.newPosition.price.replace('.', '').replace(',', ''));
    console.log(price);
    this.positions.push({name: this.newPosition.name, quantity: this.newPosition.quantity, price: price});
    this.newPosition.name = '';
    this.newPosition.quantity = 0;
    this.newPosition.price = '';
  }

  public updateRecipients (id) {
    console.log(this.recipients.get(id));
    const rec = this.recipients.get(id);
    this.recipients.delete(id);
    this.recipients.set(id, !rec.valueOf());
    console.log(this.recipients.get(id));
  }

  public fileChange($event) {
    console.log($event.target.files);
    const fileList: FileList = $event.target.files;
    if (fileList.length > 0) {
      this.rawFile = fileList[0];
      this.fileName = this.rawFile.name;
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.rawFile);
      console.log(this.file);
    } else {
      this.file = null;
    }
  }

  private _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    // console.log(btoa(binaryString));
    this.file = btoa(binaryString);

  }

  public upload() {
    const data = {image: this.file};
    const recipients = [];
    this.recipients.forEach(function(value, key) {
      if (value) {
        recipients.push(key);
      }
    });
    const booking = {
      usage: this.usage,
      forAll: this.forAll,
      recipients: this.forAll ? [] : recipients,
      bill: {
        positions: this.positions
      }
    };
    this.groupService.addBill(this.group._id, booking).subscribe(res => {
      console.log(res);
    });
  }

}

