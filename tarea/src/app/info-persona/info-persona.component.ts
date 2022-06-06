import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.css']
})
export class InfoPersonaComponent {
 status:string=""
 

 nombre:string="Cristofer"
lenguajes:Array<string>=["Angular","html","CSS","Js"]

mostrar(){
  this.status="mostrar"
}
ocultar(){
  this.status="ocultar"
}

 verificar(){
   if (this.nombre=="Cristofer") {
     
   }
 }


}

