import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first, Observable, tap } from 'rxjs';
import { Sale } from './../model/sale';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private readonly API_URL = 'sale-microservice-service/sales';

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
    ){ }


  listSalesAll(): Observable<Sale[]> {
   return this.httpClient.get<Sale[]>(`${this.API_URL}/all`)
   .pipe(
     first(),
     tap(sales=> console.log(sales))
   );
  }

  findSaleById(id: string): Observable<Sale>{
    return this.httpClient.get<Sale>(`${this.API_URL}/${id}`);

  }

  registerSale(sale: Sale): Observable<Sale>{
    return this.httpClient.post<Sale>(`${this.API_URL}`, sale);
  }


  updateSale(sale: Sale): Observable<Sale> {
    return this.httpClient.put<Sale>(`${this.API_URL}/${sale.id}`, sale);
  }

  deleteSale(id:string): Observable<Sale> {
    return this.httpClient.delete<Sale>(`${this.API_URL}/${id}`);
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }



}
