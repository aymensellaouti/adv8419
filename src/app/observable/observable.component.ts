import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() {
  }
  monObservable: Observable<string>;
  paths = [
   'as.jpg',
   'zizou.jpeg',
    'cv.gif'
  ];
  path = this.paths[this.paths.length - 1];
  ngOnInit() {
    this.monObservable = new Observable<string>((observer) => {
      let i = this.paths.length - 1;
      setInterval(() => {
        observer.next(this.paths[i--]);
        if (i === -1) {
          i = this.paths.length - 1;
        }
      }, 1000);
    });
    // observable.subscribe((val) => {
    //   this.path = val;
    // },
    //   (erreur) => {
    //   console.log('erreur : ', erreur);
    //   },
    //   () => {
    //   console.log('complete :D');
    //   }
    // );
    // observable.pipe(
    //   filter(x => x % 2 === 0)
    // ).subscribe(
    //   (result) => {
    //     console.log(result);
    //   }
    // );
  }

}
