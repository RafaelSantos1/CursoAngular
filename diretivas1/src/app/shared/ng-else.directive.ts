import { Directive, Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition:boolean)
  {
    if(!condition)
    {
      this.viewContainerRef.createEmbeddedView(this.templateref);
    }
    else{
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateref: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
