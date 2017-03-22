import { IProductModel } from './product.model';
import { ICategoryModel } from './category.model';
import { Model, Connection } from 'mongoose';
import { IUserModel } from "./user.model";
//importing schemas
import { userSchema } from "../schemas/user.schema"; //import userSchema
import { categorySchema } from "../schemas/category.schema"; //import userSchema
import { productSchema } from "../schemas/product.schema"; //import userSchema


export interface IModel extends Object {
    user: IUserModel;
    category : ICategoryModel;
    product : IProductModel
}


export class ModelCreation {  
    public static createModels(connection : Connection ): IModel{
        var model : IModel = Object();

        // attaching models to the connection 
        model.user = <IUserModel>(connection.model("User",  userSchema))
        model.category = <ICategoryModel>(connection.model("Category", categorySchema))
        model.product = <IProductModel>(connection.model("Product", productSchema))
        
        return model;
    }
}