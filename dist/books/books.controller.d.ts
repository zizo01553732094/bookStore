import { BooksService } from "./books.service";
import { Book } from "./books.model";
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BooksService);
    create(book: Book): Promise<Book>;
    findAll(): Promise<Book[]>;
    findOne(id: string): Promise<Book>;
    update(id: string, book: Book): Promise<Book>;
    remove(id: string): Promise<Book>;
}
