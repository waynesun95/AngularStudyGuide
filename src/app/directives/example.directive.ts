import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appExampleDirective]'
})
export class ExampleDirective {

  constructor(private el: ElementRef) {
    this.highlight('red');
  }

  // Whenever mouse enters DOM element(s) with appExampleDirective in its tag, it will invoke this function
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  // Whenever mouse exits DOM element(s) with appExampleDirective in its tag, it will invoke this function
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('cyan');
  }

  // Set background color of DOM element(s) with appExampleDirective in its tag to the passed in color parameter
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
