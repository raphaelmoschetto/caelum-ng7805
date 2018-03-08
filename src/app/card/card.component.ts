import { Component, Input } from "@angular/core";

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styles: [`
    .card .card-image .card-title
    {
        text-shadow:2px 1px 1px #000; 
        font-size:18px;
    }
    `]
})

export class CardComponent {

    @Input() titulo 

}