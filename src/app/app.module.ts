import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AppComponent } from './app.component';
import { GuitarsModule } from './guitars/guitars.module';
import { MenuComponent } from './menu/menu.component';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';
import { AdminPanelModule } from './admin-panel/admin-panel.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GuitarsModule,
    AboutModule,
    ContactModule,
    AdminPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
