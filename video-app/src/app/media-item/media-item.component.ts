import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss']
})
export class MediaItemComponent implements OnInit {

  @Input()
  mediaItem;

  @Output()
  delete = new EventEmitter();

  onDelete = function() {
    this.delete.emit(this.mediaItem);
  };

  constructor() { }

  ngOnInit() {
  }

}
