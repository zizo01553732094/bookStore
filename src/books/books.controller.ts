import { Controller, Get, Post, Body, Param, Put, Delete } from "@nestjs/common";
import { BooksService } from "./books.service";
import { Book } from "./books.model";

@Controller('Book')

export class BookController{

    constructor(private readonly bookService: BooksService){}

    @Post()

    async create(@Body() book:Book): Promise<Book>{
        return this.bookService.create(book);
    }

    @Get()
    async findAll(): Promise<Book[]>{
        return this.bookService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Book>{

        return this.bookService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body('book') book: Book): Promise<Book>{
        return this.bookService.update(id, book);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Book>{

        return this.bookService.remove(id);
    }
}