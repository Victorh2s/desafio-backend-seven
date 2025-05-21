import { Role } from "@prisma/client";

interface auth_routes {
  userId: string;
  token: string;
  email: string;
  role: Role;
}

declare namespace Express {}

declare global {
  namespace Express {
    export interface Request {
      auth_routes: auth_routes;
    }
  }
}
