import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: [`
  header
  {
    width: 100%;
    text-align: center;
  }
  header h1
  {
    font-size:24px; 
    text-transform: uppercase; 
    letter-spacing:10px; 
    color:white; 
  }
    `]
})
export class ListagemComponent implements OnInit {

  photoList

    constructor(conexaoApi: HttpClient){ // Injeção de dependência
      conexaoApi.get('http://localhost:3000/v1/fotos')
        .subscribe(
          photoApi => this.photoList = photoApi //Arrow Function - Resgata váriaveis da classe 
          ,
          erro => console.log(erro)
        )
    }

  ngOnInit() {
  }

}
