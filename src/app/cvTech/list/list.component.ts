import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne.model';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  isFakeData = false;
  constructor(
    private cvService: CvService
  ) { }
  @Output() sendPersonne = new EventEmitter();
  ngOnInit() {
    this.cvService.getPersonnes().subscribe(
      (personnes) => {
        this.personnes = personnes;
      },
      (erreur) => {
        this.personnes = this.cvService.getFakePersonnes();
        this.isFakeData = true;
      }
    );
  }
  triggerEvent(personne) {
    console.log('in trigger list');
    this.sendPersonne.emit(
      personne
    );
  }

}
