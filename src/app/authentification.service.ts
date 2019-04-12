import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private apiLink = 'http://localhost:3000/api/Users/login';
  constructor(private http: HttpClient) { }
  login(user) {
    return this.http.post(this.apiLink, user);
  }
}
