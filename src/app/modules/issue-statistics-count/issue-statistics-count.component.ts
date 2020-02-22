import { Component, OnInit } from '@angular/core';
import { IssueStatisticsCountService } from 'src/app/services/issue-statistics-count.service';
import { issueStatisticsCount } from 'src/app/interfaces/issue-statistics-count';

@Component({
  selector: 'app-issue-statistics-count',
  templateUrl: './issue-statistics-count.component.html',
  styleUrls: ['./issue-statistics-count.component.css']
})
export class IssueStatisticsCountComponent implements OnInit {

  isShow = true;
  issueCount:issueStatisticsCount[];

  constructor(private issueCountService:IssueStatisticsCountService) { }

  ngOnInit() {
      this.issueCountService.getData().subscribe(data =>this.issueCount=data)
  }

  toggleDisplay(){
    this.isShow = !this.isShow;
  }

  // display(){
  //   this.showMe = !this.showMe;
  // }

}
