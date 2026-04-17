import { Injectable } from '@nestjs/common';
import { authorsData } from './authors.data';

@Injectable()
export class AuthorsService {
  findAll() {
    return authorsData;
  }
}