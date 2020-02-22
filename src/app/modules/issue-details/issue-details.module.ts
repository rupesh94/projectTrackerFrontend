import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueDetailsComponent } from './issue-details.component';
import { IssueDetailsRoutingModule } from './issue-details.routing.module';



@NgModule({
  declarations: [IssueDetailsComponent],
  imports: [
    CommonModule,
    IssueDetailsRoutingModule
  ],
  exports:[
    IssueDetailsComponent
   
  ]
})
export class IssueDetailsModule { }
