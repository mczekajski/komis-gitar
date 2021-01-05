import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactRoutingModule } from './contact-routing.module';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [ContactHomeComponent, MapComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
