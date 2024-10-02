import { model, Schema } from "mongoose";
import { TProducts } from "./products.interface";

const productSchema = new Schema<TProducts>({
  image: { type: String },
  title: { type: String },
  brand: { type: String },
  availableQuantity: { type: Number },
  price: { type: Number },
  rating: { type: Number },
  description: { type: String },
  isDeleted: { type: Boolean, default: false },
});

export const productModel = model<TProducts>("product", productSchema);
