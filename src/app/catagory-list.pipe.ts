import { Pipe } from '@angular/core';

@Pipe({
    name: 'catagoryList'
})
export class catagoryListPipe {
    transform(mediaItemList) {
        var catagories = [];

        mediaItemList.forEach(mediaItem => {
            if (catagories.indexOf(mediaItem.category) <= -1) {
                catagories.push(mediaItem.category)
            }
        });
        /*
        //or use for loop. this form is more performant over foreach
        //it is more reable and givevs flexibility as we have access 
        //to indexes and can break from the loop anytime
        for (var i = 0, len = mediaItemList.length; i < len; i++) {            
            if (catagories.indexOf(mediaItemList[i].category) <= -1) {
                catagories.push(mediaItemList[i].category)
            }
        }*/
        return catagories.join(', ');
    }


}