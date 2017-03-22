import { DatabaseConnection } from '../utilities/databaseconnection';
import { Schema } from "mongoose";

export var categorySchema: Schema = new Schema({
    _id : { type : String }, 
    parent : {
        type : String, 
        ref : "Category"
    }, 
    ancestors : [{
        type : String, ref : "Category"
    }]
});
