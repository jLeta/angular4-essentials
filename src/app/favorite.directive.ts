import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[mwFavorite]'
})
export class FavoriteDirective {
    // host binding of css class is-favorite. using the field isFavorite
    @HostBinding('class.is-favorite') isFavorite;

    //another binding for mouse havoring. set default value of false 
    @HostBinding('class.is-favorite-hovering') havoring = false;

    //listen to mouse enter 
    @HostListener('mouseenter')
    onMouseEnter() {
        this.havoring = true;
    }

    //listen to mouse leave 
    @HostListener('mouseleave')
    onMouseLeave() {
        this.havoring = false;
    }

    /**
     * set value of isFavorite is set depending on is media
     */
    @Input()
    set mwFavorite(value) {
        this.isFavorite = value;
    }
}
