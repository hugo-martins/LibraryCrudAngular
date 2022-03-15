import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { BooksRoutingModule } from './books-routing.module';



@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    SharedModule,
    MatCardModule,
    ReactiveFormsModule,
    AppMaterialModule

  ]
})
export class BooksModule { }
