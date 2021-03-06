import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green')
  }
  @HostListener('mouseenter') mouseover(eventdata: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange')

  }
  @HostListener('mouseleave') mouseleave(eventdata: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'purple')

  }


}
