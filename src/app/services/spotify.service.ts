import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private redirect_uri: string;
  private client_id = '2180f7b2cf214e9d9bd9f96376015395';
  private client_secret = '2165d5733e2d4e4abc98f2d22210a4ad';

  private artistUrl: string;

  constructor(private _http: Http) { }

  searchMusic(str: String, type= 'artist') {
    this.searchUrl = 'https://api.spotify.com/v1/search?q=' + str + '&type=' + type + '&market-US';
    // tslint:disable-next-line:max-line-length
    return this._http.get(this.searchUrl + '&access_token=BQB47nRsqOvdByNyFqqPZuSgl_wOYyOTSp69J2vzopAMcgx336eHc2C_yfVWT9n5qoZAHSTFgN8B_N1lgagb5MkSKO-IjJ3vic_b79UUZkerLen0GQC6KpIslxqnbb7scQGHWByBEmP9vOKaAFKQs7hY8sGH')
                .map(res => res.json());
  }

  getArtist(id: string) {
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    // tslint:disable-next-line:max-line-length
    return this._http.get(this.artistUrl + '?access_token=BQB47nRsqOvdByNyFqqPZuSgl_wOYyOTSp69J2vzopAMcgx336eHc2C_yfVWT9n5qoZAHSTFgN8B_N1lgagb5MkSKO-IjJ3vic_b79UUZkerLen0GQC6KpIslxqnbb7scQGHWByBEmP9vOKaAFKQs7hY8sGH')
               .map(res => res.json());
  }

}
