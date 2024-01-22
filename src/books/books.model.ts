import { Schema, Document } from "mongoose";
import { title } from "process";

export interface Book extends Document {

   
    title: string; 
    author: string;
    price: string;

}

export const BookSchema = new Schema({

    
    title: String,
    auther: String,
    price: String,

})