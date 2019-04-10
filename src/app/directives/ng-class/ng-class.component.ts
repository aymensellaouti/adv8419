import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  isJuve = false;
  isRoma = true;
  isBarca = false;
  constructor() { }

  ngOnInit() {
  }
  changeStyle(myClass) {
    if (myClass === 'juve') {
      this.isBarca = false;
      this.isJuve = true;
      this.isRoma = false;
    } else if (myClass === 'roma') {
      this.isBarca = false;
      this.isJuve = false;
      this.isRoma = true;
    } else {
        this.isBarca = true;
        this.isJuve = false;
        this.isRoma = false;
    }

  }

}
