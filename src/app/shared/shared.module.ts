import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MaterialsModule} from '../materials.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MaterialsModule

  ],exports:[
    ToolbarComponent,
    MaterialsModule
  
  ]
})
export class SharedModule { 

 
}
