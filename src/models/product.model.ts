import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { IProductDocument } from '../interfaces/product.interface';

export interface IProductModel extends mongoose.Model<IProductDocument> {

}