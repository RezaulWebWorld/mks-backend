import express from "express";
import { productController } from "./products.controller";

const productRouter = express.Router();

// Routers for Mechanical KeyBoard Backend

productRouter.post("/", productController.createProductController);
productRouter.get("/", productController.getProductsController);
productRouter.get("/home", productController.getFeaturedProductsController);

productRouter.put("/:id", productController.updatedProductController);
productRouter.delete("/:id", productController.deleteProduct);

export { productRouter };
