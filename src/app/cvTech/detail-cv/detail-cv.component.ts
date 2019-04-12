import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CvService} from '../cv.service';
import {Personne} from '../../Model/personne.model';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (parametres) => {
        this.cvService.findPersonneById(parametres.id).subscribe(
          (personne) => {
            this.personne = personne;
          },
          (error) => {
            const link = ['cv'];
            this.router.navigate(link);
          }
        );
      }
    );
  }
  deletePersonne() {
    this.cvService.deleteCv(this.personne.id).subscribe(
      (response) => {
        const link = [''];
        this.router.navigate(link);
      },
      (erreur) => {
        console.log(erreur);
      }
    );
  }

}
