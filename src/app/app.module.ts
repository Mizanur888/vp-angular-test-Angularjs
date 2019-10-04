import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ChartComponent } from './components/chart/chart.component';

//angular form
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//https call
import { HttpClientModule } from '@angular/common/http';

//chart module
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts';
import { FriendsComponent } from './components/friends/friends.component';
import { FriendsWithComponent } from './components/friends-with/friends-with.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LeaderboardComponent,
    ChartComponent,
    FriendsComponent,
    FriendsWithComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService, ColumnSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
