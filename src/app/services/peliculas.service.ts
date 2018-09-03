import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  private apikey : string = '57390279603bf87bbd73dd1189a6dbfd';
  private urlMovieDB : string = 'https://api.themoviedb.org/3'

  constructor(
    private jsonp: Jsonp
  ) { }

  getPopular() {
    let url = `${ this.urlMovieDB }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map(res => res.json());
  }

  getSearchMovie(search) {
    let url = `${ this.urlMovieDB }/search/movie?query=${ search }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map(res => res.json());
  }

  getCinemaMovies() {
    let url = `${ this.urlMovieDB }/movie/now_playing?api_key=${ this.apikey }&language=es-ES&page=1&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map(res => res.json());
  }

  getKidsMovies() {
    let url = `${ this.urlMovieDB }/discover/movie?certification_country=US&certification.lte=PG&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map(res => res.json());
  }

  getAMovie(movieID) {
    let url= `${ this.urlMovieDB }/movie/${ movieID }?api_key=${ this.apikey }&language=es-ES&callback=JSONP_CALLBACK`

    return this.jsonp.get( url )
                .map(res => res.json());
  }
}
