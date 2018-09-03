import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public movie: any;
  public result: any;
  public loading: boolean;
  public error: boolean = false;

  constructor(
    private peliculasService: PeliculasService,
    private route:ActivatedRoute
  ) {
    this.route.params.subscribe( params => {
      console.log(params)

      if (params['text']) {
        this.movie = params['text']
        this.searchMovie()
      }
    })
  }

  ngOnInit() {

  }

  searchMovie(){
    this.loading = true;

    if (this.movie != null || this.movie != undefined) {
      this.error = false;
      this.peliculasService.getSearchMovie(this.movie).subscribe(
        res => {
          this.result = res.results;
          this.loading = false;
        }
      )
    }else{
      this.error = true;
      this.loading = false;
    }
  }
}
