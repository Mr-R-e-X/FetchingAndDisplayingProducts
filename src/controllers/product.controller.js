// Import the necessary modules here
import ProductModel from "../models/product.model.js";
export default class ProductController {
  getProducts = (req, res) => {
    let prod = new ProductModel().fetchProducts();
    res.send(prod);
  };
}
