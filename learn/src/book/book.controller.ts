import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from './book.service';
import { Book } from './data/book.dto';

@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  @Post('/add')
  addBook(@Body() book: Book): string {
    return this.bookService.addBook(book);
  }
  @Get('/findAll')
  getAllBooks(): Book[] {
    return this.bookService.allBook();
  }

  @Get('/get/id')
  getBook(@Param('id') id: number): Book {
    return this.bookService.bookById(id);
  }

  @Put('/update/id')
  updateBook(@Param('id') id: number, @Body() book: Book): string {
    console.log(id);
    console.log(book);
    
    return this.bookService.updateBook(id, book);
  }

  @Delete('delete/id')
  deleteBook(@Param('id') id: number): string {
    return this.bookService.deleteBook(id);
  }
}
