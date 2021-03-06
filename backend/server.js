import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoutes.js";
import userRoute from "./routes/userRouters.js";
import orderRoute from "./routes/orderRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const Environment = process.env.NODE_ENV || 5000;
app.listen(
  PORT,
  console.log(
    `Server Running in ${Environment} mode on Port ${PORT}`.yellow.bold
  )
);
