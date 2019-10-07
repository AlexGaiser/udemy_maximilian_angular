import { Directive, HostBinding, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddClass]'
})
export class AddClassDirective {
  @HostBinding('class')
  elementClass = 'cool-class';
  constructor(private renderer: Renderer2, hostElement: ElementRef) { }

}
