import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  constructor() { }
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bColor = 'black';
  @HostListener('keypress') changeColor() {
    this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.bColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

}
