import mongoose,{Schema} from 'mongoose';
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
     
    },
   token: {
        type: String,
   }
});
const User = mongoose.model('User', userSchema);
export {User};
// This code defines a Mongoose schema for a User model with fields for name, username,