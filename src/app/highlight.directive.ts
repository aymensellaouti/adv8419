import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }
  @HostBinding('style.backgroundColor') bg = '#e5e9ed';
  @HostListener('mouseenter') highlight() {
    this.bg = 'yellow';
  }
  @HostListener('mouseleave') dishighlight() {
    this.bg = '#e5e9ed';
  }

}
