import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactRoutingModule } from './contact-routing.module';



@NgModule({
  declarations: [ContactHomeComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
