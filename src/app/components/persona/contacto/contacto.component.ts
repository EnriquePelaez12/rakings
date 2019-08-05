import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ContactoInterface } from '../../../models/contacto';
import { ApiContactoService } from '../../../services/api-contacto.service';
import { ToastrService } from 'ngx-toastr'; //para los mensajes de confitmacion

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(
    private dataApi: ApiContactoService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
}

onSaveContacto(contactoForm: NgForm): void{
  
  if (contactoForm.value.id == null) {
     this.dataApi.addContacto(contactoForm.value);
     this.mensajeSave();
    contactoForm.resetForm();
  }
}

mensajeSave() {
  this.toastr.success('OPERACION EXITOSA!', 'MENSAJE ENVIADO');
}



}