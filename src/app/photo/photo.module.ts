import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo.component";

@NgModule({
    declarations:[ PhotoComponent ],
    exports: [ PhotoComponent ],
    bootstrap: [ PhotoComponent ]
})

export class PhotoModule {

}