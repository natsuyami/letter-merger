import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WORDS } from '../../../data/words';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.scss']
})
export class GuessComponent implements OnInit {

  guessForm = new FormGroup({
    guessWord: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  } 

  onSubmit(){
    const guessword = this.guessForm.value.guessWord;
    const key = checkExistingWord(guessword).split("-");
    const coord = {x:Number(key[0]), y: Number(key[1])};
    const lining = key[2];
    const word_length = Number(key[3]);

    let v=1;
    console.log(key);
    if(key.length > 0){
      if(lining == 'H'){
        coord.x = coord.x - 1;
        for(let a=0; a < word_length; a++){
          const elem_id = ((coord.x+v)+""+coord.y).toString();
          document.getElementById(elem_id).classList.add('show-td');

          console.log(document.getElementById(((coord.x+v)+""+coord.y).toString()));
          v++;
        }
      }else{
        coord.y = coord.y - 1;
        for(let a=0; a < word_length; a++){
          const elem_id = (coord.x+""+(coord.y+v)).toString();
          document.getElementById(elem_id).classList.add('show-td');

          console.log(document.getElementById((coord.x+""+(coord.y+v)).toString()));
          v++;
        }
      }
    }
    v=0;
  }
}

function checkExistingWord(word:string): string{
  let id = "";
  WORDS.forEach(function(value) {
    if(word.toLowerCase() == value.word.toLowerCase()){
      id = value.id;
    }
  });
  return  id;
}
