import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  private show: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    const button = this.elementRef.nativeElement;
    const dropdown = button.nextElementSibling;

    if (!this.show) {
      this.renderer.addClass(button, 'show');
      this.renderer.addClass(dropdown, 'show');
    } else {
      this.renderer.removeClass(button, 'show');
      this.renderer.removeClass(dropdown, 'show');
    }
    this.show = !this.show;
  }
}
