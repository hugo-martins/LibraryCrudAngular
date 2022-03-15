import { SaleDeleteComponent } from './sales/sale-delete/sale-delete.component';
import { SaleUpdateComponent } from './sales/sale-update/sale-update.component';
import { SalesComponent } from './sales/sales/sales.component';
import { ClientDeleteComponent } from './clients/client-delete/client-delete.component';
import { ClientUpdateComponent } from './clients/client-update/client-update.component';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { ClientsComponent } from './clients/clients/clients.component';
import { BookDeleteComponent } from './books/book-delete/book-delete.component';
import { BookUpdateComponent } from './books/book-update/book-update.component';
import { BooksCreateComponent } from './books/books-create/books-create.component';
import { BooksComponent } from './books/books/books.component';
import { HomeComponent } from './books/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleCreateComponent } from './sales/sale-create/sale-create.component';


const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },{
  path: "books",
  component: BooksComponent
  },{
  path: "books/books-create",
  component: BooksCreateComponent
  },{
    path: "books/:id",
    component: BookUpdateComponent
  },{
    path: "books/book-delete/:id",
    component: BookDeleteComponent
  },{
    path: "clients",
    component: ClientsComponent
  },{
    path: "clients/client-create",
    component: ClientCreateComponent
  },{
      path: "clients/:id",
      component: ClientUpdateComponent
  },{
      path: "clients/client-delete/:id",
      component: ClientDeleteComponent
  },{
    path: "sales",
    component: SalesComponent
  },{
    path: "sales/sales-create",
    component: SaleCreateComponent
  },{
      path: "sales/:id",
      component: SaleUpdateComponent
  },{
      path: "sales/sale-delete/:id",
      component: SaleDeleteComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
