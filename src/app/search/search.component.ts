import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
    SpotifyService
  ]
})
export class SearchComponent implements OnInit {
  searchStr: string;

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr, 'artist')
          .subscribe(res => {
            console.log(res.artists.items);
          });
  }


  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

}
