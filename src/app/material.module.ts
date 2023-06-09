import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon'; // importar MatIconModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  
  ],
  exports: [
   //Aquí van los módulos
   BrowserModule,
   MatIconModule,
   MatFormFieldModule,
   FormsModule,
   MatSelectModule,
   MatToolbarModule,
   MatButtonModule,
   MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
