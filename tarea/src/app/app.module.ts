import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pantalla1Component } from './pantalla1/pantalla1.component';
import { Pantalla2Component } from './pantalla2/pantalla2.component';
import { Pantalla3Component } from './pantalla3/pantalla3.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InfoPersonaComponent } from './info-persona/info-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    Pantalla1Component,
    Pantalla2Component,
    Pantalla3Component,
    NavComponent,
    HomeComponent,
    ContactoComponent,
    InfoPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
