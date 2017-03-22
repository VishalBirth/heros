import { DatabaseConnection } from '../utilities/databaseconnection';
import { Schema } from 'mongoose';

export var userSchema: Schema = new Schema({
  profile : {
      createdAt: Date,
      email : {type : String, required : true, lowercase :  true},
      userName : {type : String, required : true, lowercase :  true}
  },
  data : {
    oauth : {type : String, required : true}, 
    cart : [{
      product : Schema.Types.ObjectId,
      quantity : {
        type : Number, 
        default : 1, 
        min : 1
      } 
    }]
  }
});

userSchema.pre("save", function(next) {
  if (!this.profile.createdAt) {
    this.profile.createdAt = new Date();
  }
  next();
});

userSchema.statics.findAll = function() {
  return this.find();
}