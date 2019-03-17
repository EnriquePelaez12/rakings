import { ActivatedRoute, Params } from '@angular/router';
import { AlumnoInterface } from './../../../models/alumno';
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-alumno',
  templateUrl: './detail-alumno.component.html',
  styleUrls: ['./detail-alumno.component.css']
})
export class DetailAlumnoComponent implements OnInit {

  constructor(
    private dataApi: DataApiService,
    private route: ActivatedRoute
  ) { }

  //propiedad
  public alumno: AlumnoInterface= {};


  ngOnInit() {
    const idAlumno = this.route.snapshot.params['id'];
    this.getDetails(idAlumno);
  }

  //metodo para saber el id
  getDetails(idAlumno: string): void {
    this.dataApi.getOneAlumno(idAlumno).subscribe(alumno => {
      this.alumno = alumno;
    });
  }



}
