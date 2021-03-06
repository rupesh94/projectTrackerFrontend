import { Injectable } from '@angular/core';
import {issueStatisticsCount} from '../interfaces/issue-statistics-count'
import { IssueStatisticsCountComponent } from '../modules/issue-statistics-count/issue-statistics-count.component';
import { Observable } from 'rxjs/internal/Observable';
// import 'rxjs/add/observable/of';
import { of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class IssueStatisticsCountService {
  
  private demoData : issueStatisticsCount[]=[
    {id:1, des:"aaaaaaaaaaaaaaa"},
    {id:2, des:"bbbbbbbbbbbbbbb"},
    {id:3, des:"ccccccccccccccc"},
    {id:4, des:"ddddddddddddddd"},
    {id:5, des:"eeeeeeeeeeeeeee"},
    // {id:6, des:"fffffffffffffff"},
    // {id:7, des:"ggggggggggggggg"},
    // {id:8, des:"hhhhhhhhhhhhhhh"},
    // {id:9, des:"iiiiiiiiiiiiiii"},
    // {id:10, des:"jjjjjjjjjjjjjjj"},
    // {id:11, des:"kkkkkkkkkkkkkkk"},
    // {id:12, des:"lllllllllllllll"},
  ];
  constructor() {}

    getData() : Observable<issueStatisticsCount[]> {
      return of(this.demoData)
    }
   }

  

