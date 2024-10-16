import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {DocumentEditorContainer, DocumentEditorModule} from "@syncfusion/ej2-angular-documenteditor";

@NgModule({
  imports: [
    MatToolbarModule,
    DocumentEditorModule,
    MatButtonModule
  ],

})
export class AppModule {}
