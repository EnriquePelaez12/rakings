import { AlumnoInterface } from './../../../models/alumno';
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
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


  ngOnInit() {
  }

  onSaveAlumno(alumnForm: NgForm): void{
   // console.log('alumnForm.value.id', alumnForm.value.id)
    if(alumnForm.value.id == null){
    //new 
    this.dataApi.addAlumno(alumnForm.value);
    }else{
    //update  
    this.dataApi.updateAlumno(alumnForm.value);
    }
    alumnForm.resetForm();
    this.btnClose.nativeElement.click();

  }
}
