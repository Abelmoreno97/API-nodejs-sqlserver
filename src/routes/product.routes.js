import { Router } from "express";
import {
  UpdateProductsById,
  createNewProduct,
  deleteAll,
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
router.delete("/totalproducts",deleteAll)
router.put("/products/:id", UpdateProductsById);

export default router;
