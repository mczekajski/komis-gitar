import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuitarsRoutingModule } from './guitars-routing.module';
import { GuitarsHomeComponent } from './guitars-home/guitars-home.component';
import { GuitarCardComponent } from './guitar-card/guitar-card.component';
import { GuitarProductComponent } from './guitar-product/guitar-product.component';

@NgModule({
  declarations: [GuitarsHomeComponent, GuitarCardComponent, GuitarProductComponent],
  imports: [
    CommonModule,
    GuitarsRoutingModule,
  ]
})
export class GuitarsModule { }
