import { Component, OnInit } from '@angular/core';
import {CvService} from '../cv.service';
import {Personne} from '../../Model/personne.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  result: Personne[] = [];
  searchField = '';
  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateToDetail(id) {
    const link = ['cv', id];
    this.result = [];
    this.searchField = '';
    this.router.navigate(link);
}
  search() {
    if (this.searchField.length) {
    this.cvService.findPersonneLike(this.searchField).subscribe(
      (response) => {
        this.result = response;
      }
    );
    } else {
      this.result = [];
    }
  }
}
