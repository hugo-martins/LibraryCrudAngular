import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { ErrorDialogComponent } from '../../shared/error-dialog/error-dialog.component';
import { Book } from '../model/book';
import { BooksService } from './../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books$:Observable<Book[]>
  book: Book;

  displayedColumns = ['title','synopsis','isbn','author','publicationYear', 'priceSell', 'availableQuantity','categories', 'action'];


  constructor(
    private router: Router,
    private booksService: BooksService,
    public dialog: MatDialog,
    ){

    }

  ngOnInit(): void {
  this.books$ = this.booksService.listBooksAll()
  .pipe(
    catchError(error =>{
      this.onError('Erro ao listar livros');
      return of([]);
    })
  );
  }

    onError(errorMsg: string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg
      });
    }

    navigateToBookCreate(): void {
      this.router.navigate(['books/books-create']);
    }


}
