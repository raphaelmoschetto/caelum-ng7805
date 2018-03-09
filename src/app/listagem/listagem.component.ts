import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { FotoService } from "../servicos/foto.service";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: [ `.card-content
  {
    padding:0;
    position:relative;
    bottom:-40px;
  }` ]
})
export class ListagemComponent implements OnInit {

  photoList: PhotoComponent[]

    constructor(private servico: FotoService){ // Injeção de dependência

      this.servico.listar()      
        .subscribe(
          photoApi => this.photoList = photoApi //Arrow Function - Resgata váriaveis da classe 
          ,
          erro => console.log(erro)
        )
    }

  ngOnInit() {
  }

  deletar(foto: PhotoComponent){
    //console.log(foto);

    this.servico.deletar(foto)
      .subscribe(
        resposta => { 
           /* this.photoList = this.photoList.filter(
              function(fotoDaLista){
                if(fotoDaLista != foto){
                  return fotoDaLista
                }
              }
            ) */

            this.photoList = this.photoList.filter(fotoDaLista => fotoDaLista != foto)
        }
      )
        
  }

}
