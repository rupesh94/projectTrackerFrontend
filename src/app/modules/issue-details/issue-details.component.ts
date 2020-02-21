import { Component, OnInit } from '@angular/core';
import { IssueDetailsService } from 'src/app/services/issue-details.service';
import { IssueDetail } from 'src/app/interfaces/IssueDetail';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
  })

export class IssueDetailsComponent implements OnInit {
  isShow = false;
  showMe = false;
  issueDetail: IssueDetail[];

  constructor(private issueDetailsService:IssueDetailsService) {}

  ngOnInit() {
   this.issueDetailsService.getDetails()
    .subscribe((Details) => this.issueDetail=Details)
  }
 
    toggleDisplay() {
    this.isShow = !this.isShow;
  }

    Display(){
    this.showMe = !this.showMe;
  }
}




