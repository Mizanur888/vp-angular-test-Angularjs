import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ServiceService } from 'src/app/Service/service.service';
import { WebApiCallService } from 'src/app/Service/webApiCall.service';
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
  testData2: any[] = [];
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
  constructor(private http: HttpClient, private service: ServiceService, private webApiService: WebApiCallService) { }

  ngOnInit() {
    // this.dataService.sendGetRequest().subscribe((data: any[]) => {
    //   console.log(data);
    //   this.products = data;

    // })
    this.getDataFromWebApiCall();
    this.rank = this.getRank();
    this.steps = this.getRandomNumber().sort((a, b) => 0 - (a > b ? 1 : -1));
    console.log(this.steps);
    this.getDatatest();
  }

  // getData() {

  //   return this.service.sendGetRequest().subscribe(response => {

  //     console.log("users", response);
  //     this.testData = response.results;
  //     this.users = this.testData;
  //     console.log(this.users)
  //   }).unsubscribe();
  // }

  getDatatest() {
    this.service.sendGetRequest().toPromise().then(promise => {
      let data: any[] = [];
      data.push(promise);
      data.forEach(element => {

        for (var i = 0; i < element.results.length; i++) {
          this.testData.push(element.results)
          console.log(element.results[i])
        }
      });
    })
  }

  getDataFromWebApiCall() {
    this.webApiService.dataFromWebApi().toPromise().then(data => {
      console.log(data);
      let temp: any[] = [];
      temp.push(data);
      temp.forEach(element => {
        for (var i = 0; i < element.length; i++) {
          console.log(element[i].FName)
          this.testData2.push(element[i]);
        }
      });
    }).catch(error => {
      console.log(error)
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
