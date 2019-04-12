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
  deleteCv(id) {
    return this.http.delete(this.apiLink + `/${id}`);
  }
  findPersonneById(id): Observable<Personne> {
    return this.http.get<Personne>(this.apiLink + `/${id}`);
  }
  addPersonne(personne: Personne) {
     return this.http.post(this.apiLink, personne);
  }
  findPersonneLike(name): Observable<Personne[]> {
    const filter = `{"where":{"name":{"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter', filter);
    return this.http.get<Personne[]>(this.apiLink, {params});
  }
}
