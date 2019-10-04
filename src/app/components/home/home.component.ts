import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let values = ["B_Value", "C_Value", "A_Value"];

    // Ascending

    values.sort((a, b) => 0 - (a > b ? -1 : 1));

    console.log(values);
  }

}
