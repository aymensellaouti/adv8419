import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../todo.service';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
  providers: [TodoService]
})
export class NgClassComponent implements OnInit {

  isJuve = false;
  isRoma = true;
  isBarca = false;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  loggerTodo() {
    this.todoService.loggerTodo();
  }
  changeStyle(myClass) {
    if (myClass === 'juve') {
      this.isBarca = false;
      this.isJuve = true;
      this.isRoma = false;
    } else if (myClass === 'roma') {
      this.isBarca = false;
      this.isJuve = false;
      this.isRoma = true;
    } else {
        this.isBarca = true;
        this.isJuve = false;
        this.isRoma = false;
    }

  }

}
