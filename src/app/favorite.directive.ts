import {Directive, HostBinding} from '@angular/core';

@Directive({
    selector:'[mwFavorite]'
})
export class FavoriteDirective {
    //for now lets just set it to true.
    @HostBinding('class.is-favorite') isFavorite = true;
}