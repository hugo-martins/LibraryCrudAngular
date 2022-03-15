import { Category } from './../model/Category';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Book } from '../model/book';
import { BooksService } from './../services/books.service';


@Component({
  selector: 'app-books-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.scss']
})
export class BooksCreateComponent implements OnInit {

  book: Book;

  public categoryName =  new FormControl([]);

  public bookForm: FormGroup;

  constructor(
    private bookService: BooksService,
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
    ) { }


  ngOnInit(): void {
    this.bookForm = this.fb.group({
      'title': new FormControl(''),
      'synopsis': new FormControl(''),
      'isbn': new FormControl(''),
      'author': new FormControl(''),
      'publicationYear': new FormControl(''),
      'priceSell': new FormControl(''),
      'availableQuantity': new FormControl(''),
      'categories': new FormControl([])

  })
  }

  createBook(): void {

      let c = new Category(this.categoryName.value)
      this.bookForm.get('category')?.setValue([c]);
      this.bookService.registerBooks(this.bookForm.value).subscribe(()=>{
      this.bookService.showMessage('Livro Criado!')
      this.router.navigate(['/books']);
    })
  }

  cancel(): void{
    this.router.navigate(['/books']);
  }

  onSubmit(): void{
    let c = new Category(this.categoryName.value)
    this.bookForm.get('categories')?.setValue([c]);
  }

  print(){
    let c = new Category(this.categoryName.value)
    console.log(c);
    this.bookForm.get('categories')?.setValue([c]);
    console.log(JSON.stringify(this.bookForm.value));

  }


}
