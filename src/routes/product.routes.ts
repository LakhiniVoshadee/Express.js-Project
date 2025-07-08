import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct, saveProduct, updateProduct} from "../controllers/product.controller";

const productRouter:Router = Router();

// Handle requests
productRouter.get("/all",getAllProducts); // Get all products
productRouter.post("/save",saveProduct);
productRouter.get("/:id", getProduct);
productRouter.put("/update/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);




export default productRouter