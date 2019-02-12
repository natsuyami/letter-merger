import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatNativeDateModule} from '@angular/material';
import {MaterialModule} from './material-module';

import { AppComponent } from './app.component';
import { HintComponent } from './components/hint/hint.component';
import { GameComponent } from './page/game/game.component';
import { LetterComponent } from './components/letter/letter.component';
import { GuessComponent } from './components/form/guess/guess.component';
import { MessageComponent } from './components/modal/message/message.component';
import { InstructionComponent } from './components/modal/instruction/instruction.component';
import { CrosswordComponent } from './components/crossword/crossword.component';

@NgModule({
  declarations: [
    AppComponent,
    HintComponent,
    GameComponent,
    LetterComponent,
    GuessComponent,
    MessageComponent,
    InstructionComponent,
    CrosswordComponent,
  ],
  
  imports: [
    BrowserModule,
    MaterialModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
