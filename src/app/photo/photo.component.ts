import { Component } from "@angular/core";

@Component({

    selector: 'photo',
    template: `<img src="assets/images/dog.jpg" alt="Dog" class="circle responsive-img" />`,
    styles: [`img { border:4px solid red; }`]

})

export class PhotoComponent {

}