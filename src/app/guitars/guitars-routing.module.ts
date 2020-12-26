import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuitarsHomeComponent } from './guitars-home/guitars-home.component'

const routes: Routes = [
  { path: '', component: GuitarsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuitarsRoutingModule { }
