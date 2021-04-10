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
export class Dropdown {
  @HostBinding('class.open') shouldOpen = false;
  //   constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  // close the dropdown on click anywhere in the document
  // we need to catch the event data to understand which element was clicked
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.shouldOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.shouldOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
