import { Router } from "express";
import {
  UpdateProductsById,
  createNewProduct,
  deleteProductById,
  getProductById,
  getProducts,
  getTotalProducts,
} from "../controllers/products.controller";

const router = Router();

router.get("/products", getProducts);
router.post("/products", createNewProduct);
router.get("/products/:id",getProductById);
router.get("/totalproducts",getTotalProducts);
router.delete("/products/:id",deleteProductById);
router.put("/products/:id", UpdateProductsById);

export default router;
