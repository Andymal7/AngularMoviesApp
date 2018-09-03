import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  public popular : any[] = [];
  public loading : boolean;

  constructor(
    private peliculasService : PeliculasService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.peliculasService.getPopular().subscribe(
      res => {
        this.popular = res.results;
        this.loading = false;
      }
    )
  }

}
