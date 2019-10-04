import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public chartData: Object[];
  public primaryXAxis: Object;
  constructor() { }

  ngOnInit() {

    this.chartData = [
      { day: 'Sunday', money: 8000}, { day: 'Wenesday', money: 8500},
      { day: 'Monday', money: 4500}, { day: 'Thrusday', money: 18000 },
      { day: 'Tuesday', money: 11000 }, { day: 'Friday', money: 6000},
      { day: 'Saturday', money: 12000 }
    ];
    this.primaryXAxis = { valueType: 'Category' };
  }

}
