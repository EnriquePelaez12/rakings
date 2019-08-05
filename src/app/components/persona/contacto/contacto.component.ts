import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ContactoInterface } from '../../../models/contacto';
import { ApiContactoService } from '../../../services/api-contacto.service';
import { ToastrService } from 'ngx-toastr'; //para los mensajes de confitmacion
import { Router } from '@angular/router';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto: FormGroup;
   submitted = false;
   titulo = 'DÉJANOS TU MENSAJE';
	
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataApi: ApiContactoService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {

    this.contacto = this.formBuilder.group({
      nombre: ['', Validators.required],            
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      postre: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(6)]]
  });
}


get f() { return this.contacto.controls; }
 
// onSubmit() {
//     this.submitted = true;

//     if (this.contacto.invalid) {
//         return;
//     }

//     alert('Mensaje Enviado !')
    
// }

onSaveContacto(contactoForm: NgForm): void{
  
  if (contactoForm.value.id == null) {
    this.submitted = true;
     this.dataApi.addContacto(contactoForm.value);
     this.mensajeSave();
    contactoForm.resetForm();
    this.onLoginRedirect();
  }
  if (this.contacto.invalid) {
    return;
}

}

mensajeSave() {
  this.toastr.success('OPERACION EXITOSA!', 'MENSAJE ENVIADO');
}

onLoginRedirect() {
  this.router.navigate(['']);//si esta logueado se manda a esa direccion

}

}