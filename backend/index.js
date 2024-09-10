import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
//import MONGO_URI from "dotenv";

const app = express();

dotenv.config();
app.use(cors()); // (cors)---ye middleware hota hai
app.use(express.json());

const PORT = process.env.PORT || 4000;
//const PORT = 'https://bookstore-app-ow4d.onrender.com';
const URI = process.env.mongoDB_URI;

//connect to mongoDB
try {
  mongoose.connect(URI);
  console.log("connected to mongoDB");
} catch (error) {
  console.log("Error:", error);
}

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

//below is deployment code 

if (process.env.NODE_ENV === "production") {
  // Resolve the path to the `Frontend/dist` directory relative to the project root
  const dirPath = path.resolve(); //this wil assign current directory path in dirPath
  app.use(express.static("..frontend/dist"))

  // Handle all routes and serve the `index.html` file
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirPath,"frontend","dist","index.html"));
  })
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
