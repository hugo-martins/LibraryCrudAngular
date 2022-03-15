import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/book';
import { BooksService } from '../services/books.service';
import { ErrorDialogComponent } from '../../shared/error-dialog/error-dialog.component';


@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {

  book: Book;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BooksService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() :void {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.findBookById(<string> id).subscribe((book)=>{
    this.book = book;
    });
  }

  deleteBook(): void {

    this.bookService.deleteBooks(<string>this.book.id).subscribe(()=>{
      this.bookService.showMessage('Livro Deletado!')
      this.router.navigate(['/books']);
    })
  }


  cancel(): void{
    this.router.navigate(['/books']);
  }


  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });

  }
}
