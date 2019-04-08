import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @Input() defaultColor = 'red';
  maCouleur = this.defaultColor;
  @Output() sonColor = new EventEmitter();
  constructor() { }
  ngOnInit() {

  }
  changeColor(couleur) {
    this.maCouleur = couleur;
  }
  setDefaultColor() {
    this.maCouleur = this.defaultColor;
  }
  sendDataToDad() {
    this.sonColor.emit(
      this.maCouleur
    );
  }
}
