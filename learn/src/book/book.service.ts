import { Book } from './data/book.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
@Injectable()
export class BookService {
  public books: Book[] = [];

  // add Book
  addBook(book: Book): string {
    this.books.push(book);
    return 'Book is Added Sucessfully';
  }

  // update Book
  updateBook(id:number , Book:Book):string{
      const existingBook = this.bookById(id)
      if (!existingBook) {
        throw new NotFoundException('Book not found');
      }
    Object.assign(existingBook, Book);
    return 'Book is Updated Successfully';
  }

  // delete Book
  deleteBook(id: number): string {
    const index = this.books.findIndex((b) => b.id === id);
    if (index === -1) {
      throw new NotFoundException('Book not found');
    }
    this.books.splice(index, 1);
    return 'Book is Deleted Successfully';
  }
  // find all Book
  allBook(): Book[] {
    return this.books;
  }

  // find Book by id
  bookById(id: number): Book {
    const book = this.books.find((b) => b.id === id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }
}
