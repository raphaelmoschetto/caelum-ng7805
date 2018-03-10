import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PhotoModule } from "./photo/photo.module";
import { CardModule } from "./card/card.module";
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { roteamento } from "./app.routes";
import { FotoService } from './servicos/foto.service';
import { FiltroPorTitulo } from "./listagem/filtroPorTitulo.pipe";


@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent,
    FiltroPorTitulo
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PhotoModule,
    CardModule,
    roteamento
  ],
  providers: [
    FotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
