import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { FotoService } from "../servicos/foto.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  photo = new PhotoComponent()

  constructor(private servico: FotoService) { }

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
