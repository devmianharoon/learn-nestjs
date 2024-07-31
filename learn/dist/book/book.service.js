"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
let BookService = class BookService {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        return 'Book is Added Sucessfully';
    }
    updateBook(id, Book) {
        const existingBook = this.bookById(id);
        if (!existingBook) {
            throw new common_1.NotFoundException('Book not found');
        }
        Object.assign(existingBook, Book);
        return 'Book is Updated Successfully';
    }
    deleteBook(id) {
        const index = this.books.findIndex((b) => b.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('Book not found');
        }
        this.books.splice(index, 1);
        return 'Book is Deleted Successfully';
    }
    allBook() {
        return this.books;
    }
    bookById(id) {
        const book = this.books.find((b) => b.id === id);
        if (!book) {
            throw new common_1.NotFoundException('Book not found');
        }
        return book;
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);
//# sourceMappingURL=book.service.js.map