import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueDetailsComponent } from './issue-details.component';




const routes: Routes = [
  
  {
    path:'',
    component:IssueDetailsComponent
    // loadChildren:'./users/users.users.module#UsersModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueDetailsRoutingModule { }