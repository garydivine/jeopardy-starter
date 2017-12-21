import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import {JeopardyService } from './jeopardy.service';
import { GuessComponent } from './guess/guess.component';

@NgModule({
  declarations: [
    AppComponent,
    GuessComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    JeopardyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
