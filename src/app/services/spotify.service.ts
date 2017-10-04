import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private redirect_uri: string;

  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;

  private client_id = 'CLIENT_ID';
  private client_secret = 'CLIENT_SECRET';

  constructor(private _http: Http) { }

  searchMusic(str: String, type= 'artist') {
    this.searchUrl = 'https://api.spotify.com/v1/search?q=' + str + '&type=' + type + '&market-US';
    // tslint:disable-next-line:max-line-length
    return this._http.get(this.searchUrl + '&access_token=ACCESS_TOKEN')
                .map(res => res.json());
  }

  getArtist(id: string) {
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    // tslint:disable-next-line:max-line-length
    return this._http.get(this.artistUrl + '?access_token=ACCESS_TOKEN')
               .map(res => res.json());
  }

  getAlbums(artistId: string) {
    this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
    // tslint:disable-next-line:max-line-length
    return this._http.get(this.albumsUrl + '?access_token=ACCESS_TOKEN')
               .map(res => res.json());
  }

  getAlbum(albumId: string) {
    this.albumUrl = 'https://api.spotify.com/v1/albums/' + albumId;
    // tslint:disable-next-line:max-line-length
    return this._http.get(this.albumUrl + '?access_token=ACCESS_TOKEN')
               .map(res => res.json());
  }

}
