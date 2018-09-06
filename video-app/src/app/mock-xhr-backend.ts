import { Observable } from 'rxjs/Observable';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MockXHRBackend implements HttpInterceptor {

  _mediaItems = [
    {
      id: 1,
      name: 'Firebug',
      medium: 'Series',
      category: 'Science Fiction',
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: 'The Small Tall',
      medium: 'Movies',
      category: 'Comedy',
      year: 2015,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 3,
      name: 'The Redemption',
      medium: 'Movies',
      category: 'Action',
      year: 2016,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 4,
      name: 'Hoopers',
      medium: 'Series',
      category: 'Drama',
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: 'Happy Joe: Cheery Road',
      medium: 'Movies',
      category: 'Action',
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    }
  ];

  constructor() {  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null).pipe(mergeMap(() => {
      let response: HttpEvent<any>;

      if (request.method === 'GET') {
        let mediaItems;

        if (request.url.indexOf('mediaitems?medium=') >= 0 || request.url === 'mediaitems') {
          let medium;

          if (request.url.indexOf('?') >= 0) {
            medium = request.url.split('=')[1];
            if (medium === 'undefined') {
              medium = '';
            }
          }

          if (medium) {
            mediaItems = this._mediaItems.filter(mediaItem => mediaItem.medium === medium);
          } else {
            mediaItems = this._mediaItems;
          }

          response = new HttpResponse({
            body: {
              mediaItems: JSON.parse(JSON.stringify(mediaItems))
            },
            status: 200
          });
        } else {
          const id = parseInt(request.url.split('/')[1], 10);

          mediaItems = this._mediaItems.filter(mediaItem => mediaItem.id === id);

          response = new HttpResponse({
            body: JSON.parse(JSON.stringify(mediaItems[0])),
            status: 200
          });
        }
      } else if (request.method === 'POST') {
        const mediaItem = request.body;

        mediaItem.id = this.getNewId();

        this._mediaItems.push(mediaItem);

        response = new HttpResponse({
          status: 201
        });
      } else if (request.method === 'DELETE') {
        let id = parseInt(request.url.split('/')[1], 10);
        this.deleteMediaItem(id);

        response = new HttpResponse({
          status: 200
        });
      } else {
        return next.handle(request);
      }

      return of(response);
    }));
  }

  private deleteMediaItem(id) {
    const itemToDelete = this._mediaItems.find(mediaItem => mediaItem.id === id);
    const index = this._mediaItems.indexOf(itemToDelete);

    if (index >= 0) {
      this._mediaItems.splice(index, 1);
    }
  }

  private getNewId() {
    if (this._mediaItems.length > 0) {
      return Math.max.apply(Math, this._mediaItems.map(mediaItem => mediaItem.id)) + 1;
    }
  }
}
