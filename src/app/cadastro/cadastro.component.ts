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

    this.conexaoApi.post(
      'http://localhost:3000/v1/fotos/',
      this.photo,
      {
        headers: new HttpHeaders({'Content-Type':'application/json'})
      }
    )
    .subscribe(
      (resposta) => { 
        this.photo = new PhotoComponent()
       },
      erro => console.log(erro)
    )

  }

}
