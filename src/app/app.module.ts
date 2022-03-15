import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDeleteComponent } from './books/book-delete/book-delete.component';
import { BookUpdateComponent } from './books/book-update/book-update.component';
import { BooksCreateComponent } from './books/books-create/books-create.component';
import { BooksComponent } from './books/books/books.component';
import { HomeComponent } from './books/home/home.component';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { ClientDeleteComponent } from './clients/client-delete/client-delete.component';
import { ClientUpdateComponent } from './clients/client-update/client-update.component';
import { ClientsComponent } from './clients/clients/clients.component';
import { SaleCreateComponent } from './sales/sale-create/sale-create.component';
import { SaleDeleteComponent } from './sales/sale-delete/sale-delete.component';
import { SaleUpdateComponent } from './sales/sale-update/sale-update.component';
import { SalesComponent } from './sales/sales/sales.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';


@NgModule({
  declarations: [
    AppComponent,
    BookDeleteComponent,
    BookUpdateComponent,
    BooksCreateComponent,
    HomeComponent,
    BooksComponent,
    ClientsComponent,
    ClientCreateComponent,
    ClientUpdateComponent,
    ClientDeleteComponent,
    SalesComponent,
    SaleCreateComponent,
    SaleDeleteComponent,
    SaleUpdateComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
