import { AlumnoInterface } from './../models/alumno';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(
      //aqui se crean los metodos para guardar eliminar actulizarlos libros
    private afs: AngularFirestore) {
      this.alumnosCollection = afs.collection<AlumnoInterface>('alumnos');
      this.alumnos = this.alumnosCollection.valueChanges();
    }
  
    //propiedades
    private alumnosCollection: AngularFirestoreCollection<AlumnoInterface>;
    private alumnos: Observable<AlumnoInterface[]>;
    private alumnoDoc: AngularFirestoreDocument<AlumnoInterface>;
    private alumno: Observable<AlumnoInterface>;
    public selectedAlumno: AlumnoInterface = {id: null};//es para el modal
   

  getAllAlumno(){
    //this.alumnosCollection = this.afs.collection<AlumnoInterface>('alumnos');
    return this.alumnos = this.alumnosCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action =>{
        const data = action.payload.doc.data() as AlumnoInterface;// sacamos el id del documento
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }


   //metodo de ofertas
   getAllPeleadores() {
    this.alumnosCollection = this.afs.collection('alumnos', ref => ref.where('peleador', '==', '1'));
    return this.alumnos = this.alumnosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as AlumnoInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

    //metodo para cachar el id en firebase
  getOneAlumno(idAlumno: string){
    this.alumnoDoc = this.afs.doc<AlumnoInterface>(`alumnos/${idAlumno}`);//va a la coleccion de libros y busca la ruta que le pasemos
    return this.alumno = this.alumnoDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as AlumnoInterface;
        data.id = action.payload.id;
        return data;
      }
    }));

  }

  //metodo para añadir libro
  addAlumno(alumno: AlumnoInterface): void{
    this.alumnosCollection.add(alumno);
  }
   //metodo para actualizar
  updateAlumno(alumno: AlumnoInterface): void{
    let idAlumno = alumno.id;
    this.alumnoDoc = this.afs.doc<AlumnoInterface>(`alumnos/${idAlumno}`);
    this.alumnoDoc.update(alumno);
  }


  //metodo para eliminar
  deleteAlumno(idAlumno: string): void{
    this.alumnoDoc = this.afs.doc<AlumnoInterface>(`alumnos/${idAlumno}`);
    this.alumnoDoc.delete();
  }
}
