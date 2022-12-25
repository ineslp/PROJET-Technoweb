const mongoose= require("mongoose");

const UsersSchema = new mongoose.SchemaTypeOptions({
    name: {type: String, required: true},
    age: Number,
    sexe: String,
    country: String
    //comments: [{ text: String, date: {type:String, default: new Date()} }]
});

const Users = mongoose.model('Users', UsersSchema);
module.exports= Users;

