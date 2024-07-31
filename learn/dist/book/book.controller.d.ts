import { BookService } from './book.service';
import { Book } from './data/book.dto';
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    addBook(book: Book): string;
    getAllBooks(): Book[];
    getBook(id: number): Book;
    updateBook(id: number, book: Book): string;
    deleteBook(id: number): string;
}
