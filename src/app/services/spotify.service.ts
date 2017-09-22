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

  private client_id = '2180f7b2cf214e9d9bd9f96376015395';
  private client_secret = '2165d5733e2d4e4abc98f2d22210a4ad';

  constructor(private _http: Http) { }

  searchMusic(str: String, type= 'artist') {
    this.searchUrl = 'https://api.spotify.com/v1/search?q=' + str + '&type=' + type + '&market-US';
    // tslint:disable-next-line:max-line-length
    return this._http.get(this.searchUrl + '&access_token=BQBKv4gt0C01O8orVGO4m8llhO4nQtfLYQjMA0_YAmcIDqXJXbVFkp3bc1lBBui0DhD8CLB3hSLFBGyAQK3UfN6u_teCXq4dT3ZzS4yYZU_dYryKi2EcbJUmpYOIR5NqOxEODHOkmmu8W-taM4buXYhNN2gz')
                .map(res => res.json());
  }

  getArtist(id: string) {
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    // tslint:disable-next-line:max-line-length
    return this._http.get(this.artistUrl + '?access_token=BQBKv4gt0C01O8orVGO4m8llhO4nQtfLYQjMA0_YAmcIDqXJXbVFkp3bc1lBBui0DhD8CLB3hSLFBGyAQK3UfN6u_teCXq4dT3ZzS4yYZU_dYryKi2EcbJUmpYOIR5NqOxEODHOkmmu8W-taM4buXYhNN2gz')
               .map(res => res.json());
  }

  getAlbums(artistId: string) {
    this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
    // tslint:disable-next-line:max-line-length
    return this._http.get(this.albumsUrl + '?access_token=BQBKv4gt0C01O8orVGO4m8llhO4nQtfLYQjMA0_YAmcIDqXJXbVFkp3bc1lBBui0DhD8CLB3hSLFBGyAQK3UfN6u_teCXq4dT3ZzS4yYZU_dYryKi2EcbJUmpYOIR5NqOxEODHOkmmu8W-taM4buXYhNN2gz')
               .map(res => res.json());
  }

  getAlbum(albumId: string) {
    this.albumUrl = 'https://api.spotify.com/v1/albums/' + albumId;
    // tslint:disable-next-line:max-line-length
    return this._http.get(this.albumUrl + '?access_token=BQBKv4gt0C01O8orVGO4m8llhO4nQtfLYQjMA0_YAmcIDqXJXbVFkp3bc1lBBui0DhD8CLB3hSLFBGyAQK3UfN6u_teCXq4dT3ZzS4yYZU_dYryKi2EcbJUmpYOIR5NqOxEODHOkmmu8W-taM4buXYhNN2gz')
               .map(res => res.json());
  }

}
