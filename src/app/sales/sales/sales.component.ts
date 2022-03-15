import { SalesService } from './../services/sales.service';
import { Sale } from './../model/sale';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  sales$:Observable<Sale[]>
  sale: Sale;

  displayedColumns = ['client','bookPurchase','datePurchase','valuePurchase', 'status', 'action'];

  constructor(
    private router: Router,
    private saleService: SalesService,
    public dialog: MatDialog,) { }

  ngOnInit(): void {

    this.sales$ = this.saleService.listSalesAll()
        .pipe(
          catchError(error =>{
            this.onError('Erro ao listar Vendas');
            return of([]);
     })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  navigateToSaleCreate(): void {
    this.router.navigate(['sales/sales-create/']);
  }


}
