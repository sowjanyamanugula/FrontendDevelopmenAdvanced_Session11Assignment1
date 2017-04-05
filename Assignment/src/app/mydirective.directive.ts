import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(private el:ElementRef){
        el.nativeElement.style.background='red';
    }

}
