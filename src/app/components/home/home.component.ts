import { Component, OnInit, ViewChild } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies : any[] = [];
  public loading : boolean;

  @ViewChild(CardsComponent) movieID : CardsComponent;

  constructor(
    private peliculasService : PeliculasService
  ){}

  ngOnInit() {
    this.loading = true;
    this.peliculasService.getCinemaMovies().subscribe(
      data => {
        this.movies = data.results;
        
        this.loading = false;
      }
    )
  }
}
