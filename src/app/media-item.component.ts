
import { Component , Input, Output, EventEmitter} from '@angular/core';
import {FavoriteDirective} from './favorite.directive';


@Component({
    selector: 'media-item',
    templateUrl: './media-item.component.html',
    styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {

    @Input('mediaItemToWatch') mediaItem;
    @Output('deleted') delete = new EventEmitter();

    movieTitle = 'The Redemption';
    watchedOn = 'Watched on 1/13/2016';
    gener = 'Action';

    onDelete() {
        this.delete.emit(this.mediaItem);
    }


}