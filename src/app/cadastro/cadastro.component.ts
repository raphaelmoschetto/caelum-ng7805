import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  photo = new PhotoComponent()

  constructor(private conexaoApi: HttpClient) { }

  ngOnInit() {}

  send(){

    let cabecalho = new HttpHeaders()

    cabecalho.append('Content-Type','application/json')

    this.conexaoApi.post(
      'http://localhost:3000/v1/fotos/',
      this.photo,
      {
        headers: cabecalho
      }
    )
    .subscribe(
      resposta => { console.log (resposta) },
      erro => console.log(erro)
    )

  }

}
