import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  link = 'http://jsonplaceholder.typicode.com/todos';
  constructor(
    private http: HttpClient
  ) { }
  ngOnInit() {
    this.http.get(this.link).subscribe(
      (resultat) => {
        console.log(resultat);
      },
      (erreur) => {
        console.log(erreur);
      }
    );
  }

}
