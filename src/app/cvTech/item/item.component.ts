import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne.model';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne: Personne;
  @Output() sendPersonne = new EventEmitter();
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit() {
  }
  triggerEvent() {
    console.log('trigger event send personne');
    this.sendPersonne.emit(
      this.personne
    );
  }
  deletePersonne() {
    this.cvService.deleteCv(this.personne);
  }

}
