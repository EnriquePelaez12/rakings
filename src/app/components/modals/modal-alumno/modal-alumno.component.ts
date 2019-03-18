import { AlumnoInterface } from './../../../models/alumno';
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit,  ViewChild, ElementRef, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-alumno',
  templateUrl: './modal-alumno.component.html',
  styleUrls: ['./modal-alumno.component.css']
})
export class ModalAlumnoComponent implements OnInit {

  constructor(
    private dataApi: DataApiService
  ) { }
  @ViewChild('btnClose') btnClose: ElementRef; //para cerrar el modal al momento de guardar
  @Input() userUid: string;//es para obtener el id de userId


  ngOnInit() {
  }

  onSaveAlumno(alumnoForm: NgForm): void{
   // console.log('alumnForm.value.id', alumnForm.value.id)
    if(alumnoForm.value.id == null){
    //new 
    alumnoForm.value.userUid = this.userUid;//te guarda el id del usuario que creo el documento
    this.dataApi.addAlumno(alumnoForm.value);
    }else{
    //update  
    this.dataApi.updateAlumno(alumnoForm.value);
    }
    alumnoForm.resetForm();
    this.btnClose.nativeElement.click();

  }
}
