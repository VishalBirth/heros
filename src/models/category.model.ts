import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { ICategoryDocument } from '../interfaces/category.interface';

export interface ICategoryModel extends mongoose.Model<ICategoryDocument> {

}