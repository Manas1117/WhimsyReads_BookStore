// seedBooks.js
import mongoose from "mongoose";
import Book from "./model/Book.model.js"; // Adjust path to your Book model
import dotenv from "dotenv";

dotenv.config();

const books = [
  {
    name: "The Silent Patient",
    Price: 499,
    Category: "Thriller",
    title: "A chilling psychological thriller",
    image: "https://m.media-amazon.com/images/I/91lslnZ-btL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Atomic Habits",
    Price: 599,
    Category: "Self-Help",
    title: "An easy & proven way to build good habits",
    image: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg"
  },
  {
    name: "The Alchemist",
    Price: 399,
    Category: "Fiction",
    title: "A journey to discover one's destiny",
    image: "https://m.media-amazon.com/images/I/617lxveUjYL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "Sapiens",
    Price: 699,
    Category: "History",
    title: "A brief history of humankind",
    image: "https://m.media-amazon.com/images/I/713jIoMO3UL.jpg"
  },
  {
    name: "Ikigai",
    Price: 299,
    Category: "Self-Help",
    title: "The Japanese secret to a long and happy life",
    image: "https://m.media-amazon.com/images/I/71cRwWclCvL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "To Kill a Mockingbird",
    Price: 449,
    Category: "Classic",
    title: "A novel of racism and injustice",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1339392178i/37449.jpg"
  },
  {
    name: "1984",
    Price: 379,
    Category: "Dystopian",
    title: "A haunting vision of the future",
    image: "https://m.media-amazon.com/images/I/81+LDW4qePL._UF1000,1000_QL80_.jpg"
  },
  {
    name: "The Book Thief",
    Price: 529,
    Category: "Historical Fiction",
    title: "A story of words and the power they hold",
    image: "https://rukminim2.flixcart.com/image/704/844/kvcpn680/book/w/v/t/the-book-thief-original-imag896rd4gnk9yv.jpeg?q=90&crop=false"
  },
  {
    name: "The Subtle Art of Not Giving a F*ck",
    Price: 649,
    Category: "Motivational",
    title: "A counterintuitive approach to living a good life",
    image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg"
  },
  {
    name: "Rich Dad Poor Dad",
    Price: 599,
    Category: "Finance",
    title: "What the rich teach their kids about money",
    image: "https://cdn.penguin.co.in/wp-content/uploads/2023/12/9781612681139-1-scaled.jpg"
  }
];

mongoose
  .connect(process.env.MongoDBURI)
  .then(() => {
    console.log("MongoDB connected");
    return Book.insertMany(books);
  })
  .then(() => {
    console.log("Books inserted successfully");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
