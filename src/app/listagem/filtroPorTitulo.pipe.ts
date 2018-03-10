import { Pipe, PipeTransform } from "@angular/core";
import { PhotoComponent } from "../photo/photo.component";

@Pipe({
    name: 'filtroPorTitulo'
})

export class FiltroPorTitulo implements PipeTransform{
    transform(photoList: PhotoComponent[], textoDigitado: string){

        textoDigitado

        return photoList.filter(foto => {
            if(foto.titulo.toLowerCase().includes(textoDigitado.toLowerCase())){
                return foto
            }
        })

    }
}