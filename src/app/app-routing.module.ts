import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueDetailsComponent } from './modules/issue-details/issue-details.component';
import { IssueStatisticsCountComponent } from './modules/issue-statistics-count/issue-statistics-count.component'

const routes: Routes = [
  {path:'',redirectTo:'/issueCount',pathMatch:'full'},
  {path:'issueCount',component:IssueStatisticsCountComponent},
  {path:'issueDetail', component:IssueDetailsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
