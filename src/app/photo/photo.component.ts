import { Component, Input } from "@angular/core";

@Component({

    selector: 'photo',
    template: `<img src="{{url}}" alt="{{titulo}}" class="circle responsive-img" />`,
    styles: [`img { border:4px solid red; height:400px; }`]

})

export class PhotoComponent {

   @Input() url = "";
   @Input() titulo = "";

}

// Data Binding - Associação de dados

// {{}} -> Angular Expression