import { Component } from '@angular/core';
import { MediaItemComponent } from './media-item.component';

@Component({
  selector: 'media-tracker-app',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

      firstMediaItem = {
        id: 1,
        name: "Firebug",
        medium: "Series",
        category: "Science Fiction",
        year: 2010,
        watchedOn: 1294166565384,
        isFavorite: false
    };

    onMediaItemDelete(mediaItem){
      
    }

}
