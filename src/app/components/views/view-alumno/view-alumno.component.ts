import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-alumno',
  templateUrl: './view-alumno.component.html',
  styleUrls: ['./view-alumno.component.css']
})
export class ViewAlumnoComponent implements OnInit {
  public loading: boolean;

  constructor(private dataApi: DataApiService) {
    this.loading = true;
   }
  public alumnos= [];
  public alumno= '';


  ngOnInit() {
    this.dataApi.getAllAlumno().subscribe(alumnos => {
      console.log('Alumnos', alumnos);
      this.alumnos = alumnos;
      this.loading = false;
    })
  }

}
