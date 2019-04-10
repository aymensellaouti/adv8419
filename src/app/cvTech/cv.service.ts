import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 36, 'as.jpg', 'teacher', 777),
      new Personne(2, 'zidan', 'Zizou', 30, 'zizou.jpeg', 'player', 888),
      new Personne(3, 'sellaouti', 'skander', 0, '', 'bébé', 71118),
    ];
  }
  getPersonnes() {
    return this.personnes;
  }
  deleteCv(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
  }
}
