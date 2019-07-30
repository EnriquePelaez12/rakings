import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlumnoComponent } from './components/persona/alumno/alumno.component';
import { PeleadorComponent } from './components/persona/peleador/peleador.component';
import { GradosComponent } from './components/persona/grados/grados.component';
import { RecordComponent } from './components/persona/record/record.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/users/login/login.component';
import { PerfilComponent } from './components/users/perfil/perfil.component';
import { RegistroComponent } from './components/users/registro/registro.component';
import { ViewAlumnoComponent } from './components/views/view-alumno/view-alumno.component';
import { DetailAlumnoComponent } from './components/details/detail-alumno/detail-alumno.component';
import { ModalAlumnoComponent } from './components/modals/modal-alumno/modal-alumno.component';

//animaciones para mensajes de confirmacion
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

//para las notificaciones
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

//Es para validar las direcciones
import { AuthGuard } from './guards/auth.guard';



//estamos importando las dependencias para conectar fire base
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { from } from 'rxjs';
import { DetailPeleadorComponent } from './components/details/detail-peleador/detail-peleador.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AlumnoComponent,
    PeleadorComponent,
    GradosComponent,
    RecordComponent,
    Page404Component,
    LoginComponent,
    PerfilComponent,
    RegistroComponent,
    ViewAlumnoComponent,
    DetailAlumnoComponent,
    ModalAlumnoComponent,
    DetailPeleadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FlashMessagesModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AngularFireAuth, AngularFirestore, FlashMessagesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
       