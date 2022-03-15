import { Book } from 'src/app/books/model/book';
import { Client } from 'src/app/clients/model/client';
import { Status } from './status';

export interface Sale {
  id?: string,
  client: Array<Client>,
  bookPurchase: Array<Book>,
  datePurchase: string
  valuePurchase: number,
  status: Status
}
