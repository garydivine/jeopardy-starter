import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JeopardyService {

  private baseUrl: string = "http://jservice.io/api";

  constructor(private http: Http) { }

  getQuestionInfo(categoryId): Observable<any> {

    return this.http.get(this.baseUrl + "/clues?category=" + categoryId)
      .map(result => {
        return result.json()
      })

  }

  getCategories(): Observable<any> {
    let offsetNumber = Math.floor(Math.random() * (1000));
    return this.http.get(this.baseUrl + "/categories?count=3&offset=" + offsetNumber)
      .map(result => {
        return result.json()
      })
    
  }



}