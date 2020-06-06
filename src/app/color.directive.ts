import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private ref:ElementRef,private renderer:Renderer2) {

    this.ref.nativeElement.style.background='green';
    this.ref.nativeElement.style.color='blue';
    this.ref.nativeElement.style.fontsize='30px';
    this.ref.nativeElement.style.textAlign='left';
    const h2=this.renderer.createElement('h2');
    const text=this.renderer.createText('this is created by using  color Directive');
    this.renderer.appendChild(h2,text);
    this.renderer.appendChild(this.ref.nativeElement,h2);
   }
   @HostListener('mouseenter')
   mouseEnterHostListner(){
     this.ref.nativeElement.style.background='yellow';
     this.ref.nativeElement.style.color='green';
     this.ref.nativeElement.style.textAlign='right';

   }
   @HostListener('mouseleave')
   mouseLeaveHostListner(){
    this.ref.nativeElement.style.background='green';
    this.ref.nativeElement.style.color='blue';
    this.ref.nativeElement.style.fontsize='30px';
    this.ref.nativeElement.style.textAlign='left';
   }

}
