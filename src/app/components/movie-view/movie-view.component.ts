import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {

  public movieID : any;
  public movie : any;
  public goBack: any;

  constructor(
    private peliculasService: PeliculasService,
    private route:ActivatedRoute
  ) {
    this.route.params.subscribe( params => {
      this.goBack = params['pag']
      if (params['id']) {
        this.movieID = params['id'];
        this.getMovie();
      }
    })
  }
  ngOnInit() {
  }

  getMovie(){
    this.peliculasService.getAMovie(this.movieID).subscribe(
      res=> {
        this.movie = res;
      }
    )
  }
}
