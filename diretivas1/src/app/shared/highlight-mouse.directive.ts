import { Directive,HostListener,ElementRef,Renderer,HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouserOver()
  {
    // this.render.setElementStyle(this.element.nativeElement,'background','yellow')
    this.backgroundColor='yellow';
  }

  @HostListener('mouseleave') onMouserLeave()
  {
    // this.render.setElementStyle(this.element.nativeElement,'background','white')
    this.backgroundColor ='white';
  }

  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private element:ElementRef,
              private render:Renderer) { }

}
