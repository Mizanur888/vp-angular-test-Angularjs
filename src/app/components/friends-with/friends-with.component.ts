import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-friends-with',
  templateUrl: './friends-with.component.html',
  styleUrls: ['./friends-with.component.scss']
})
export class FriendsWithComponent implements OnInit {
  @Input() friendsWith: any;
  
  constructor() { }

  ngOnInit() {
  }

}
