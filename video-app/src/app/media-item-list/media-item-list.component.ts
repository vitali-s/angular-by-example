import { Component, OnInit } from '@angular/core';
import { MediaItemService} from '../media-item.service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.scss']
})
export class MediaItemListComponent implements OnInit {
  mediaItems;
  medium = '';

  constructor(private mediaItemService: MediaItemService) { }

  ngOnInit() {
    this.getMediaItems(this.medium);
  }

  getMediaItems(medium) {
    this.medium = this.medium;

    this.mediaItemService
      .get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
    });
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.deleted(mediaItem).subscribe(() => {
      this.getMediaItems(this.medium);
    });
  }
}
