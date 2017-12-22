import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {

  @Input() guess: String;
  score: number = 0;
  @Input() questionInfo;
  @Output() answerScored = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  checkGuess() {
    let answerCorrect:boolean = false;

    if (this.guess.toLowerCase() == this.questionInfo.answer.toLowerCase()) {
      answerCorrect = true;
    }

    if (answerCorrect) {
      this.score += this.questionInfo.value;
    }

    this.answerScored.emit();
    this.guess = "";
  }

}
