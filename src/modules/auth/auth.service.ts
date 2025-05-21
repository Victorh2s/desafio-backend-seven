import jwt from "jsonwebtoken";
import { AuthRepository } from "src/shared/config/prisma/database/auth-repository";
import { compare, hash } from "bcryptjs";
import { EmailAlreadyExistError } from "./errors/email-already-exist.error";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register-user.dto";
import { AuthInvalidError } from "./errors/auth-invalid.error";

export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async registerUser(user: RegisterDto) {
    const foundUserByEmail = await this.authRepository.findUserByEmail(
      user.email,
    );

    if (foundUserByEmail) throw new EmailAlreadyExistError();

    const passwordhash = await hash(user.password, 8);

    const newUser = {
      ...user,
      phone: user.phone,
      cpf: user.cpf,
      password: passwordhash,
    };
    return await this.authRepository.registerUser(newUser);
  }

  async login({ email, password }: LoginDto) {
    const user = await this.authRepository.findUserByEmail(email);

    if (!user || !(await compare(password, user.password))) {
      throw new AuthInvalidError();
    }

    const { id } = user;

    const token = this.generateToken(id);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  }

  private generateToken(userId: string): string {
    const env = {
      TOKEN_SECRET: process.env.JWT_SECRET as string,
      TOKEN_EXPIRATION: process.env.JWT_EXPIRES_IN || "1d",
    };

    return jwt.sign({ id: userId }, env.TOKEN_SECRET, {
      subject: userId,
      expiresIn: env.TOKEN_EXPIRATION as jwt.SignOptions["expiresIn"],
    });
  }
}
