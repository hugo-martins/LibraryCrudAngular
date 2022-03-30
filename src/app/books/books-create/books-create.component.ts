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


  categoriesNames:Category[] = [];


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
    this.bookService.listCategoriesAll().subscribe(categories=>{
      this.categoriesNames=categories;
    });
  }

  createBook(): void {
      this.bookService.registerBooks(this.bookForm.value).subscribe(()=>{
      this.bookService.showMessage('Livro Criado!')
      this.router.navigate(['/books']);
    })
  }

  cancel(): void{
    this.router.navigate(['/books']);
  }



  printJson(){
    console.log(JSON.stringify(this.bookForm.value));

  }


}
