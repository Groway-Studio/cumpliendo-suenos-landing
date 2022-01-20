import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'buscar/:termino', component: BuscadorComponent },
  // { path: 'heroe/:id', component: HeroeComponent },
  { path: '**', pathMatch: 'full',redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
