import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { IssueStatisticsCountComponent } from './modules/issue-statistics-count/issue-statistics-count.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './modules/header/header.component';
import { IssueDetailsService } from './services/issue-details.service';
import { IssueDetailsModule } from './modules/issue-details/issue-details.module';
import { IssueDetailsComponent } from './modules/issue-details/issue-details.component';

@NgModule({
  declarations:[
    AppComponent,
    LoginComponent,
    IssueStatisticsCountComponent,
    HeaderComponent,
    IssueDetailsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
