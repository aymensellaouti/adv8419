import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  @Input() color = 'yellow';
  @Input() bgc = 'red';
  mySize = 20;
  fontFamily = 'Verdana';
  constructor() { }

  ngOnInit() {
  }
  changeFont(font) {
   this.fontFamily = font;
  }

}
