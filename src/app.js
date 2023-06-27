import express from "express";
import config from "./config";
import productRoutes from "./routes/product.routes";
import cors from 'cors'


const app = express();

//settings
app.set("port", config.port);


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use(productRoutes);

export default app;
