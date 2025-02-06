import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password_hash: { type: String, required: true},
    role: { type: String, default: 'user'},
    userCreated: {type: Date, required: true},
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    ph_number: { type: String, required: true },
    image: { type: String, default: '/assets/defaultIcon1.jpg'},
    username: { type: String, required: true, unique: true}
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;



