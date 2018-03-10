import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { FotoService } from "../servicos/foto.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  photo = new PhotoComponent()
  formCadastro: FormGroup

  constructor(private servico: FotoService, 
              private rota: ActivatedRoute,
              private roteador: Router,
              private formBuilder: FormBuilder
             ){
                this.formCadastro = this.formBuilder.group({
                    titulo:['', Validators.required],
                    url:['', Validators.required],
                    descricao:['', Validators.required]
                })
  }

  ngOnInit() {
      this.rota.params.subscribe( parametros => {

          if(parametros.photoId){
            console.log(parametros.photoId)
            this.servico.consultar(parametros.photoId)
                .subscribe(photoApi => {
                  this.photo = photoApi
                })
          }
          
      })
  }

  send(){

    if(this.photo._id){

      //serviço de alteração
      this.servico.atualizar(this.photo)
                  .subscribe(
                      () => {
                          alert('Foto editada com sucesso.')
                          this.roteador.navigate([''])
                      }
                  )
    } else {

        this.servico.cadastrar(this.photo)
        .subscribe(
          (resposta) => { 
            this.photo = new PhotoComponent()
            alert('Foto cadastrada com sucesso.')
            this.roteador.navigate([''])
          },
          erro => console.log(erro)
        )
      
    }

  }

}
