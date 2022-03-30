import { SalesService } from './../services/sales.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from '../model/sale';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { ClientService } from 'src/app/clients/services/client.service';
import { BooksService } from 'src/app/books/services/books.service';
import { Book } from 'src/app/books/model/book';
import { Client } from 'src/app/clients/model/client';

@Component({
  selector: 'app-sale-update',
  templateUrl: './sale-update.component.html',
  styleUrls: ['./sale-update.component.scss']
})
export class SaleUpdateComponent implements OnInit {

  public saleFormUpdate: FormGroup;
  sale: Sale;
  loading: Boolean = true;
  public bookID =  new FormControl([]);

  bookObject: Book[] = [];
  clientObject: Client[] = [];



  constructor(
    private saleService: SalesService,
    private clientService: ClientService,
    private bookService: BooksService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

      this.saleService.findSaleById(<string>id).subscribe((sale)=>{
      this.loading = false;
      this.sale = sale;
      this.saleFormUpdate = this.fb.group({
        'client': new FormControl(sale.client),
        'bookPurchase': new FormControl(sale.bookPurchase),
        'valuePurchase': new FormControl(sale.valuePurchase),
        'status': new FormControl(sale.status),
      })}
     )

     this.bookService.listBooksAll().subscribe(books =>{
      this.bookObject = books;
    })

    this.clientService.listClientsAll().subscribe(clients =>{
      this.clientObject = clients;
    })
  }
  updateSale(): void {

    const value = this.saleFormUpdate.value;
    value.id = this.sale.id
    this.saleService.updateSale(value).subscribe(()=>{
      this.saleService.showMessage('Venda Atualizada!')
      this.router.navigate(['/sales']);
      }
    )}


  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });

  }

  cancel(): void{
    this.router.navigate(['/sales']);
  }

  print(){

    console.log((this.saleFormUpdate.value));

  }

  public equalsSelect(objOne: any, objTwo: any): boolean {
    console.log(objTwo ? objOne.id === objTwo.id : false)
    return objTwo ? objOne.id === objTwo.id : false;


  }


}
