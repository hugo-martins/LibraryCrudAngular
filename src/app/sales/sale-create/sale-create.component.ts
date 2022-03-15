import { bookPurchase } from './../model/bookPurchase';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Sale } from '../model/sale';
import { SalesService } from '../services/sales.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-create',
  templateUrl: './sale-create.component.html',
  styleUrls: ['./sale-create.component.scss']
})
export class SaleCreateComponent implements OnInit {


  sale: Sale;
  public saleForm:FormGroup;

  public bookID =  new FormControl([]);



  constructor(
    private saleService: SalesService,
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.saleForm = this.fb.group({
      'client': new FormControl(''),
      'bookPurchase': new FormControl([]),
      'valuePurchase': new FormControl(''),
      'status': new FormControl('')

    })
  }

  createSale(): void {
    let c = new bookPurchase(this.bookID.value)
    this.saleForm.get('bookPurchase')?.setValue([c]);
    const value = this.saleForm.value;
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
  console.log(new bookPurchase(this.bookID.value));

  console.log((this.saleForm.value));

}


}
