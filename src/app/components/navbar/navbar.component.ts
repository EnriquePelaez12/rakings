import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private afsAuth: AngularFireAuth
   ) { }

   //propiedades
   public app_name: string = 'Raiking Amateur Mexico';
   public isLogged: boolean = false;
   public isAdmin: any = null;
    public userUid: string = null;

 
   ngOnInit() {
    this.getCurrentUser();
    this.getCurrentUsers();
    

  }
  
  //metodo para saber si el usuario esta logado
  getCurrentUser(){
    this.authService.isAuth().subscribe(auth => { 
      if(auth){
        console.log('user logged');
        this.isLogged = true;
              } else {
                console.log('NOT user Logged');
                this.isLogged = false;
              }
    });

  }

  //metodo para salir 
  onLogout(){
    this.afsAuth.auth.signOut();

  }


    //metodo para comprovar si es usuario es admin o no
    getCurrentUsers(){
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
  
 
}
