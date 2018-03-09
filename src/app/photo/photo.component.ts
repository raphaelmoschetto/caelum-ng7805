import { Component, Input } from "@angular/core";

@Component({

    selector: 'photo',
    template: `<img src="{{url}}" alt="{{titulo}}" class="circle responsive-img" />`,
    styles: [`img { border:2px solid red; height:110px; }`]

})

export class PhotoComponent {

   @Input() url = "";
   @Input() titulo = "";
   @Input() descricao = "";
            _id: string

}

// Data Binding - Associação de dados

// {{}} -> Angular Expression