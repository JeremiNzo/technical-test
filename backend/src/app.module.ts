import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [ BooksModule, AuthorsModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
