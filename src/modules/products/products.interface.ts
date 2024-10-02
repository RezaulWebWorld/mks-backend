import { Date, ObjectId } from "mongoose";

export type TProducts = {
  image: string;
  title: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description: string;
  isDeleted: boolean;
};
