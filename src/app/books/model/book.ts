import { Category } from './Category';
export interface Book {

    id?: string
    title: string
    synopsis: string
    isbn: string
    author: string
    publicationYear: number
    priceSell: number
    availableQuantity: number,
    categories: Category

}
