import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  defaultImage = 'cv.gif';
  transform(value: string, args?: any): any {
    if (value) {
      return value;
    }
    return this.defaultImage;
  }

}
