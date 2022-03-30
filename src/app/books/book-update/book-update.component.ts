import { Book } from '../model/book';
import { BooksService } from './../services/books.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Category } from '../model/Category';


@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {

  public bookFormUpdate: FormGroup;
  book: Book;
  loading: Boolean = true;

  categoriesNames:Category[] = [];



  constructor(
    private bookService:BooksService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);


    this.bookService.listCategoriesAll().subscribe(categories=>{
    this.categoriesNames=categories;
    console.log('Log', this.categoriesNames);


    this.bookService.findBookById(<string>id).subscribe((book)=>{
      this.loading = false;
      this.book = book;
      this.bookFormUpdate = this.fb.group({
        'title': new FormControl(book.title),
        'synopsis': new FormControl(book.synopsis),
        'isbn': new FormControl(book.isbn),
        'author': new FormControl(book.author),
        'publicationYear': new FormControl(book.publicationYear),
        'priceSell': new FormControl(book.priceSell),
        'availableQuantity': new FormControl(book.availableQuantity),
        'categories': new FormControl(book.categories)
      })}
     )
    })

  }

  updateBook(): void {
    const value = this.bookFormUpdate.value;
    value.id = this.book.id;
    this.bookService.updateBooks(value)
   .subscribe(()=>{
      this.bookService.showMessage('Livro Atualizado!')
      this.router.navigate(['/books']);
      }
    )}



  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });

  }

  cancel(): void{
    this.router.navigate(['/books']);
  }

  print(){
   console.log(this.bookFormUpdate.value);

  }


  public equalsSelect(objOne: any, objTwo: any): boolean {
    console.log(objTwo ? objOne.id === objTwo.id : false)
    return objTwo ? objOne.id === objTwo.id : false;


  }



}
