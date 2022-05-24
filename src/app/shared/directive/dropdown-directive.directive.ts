import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {
  @HostBinding('class.open') isOpen =false;
  constructor(private elRef: ElementRef) { }

  // @HostListener('click') handleclick(){
  //    this.isOpen = !this.isOpen
  // }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}
