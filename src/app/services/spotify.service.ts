import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private redirect_uri: string;
  private client_id = '2180f7b2cf214e9d9bd9f96376015395';
  private client_secret = '2165d5733e2d4e4abc98f2d22210a4ad';

  constructor(private _http: Http) { }

  searchMusic(str: String, type= 'artist') {
    this.searchUrl = 'https://api.spotify.com/v1/search?q=' + str + '&type=' + type + '&market-US';

    // tslint:disable-next-line:max-line-length
    return this._http.get(this.searchUrl + '&access_token=BQDoM7eAsbU37wWW7K5lRVDjmSkwGru80sZy_LZdQeoKdWcMymYNehPM-OmAkCJuDec-WY6QgyNaamQLx3TXl8uMMwrW_BWb01P2lv9qCTZXrt4vhqKLiNSutK3WSp2jrmmdHYZWGNZ8mp7CJeerbVA6diTs')
                .map(res => res.json());
  }

}
