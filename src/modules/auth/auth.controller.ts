import { Request, Response } from "express";
import { RegisterUserDto } from "./dto/register-user.dto";
import { AuthService } from "./auth.service";
import { AuthHandleErrors } from "./errors/auth-handle.erros";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  registerUser = async (req: Request, res: Response) => {
    try {
      const result = RegisterUserDto.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ errors: result.error.flatten() });
      }

      const user = await this.authService.registerUser(result.data);
      return res.status(201).json(user);
    } catch (error) {
      AuthHandleErrors(res, error);
    }
  };
}
