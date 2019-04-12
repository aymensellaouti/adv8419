import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CvService} from '../cv.service';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {
  errorMessage = '';
  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  addPersonne(formulaire: NgForm) {
    this.cvService.addPersonne(formulaire.value).subscribe(
      (reponse) => {
        this.router.navigate(['']);
      },
      (erreur) => {
        console.log(erreur);
        this.errorMessage = `Problème d'authentification : ${erreur.error.message}`;
      }
    );
  }
}
