import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formPipe'
})
export class FormPipe implements PipeTransform {

  transform(telephone: string): string {
    return "+33 " + telephone.substr(1,1) + telephone.substr(3,2) + telephone.substr(6,2) + telephone.substr(9,2)+ telephone.substr(12,2);
  }

}
