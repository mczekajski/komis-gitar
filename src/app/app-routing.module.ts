import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components here

//This is my case 
const routes: Routes = [
    //add routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }