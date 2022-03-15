import { Book } from '../model/book';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { first, Observable, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  private readonly API_URL = 'book-microservice-service/books';
  private readonly URL = 'book-microservice-service/categories';


  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
    ){ }


  listBooksAll(): Observable<Book[]> {
   return this.httpClient.get<Book[]>(`${this.API_URL}/all`)
   .pipe(
     first(),
     tap( books=> console.log(books))
   );
  }




  findBookById(id: string): Observable<Book>{
    return this.httpClient.get<Book>(`${this.API_URL}/${id}`);

  }

  registerBooks(book: Book): Observable<Book>{
    return this.httpClient.post<Book>(`${this.API_URL}`, book);
  }


  updateBooks(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.API_URL}/${book.id}`, book);
  }


  deleteBooks(id:string): Observable<Book> {
    return this.httpClient.delete<Book>(`${this.API_URL}/${id}`);
  }

  registerCategory(category: Category): Observable<Category>{
    return this.httpClient.post<Category>(`${this.URL}`, category);
  }


  showMessage(msg: string): void {
    this.snackBar.open(msg, '',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }



}




