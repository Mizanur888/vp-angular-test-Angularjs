import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ServiceService } from 'src/app/Service/service.service';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  private _searchTerm: string;
  title = "Leaderboard"
  subtitle = "Friends Steps " + this.title;
  users: any = [];
  steps: number[];
  rank: number[];
  testData: any[] = [];
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(val: string) {
    this._searchTerm = val;
    if (val != null) {
      this.users = this.filterProjectByTitle(val);
    }
    else {
      this.users = this.testData;
    }

  }
  filterProjectByTitle(titleProject: string) {
    return this.testData.filter(title =>
      title.name.first.toLowerCase().indexOf(titleProject.toLowerCase()) >= 0);

  }
  constructor(private http: HttpClient, private service: ServiceService) { }

  ngOnInit() {
    // this.dataService.sendGetRequest().subscribe((data: any[]) => {
    //   console.log(data);
    //   this.products = data;

    // })
    this.rank = this.getRank();
    this.steps = this.getRandomNumber().sort((a, b) => 0 - (a > b ? 1 : -1));
    console.log(this.steps);
    this.getData();
  }

  getData() {

    return this.service.sendGetRequest().subscribe(response => {

      console.log("users", response);
      this.testData = response.results;
      this.users = this.testData;
      console.log(this.users)
    })
  }

  getRandomNumber() {
    let aa = new Array();
    for (var i = 0; i < 10; i++) {
      let num = this.randomInt(1000, 20000);
      aa.push(num);
    }
    return aa;
  }

  getRank() {
    let aa = new Array();
    for (var i = 0; i < 10; i++) {
      let num = this.randomInt(60, 100);
      aa.push(num);
    }
    return aa;
  }
  successCallback(response: any) {
    this.users = response.data.results.map(user => {
      console.log(user)
      user.steps = this.randomInt(1000, 20000);
      return user;
    });
  }
  randomInt = function (min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
  }
}
