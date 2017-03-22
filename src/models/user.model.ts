import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { IUser, IUserDocument } from '../interfaces/user.interface';

export interface IUserModel extends mongoose.Model<IUserDocument> {
  //custom methods for your model would be defined here
  findAll() : mongoose.Query<IUserModel[]>
}