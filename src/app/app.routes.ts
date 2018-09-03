import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PopularComponent } from './components/popular/popular.component';
import { KidsComponent } from './components/kids/kids.component';
import { MovieViewComponent } from './components/movie-view/movie-view.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:text', component: SearchComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'movie/:id', component: MovieViewComponent },
  { path: '', pathMatch:'full', redirectTo: 'home' },
  { path: '**', pathMatch:'full', redirectTo: 'home' },
];
