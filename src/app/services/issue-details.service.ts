import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { IssueDetail } from '../interfaces/IssueDetail';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IssueDetailsService {
  apUrl='https://jsonplaceholder.typicode.com/posts'

  constructor(private _http:HttpClient) { }

  getDetails(): Observable <IssueDetail[]> {
    return this._http.get<IssueDetail[]>(this.apUrl);
  }
}

  
