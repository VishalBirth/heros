import { categorySchema } from './category.schema';
import { DatabaseConnection } from '../utilities/databaseconnection';
import { Schema } from "mongoose";

export var productSchema: Schema = new Schema({
    name : { type : String, required : true }, 
    pictures : [{type : String, match : /^http:\/\//i }],
    price : {
        amount : {type : Number, required : true}, 
        currency : {
            type : String, 
            enum : ['USD', 'EUR', 'GBP'],
            required : true
        }
    },
    category : {type : String, ref : "Category"}
});
