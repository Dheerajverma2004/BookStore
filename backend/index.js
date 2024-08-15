import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

dotenv.config();
app.use(cors()); // (cors)---ye middleware hota hai
app.use(express.json());

const PORT = process.env.PORT || 4000;
//const URI = process.env.mongoDB_URI;

//connect to mongoDB
try {
  mongoose.connect('mongodb://localhost:27017/bookStoreDB');
  console.log("connected to mongoDB");
} catch (error) {
  console.log("Error:", error);
}

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
