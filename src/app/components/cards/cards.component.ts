import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() public movies: any[]=[]
  constructor(
    private peliculasService: PeliculasService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  searchMovie(movieID){
    if (movieID.length != 0) {
      this.router.navigate(['movie',movieID]);
    }
  }

}
