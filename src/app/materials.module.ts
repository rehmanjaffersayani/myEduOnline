import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  
  MatMenuModule,
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatTableModule,
  MatChipsModule,
  MatOptionModule,
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule,
  MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],exports:[
    MatToolbarModule,
    MatChipsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule
  ]
})
export class MaterialsModule { }
