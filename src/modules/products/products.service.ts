import mongoose from "mongoose";
import { TProducts } from "./products.interface";
import { productModel } from "./products.model";

//  Service for creating product
const createProduct = async (payload: TProducts) => {
  console.log(payload);
  const products = await productModel.create(payload);
  console.log(products);
  return products;
};

//  Service for getting all Product
const getAllProducts = async () => {
  const allProducts = await productModel.find({ isDeleted: false });
  return allProducts;
};
//  Service for getting all Product
const getFeaturedProduct = async () => {
  const featuredProduct = await productModel
    .find({ isDeleted: false })
    .sort({ createdAt: -1 })
    .limit(6);
  return featuredProduct;
};

//  Service for updating  Product info
const updateProductInfo = async (id: string, payloads: Partial<TProducts>) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const bookingId = await productModel.findById(id);
    if (!bookingId) {
      throw new Error("There is no Id");
    }
    const updatedBookings = await productModel.findByIdAndUpdate(id, payloads, {
      new: true,
      session,
    });
    await session.commitTransaction();
    await session.endSession();
    return updatedBookings;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error("Failed to Update");
  }
};
//  Service for Delete  product by id
const deletingProduct = async (_id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const bookingId = await productModel.findOne({ _id });
    const deleted = await productModel.findOne({ isDeleted: true });
    if (deleted) {
      throw new Error("The Booking is Already Deleted");
    }
    if (!bookingId) {
      throw new Error(" No Booking found to Delete");
    }

    const result = await productModel.findByIdAndUpdate(
      bookingId,
      { isDeleted: true },
      { new: true, session }
    );
    await session.commitTransaction();
    await session.endSession();
    return result;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error("Failed to Delete");
  }
};

export const productService = {
  createProduct,
  getAllProducts,
  updateProductInfo,
  deletingProduct,
  getFeaturedProduct,
};
