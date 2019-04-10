import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne.model';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  listeEmbauche: Personne[] = [];
  constructor() { }
  getEmbauchees() {
    return this.listeEmbauche;
  }
  embaucher(personne: Personne) {
    const index = this.listeEmbauche.indexOf(personne);
    if (index < 0) {
      this.listeEmbauche.push(personne);
    } else {
      alert(`${personne.name} est déjà présellectionné`);
    }
  }
}
