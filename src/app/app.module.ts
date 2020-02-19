import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { IssueStatisticsCountComponent } from './modules/issue-statistics-count/issue-statistics-count.component';
import { IssueDetailsComponent } from './modules/issue-details/issue-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IssueStatisticsCountComponent,
    IssueDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
