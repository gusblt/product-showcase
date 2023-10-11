import { Express } from "express";
import { userRegisterController } from "../controllers/users/register.user";
import { userAuthController } from "../controllers/users/auth.user";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { listUserController } from "../controllers/users/list.user";
import { createProductController } from "../controllers/products/createProduct.controller";
import { listProductController } from "../controllers/products/listProducts.controller";
import { updateProductController } from "../controllers/products/updateProduct.controller";
import { createOrderController } from "../controllers/orders/createOrder.controller";
import { listOrdersByUserController } from "../controllers/orders/listOrdersByUser.controller";
import { listOrdersByIdController } from "../controllers/orders/listOrdersById.controller";
import { listOrdersController } from "../controllers/orders/listOrders.controller";

export const appRoutes = (app: Express) => {
  userRoutes(app);
  productRoutes(app);
  orderRoutes(app);
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

const orderRoutes = (app: Express) => {
  app.post("/orders", AuthMiddleware, createOrderController);

  app.get("/orders/user", AuthMiddleware, listOrdersByUserController);
  app.get("/orders/:id", AuthMiddleware, listOrdersByIdController);
  app.get("/orders", AuthMiddleware, listOrdersController);
};
