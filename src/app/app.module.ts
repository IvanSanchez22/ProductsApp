import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { CategoriesService } from './services/categories/categories.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ShoesComponent } from './shoes/shoes.component';
import { OthersComponent } from './others/others.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sugerencias',
    component: SugerenciasComponent
  },
  {
    path: 'Clothes',
    component: ClothesComponent
  },
  {
    path: 'Electronics',
    component: ElectronicsComponent
  },
  {
    path: 'Furniture',
    component: FurnitureComponent
  },
  {
    path: 'Shoes',
    component: ShoesComponent
  }
 
  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SugerenciasComponent,
    ClothesComponent,
    ElectronicsComponent,
    FurnitureComponent,
    ShoesComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
