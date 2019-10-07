import { Directive, ElementRef, OnInit, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBasicHighlightDirective]'
})
export class BasicHighlightDirectiveDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';

  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.setBackgroundColor(this.defaultColor)
   }
  ngOnInit(){
  }

  @HostListener('click') onClick(eventData: Event){
    this.setBackgroundColor(this.defaultColor)
  }

  @HostListener('dblclick') dblClick(eventData: Event){
    this.setBackgroundColor(this.highlightColor)
  }


  setBackgroundColor(color: string){
    return this.backgroundColor = color
  }


}
