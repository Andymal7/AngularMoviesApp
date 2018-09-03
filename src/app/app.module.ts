import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { RouterModule }from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

import { PeliculasService } from './services/peliculas.service';

import { routes } from './app.routes';

import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe'

import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { PopularComponent } from './components/popular/popular.component';
import { KidsComponent } from './components/kids/kids.component';
import { MovieViewComponent } from './components/movie-view/movie-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    CardsComponent,
    LoadingComponent,
    PopularComponent,
    KidsComponent,
    MovieViewComponent,
    PeliculaImagenPipe
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    RouterModule.forRoot( routes, {useHash: true} ),
    FormsModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
