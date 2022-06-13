import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.css']
})
export class InfoPersonaComponent {
 status:string=""
 nombre:string="Cristofer"
 @Output() NuevoCanal = new EventEmitter<string>()

 enviarInfo(){
  this.NuevoCanal.emit(this.nombre)
 }

 
lenguajes:Array<string>=["Angular","html","CSS","Js"]

mostrar(){
  this.status="mostrar"
}
ocultar(){
  this.status="ocultar"
}

 

}

