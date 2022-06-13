import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pantalla3',
  templateUrl: './pantalla3.component.html',
  styleUrls: ['./pantalla3.component.css']
})
export class Pantalla3Component {

infoRecibida:string=''
recibir(nombre:string){
  this.infoRecibida=nombre
}
}
