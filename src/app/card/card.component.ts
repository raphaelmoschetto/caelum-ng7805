import { Component, Input } from "@angular/core";

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styles: [`
    .card
    {
        margin-bottom:50px;
    }
    .card .card-image .card-title
    {
        background:rgba(0,0,0,.5);
        text-shadow:2px 1px 1px #000; 
        font-size:18px;
        width:100%;
        padding:0;
    }
    `]
})

export class CardComponent {

    @Input() titulo 

}