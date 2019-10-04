import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  friendsWith: any[];
  data: any[];
  isDisable: boolean;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.data = this.getData().data;
    this.friendsWith = this.getData().friendWith;
  }
  sendRequest(item) {
    for (var i = 0; i < this.data.length; i++) {

      let items = this.data[i];
      if (item.name === items.name) {
        items.isDisable = true;
        items.friendRequest = "sent"
      }
    }
  }
  getData() {
    return this.service.getNavAppName();
  }
}
