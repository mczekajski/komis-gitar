import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'oferta',
    loadChildren: () =>
      import('./guitars/guitars.module').then((m) => m.GuitarsModule),
  },
  {
    path: 'ofirmie',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'kontakt',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
