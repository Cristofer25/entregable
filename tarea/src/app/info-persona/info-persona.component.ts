import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.css']
})
export class InfoPersonaComponent {

 nombre:string="Cristofer"
lenguajes:Array<string>=["Angular","html","CSS","Js"]
 verificar(){
   if (this.nombre=="Cristofer") {
     
   }
 }

}
