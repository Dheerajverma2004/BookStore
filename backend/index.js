import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

// Load environment variables from .env
dotenv.config();
app.use(cors()); // (cors)---ye middleware hota hai
app.use(express.json());

const PORT = process.env.PORT || 4000;
const mongoUri = process.env.MONGO_URI;

// Ensure MongoDB URI is present
if (!mongoUri) {
  console.error("MongoDB URI not found. Make sure MONGO_URI is defined in your .env file.");
  process.exit(1);  // Exit if no URI is found
}

// Connect to MongoDB
mongoose
  .connect(mongoUri)  // Removed deprecated options
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);  // Exit the process if there's a connection error
  });




//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

//below is deployment code 

if (process.env.NODE_ENV === "production") {
  // Resolve the path to the `Frontend/dist` directory relative to the project root
  const dirPath = path.resolve(); //this wil assign current directory path in dirPath
  app.use(express.static("../frontend/dist"))

  // Handle all routes and serve the `index.html` file
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirPath,"../frontend/dist","index.html"));
  })
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
