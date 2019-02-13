import { Component, OnInit } from '@angular/core';
import { HINTS } from 'src/app/data/hints';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent implements OnInit {

  hints = HINTS;
  
  constructor() { }

  ngOnInit() {
  }

}
