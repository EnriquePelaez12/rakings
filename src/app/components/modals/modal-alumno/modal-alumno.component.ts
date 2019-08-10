import { AlumnoInterface } from './../../../models/alumno';
import { DataApiService } from './../../../services/data-api.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Component, OnInit,  ViewChild, ElementRef, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; //para los mensajes de confitmacion
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-alumno',
  templateUrl: './modal-alumno.component.html',
  styleUrls: ['./modal-alumno.component.css']
})
export class ModalAlumnoComponent implements OnInit {

  contacto: FormGroup;
  submitted = false;

  constructor(
    private dataApi: DataApiService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage
    ) { }
  @ViewChild('btnClose') btnClose: ElementRef; //para cerrar el modal al momento de guardar
  @Input() userUid: string;//es para obtener el id de userId
//datos para subir la imagen
uploadPercent: Observable<number>;//para saber el porcentaje de carga de la imagen
photoUrl: Observable<string>;//recupera la url de la imagen

  ngOnInit() {
  //   this.contacto = this.formBuilder.group({
  //     matricula: ['', Validators.required],
  //     nombreC: ['', Validators.required],            
  //     direccion: ['', Validators.required],
  //     cel: ['', Validators.required],
  //     apodo: ['', Validators.required],
  //     peso: ['', Validators.required],
  //     salud: ['', Validators.required],
  //     enlace: ['', Validators.required],
  //     nombreProf: ['', Validators.required],
  //     direccionProf: ['', Validators.required],
  //     enlaceProf: ['', Validators.required],
  //     telefonoProf: ['', Validators.required],
  //     especialidadProf: ['', Validators.required],
  //     academia: ['', Validators.required],
  //     tutor: ['', Validators.required],
  //     direccionTutor: ['', Validators.required],
  //     telefonoTutor: ['', Validators.required],
  // });
  }

  // get f() { return this.contacto.controls; }

  
//para subir la imagen
onUpload(e){
  //console.log('SUBIR', e.target.files[0]);
  const id = Math.random().toString(36).substring(2);//para generar un nombre unico para la imagen
  const file = e.target.files[0];
  const filePath = `alumnos/Foto_Alumno_${id}`;
  const ref = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, file);
  this.uploadPercent = task.percentageChanges();
  task.snapshotChanges().pipe(finalize(() => this.photoUrl = ref.getDownloadURL()))
  .subscribe();//recuperamos la url

}

  onSaveAlumno(alumnoForm: NgForm): void{
   // console.log('alumnForm.value.id', alumnForm.value.id)
   if (alumnoForm.value.id == null) {
 
    alumnoForm.value.userUid = this.userUid;
    this.dataApi.addAlumno(alumnoForm.value);
     this.mensajeSave();
     alumnoForm.resetForm();
  }else{
    //update  
    this.dataApi.updateAlumno(alumnoForm.value);
    this.mensajeUpdate();
    }
    alumnoForm.resetForm();
    this.btnClose.nativeElement.click();

  }


  // onSaveContacto(contactoForm: NgForm): void{
  
  //   if (contactoForm.value.id == null) {
  //     this.submitted = true;
  //      this.dataApi.addContacto(contactoForm.value);
  //      this.mensajeSave();
  //     contactoForm.resetForm();
  //     this.onLoginRedirect();
  //   }
  //   if (this.contacto.invalid) {
  //     return;
  // }
  
  // }


//metodo para resetear el formulario con el boton de close
  resDoc( alumnoForm: NgForm): void{
    alumnoForm.resetForm(); //para limpiar formulario
  }

  mensajeSave() {
    this.toastr.success('CONFIRMACION!', 'ALUMNO SE GUARDO CON EXITO!');
  }
  mensajeUpdate() {
    this.toastr.success('CONFIRMACION!', 'ALUMNO SE ACTUALIZO CON EXITO!');
  }
}
