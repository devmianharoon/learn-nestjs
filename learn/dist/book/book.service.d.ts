import { Book } from './data/book.dto';
export declare class BookService {
    books: Book[];
    addBook(book: Book): string;
    updateBook(id: number, Book: Book): string;
    deleteBook(id: number): string;
    allBook(): Book[];
    bookById(id: number): Book;
}
