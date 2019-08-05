import { Component, OnInit } from '@angular/core';
import { ApiContactoService } from '../../../services/api-contacto.service';
import { ContactoInterface } from '../../../models/contacto';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-contacto',
  templateUrl: './list-contacto.component.html',
  styleUrls: ['./list-contacto.component.css']
})
export class ListContactoComponent implements OnInit {
  public loading: boolean;
  
  constructor(private dataApi: ApiContactoService,
    private toastr: ToastrService) {
      this.loading = true;
     }
  private contactos: ContactoInterface[];

  ngOnInit() {
    this.getListContactos();
    
}
getListContactos(){
  this.dataApi.getAllContactos().subscribe(contactos => {
    this.contactos = contactos;
    this.loading = false;
    });
}
onDeleteContacto(idContacto: string): void{
  const confirmacion = confirm('¿Estas seguro de Eliminar?')
  if(confirmacion){
    this.dataApi.deleteContacto(idContacto);
    this.mensajeDelete();
  }

}


mensajeDelete() {
  this.toastr.success('OPERACION EXITOSA!', 'MENSAJE ELIMINADO!');
}


}