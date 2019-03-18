import { UserInterface } from './../../../models/user';
import { AuthService } from './../../../services/auth.service';
import { AlumnoInterface } from './../../../models/alumno';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../../../services/data-api.service';
import { NgForm}  from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

 
  constructor(   
    private dataApi: DataApiService,
    private authService: AuthService) { }
 
    //propiedad como un arrive
    private books: AlumnoInterface [];
    public isAdmin: any = null;
    public userUid: string = null;
 
 private alumnos: AlumnoInterface[];
 ngOnInit() {
  this.getListAlumnos();
  this.getCurrentUser();
   }

  //metodo para comprovar si es usuario es admin o no
  getCurrentUser(){
    this.authService.isAuth().subscribe(auth =>{
      if(auth){
        this.userUid = auth.uid;//comprueba si el usuario esta logado
        this.authService.isUSerAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');//comprueba si es admin o no
          //this.isAdmin = true;
       
        })
      }
    })
  }


 

  getListAlumnos(){
    this.dataApi.getAllAlumno()
    .subscribe(alumnos => {
      //console.log('Alumnos', alumnos);
      this.alumnos = alumnos;
    });
  }


onDeleteAlumno(idAlumno: string): void{
  const confirmacion = confirm('¿Estas seguro de Eliminar?')
  if(confirmacion){
  this.dataApi.deleteAlumno(idAlumno);
  }
}

onPreUpdateAlumno(alumno: AlumnoInterface): void{
  console.log('ALUMNOOO', alumno)
  this.dataApi.selectedAlumno = Object.assign({}, alumno);

}

}
