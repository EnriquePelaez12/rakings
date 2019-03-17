import { Component, OnInit } from '@angular/core';
import { UserInterface } from './../../../models/user';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(
    private authService: AuthService) { }
    //inicializamos  los atributos de la interfaz user
    user: UserInterface = {
      name: '',
      email: '',
      photoUrl: '',
     // roles: {}
    };
    
    public providerId: string = 'null'; 
     ngOnInit() {
       //se comprueba si el usuario esta logado
       this.authService.isAuth().subscribe(user =>{
         if (user){
           this.user.name = user.displayName;
           this.user.email = user.email;
           this.user.photoUrl = user.photoURL;
           this.providerId = user.providerData[0].providerId;
         }
       })
  }

}
