import { IUserRegister } from "../controllers/register.user";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";
import { hashSync } from "bcrypt";

export const userRegisterService = async (body: IUserRegister) => {
  const { age, email, name, password } = body;

  const userRepository = AppDataSource.getRepository(User);

  const emailAlreadyUsed = await userRepository.findOneBy({
    email,
  });

  if (emailAlreadyUsed) throw new AppError(409, "email already being used");

  const hashedPass = hashSync(password, 10);

  await userRepository.save({ ...body, password: hashedPass });

  return await userRepository.findOneBy({ email });
};
