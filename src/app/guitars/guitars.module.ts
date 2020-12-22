import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuitarsRoutingModule } from './guitars-routing.module';
import { GuitarsHomeComponent } from './guitars-home/guitars-home.component';
import { GuitarCardComponent } from './guitar-card/guitar-card.component';


@NgModule({
  declarations: [GuitarsHomeComponent, GuitarCardComponent],
  imports: [
    CommonModule,
    GuitarsRoutingModule
  ]
})
export class GuitarsModule { }
