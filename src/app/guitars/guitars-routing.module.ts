import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuitarProductComponent } from './guitar-product/guitar-product.component';
import { GuitarsHomeComponent } from './guitars-home/guitars-home.component'

const routes: Routes = [
  { path: '', component: GuitarsHomeComponent },
  { path: 'produkt', component: GuitarProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuitarsRoutingModule { }
