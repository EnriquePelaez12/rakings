import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-alumno',
  templateUrl: './view-alumno.component.html',
  styleUrls: ['./view-alumno.component.css']
})
export class ViewAlumnoComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public alumnos= [];
  public alumno= '';


  ngOnInit() {
    this.dataApi.getAllAlumno().subscribe(alumnos => {
      console.log('Alumnos', alumnos);
      this.alumnos = alumnos;
    })
  }

}
