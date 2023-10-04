import { Express } from "express";
import { userRegisterController } from "../controllers/register.user";
import { userAuthController } from "../controllers/auth.user";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { listUserController } from "../controllers/list.user";

export const appRoutes = (app: Express) => {
  app.post("/user", userRegisterController);
  app.post("/auth", userAuthController);

  app.get("/user", AuthMiddleware, listUserController);
};
