import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/personne.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  constructor() { }

  ngOnInit() {
  }
  handlePersonne(personne) {
    console.log('in cvComponent', personne);
    this.selectedPersonne = personne;
  }

}
