import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { FotoService } from "../servicos/foto.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  photo = new PhotoComponent()

  constructor(private servico: FotoService, private rota: ActivatedRoute) {
      rota.params.subscribe( parametros => {
          console.log(parametros.photoId)
      } )
   }

  ngOnInit() {}

  send(){

    this.servico.cadastrar(this.photo)
    .subscribe(
      (resposta) => { 
        this.photo = new PhotoComponent()
       },
      erro => console.log(erro)
    )

  }

}
