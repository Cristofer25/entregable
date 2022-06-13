import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
@Input() numero:string=''
@Input() correo:string=''
 
}
