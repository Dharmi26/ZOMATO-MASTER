// Importing Env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// microservice routes
import Auth from "./API/Auth";

//Database connection
import ConnectDB from "./database/connection";

const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false}));
zomato.use(helmet());
zomato.use(cors());

// Application Routers
zomato.use("/auth", Auth);


zomato.get("/", (req, res) => res.json({message: "Setup success"}));

zomato.listen(4000, () =>
  ConnectDB()
   .then(() => console.log("Server is Running"))
   .catch(() =>
    console.log("Server is Running, but database connection failed!"))
);
