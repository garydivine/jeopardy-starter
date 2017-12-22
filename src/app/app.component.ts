import { Component, OnInit, Input } from '@angular/core';
import {JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  questionInfo;
  categories;
  @Input() categoryId;

  constructor(private jeopardyService: JeopardyService){}

  getDataFromService(){
    this.jeopardyService.getQuestionInfo(this.categoryId)
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[Math.floor(Math.random() * (questionInfo.length))];
          console.log(this.questionInfo.category.id);
          console.log(this.questionInfo.answer);
        }
      )  
  }

  getCategoriesFromService(){
    this.jeopardyService.getCategories()
      .subscribe(
        categories => {
          this.categories = categories;
          console.log(this.categories);
        }
      )  
  }

  ngOnInit(){
    this.getCategoriesFromService()
  }

}
