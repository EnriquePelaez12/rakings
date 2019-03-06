import { FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService} from '../../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService,
    private flashMessage: FlashMessagesService //para los mensajes de confirmacion
    ) { }

    public email: string = '';
    public password: string = '';
  ngOnInit() {
  }

  onLogin(): void {
  this.authService.loginEmailUser(this.email, this.password)
    .then((res)=>{
      this.flashMessage.show('A ingresado Correctamente', //para mostrar mensaje
      {cssClass: 'alert-success', timeout: 4000});//para mostrar mensaje deque entro correctamente
    this.onLoginRedirect();
  }).catch(err => 
    this.flashMessage.show(err.message, //para mostrar mensaje
      {cssClass: 'alert-danger', timeout: 4000}) //para mostrar mensaje
    )};
  //catch(err => console.log('err', err.message));




  //metodo para salir 
  onLogout() {
    this.authService.logoutUser();
  }

  //
  onLoginRedirect(){
    this.router.navigate(['persona/alumno']);//si esta logueado se manda a esa direccion

  }

}