import { Component, OnInit } from '@angular/core';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  defaultColor = 'red';
  maCouleur = this.defaultColor;
  constructor() { }

  ngOnInit() {

  }
  changeColor(couleur) {
    this.maCouleur = couleur;
  }
  setDefaultColor() {
    this.maCouleur = this.defaultColor;
  }
}
