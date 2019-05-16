import { AlumnoInterface } from './../../../models/alumno';
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-peleador',
  templateUrl: './peleador.component.html',
  styleUrls: ['./peleador.component.css']
})
export class PeleadorComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
   private alumnos: AlumnoInterface[];
  ngOnInit() {
    this.getPeleadores();
    console.log('ES PELEADOR:', this.alumnos)
  }

  getPeleadores(){
    this.dataApi.getAllPeleadores().subscribe(peleadores => this.alumnos = peleadores);
  }
}
