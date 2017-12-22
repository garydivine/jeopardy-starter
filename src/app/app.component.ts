import { Component, OnInit, Input } from '@angular/core';
import {JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  questionInfo;
  score = 0;

  constructor(private jeopardyService: JeopardyService){}

  getDataFromService(){
    this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
          console.log(this.questionInfo.answer);
        }
      )  
  }

  ngOnInit(){
    this.getDataFromService()
  }

  determineVerdict(guess) {
    let answerCorrect:boolean = false;

    if (guess.toLowerCase() == this.questionInfo.answer.toLowerCase()) {
      answerCorrect = true;
    }

    if (answerCorrect) {
      this.score += this.questionInfo.value;
    }

    this.getDataFromService();

  }

}
