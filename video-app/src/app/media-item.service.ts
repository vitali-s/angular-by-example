import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class MediaItemService {

  constructor(private http: HttpClient) { }

  get(medium) {
    const getOptions = {
      params: {
        medium: medium
      }
    };

    return this.http.get<MediaItemsResponse>('mediaitems', getOptions).pipe(
      map((response: MediaItemsResponse) => {
        return response.mediaItems;
      })
    );
  }

  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem);
  }

  deleted(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`);
  }
}

interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

interface MediaItemsResponse {
  mediaItems: MediaItem[];
}
