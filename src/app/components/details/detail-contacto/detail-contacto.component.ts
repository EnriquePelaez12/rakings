import { Component, OnInit } from '@angular/core';
import { ApiContactoService } from '../../../services/api-contacto.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ContactoInterface } from '../../../models/contacto';

@Component({
  selector: 'app-detail-contacto',
  templateUrl: './detail-contacto.component.html',
  styleUrls: ['./detail-contacto.component.css']
})
export class DetailContactoComponent implements OnInit {

  constructor(
    private dataApi: ApiContactoService,
    private route: ActivatedRoute
  ) { }
  public contacto: ContactoInterface = {};

  ngOnInit() {
const idContacto = this.route.snapshot.params['id'];
this.getDetails(idContacto);

}

getDetails(idContacto: string): void{
  this.dataApi.getOneContacto(idContacto).subscribe(contacto => {
    console.log('Detalles', contacto);
    this.contacto = contacto;
  });
}





}