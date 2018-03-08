import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  photo = new PhotoComponent()

  constructor(private conexaoApi: HttpClient) { }

  ngOnInit() {}

  send(evento: Event){
    evento.preventDefault()

    this.conexaoApi.post(
      'http://localhost:3000/v1/fotos/',
      this.photo,
      ''
    )

  }

}
