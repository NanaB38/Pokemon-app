import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {

  constructor(private el:ElementRef) {
    //this.setHeight(500);
    this.setBorder('#f5f5f5'); 
   }

   @HostListener ('mouseenter') onMouseEnter() {
    this.setBorder('#2196F3');
   } 

    @HostListener ('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
   }  

  // setHeight(height:number){
  //   this.el.nativeElement.style.height = `${height}px`;
  //   //element natif du dom sur lequel la directive sera appelée
  // }
  private setBorder(color:string){
    this.el.nativeElement.style.border = `solid 4px ${color}`; 
  }
}
