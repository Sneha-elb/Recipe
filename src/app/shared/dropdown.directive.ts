import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class dropdownDirective{
    @HostBinding('class.open') isOpen= false; //hostbinding used to attach or detach a css class
    
    @HostListener('click') toggleOpen(){
        this.isOpen=!this.isOpen;
    }
}