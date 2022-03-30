import { BooksService } from './../../books/services/books.service';
import { ClientService } from './../../clients/services/client.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Sale } from '../model/sale';
import { SalesService } from '../services/sales.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Book } from 'src/app/books/model/book';
import { Client } from 'src/app/clients/model/client';

@Component({
  selector: 'app-sale-create',
  templateUrl: './sale-create.component.html',
  styleUrls: ['./sale-create.component.scss']
})
export class SaleCreateComponent implements OnInit {


  sale: Sale;
  public saleForm:FormGroup;

  bookObject: Book[] = [];
  clientObject: Client[] = [];

  constructor(
    private saleService: SalesService,
    private clientService: ClientService,
    private bookService: BooksService,
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.saleForm = this.fb.group({
      'client': new FormControl(),
      'bookPurchase': new FormControl([]),
      'valuePurchase': new FormControl(''),
      'status': new FormControl('')
    })

    this.bookService.listBooksAll().subscribe(bookPurchase =>{
      this.bookObject = Array.from(bookPurchase);
    })

    this.clientService.listClientsAll().subscribe(client =>{
      this.clientObject = client;
    })

}


createSale(): void {

  this.saleService.registerSale(this.saleForm.value).subscribe(()=>{
    this.saleService.showMessage('Venda Criada!')
      this.router.navigate(['/sales']);
  })
}

  cancel(): void{
    this.router.navigate(['/sales']);
}

  onSubmit(): void{
    console.log(this.saleForm.value);
}

  print(){
    console.log((this.saleForm.value));

}


}
