import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  public kids : any[] = [];
  public loading : boolean;

  constructor(
    private peliculasService : PeliculasService
  ){}

  ngOnInit() {
    this.loading = true;
    this.peliculasService.getKidsMovies().subscribe(
      data => {
        this.kids = data.results;
        this.loading = false;
      }
    )
  }

}
