import { Express } from "express";
import { userRegisterController } from "../controllers/users/register.user";
import { userAuthController } from "../controllers/users/auth.user";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { listUserController } from "../controllers/users/list.user";
import { createProductController } from "../controllers/products/createProduct.controller";
import { listProductController } from "../controllers/products/listProducts.controller";
import { updateProductController } from "../controllers/products/updateProduct.controller";

export const appRoutes = (app: Express) => {
  userRoutes(app);
  productRoutes(app);
};

const userRoutes = (app: Express) => {
  app.post("/user", userRegisterController);
  app.post("/auth", userAuthController);

  app.get("/user", AuthMiddleware, listUserController);
};

const productRoutes = (app: Express) => {
  app.post("/product", AuthMiddleware, createProductController);
  app.patch("/product/:id", AuthMiddleware, updateProductController);

  app.get("/product", listProductController);
};
