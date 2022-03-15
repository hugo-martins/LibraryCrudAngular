import { SalesService } from './../services/sales.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from '../model/sale';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

@Component({
  selector: 'app-sale-delete',
  templateUrl: './sale-delete.component.html',
  styleUrls: ['./sale-delete.component.scss']
})
export class SaleDeleteComponent implements OnInit {

  sale: Sale;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private saleService: SalesService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.saleService.findSaleById(<string> id).subscribe((sale)=>{
    this.sale = sale;
    });
  }

  deleteSale(): void {

    this.saleService.deleteSale(<string>this.sale.id).subscribe(()=>{
      this.saleService.showMessage('Venda Deletada!')
      this.router.navigate(['/sales']);
    })
  }


  cancel(): void{
    this.router.navigate(['/sales']);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });

  }

}
