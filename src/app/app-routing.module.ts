import { ViewAlumnoComponent } from './components/views/view-alumno/view-alumno.component';
import { PeleadorComponent } from './components/persona/peleador/peleador.component';
import { AlumnoComponent } from './components/persona/alumno/alumno.component';
import { Page404Component } from './components/page404/page404.component';
import { PerfilComponent } from './components/users/perfil/perfil.component';
import { LoginComponent } from './components/users/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './components/users/registro/registro.component';
import { RecordComponent } from './components/persona/record/record.component';
import { GradosComponent } from './components/persona/grados/grados.component';
import { AuthGuard } from './guards/auth.guard';
import { DetailAlumnoComponent } from './components/details/detail-alumno/detail-alumno.component';

const routes: Routes = [

  {path: '', component: HomeComponent },
  {path: 'persona/alumno', component: AlumnoComponent, canActivate: [AuthGuard]},
  {path: 'views/view-alumno', component: ViewAlumnoComponent}, 
  {path: 'persona/grados', component: GradosComponent, canActivate: [AuthGuard]},
  {path: 'persona/peleador', component: PeleadorComponent},
  {path: 'persona/record', component: RecordComponent, canActivate: [AuthGuard]},
  {path: 'alumno/:id', component: DetailAlumnoComponent},
  {path: 'users/login', component: LoginComponent, },
  {path: 'users/registro', component: RegistroComponent, canActivate: [AuthGuard]},
  {path: 'users/perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  {path: '**', component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
