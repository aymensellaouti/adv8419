import { Injectable } from '@angular/core';
import {Personne} from '../Model/personne.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private apiLink = 'http://localhost:3000/api/personnes';
  private personnes: Personne[];
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 36, 'as.jpg', 'teacher', 777),
      new Personne(2, 'zidan', 'Zizou', 30, 'zizou.jpeg', 'player', 888),
      new Personne(3, 'sellaouti', 'skander', 0, '', 'bébé', 71118),
    ];
  }
  getFakePersonnes() {
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.apiLink);
  }
  deleteCv(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
  }
  findPersonneById(id): Personne {
    const personne = this.personnes.find(personne => personne.id == id);
    if (!personne) {
      return null;
    }
    return personne;
  }
  addPersonne(personne: Personne) {
    const token = localStorage.getItem('token');
    if (token) {
//      const headers = new HttpHeaders().set('Authorization', token);
      //{"where":{"name":{"like":"%${name}%"}}}
      const params = new HttpParams().set('access_token', token);
      return this.http.post(this.apiLink, personne, {
        params
      });
    }

    return this.http.post(this.apiLink, personne);
  }
}
