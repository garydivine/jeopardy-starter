import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {

  @Input() guess: String;
  @Output() buttonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendData() {
    this.buttonClicked.emit(this.guess);
    this.guess = "";
  }

}
