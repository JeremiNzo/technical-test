import { Injectable } from '@nestjs/common';
import { booksData } from './books.data';

@Injectable()
export class BooksService {
  findAll() {
    return booksData;
  }
}