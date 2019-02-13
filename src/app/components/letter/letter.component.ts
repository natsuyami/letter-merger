import { Component, OnInit } from '@angular/core';
import { WORDS } from '../../data/words';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {

  letter:Array<string>

  constructor() { 
    
  }

  ngOnInit() {
    let btn_fill = ""
    WORDS.forEach(function(value) {
      const word = value.word.toLowerCase()
      btn_fill += randomizeWord(word.replace(value.key.toLowerCase(), ""))
    });
    this.letter = btn_fill.split("")
  }
}

function randomizeWord(a:string): string{
  let word = a.split(""), n = word.length;
  for(let i = n - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = word[i];
    word[i] = word[j];
    word[j] = tmp;
  }
  return word.join("");
}