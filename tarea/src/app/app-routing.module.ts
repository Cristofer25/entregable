import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla1Component } from './pantalla1/pantalla1.component';
import { Pantalla2Component } from './pantalla2/pantalla2.component';
import { Pantalla3Component } from './pantalla3/pantalla3.component';

const routes: Routes = [
  {path:"home",component:Pantalla1Component},
  {path:"contacto",component:Pantalla2Component},
  {path:"info",component:Pantalla3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
