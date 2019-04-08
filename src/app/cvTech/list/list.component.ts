import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/personne.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor() { }

  ngOnInit() {
    this.personnes = [
       new Personne(1, 'aymen', 'sellaouti', 36, 'zizou.jpeg', 'teacher', 777),
       new Personne(1, 'zidan', 'Zizou', 30, 'zizou.jpeg', 'player', 888)
    ];
  }

}
