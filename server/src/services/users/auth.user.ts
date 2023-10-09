import { IUserAuth } from "../../controllers/users/auth.user";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { compareSync } from "bcrypt";
import * as jwt from "jsonwebtoken";

export const userAuthService = async (body: IUserAuth) => {
  const { email, password } = body;
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (!user) throw new AppError(404, "email or password incorrect");

  const passwordVerify = compareSync(password, user.password);

  if (!passwordVerify) throw new AppError(404, "email or password incorrect");

  const token = jwt.sign(
    { user_id: user.id },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "1d",
    }
  );

  return token;
};
