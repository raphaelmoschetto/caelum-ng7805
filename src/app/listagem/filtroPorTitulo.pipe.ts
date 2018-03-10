import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filtroPorTitulo'
})

export class FiltroPorTitulo implements PipeTransform{
    transform(listaFotos){

        return(listaFotos)

    }
}