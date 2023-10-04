import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { AppError } from "../errors/appError";

export const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) throw new AppError(401, "Token not found");

  token = token.split(" ")[1];

  const verify = jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (err, decode: any) => {
      if (err) {
        throw new AppError(401, "Invalid token");
      }

      req.user = { id: decode.user_id };

      next();
    }
  );
};
