import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PhotoModule } from "./photo/photo.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PhotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
