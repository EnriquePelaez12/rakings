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
import { AuthGuard } from './guards/auth.guard';
import { DetailAlumnoComponent } from './components/details/detail-alumno/detail-alumno.component';
import { DetailPeleadorComponent } from './components/details/detail-peleador/detail-peleador.component';
import { ContactoComponent } from './components/persona/contacto/contacto.component';
import { ListContactoComponent } from './components/persona/list-contacto/list-contacto.component';
import { DetailContactoComponent } from './components/details/detail-contacto/detail-contacto.component';
const routes: Routes = [

  {path: '', component: HomeComponent },
  {path: 'persona/alumno', component: AlumnoComponent, canActivate: [AuthGuard]},
  {path: 'views/view-alumno', component: ViewAlumnoComponent}, 
  {path: 'persona/contacto', component: ContactoComponent},
  {path: 'persona/peleador', component: PeleadorComponent},
  {path: 'persona/list-contacto', component: ListContactoComponent, canActivate:[AuthGuard]},
  {path: 'alumno/:id', component: DetailAlumnoComponent},
  {path: 'peleador/:id', component: DetailPeleadorComponent},
  {path: 'contacto/:id', component: DetailContactoComponent},
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
