import { Express } from "express";
import { userRegisterController } from "../controllers/users/register.user";
import { userAuthController } from "../controllers/users/auth.user";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { listUserController } from "../controllers/users/list.user";
import { createProductController } from "../controllers/products/create.product";
import { listProductController } from "../controllers/products/list.product";

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

  app.get("/product", listProductController)
};
