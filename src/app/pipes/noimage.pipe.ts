import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if(!images){
      return 'assets/img/messino.jpg'
    }

    if(images.length){
      return images[1].url
    }
    else{
      return 'assets/img/messino.jpg'
    }
   
  }

}
