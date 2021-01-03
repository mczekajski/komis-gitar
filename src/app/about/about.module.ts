import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutRoutingModule } from './about-routing.module';



@NgModule({
  declarations: [AboutHomeComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
