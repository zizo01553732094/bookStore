import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './books.controller';
import { BookSchema } from './books.model';
import { BooksService } from './books.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema:BookSchema}])],
  controllers: [BookController],
  providers: [BooksService]

})
export class BooksModule {}
