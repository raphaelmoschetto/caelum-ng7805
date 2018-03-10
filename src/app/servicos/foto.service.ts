import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PhotoComponent } from "../photo/photo.component";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

const url = 'http://localhost:3000/v1/fotos/'
const headers = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable() export class FotoService {

    constructor(private conexaoApi: HttpClient){}

    listar(): Observable<PhotoComponent[]>{
        return this.conexaoApi.get<PhotoComponent[]>(url)
    }

    consultar(idFoto): Observable<PhotoComponent>{
        return this.conexaoApi.get<PhotoComponent>(url+idFoto)
    }

    cadastrar(foto: PhotoComponent): Observable<Object>{
        return this.conexaoApi.post(url, foto, headers)
                              
    }

    deletar(foto: PhotoComponent): Observable<Object>{
        return this.conexaoApi.delete(url+foto._id)
    }

    atualizar(foto: PhotoComponent): Observable<Object>{
        return this.conexaoApi.put(url+foto._id,foto,headers)
                              
    }

}