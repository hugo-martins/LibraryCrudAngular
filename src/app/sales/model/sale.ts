import { Book } from 'src/app/books/model/book';
import { Client } from 'src/app/clients/model/client';
import { Status } from './status';

export interface Sale {
  id?: string,
  client: Client,
  bookPurchase: Book[],
  datePurchase: string,
  valuePurchase: number,
  status: Status
}
