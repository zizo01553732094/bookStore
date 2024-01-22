import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './books.model';
import { promises } from 'dns';
 
@Injectable()
export class BooksService {
    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>){}

    async create(book: Book): Promise<Book>{
        const createBook = new this.bookModel(book);

        return createBook.save();
    }

    async findAll(): Promise<Book[]>{
        return this.bookModel.find().exec();
    }

    async findOne(id: string): Promise<Book>{

        return this.bookModel.findById(id).exec();
    }

    async update(id: string , book:Book): Promise<Book>{

        return this.bookModel.findByIdAndUpdate(id, book,{ new: true}).exec();
    }
    
    async remove(id:string): Promise<Book>{

        return this.bookModel.findByIdAndDelete(id).exec();

    }

}
