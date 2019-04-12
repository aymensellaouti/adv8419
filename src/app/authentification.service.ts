import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private isLogged = false;
  private apiLink = 'http://localhost:3000/api/Users/login';
  constructor(private http: HttpClient) { }
  login(user) {
    return this.http.post(this.apiLink, user);
  }
  getIsLogged(): boolean {
    return this.isLogged;
  }

  setIsLogged(value: boolean) {
    this.isLogged = value;
  }
}
