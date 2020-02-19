import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})

export class IssueDetailsComponent implements OnInit {
  isShow = false;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  constructor() { }

  ngOnInit() {
  }

}
