import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthentificationService} from '../authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cnxError = false;
  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(formulaire: NgForm) {
    this.authentificationService.login(formulaire.value).subscribe(
      (reponse) => {
        localStorage.setItem('token', reponse['id']);
        this.cnxError = false;
        this.router.navigate(['']);
      },
      (erreur) => {
        console.log(erreur);
        this.cnxError = true;
      }
    );
  }

}
