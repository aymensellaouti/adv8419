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
        this.personne = this.cvService.findPersonneById(parametres.id);
        if (!this.personne) {
          const link = ['cv'];
          this.router.navigate(link);
        }
      }
    );
  }
  deletePersonne() {
    this.cvService.deleteCv(this.personne);
    const link = [''];
    this.router.navigate(link);
  }

}
