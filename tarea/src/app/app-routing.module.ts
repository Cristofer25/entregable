import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { InfoPersonaComponent } from './info-persona/info-persona.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"info",component:InfoPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
