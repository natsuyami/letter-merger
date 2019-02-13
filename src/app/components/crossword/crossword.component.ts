import { Component, OnInit } from '@angular/core';
import { CROSSWORDS } from 'src/app/data/crosswords';

@Component({
  selector: 'app-crossword',
  templateUrl: './crossword.component.html',
  styleUrls: ['./crossword.component.scss']
})
export class CrosswordComponent implements OnInit {

  crosswords = CROSSWORDS;

  constructor() { }

  ngOnInit() {
  }

}
