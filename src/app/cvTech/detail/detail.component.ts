import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../Model/personne.model';
import {EmbaucheService} from '../embauche.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(
    private embaucheService: EmbaucheService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }
  detail() {
    const link = ['cv', this.personne.id];
    this.router.navigate(link);
  }

}
