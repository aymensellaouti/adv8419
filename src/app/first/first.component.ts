import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  show = false;
  constructor() { }

  ngOnInit() {
  }

  showHide(paragraphe) {
    console.log(paragraphe);
    this.show = ! this.show;
  }

}
