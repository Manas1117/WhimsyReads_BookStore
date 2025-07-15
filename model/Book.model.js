import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    name : String,
    Price : Number,
    Category : String,
    title : String,
    image : String

})
const Book = mongoose.model("Book",BookSchema);

export default Book;