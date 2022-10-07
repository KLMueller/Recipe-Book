import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdowndirectiveDirective {
@HostBinding('class.open') isOpen = false;

  constructor() { }

  @HostListener('click') toggleManageRecipe(){
    this.isOpen = !this.isOpen;
  }
}
