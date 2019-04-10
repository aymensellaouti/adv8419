import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor() { }
  @Output() sendPersonne = new EventEmitter();
  ngOnInit() {
    this.personnes = [
       new Personne(1, 'sellaouti', 'aymen', 36, 'as.jpg', 'teacher', 777),
       new Personne(2, 'zidan', 'Zizou', 30, 'zizou.jpeg', 'player', 888),
       new Personne(3, 'sellaouti', 'skander', 0, '', 'bébé', 71118),
    ];
  }
  triggerEvent(personne) {
    console.log('in trigger list');
    this.sendPersonne.emit(
      personne
    );
  }

}
