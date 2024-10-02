import { Router } from "express";
import { productRouter } from "../modules/products/products.route";

const routes = Router();

const moduleRoutes = [
  {
    path: "/product",
    route: productRouter,
  },
];

moduleRoutes.forEach((router) => routes.use(router.path, router.route));

export default routes;
