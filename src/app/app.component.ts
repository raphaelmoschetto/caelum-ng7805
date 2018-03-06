import { Component } from '@angular/core';

@Component({

  selector:`app-root`,
  templateUrl: "./app.component.html",
  styles: [`
  header
  {
    width: 100%;
    text-align: center;
  }
  header h1
  {
    font-size:24px; 
    text-transform: uppercase; 
    letter-spacing:10px; 
    color:white; 
  }

  section img
  {
    border:4px solid red;
  }
  
    `]

})

export class AppComponent{

}